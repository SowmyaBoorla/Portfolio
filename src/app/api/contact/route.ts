import { NextRequest, NextResponse } from 'next/server';
// @ts-ignore
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
    const formData = await request.formData();
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // Use SSL
        auth: {
            user: process.env.MAIL_FROM,
            pass: process.env.MAIL_FROM_PASSWORD,
        },
        tls: {
            rejectUnauthorized: false, // ⚠️ WARNING: Disables SSL verification
        },
    });
    console.log(transporter, "transporter");
    console.log("MAIL_FROM:", process.env.MAIL_FROM);
    

    try {
        const mailRes = await transporter.sendMail({
            from: process.env.MAIL_FROM,
            to: process.env.MAIL_TO_CONTACT,
            subject: `Contact from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        });

        return NextResponse.json({ success: true, info: mailRes });
    } catch (error: any) {
        console.error("Error sending email:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
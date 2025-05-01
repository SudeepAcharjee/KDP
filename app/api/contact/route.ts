import { NextRequest } from "next/server";
import nodemailer from "nodemailer";
import path from "path";

// Directly defining SMTP credentials (⚠️ Not recommended for security reasons)
const SMTP_HOST = "smtp.gmail.com";
const SMTP_PORT = 465;
const SMTP_USER = "sudeepacharjeegp@gmail.com";
const SMTP_PASSWORD = ""; // ⚠️ Avoid hardcoding passwords in your code
const SMTP_FROM_EMAIL = "sudeepacharjeegp@gmail.com";

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: true,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASSWORD,
  },
  tls: {
    ciphers: "TLSv1.2",
  },
});

const brochurePath = path.join(process.cwd(), "public", "1.pdf");

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, phone, email, message } = await req.json();

    const mailOptions = {
      from: SMTP_FROM_EMAIL,
      to: SMTP_USER,
      subject: `Submission Form - ${firstName} ${lastName}`,
      html: `
            <html>
                <body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0;">
                    <div style="background-color: #f7f7f7; padding: 40px 20px; text-align: left;">
                    <div style="max-width: 700px; margin: auto; background-color: #ffffff; padding: 40px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);">
                        <h2 style="font-size: 28px; font-weight: 600; color: #333; margin-top: 0; margin-bottom: 30px;">Form Submission Received</h2>

                        <p style="font-size: 16px; color: #555; margin: 0;">Hello,</p>                            
                        
                        <div style="margin-top: 30px; padding: 25px; border-radius: 8px; background-color: #f9f9f9; border: 1px solid #ddd;">
                        <p style="font-size: 16px; margin: 8px 0;"><strong style="font-weight: 600; color: #333;">Name:</strong> <span style="color: #555;">${firstName} ${lastName}</span></p>
                        <p style="font-size: 16px; margin: 8px 0;"><strong style="font-weight: 600; color: #333;">Phone:</strong> <span style="color: #555;">${phone}</span></p>
                        <p style="font-size: 16px; margin: 8px 0;"><strong style="font-weight: 600; color: #333;">Email:</strong> <span style="color: #555;">${email}</span></p>
                        <p style="font-size: 16px; margin: 8px 0;"><strong style="font-weight: 600; color: #333;">Message:</strong></p>
                        <p style="font-size: 16px; color: #555; padding-left: 20px; border-left: 3px solid #DE1F3B; margin-top: 8px;">${message}</p>
                        </div>
                    </div>
                    </div>
                </body>
            </html>
        `,
    };

    const userMailOptions = {
      from: SMTP_FROM_EMAIL,
      to: email,
      subject: "Catalyst Form Submission",
      html: `
            <html>
                <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0;">
                    <div style="background-color: #f4f4f4; padding: 20px; text-align: center;">
                        <div style="max-width: 600px; margin: auto; background-color: #ffffff; padding: 30px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
                            <h2 style="margin-top: 0;">Thank You for Your Request!</h2>
                            <p style="margin: 0;">Dear ${firstName} ${lastName},</p>
                            <p>Thank you for reaching out to us. .</p>
                            <p>If you have any other questions or need further assistance, feel free to contact us.</p>
                            <hr style="border: 1px solid #ddd; margin: 20px 0;">
                            <p style="margin: 0;">Best regards,</p>
                            <p style="margin: 0;">Team Catalyst</p>
                        </div>
                    </div>
                </body>
            </html>
        `,
      attachments: [
        {
          filename: "",//brochureName,
          path: brochurePath,
        },
      ],
    };

    await transporter.sendMail(mailOptions);
    await transporter.sendMail(userMailOptions);

    return Response.json({ success: true, mailSend: true });
  } catch (error) {
    console.error(error);
    return Response.json({ success: false });
  }
}
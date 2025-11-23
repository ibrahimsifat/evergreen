import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, company, service, message } =
      body;

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "465"),
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email template
    const emailHtml = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
        <style>
            body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #f8f9fa;
            }
            .container {
                background: white;
                border-radius: 10px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                overflow: hidden;
            }
            .header {
                background: linear-gradient(135deg, #f97316, #ea580c);
                color: white;
                padding: 30px;
                text-align: center;
            }
            .header h1 {
                margin: 0;
                font-size: 24px;
                font-weight: 600;
            }
            .header p {
                margin: 10px 0 0 0;
                opacity: 0.9;
            }
            .content {
                padding: 30px;
            }
            .field {
                margin-bottom: 20px;
                padding: 15px;
                background: #f8f9fa;
                border-radius: 8px;
                border-left: 4px solid #f97316;
            }
            .field-label {
                font-weight: 600;
                color: #f97316;
                margin-bottom: 5px;
                text-transform: uppercase;
                font-size: 12px;
                letter-spacing: 1px;
            }
            .field-value {
                color: #333;
                font-size: 16px;
            }
            .message-field {
                background: #fff;
                border: 2px solid #f97316;
                border-radius: 8px;
                padding: 20px;
                margin-top: 20px;
            }
            .message-field .field-label {
                color: #333;
                font-size: 14px;
                margin-bottom: 10px;
            }
            .message-field .field-value {
                line-height: 1.8;
                white-space: pre-wrap;
            }
            .footer {
                background: #f8f9fa;
                padding: 20px;
                text-align: center;
                color: #666;
                font-size: 14px;
            }
            .company-info {
                background: #f97316;
                color: white;
                padding: 20px;
                text-align: center;
            }
            .company-info h3 {
                margin: 0 0 10px 0;
                font-size: 18px;
            }
            .company-info p {
                margin: 5px 0;
                opacity: 0.9;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>New Contact Form Submission</h1>
                <p>Evergreen Intelligent Company Ltd (EIC)</p>
            </div>
            
            <div class="content">
                <div class="field">
                    <div class="field-label">Full Name</div>
                    <div class="field-value">${firstName} ${lastName}</div>
                </div>
                
                <div class="field">
                    <div class="field-label">Email Address</div>
                    <div class="field-value">${email}</div>
                </div>
                
                ${
                  phone
                    ? `
                <div class="field">
                    <div class="field-label">Phone Number</div>
                    <div class="field-value">${phone}</div>
                </div>
                `
                    : ""
                }
                
                ${
                  company
                    ? `
                <div class="field">
                    <div class="field-label">Company</div>
                    <div class="field-value">${company}</div>
                </div>
                `
                    : ""
                }
                
                ${
                  service
                    ? `
                <div class="field">
                    <div class="field-label">Service Interested In</div>
                    <div class="field-value">${service}</div>
                </div>
                `
                    : ""
                }
                
                <div class="message-field">
                    <div class="field-label">Message</div>
                    <div class="field-value">${message}</div>
                </div>
            </div>
            
            <div class="company-info">
                <h3>Evergreen Intelligent Company Ltd (EIC)</h3>
                <p>Al Nuzha, Jeddah</p>
                <p>Saudi Arabia</p>
                <p>Phone: 0559481660 | Email: info@evergreen.sa</p>
            </div>
            
            <div class="footer">
                <p>This email was sent from the contact form on evergreen.sa</p>
                <p>Submitted on: ${new Date().toLocaleString("en-US", {
                  timeZone: "Asia/Riyadh",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}</p>
            </div>
        </div>
    </body>
    </html>
    `;

    // Email options
    const mailOptions = {
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO,
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: emailHtml,
      replyTo: email,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}

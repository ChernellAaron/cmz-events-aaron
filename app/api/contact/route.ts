// app/api/contact/route.ts
import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    const { name, surname, email, phone, message } = await request.json()

    // 1. Configure email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    // 2. Send email
    await transporter.sendMail({
      from: `"CMZ Events Contact" <${process.env.EMAIL_USER}>`,
      // Send to multiple email addresses (primary and additional)
      to: `${process.env.EMAIL_USER}, ${process.env.ADDITIONAL_EMAIL || ""}`.trim().replace(/,\s*$/, ""),
      subject: `New Contact: ${name} ${surname}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name} ${surname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error("Contact API Error:", error)
    return NextResponse.json({ error: "Failed to process contact form" }, { status: 500 })
  }
}

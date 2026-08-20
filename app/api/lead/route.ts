import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

// Where leads are delivered
const TO_EMAIL = "joshua@revamp.services"
// Resend's shared sender works with no domain setup. Once revamp.services is
// verified in Resend, swap this for something like "leads@revamp.services".
const FROM_EMAIL = "Revamp Leads <onboarding@resend.dev>"

type LeadPayload = {
  name?: string
  email?: string
  phone?: string
  businessName?: string
  websiteUrl?: string
  businessType?: string
  message?: string
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Email is not configured. Missing RESEND_API_KEY." },
        { status: 500 },
      )
    }

    const data = (await request.json()) as LeadPayload

    const name = (data.name ?? "").trim()
    const email = (data.email ?? "").trim()

    // Minimal server-side validation
    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 },
      )
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 })
    }

    const rows: [string, string][] = [
      ["Name", name],
      ["Email", email],
      ["Phone", data.phone?.trim() || "—"],
      ["Business", data.businessName?.trim() || "—"],
      ["Current website", data.websiteUrl?.trim() || "—"],
      ["Business type", data.businessType?.trim() || "—"],
      ["What they want", data.message?.trim() || "—"],
    ]

    const html = `
      <div style="font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;max-width:560px;margin:0 auto;color:#111">
        <h2 style="margin:0 0 4px">New redesign preview request</h2>
        <p style="margin:0 0 20px;color:#666">Submitted from revamp.services</p>
        <table style="width:100%;border-collapse:collapse">
          ${rows
            .map(
              ([label, value]) => `
            <tr>
              <td style="padding:10px 12px;border:1px solid #eee;background:#fafafa;font-weight:600;width:150px;vertical-align:top">${escapeHtml(
                label,
              )}</td>
              <td style="padding:10px 12px;border:1px solid #eee;white-space:pre-wrap">${escapeHtml(value)}</td>
            </tr>`,
            )
            .join("")}
        </table>
      </div>
    `

    const text = rows.map(([label, value]) => `${label}: ${value}`).join("\n")

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New redesign request — ${data.businessName?.trim() || name}`,
      html,
      text,
    })

    if (error) {
      console.error("[v0] Resend error:", error)
      return NextResponse.json({ error: "Could not send your request. Please try again." }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("[v0] Lead route error:", err)
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 })
  }
}

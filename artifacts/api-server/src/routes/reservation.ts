import { Router } from "express";
import nodemailer from "nodemailer";

const router = Router();

const RECIPIENT = "mihaibaluta65@gmail.com, rambocaputo79@gmail.com";

function buildTransport() {
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!user || !pass) return null;
  return nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });
}

router.post("/reservation", async (req, res) => {
  const { firstName, lastName, phone, email, date, time, guests, comments } = req.body as Record<string, string>;

  if (!firstName || !lastName || !phone || !email) {
    res.status(400).json({ ok: false, error: "Missing required fields" });
    return;
  }

  const html = `
    <h2 style="color:#8B1E24;font-family:Georgia,serif">Neue Tischreservierung — Da Francesco</h2>
    <table style="border-collapse:collapse;width:100%;font-family:Arial,sans-serif">
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Name</td><td style="padding:8px;border:1px solid #ddd">${firstName} ${lastName}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Telefon</td><td style="padding:8px;border:1px solid #ddd">${phone}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">E-Mail</td><td style="padding:8px;border:1px solid #ddd">${email}</td></tr>
      ${date ? `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Datum</td><td style="padding:8px;border:1px solid #ddd">${date}</td></tr>` : ""}
      ${time ? `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Uhrzeit</td><td style="padding:8px;border:1px solid #ddd">${time}</td></tr>` : ""}
      ${guests ? `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Personen</td><td style="padding:8px;border:1px solid #ddd">${guests}</td></tr>` : ""}
      ${comments ? `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Bemerkungen</td><td style="padding:8px;border:1px solid #ddd">${comments}</td></tr>` : ""}
    </table>
    <p style="color:#666;font-size:12px;margin-top:16px">Gesendet von der Website Da Francesco Ristorante &amp; Pizzeria</p>
  `;

  const transport = buildTransport();

  if (transport) {
    try {
      await transport.sendMail({
        from: `"Da Francesco Reservierung" <${process.env.SMTP_USER}>`,
        to: RECIPIENT,
        replyTo: email,
        subject: `Tischreservierung: ${firstName} ${lastName} — ${date ?? "kein Datum"}`,
        html,
      });
      req.log.info({ firstName, lastName, date }, "Reservation email sent");
    } catch (err) {
      req.log.error({ err }, "Failed to send reservation email");
      res.status(500).json({ ok: false, error: "Email delivery failed" });
      return;
    }
  } else {
    req.log.warn({ firstName, lastName, phone, email, date, time, guests, comments }, "SMTP not configured — reservation logged only");
  }

  res.json({ ok: true });
});

export default router;

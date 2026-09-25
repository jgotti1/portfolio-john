const OWNER_EMAIL = "johnmargotti@gmail.com";
const FROM_ADDRESS = "Portfolio Contact <onboarding@resend.dev>";

const LIMITS = { name: 60, email: 120, phone: 30, subject: 120, message: 5000 };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const escapeHtml = (value) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const clean = (value, max) => (typeof value === "string" ? value.trim().slice(0, max) : "");

async function sendEmail({ name, email, phone, subject, message }) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error("RESEND_API_KEY is not configured");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: FROM_ADDRESS,
      to: [OWNER_EMAIL],
      reply_to: email,
      subject: `Portfolio contact: ${subject}`,
      text: `From: ${name} <${email}>\nPhone: ${phone}\nSubject: ${subject}\n\n${message}`,
      html: `<p><strong>From:</strong> ${escapeHtml(name)} &lt;${escapeHtml(email)}&gt;<br><strong>Phone:</strong> ${escapeHtml(
        phone
      )}<br><strong>Subject:</strong> ${escapeHtml(subject)}</p><p style="white-space:pre-wrap">${escapeHtml(message)}</p>`,
    }),
  });

  if (!response.ok) throw new Error(`Resend responded ${response.status}`);
}

async function sendPush({ name, phone, subject, message }) {
  const topic = process.env.NTFY_TOPIC;
  if (!topic) throw new Error("NTFY_TOPIC is not configured");

  const response = await fetch("https://ntfy.sh/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      topic,
      title: `New portfolio message from ${name}`,
      message: `${subject}\n${phone}\n\n${message.slice(0, 300)}`,
      priority: 4,
      tags: ["envelope"],
    }),
  });

  if (!response.ok) throw new Error(`ntfy responded ${response.status}`);
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};

  if (body.website) {
    return res.status(200).json({ ok: true });
  }

  const fields = {
    name: clean(body.name, LIMITS.name),
    email: clean(body.email, LIMITS.email),
    phone: clean(body.phone, LIMITS.phone),
    subject: clean(body.subject, LIMITS.subject),
    message: clean(body.message, LIMITS.message),
  };

  if (Object.values(fields).some((value) => !value) || !EMAIL_PATTERN.test(fields.email)) {
    return res.status(400).json({ ok: false, error: "Please complete all fields with a valid email." });
  }

  const results = await Promise.allSettled([sendEmail(fields), sendPush(fields)]);
  results.forEach((result, index) => {
    if (result.status === "rejected") {
      console.error(`Contact ${index === 0 ? "email" : "push"} failed:`, result.reason);
    }
  });

  if (results.every((result) => result.status === "rejected")) {
    return res.status(502).json({ ok: false, error: "Message could not be delivered." });
  }

  return res.status(200).json({ ok: true });
};

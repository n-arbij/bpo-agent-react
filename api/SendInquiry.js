export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing fields' });
  }

  const form = new URLSearchParams();
  form.append('from', `Support Form <inquiries@${process.env.MAILGUN_DOMAIN}>`);
  form.append('to', 'clearlinecxoutsourcing@gmail.com');
  form.append('subject', `New inquiry from ${name}`);
  form.append('text', `Name: ${name}\nEmail: ${email}\n\n${message}`);

  const auth = Buffer.from(`api:${process.env.MAILGUN_API_KEY}`).toString('base64');
  const response = await fetch(
    `https://api.mailgun.net/v3/${process.env.MAILGUN_DOMAIN}/messages`,
    { method: 'POST', headers: { Authorization: `Basic ${auth}` }, body: form }
  );

  if (!response.ok) return res.status(502).json({ error: 'Mailgun request failed' });
  res.status(200).json({ success: true });
}
export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).end('Method Not Allowed');
    return;
  }

  const { password } = req.body;
  const correctPassword = process.env.NI_PASSWORD;

  if (!correctPassword) {
    res.status(503).end('Service unavailable: auth not configured.');
    return;
  }

  if (password === correctPassword) {
    res.setHeader(
      'Set-Cookie',
      `ni_auth=${correctPassword}; HttpOnly; SameSite=Strict; Path=/north-invent`
    );
    res.redirect(302, '/north-invent/');
  } else {
    res.redirect(302, '/north-invent/login?error=1');
  }
}

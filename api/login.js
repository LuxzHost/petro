export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Method not allowed");
  }

  const { username, password } = req.body;

  if (username === "admin" && password === "admin") {
    return res.json({ token: "ok-login" });
  }

  res.status(401).send("Login gagal");
}

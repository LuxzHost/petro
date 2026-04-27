export default async function handler(req, res) {
  const TOKEN = process.env.PTERO_API;
  const PANEL = process.env.PANEL_URL;

  const response = await fetch(`${PANEL}/servers`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
      Accept: "Application/vnd.pterodactyl.v1+json"
    },
    body: JSON.stringify(req.body)
  });

  const data = await response.json();
  res.json(data);
}

import express from "express";
import fetch from "node-fetch";

const app = express();
app.use(express.json());

const API = "https://naruya.publicserverr.my.id/api/application";
const KEY = "ptla_DQoP31tGd2i3yb3RcANxtmQQExj8VrRMb9XZFvBn0rg";// 🔒 simpan di env!

app.post("/api/create-admin", async (req, res) => {
  const response = await fetch(`${API}/users`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${KEY}`,
      "Content-Type": "application/json",
      Accept: "Application/vnd.pterodactyl.v1+json"
    },
    body: JSON.stringify(req.body)
  });

  const data = await response.json();
  res.json(data);
});

app.listen(3000);

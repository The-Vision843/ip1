const express = require("express");
const fs = require("fs");
const app = express();

app.get("/", (req, res) => {
  const ip =
    req.headers["x-forwarded-for"] ||
    req.connection.remoteAddress;

  // Log IP to console
  console.log("Visitor IP:", ip);

  // Append IP to a file
  fs.appendFileSync("ips.txt", ip + "\n");

  res.send(`
    <h1>Welcome!</h1>
    <p>Your IP has been logged for the school project demonstration.</p>
    <p>Your IP: ${ip}</p>
  `);
});

app.listen(3000, () => console.log("Server running on port 3000"));

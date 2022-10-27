const express = require("express");
const app = express();
const PORT = "3000";
const db = require("./config/database.js")

app.use(express.json())


app.listen(PORT, () => {
  console.log("Servidor levantado en el port 3000");
});


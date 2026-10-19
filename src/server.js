
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const routes = require("./routes");

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

async function iniciarServidor() {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("A variável MONGO_URI não está configurada.");
    }

    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB conectado com sucesso");

    app.listen(process.env.PORT || 3333, () => {
      console.log("Servidor iniciado com sucesso");
    });
  } catch (err) {
    console.error("Erro ao iniciar o servidor:", err);
    process.exit(1);
  }
}

iniciarServidor();

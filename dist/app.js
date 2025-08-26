import moment from "moment-timezone";
moment.tz.setDefault('America/Sao_Paulo');

import { botUpdater } from './helpers/bot.updater.helper.js';
import connect from './socket.js';
import ffmpeg from "fluent-ffmpeg";
import ffmpegInstaller from '@ffmpeg-installer/ffmpeg';
import express from 'express';
import { buildText, getCurrentBotVersion } from "./utils/general.util.js";
import botTexts from "./helpers/bot.texts.helper.js";

// Configura FFmpeg
ffmpeg.setFfmpegPath(ffmpegInstaller.path);

// Inicializa Express
const app = express();
app.get("/", (req, res) => res.send("Bot rodando ✅"));

// Porta do Render ou fallback
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor HTTP rodando na porta ${PORT}`);
});

// Função principal
async function init() {
  console.log(buildText(botTexts.starting, getCurrentBotVersion()));

  try {
    const hasBotUpdated = await botUpdater();
    if (!hasBotUpdated) {
      connect(); // conecta ao WhatsApp
    }
  } catch (err) {
    console.error("Erro no botUpdater:", err);
    connect(); // tenta conectar mesmo com erro
  }
}

// Executa o bot
init();

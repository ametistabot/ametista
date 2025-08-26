import { funnyRandomPhrases } from '../utils/misc.util.js';
import * as waUtil from '../utils/whatsapp.util.js';
import { buildText, messageErrorCommandUsage, uppercaseFirst } from "../utils/general.util.js";
import botTexts from "../helpers/bot.texts.helper.js";
import miscCommands from "./misc.list.commands.js";
import cleverbot from 'cleverbot-free';
import { GroupController } from "../controllers/group.controller.js";
import path from 'path';
export async function sorteioCommand(client, botInfo, message, group) {
    if (!message.args.length) {
        throw new Error(messageErrorCommandUsage(botInfo.prefix, message));
    }
    const chosenNumber = Number(message.text_command);
    if (!chosenNumber || chosenNumber <= 1) {
        throw new Error(miscCommands.sorteio.msgs.error_invalid_value);
    }
    const randomNumber = Math.floor(Math.random() * chosenNumber) + 1;
    const replyText = buildText(miscCommands.sorteio.msgs.reply, randomNumber);
    await waUtil.replyText(client, message.chat_id, replyText, message.wa_message, { expiration: message.expiration });
}
export async function sorteiomembroCommand(client, botInfo, message, group) {
    const groupController = new GroupController();
    if (!message.isGroupMsg || !group) {
        throw new Error(botTexts.permission.group);
    }
    const currentParticipantsIds = await groupController.getParticipantsIds(group.id);
    const randomParticipant = currentParticipantsIds[Math.floor(Math.random() * currentParticipantsIds.length)];
    const replyText = buildText(miscCommands.sorteiomembro.msgs.reply, waUtil.removeWhatsappSuffix(randomParticipant));
    await waUtil.replyWithMentions(client, message.chat_id, replyText, [randomParticipant], message.wa_message, { expiration: message.expiration });
}
export async function mascoteCommand(client, botInfo, message, group) {
    const imagePath = path.resolve('dist/media/mascote.png');
    await waUtil.replyFile(client, message.chat_id, 'imageMessage', imagePath, 'WhatsApp Jr.', message.wa_message, { expiration: message.expiration });
}
/*
export async function simsimiCommand(client: WASocket, botInfo: Bot, message: Message, group? : Group){
    const miscCommands = commandsMisc(botInfo)

    if (!message.args.length) throw new Error(messageErrorCommandUsage(botInfo.prefix, message))

    const simsimiResult = await miscLib.simSimi(message.text_command)
    const replyText = buildText(miscCommands.simsimi.msgs.reply, timestampToDate(Date.now()), simsimiesult)
    await waUtil.replyText(client, message.chat_id, replyText, message.wa_message, {expiration: message.expiration})
}*/
export async function viadometroCommand(client, botInfo, message, group) {
    if (!message.isGroupMsg) {
        throw new Error(botTexts.permission.group);
    }
    else if (!message.isQuoted && !message.mentioned.length) {
        throw new Error(messageErrorCommandUsage(botInfo.prefix, message));
    }
    else if (message.mentioned.length > 1) {
        throw new Error(miscCommands.viadometro.msgs.error_mention);
    }
    const randomNumber = Math.floor(Math.random() * 100);
    const messageToReply = (message.quotedMessage && message.mentioned.length != 1) ? message.quotedMessage?.wa_message : message.wa_message;
    const replyText = buildText(miscCommands.viadometro.msgs.reply, randomNumber);
    await waUtil.replyText(client, message.chat_id, replyText, messageToReply, { expiration: message.expiration });
}
export async function detectorCommand(client, botInfo, message, group) {
    if (!message.isGroupMsg) {
        throw new Error(botTexts.permission.group);
    }
    else if (!message.isQuoted) {
        throw new Error(messageErrorCommandUsage(botInfo.prefix, message));
    }
    const quotedMessage = message.quotedMessage?.wa_message;
    if (!quotedMessage) {
        throw new Error(miscCommands.detector.msgs.error_message);
    }
    const imagePathCalibration = path.resolve('dist/media/calibrando.png');
    const imagePathsResult = [
        path.resolve('dist/media/estressealto.png'),
        path.resolve('dist/media/incerteza.png'),
        path.resolve('dist/media/kao.png'),
        path.resolve('dist/media/meengana.png'),
        path.resolve('dist/media/mentiroso.png'),
        path.resolve('dist/media/vaipra.png'),
        path.resolve('dist/media/verdade.png')
    ];
    const randomIndex = Math.floor(Math.random() * imagePathsResult.length);
    const waitReply = miscCommands.detector.msgs.wait;
    await waUtil.replyFile(client, message.chat_id, 'imageMessage', imagePathCalibration, waitReply, quotedMessage, { expiration: message.expiration });
    await waUtil.replyFile(client, message.chat_id, 'imageMessage', imagePathsResult[randomIndex], '', quotedMessage, { expiration: message.expiration });
}
export async function roletarussaCommand(client, botInfo, message, group) {
    const bulletPosition = Math.floor(Math.random() * 6) + 1;
    const currentPosition = Math.floor(Math.random() * 6) + 1;
    const hasShooted = (bulletPosition == currentPosition);
    let replyText;
    if (hasShooted) {
        replyText = miscCommands.roletarussa.msgs.reply_dead;
    }
    else {
        replyText = miscCommands.roletarussa.msgs.reply_alive;
    }
    await waUtil.replyText(client, message.chat_id, replyText, message.wa_message, { expiration: message.expiration });
}
export async function casalCommand(client, botInfo, message, group) {
    const groupController = new GroupController();
    if (!message.isGroupMsg || !group) {
        throw new Error(botTexts.permission.group);
    }
    let currentParticipantsIds = await groupController.getParticipantsIds(group.id);
    if (currentParticipantsIds && currentParticipantsIds.length < 2) {
        throw new Error(miscCommands.casal.msgs.error);
    }
    let randomIndex = Math.floor(Math.random() * currentParticipantsIds.length);
    let chosenParticipant1 = currentParticipantsIds[randomIndex];
    currentParticipantsIds.splice(randomIndex, 1);
    randomIndex = Math.floor(Math.random() * currentParticipantsIds.length);
    let chosenParticipant2 = currentParticipantsIds[randomIndex];
    let replyText = buildText(miscCommands.casal.msgs.reply, waUtil.removeWhatsappSuffix(chosenParticipant1), waUtil.removeWhatsappSuffix(chosenParticipant2));
    await waUtil.sendTextWithMentions(client, message.chat_id, replyText, [chosenParticipant1, chosenParticipant2], { expiration: message.expiration });
}
export async function caracoroaCommand(client, botInfo, message, group) {
    const coinSides = ['cara', 'coroa'];
    const userChoice = message.text_command.toLowerCase();
    if (!message.args.length || !coinSides.includes(userChoice)) {
        throw new Error(messageErrorCommandUsage(botInfo.prefix, message));
    }
    const chosenSide = coinSides[Math.floor(Math.random() * coinSides.length)];
    const imagePath = chosenSide === 'cara' ? path.resolve('dist/media/cara.png') : path.resolve('dist/media/coroa.png');
    const waitText = miscCommands.caracoroa.msgs.wait;
    await waUtil.replyText(client, message.chat_id, waitText, message.wa_message, { expiration: message.expiration });
    const isUserVictory = chosenSide == userChoice;
    let replyText;
    if (isUserVictory) {
        replyText = buildText(miscCommands.caracoroa.msgs.reply_victory, uppercaseFirst(chosenSide));
    }
    else {
        replyText = buildText(miscCommands.caracoroa.msgs.reply_defeat, uppercaseFirst(chosenSide));
    }
    await waUtil.replyFile(client, message.chat_id, 'imageMessage', imagePath, replyText, message.wa_message, { expiration: message.expiration });
}
export async function pptCommand(client, botInfo, message, group) {
    const validChoices = ["pedra", "papel", "tesoura"];
    const userChoice = message.text_command.toLocaleLowerCase();
    const randomIndex = Math.floor(Math.random() * validChoices.length);
    if (!message.args.length || !validChoices.includes(userChoice)) {
        throw new Error(messageErrorCommandUsage(botInfo.prefix, message));
    }
    let botChoice = validChoices[randomIndex];
    let botIconChoice;
    let userIconChoice;
    let isUserVictory;
    if (botChoice == "pedra") {
        botIconChoice = "✊";
        if (userChoice == "pedra")
            userIconChoice = "✊";
        else if (userChoice == "tesoura")
            isUserVictory = false, userIconChoice = "✌️";
        else
            isUserVictory = true, userIconChoice = "✋";
    }
    else if (botChoice == "papel") {
        botIconChoice = "✋";
        if (userChoice == "pedra")
            isUserVictory = false, userIconChoice = "✊";
        else if (userChoice == "tesoura")
            isUserVictory = true, userIconChoice = "✌️";
        else
            userIconChoice = "✋";
    }
    else {
        botIconChoice = "✌️";
        if (userChoice == "pedra")
            isUserVictory = true, userIconChoice = "✊";
        else if (userChoice == "tesoura")
            userIconChoice = "✌️";
        else
            isUserVictory = false, userIconChoice = "✋";
    }
    let replyText;
    if (isUserVictory === true) {
        replyText = buildText(miscCommands.ppt.msgs.reply_victory, userIconChoice, botIconChoice);
    }
    else if (isUserVictory === false) {
        replyText = buildText(miscCommands.ppt.msgs.reply_defeat, userIconChoice, botIconChoice);
    }
    else {
        replyText = buildText(miscCommands.ppt.msgs.reply_draw, userIconChoice, botIconChoice);
    }
    await waUtil.replyText(client, message.chat_id, replyText, message.wa_message, { expiration: message.expiration });
}
export async function gadometroCommand(client, botInfo, message, group) {
    if (!message.isGroupMsg || !group) {
        throw new Error(botTexts.permission.group);
    }
    else if (!message.isQuoted && !message.mentioned.length) {
        throw new Error(messageErrorCommandUsage(botInfo.prefix, message));
    }
    else if (message.mentioned.length > 1) {
        throw new Error(miscCommands.gadometro.msgs.error_mention);
    }
    const randomNumber = Math.floor(Math.random() * 100);
    const messageToReply = (message.quotedMessage && message.mentioned.length != 1) ? message.quotedMessage?.wa_message : message.wa_message;
    const replyText = buildText(miscCommands.gadometro.msgs.reply, randomNumber);
    await waUtil.replyText(client, message.chat_id, replyText, messageToReply, { expiration: message.expiration });
}
export async function bafometroCommand(client, botInfo, message, group) {
    if (!message.isGroupMsg || !group) {
        throw new Error(botTexts.permission.group);
    }
    else if (!message.isQuoted && !message.mentioned.length) {
        throw new Error(messageErrorCommandUsage(botInfo.prefix, message));
    }
    else if (message.mentioned.length > 1) {
        throw new Error(miscCommands.bafometro.msgs.error_mention);
    }
    const randomNumber = Math.floor(Math.random() * 100);
    const messageToReply = (message.quotedMessage && message.mentioned.length != 1) ? message.quotedMessage?.wa_message : message.wa_message;
    const replyText = buildText(miscCommands.bafometro.msgs.reply, randomNumber);
    await waUtil.replyText(client, message.chat_id, replyText, messageToReply, { expiration: message.expiration });
}
export async function top5Command(client, botInfo, message, group) {
    const groupController = new GroupController();
    if (!message.isGroupMsg || !group) {
        throw new Error(botTexts.permission.group);
    }
    else if (!message.args.length) {
        throw new Error(messageErrorCommandUsage(botInfo.prefix, message));
    }
    let rankingTheme = message.text_command;
    let currentParticipantsIds = await groupController.getParticipantsIds(group.id);
    if (currentParticipantsIds.length < 5) {
        throw new Error(miscCommands.top5.msgs.error_members);
    }
    let replyText = buildText(miscCommands.top5.msgs.reply_title, rankingTheme);
    let mentionList = [];
    for (let i = 1; i <= 5; i++) {
        let icon;
        switch (i) {
            case 1:
                icon = '🥇';
                break;
            case 2:
                icon = '🥈';
                break;
            case 3:
                icon = '🥉';
                break;
            default:
                icon = '';
        }
        let randomIndex = Math.floor(Math.random() * currentParticipantsIds.length);
        let chosenParticipant = currentParticipantsIds[randomIndex];
        replyText += buildText(miscCommands.top5.msgs.reply_item, icon, i, waUtil.removeWhatsappSuffix(chosenParticipant));
        mentionList.push(chosenParticipant);
        currentParticipantsIds.splice(currentParticipantsIds.indexOf(chosenParticipant), 1);
    }
    await waUtil.sendTextWithMentions(client, message.chat_id, replyText, mentionList, { expiration: message.expiration });
}
export async function parCommand(client, botInfo, message, group) {
    if (!message.isGroupMsg || !group) {
        throw new Error(botTexts.permission.group);
    }
    else if (message.mentioned.length !== 2) {
        throw new Error(messageErrorCommandUsage(botInfo.prefix, message));
    }
    const randomNumber = Math.floor(Math.random() * 100);
    let replyText = buildText(miscCommands.par.msgs.reply, waUtil.removeWhatsappSuffix(message.mentioned[0]), waUtil.removeWhatsappSuffix(message.mentioned[1]), randomNumber);
    await waUtil.sendTextWithMentions(client, message.chat_id, replyText, message.mentioned, { expiration: message.expiration });
}
export async function chanceCommand(client, botInfo, message, group) {
    if (!message.args.length) {
        throw new Error(messageErrorCommandUsage(botInfo.prefix, message));
    }
    const randomNumber = Math.floor(Math.random() * 100);
    const replyText = buildText(miscCommands.chance.msgs.reply, randomNumber, message.text_command);
    const messageToReply = (message.isQuoted && message.quotedMessage) ? message.quotedMessage?.wa_message : message.wa_message;
    await waUtil.replyText(client, message.chat_id, replyText, messageToReply, { expiration: message.expiration });
}
export async function fraseCommand(client, botInfo, message, group) {
    const phraseResult = await funnyRandomPhrases();
    const replyText = buildText(miscCommands.frase.msgs.reply, phraseResult);
    const imagePath = path.resolve('dist/media/frasewhatsappjr.png');
    await waUtil.replyFile(client, message.chat_id, 'imageMessage', imagePath, replyText, message.wa_message, { expiration: message.expiration });
}
export async function tarotCommand(client, botInfo, message, group) {
        const cartas = [
            // Arcanos Maiores
            { nome: "0. 🃏 O Louco", desc: "novos começos, espontaneidade e coragem de arriscar." },
            { nome: "I. 🦅 O Mago", desc: "habilidade, foco e poder de manifestar seus desejos." },
            { nome: "II. 🌙 A Sacerdotisa", desc: "mistério, sabedoria oculta e intuição profunda." },
            { nome: "III. 👑 A Imperatriz", desc: "fertilidade, abundância e criatividade." },
            { nome: "IV. 🛡 O Imperador", desc: "estabilidade, liderança e poder de decisão." },
            { nome: "V. ⛪ O Hierofante", desc: "tradição, fé e orientação espiritual." },
            { nome: "VI. 💘 Os Enamorados", desc: "escolhas importantes e conexões verdadeiras." },
            { nome: "VII. 🏇 O Carro", desc: "força de vontade, disciplina e conquistas." },
            { nome: "VIII. 🦁 A Força", desc: "coragem, autocontrole e resiliência." },
            { nome: "IX. 🕯 O Eremita", desc: "busca interior, silêncio e iluminação pessoal." },
            { nome: "X. 🎡 A Roda da Fortuna", desc: "mudanças, destino e ciclos inevitáveis." },
            { nome: "XI. ⚖️ A Justiça", desc: "verdade, equilíbrio e consequências." },
            { nome: "XII. 🔗 O Enforcado", desc: "sacrifício, pausa e nova perspectiva." },
            { nome: "XIII. ☠️ A Morte", desc: "transformação, fim de ciclos e novos recomeços." },
            { nome: "XIV. 🌊 A Temperança", desc: "equilíbrio, harmonia e paciência." },
            { nome: "XV. 😈 O Diabo", desc: "apegos, vícios e ilusões materiais." },
            { nome: "XVI. 🏰 A Torre", desc: "mudanças repentinas e quebra de velhas estruturas." },
            { nome: "XVII. 🌌 A Estrela", desc: "esperança, inspiração e cura interior." },
            { nome: "XVIII. 🌙 A Lua", desc: "ilusões, mistérios e a necessidade de ouvir sua intuição." },
            { nome: "XIX. 🌞 O Sol", desc: "clareza, sucesso e alegria iluminam o caminho." },
            { nome: "XX. 📣 O Julgamento", desc: "renascimento, despertar e perdão." },
            { nome: "XXI. 🌍 O Mundo", desc: "realização, conclusão e plenitude." },

            // Arcanos Menores – Paus
            { nome: "Ás de Paus 🔥", desc: "inspiração, motivação e novos começos." },
            { nome: "Dois de Paus 🔥", desc: "planejamento, visão e decisões." },
            { nome: "Três de Paus 🔥", desc: "expansão, progresso e oportunidades." },
            { nome: "Quatro de Paus 🔥", desc: "celebração, harmonia e estabilidade." },
            { nome: "Cinco de Paus 🔥", desc: "conflito, competição e desafios." },
            { nome: "Seis de Paus 🔥", desc: "vitória, reconhecimento e sucesso." },
            { nome: "Sete de Paus 🔥", desc: "defesa, coragem e perseverança." },
            { nome: "Oito de Paus 🔥", desc: "rapidez, ação e movimento." },
            { nome: "Nove de Paus 🔥", desc: "resiliência, proteção e determinação." },
            { nome: "Dez de Paus 🔥", desc: "sobrecarga, responsabilidade e deveres." },
            { nome: "Pajem de Paus 🔥", desc: "entusiasmo, criatividade e descobertas." },
            { nome: "Cavaleiro de Paus 🔥", desc: "paixão, impulso e aventura." },
            { nome: "Rainha de Paus 🔥", desc: "confiança, independência e energia." },
            { nome: "Rei de Paus 🔥", desc: "liderança, visão e determinação." },

            // Arcanos Menores – Copas
            { nome: "Ás de Copas 💧", desc: "amor, intuição e novos relacionamentos." },
            { nome: "Dois de Copas 💧", desc: "união, parceria e conexão emocional." },
            { nome: "Três de Copas 💧", desc: "amizade, celebração e alegria." },
            { nome: "Quatro de Copas 💧", desc: "indiferença, reflexão e apatia." },
            { nome: "Cinco de Copas 💧", desc: "perdas, tristeza e desapontamento." },
            { nome: "Seis de Copas 💧", desc: "lembranças, infância e nostalgia." },
            { nome: "Sete de Copas 💧", desc: "ilusões, escolhas e fantasias." },
            { nome: "Oito de Copas 💧", desc: "abandono, desapego e busca interior." },
            { nome: "Nove de Copas 💧", desc: "satisfação, gratidão e conquistas pessoais." },
            { nome: "Dez de Copas 💧", desc: "felicidade plena, harmonia e família." },
            { nome: "Pajem de Copas 💧", desc: "imaginação, sensibilidade e mensagens." },
            { nome: "Cavaleiro de Copas 💧", desc: "romantismo, charme e idealismo." },
            { nome: "Rainha de Copas 💧", desc: "compaixão, empatia e intuição." },
            { nome: "Rei de Copas 💧", desc: "equilíbrio emocional e sabedoria." },

            // Arcanos Menores – Espadas
            { nome: "Ás de Espadas ⚔️", desc: "clareza mental, verdade e novas ideias." },
            { nome: "Dois de Espadas ⚔️", desc: "decisão difícil, impasse e equilíbrio." },
            { nome: "Três de Espadas ⚔️", desc: "coração partido, dor e separação." },
            { nome: "Quatro de Espadas ⚔️", desc: "descanso, recuperação e reflexão." },
            { nome: "Cinco de Espadas ⚔️", desc: "conflito, derrota e ego." },
            { nome: "Seis de Espadas ⚔️", desc: "transição, mudança e cura." },
            { nome: "Sete de Espadas ⚔️", desc: "traição, estratégia e segredos." },
            { nome: "Oito de Espadas ⚔️", desc: "restrição, medo e limitação." },
            { nome: "Nove de Espadas ⚔️", desc: "ansiedade, insônia e preocupações." },
            { nome: "Dez de Espadas ⚔️", desc: "fim doloroso, derrota e renascimento." },
            { nome: "Pajem de Espadas ⚔️", desc: "curiosidade, vigilância e aprendizado." },
            { nome: "Cavaleiro de Espadas ⚔️", desc: "ação rápida, determinação e ousadia." },
            { nome: "Rainha de Espadas ⚔️", desc: "independência, clareza e honestidade." },
            { nome: "Rei de Espadas ⚔️", desc: "autoridade, lógica e verdade." },

            // Arcanos Menores – Ouros
            { nome: "Ás de Ouros 💰", desc: "prosperidade, oportunidade e abundância." },
            { nome: "Dois de Ouros 💰", desc: "equilíbrio, adaptação e escolhas financeiras." },
            { nome: "Três de Ouros 💰", desc: "colaboração, aprendizado e progresso." },
            { nome: "Quatro de Ouros 💰", desc: "apego, controle e segurança." },
            { nome: "Cinco de Ouros 💰", desc: "perda, dificuldades e apoio externo." },
            { nome: "Seis de Ouros 💰", desc: "generosidade, caridade e equilíbrio." },
            { nome: "Sete de Ouros 💰", desc: "paciência, avaliação e crescimento." },
            { nome: "Oito de Ouros 💰", desc: "trabalho duro, dedicação e maestria." },
            { nome: "Nove de Ouros 💰", desc: "independência, sucesso e luxo." },
            { nome: "Dez de Ouros 💰", desc: "legado, família e estabilidade financeira." },
            { nome: "Pajem de Ouros 💰", desc: "oportunidade, estudo e praticidade." },
            { nome: "Cavaleiro de Ouros 💰", desc: "rotina, responsabilidade e paciência." },
            { nome: "Rainha de Ouros 💰", desc: "cuidado, prosperidade e praticidade." },
            { nome: "Rei de Ouros 💰", desc: "sucesso, estabilidade e liderança." }
        ];

        // Sorteia 3 cartas diferentes
                const sorteadas = [];
        while (sorteadas.length < 3) {
            const carta = cartas[Math.floor(Math.random() * cartas.length)];
            if (!sorteadas.includes(carta)) sorteadas.push(carta);
        }

        // Monta o bloco de texto com as 3 cartas
        const lista = sorteadas.map((c, i) =>
            `✨ Carta ${i + 1}: *${c.nome}*\n${c.desc}`
        ).join("\n\n");

        // Usa o template do misc.list.commands.js
        const replyText = buildText(miscCommands.tarot.msgs.reply, lista);

        await waUtil.replyText(client, message.chat_id, replyText, message.wa_message, { expiration: message.expiration });
    }

//CLEVERBOT
export async function simsimiCommand(client, botInfo, message, group) {
    try {
        if (!message.args.length) {
            const replyText = miscCommands.simsimi.msgs.error_empty;
            return await waUtil.replyText(client, message.chat_id, replyText, message.wa_message, { expiration: message.expiration });
        }

        const userMessage = message.text_command;

        // Força o Cleverbot a responder em português
        const prompt = `${userMessage}`;

        // Resposta do Cleverbot
        const response = await cleverbot(prompt);

        // Formata a resposta no padrão do misc.list.commands
        const replyText = buildText(miscCommands.simsimi.msgs.reply, response);

        await waUtil.replyText(client, message.chat_id, replyText, message.wa_message, { expiration: message.expiration });

    } catch (err) {
        console.warn("⚠️ Erro Simsimi:", err.message);

        const replyText = miscCommands.simsimi.msgs.error_limit;
        await waUtil.replyText(client, message.chat_id, replyText, message.wa_message, { expiration: message.expiration });
    }
}

const jogosFilme = {};

export async function emojifilmeCommand(client, botInfo, message, group) {
    if (!message.isGroupMsg || !group) {
        throw new Error(botTexts.permission.group);
    }

    const filmes = [
        { emoji: "👑🦁🌅🐒", nome: "O Rei Leão" },
        { emoji: "🧞‍♂️🕌🪙🐒", nome: "Aladdin" },
        { emoji: "❄️👸🏼🦌⛄", nome: "Frozen" },
        { emoji: "🧒🤥🐳🧚", nome: "Pinóquio" },
        { emoji: "🧙‍♂️⚡🧹🐍", nome: "Harry Potter" },
        { emoji: "🦖🌴🚙🧪", nome: "Jurassic Park" },
        { emoji: "🐟🔍👦🐢", nome: "Procurando Nemo" },
        { emoji: "🦸‍♂️🛡️🇺🇸⭐", nome: "Capitão América" },
        { emoji: "🦇🌃🤵‍♂️🃏", nome: "Batman" },
        { emoji: "🚔🔫🪖💣", nome: "Tropa de Elite" },
        { emoji: "✝️🤠🐇😂", nome: "O Auto da Compadecida" },
        { emoji: "🚂👦👩‍🦱📬", nome: "Central do Brasil" },
        { emoji: "🏙️🔫👶🔥", nome: "Cidade de Deus" },
        { emoji: "🎤🎶👨‍👦🌽", nome: "2 Filhos de Francisco" },
        { emoji: "👩🏾‍🦱🍲📖👨‍🦱", nome: "Dona Flor e Seus Dois Maridos" },
        { emoji: "🎪🤡🚗🦁", nome: "O Palhaço" },
        { emoji: "🏞️🛶🌿👬", nome: "Xingu" },
        { emoji: "⚽👑🇧🇷⭐", nome: "Pelé" },
        { emoji: "👦🏖️📚🧒", nome: "Capitães da Areia" },
        { emoji: "🦸‍♀️🛡️🌎⚔️", nome: "Mulher Maravilha" },
        { emoji: "🚢❄️💑🎻", nome: "Titanic" },
        { emoji: "👩🏻‍🦰🦞🧜🏻‍♀️🌊", nome: "A Pequena Sereia" },
        { emoji: "🧙‍♂️💍🔥🌋", nome: "O Senhor dos Anéis" },
        { emoji: "🐼🥋👊🍜", nome: "Kung Fu Panda" },
        { emoji: "🕷️🕸️🧑‍🎓🏙️", nome: "Homem Aranha" },
        { emoji: "👽👨🚀🌌", nome: "Guardiões da Galáxia" },
        { emoji: "🦸‍♂️🛡️⚡🤖", nome: "Os Vingadores" },
        { emoji: "👧🐰🕳️♠️", nome: "Alice no País das Maravilhas" },
        { emoji: "🐉🔥👦⚔️", nome: "Como Treinar o Seu Dragão" },
	{ emoji: "🦸‍♂️🛡️🦅🇺🇸", nome: "Homem de Ferro" },
	{ emoji: "👩‍👧🍫🏭🎩", nome: "A Fantástica Fábrica de Chocolate" },
	{ emoji: "🧑🏻⚓🏝️🏐", nome: "Náufrago" },
	{ emoji: "🧟‍♂️🔫🩸🏙️", nome: "Resident Evil" },
	{ emoji: "🧛‍♂️🩸🏰🌙", nome: "Drácula" },
	{ emoji: "🕵️‍♂️🧩🔪🩸", nome: "Jogos Mortais" },
	{ emoji: "🦈🌊🚤🩸", nome: "Tubarão" },
	{ emoji: "👨‍🚀🌌🚀🪐", nome: "Interestelar" },
	{ emoji: "🤖🚗💥🌍", nome: "Transformers" },
	{ emoji: "👨‍👩‍👧🏞️🚐🇺🇸", nome: "Pequena Miss Sunshine" },
	{ emoji: "🧟‍♀️🌍🔥🔫", nome: "Guerra Mundial Z" },
	{ emoji: "👽📞🏠🚲", nome: "ET" },
	{ emoji: "🦍🏢✈️👩", nome: "King Kong" },
	{ emoji: "👨🏻🧑🏻🎸🚐", nome: "Escola de Rock" },
	{ emoji: "🚘💨🏁🔥", nome: "Velozes e Furiosos" },
	{ emoji: "👨‍🚀🌕🇺🇸🚀", nome: "Apollo 13" },
	{ emoji: "🧙‍♂️👶📜🐉", nome: "A História Sem Fim" },
	{ emoji: "🐭🧀🍝🇮🇹", nome: "Ratatouille" },
	{ emoji: "👦🦕🌋🦖", nome: "Em Busca do Vale Encantado" },
	{ emoji: "🤴🏰👩‍🦳🪞", nome: "Branca de Neve" },
	{ emoji: "🧟‍♂️🏚️🔦📹", nome: "A Bruxa de Blair" },
	{ emoji: "👮🔫🕶️🚔", nome: "Bad Boys" },
	{ emoji: "🦸‍♂️🦸‍♀️👨‍👩‍👧‍👦🏠", nome: "Os Incríveis" },
	{ emoji: "👨🏞️🐻❄️", nome: "O Regresso" },
	{ emoji: "🧑‍🎤🎸⭐", nome: "Bohemian Rhapsody" },
	{ emoji: "👨‍🦳👦🎈🏠", nome: "UP Altas Aventuras" },
	{ emoji: "👨⚡🏃‍♂️⌚", nome: "Flash" },
	{ emoji: "🦖🦕🏝️🌋", nome: "Jurassic World" },
	{ emoji: "🧛‍♀️💔🐺", nome: "Crepúsculo" }
    ];

    // sorteia um filme aleatório
    const sorteado = filmes[Math.floor(Math.random() * filmes.length)];

    // salva o jogo no grupo
    jogosFilme[message.chat_id] = {
        resposta: sorteado.nome, // mantém a formatação original
        timeout: Date.now() + 60000 // 1 minuto
    };

    await waUtil.sendTextWithMentions(
        client,
        message.chat_id,
        `🎬 *Adivinhe o filme:*\n\n${sorteado.emoji}\n\nUse *#resposta* \`nome do filme\` para tentar adivinhar!`,
        [],
        { expiration: message.expiration }
    );
}

export async function respostaCommand(client, botInfo, message, group) {
    if (!message.isGroupMsg || !group) {
        throw new Error(botTexts.permission.group);
    }

    const jogo = jogosFilme[message.chat_id];
    if (!jogo) {
        await waUtil.sendTextWithMentions(
            client,
            message.chat_id,
            `😅 Não há nenhum jogo ativo agora!\nDigite: *#emojifilme* para iniciar.`,
            [],
            { expiration: message.expiration }
        );
        return;
    }

    // verifica se tempo expirou
    if (Date.now() > jogo.timeout) {
        await waUtil.sendTextWithMentions(
            client,
            message.chat_id,
            `⏰ *Tempo esgotado!*\n\nO filme era: *${jogo.resposta}*`,
            [],
            { expiration: message.expiration }
        );
        delete jogosFilme[message.chat_id];
        return;
    }

    // pega tentativa do usuário em lowercase para comparação
    const tentativa = message.body.replace(/^#resposta/i, "").trim().toLowerCase();
    if (!tentativa) {
        await waUtil.sendTextWithMentions(
            client,
            message.chat_id,
            "❗ Use assim: *#resposta* `nome`",
            [],
            { expiration: message.expiration }
        );
        return;
    }

    // compara tentativa em lowercase com a resposta original em lowercase
    if (tentativa.includes(jogo.resposta.toLowerCase())) {
        const winText = `🏆 *Parabéns @${waUtil.removeWhatsappSuffix(message.sender)}!*\n\nVocê acertou o filme: *${jogo.resposta}*! 🎉`;
        await waUtil.sendTextWithMentions(
            client,
            message.chat_id,
            winText,
            [message.sender],
            { expiration: message.expiration }
        );
        delete jogosFilme[message.chat_id];
    } else {
        await waUtil.sendTextWithMentions(
            client,
            message.chat_id,
            "❌ *Errou!* Tente de novo!",
            [],
            { expiration: message.expiration }
        );
    }
}

const jogosForca = {};

export async function forcaCommand(client, botInfo, message, group) {
    // Erro se não for grupo
    if (!message.isGroupMsg || !group) {
        return waUtil.sendTextWithMentions(client, message.chat_id, "❌ Este comando só pode ser usado em grupos.", [], { expiration: message.expiration });
    }

    // Erro se já houver jogo
    if (jogosForca[message.chat_id]) {
        return waUtil.sendTextWithMentions(client, message.chat_id, "❌ Já existe um jogo da forca em andamento neste grupo.", [], { expiration: message.expiration });
    }

    const temas = {
        comidas: ["Brigadeiro","Coxinha","Pudim","Churrasco","Pizza","Pastel","Esfiha","Panetone","Moqueca","Empadão","Lasanha","Feijoada","Sushi","Panqueca","Cuscuz","Hambúrguer"],
        países: ["México","França","Alemanha","Suíça","Colômbia","Peru","Grécia","Coreia do Sul","Índia","Albânia","Rússia","Nigéria","Egito","Austrália","Argentina"],
        artistas: ["Charli XCX","Lady Gaga","Marília Mendonça","Katy Perry","Pabllo Vittar","Demi Lovato","Celine Dion","Billie Eilish","Adele","Iza","Taylor Swift","Anitta","Madonna","Rihanna","Shakira","Beyoncé","Ivete"],
        cores: ["Amarelo","Violeta","Marrom","Bege","Azul","Laranja","Roxo","Verde","Preto","Branco"],
        desenhos: ["Simpsons","Naruto","Bob Esponja","Scooby-Doo","Shrek","Frozen","Mulan","Moana","Pokémon","Toy Story"],
        objetos: ["Tesoura","Janela","Mochila","Caneta","Caderno","Chaveiro","Cadeira","Celular","Computador","Relógio","Garrafa"],
        esportes: ["Vôlei","Badminton","Tênis","Natação","Judô","Surf","Skate","Boxe","Futebol","Basquete","Xadrez","Corrida"],
        filmes: ["Titanic","Avatar","Parasita","Gladiador","Interestelar","Matrix","Frozen"],
        animais: ["Girafa","Tartaruga","Elefante","Camaleão","Golfinho","Canguru","Elefante","Jacaré","Borboleta","Cachorro"],
        jogos: ["Minecraft","Fortnite","Freefire","Pacman","Tetris","Roblox"],
        matéria: ["Química","História","Anatomia","Farmácia","Filosofia","Matemática"],
        atores: ["Ryan Gosling","Emma Stone","Leonardo DiCaprio","Scarlett Johansson","Tom Hanks"]
    };

    const temaSorteado = Object.keys(temas)[Math.floor(Math.random() * Object.keys(temas).length)];
    const palavraSorteada = temas[temaSorteado][Math.floor(Math.random() * temas[temaSorteado].length)];

    // Cria palavra oculta como array
    const palavraOcultaArray = palavraSorteada.split("").map(c => c === " " ? " " : "_");

    // Salva estado do jogo
    jogosForca[message.chat_id] = {
        palavra: palavraSorteada,
        palavraOculta: palavraOcultaArray,
        tema: temaSorteado,
        tentativas: 6,
        letrasUsadas: []
    };

    let replyText = buildText(
        miscCommands.forca.msgs.start,
        temaSorteado,
        formatWord(palavraOcultaArray),
        6
    );

    await waUtil.sendTextWithMentions(client, message.chat_id, replyText, [], { expiration: message.expiration });
}

export async function chuteCommand(client, botInfo, message, group) {
    // Erro se não for grupo
    if (!message.isGroupMsg || !group) {
        return waUtil.sendTextWithMentions(client, message.chat_id, "❌ Este comando só pode ser usado em grupos.", [], { expiration: message.expiration });
    }

    const jogo = jogosForca[message.chat_id];
    if (!jogo) {
        return waUtil.sendTextWithMentions(client, message.chat_id, "❌ Não há nenhum jogo da forca ativo neste grupo.", [], { expiration: message.expiration });
    }

    const chute = message.body.replace(/^#chute/i, "").trim().toLowerCase();
    if (!chute) {
        return waUtil.sendTextWithMentions(client, message.chat_id, "❌ Você precisa digitar uma letra ou palavra válida. Ex: *#chute* a", [], { expiration: message.expiration });
    }

    // Chute da palavra inteira
    if (chute.length > 1) {
        if (chute === jogo.palavra.toLowerCase()) {
            let winText = buildText(miscCommands.forca.msgs.win, jogo.tema, jogo.palavra.toUpperCase());
            await waUtil.sendTextWithMentions(client, message.chat_id, winText, [], { expiration: message.expiration });
            delete jogosForca[message.chat_id];
            return;
        } else {
            jogo.tentativas--;
            if (jogo.tentativas <= 0) {
                let loseText = buildText(miscCommands.forca.msgs.lose, jogo.tema, jogo.palavra.toUpperCase());
                await waUtil.sendTextWithMentions(client, message.chat_id, loseText, [], { expiration: message.expiration });
                delete jogosForca[message.chat_id];
                return;
            }
            let replyText = buildText(miscCommands.forca.msgs.wrong, jogo.tema, formatWord(jogo.palavraOculta), jogo.tentativas);
            await waUtil.sendTextWithMentions(client, message.chat_id, replyText, [], { expiration: message.expiration });
            return;
        }
    }

    // Chute de letra
    const letra = chute;
    if (!letra || letra.length !== 1) {
        return waUtil.sendTextWithMentions(client, message.chat_id, "❌ Você precisa digitar apenas uma letra. Ex: *#chute* a", [], { expiration: message.expiration });
    }
    if (jogo.letrasUsadas.includes(letra)) {
        return waUtil.sendTextWithMentions(client, message.chat_id, "❌ Esta letra já foi usada! Tente outra.", [], { expiration: message.expiration });
    }

    jogo.letrasUsadas.push(letra);

    // Atualiza palavra oculta
    jogo.palavraOculta = jogo.palavraOculta.map((c, i) => {
        if (jogo.palavra[i].toLowerCase() === letra) return jogo.palavra[i].toUpperCase();
        return c;
    });

    if (!jogo.palavraOculta.includes("_")) {
        let winText = buildText(miscCommands.forca.msgs.win, jogo.tema, jogo.palavra.toUpperCase());
        await waUtil.sendTextWithMentions(client, message.chat_id, winText, [], { expiration: message.expiration });
        delete jogosForca[message.chat_id];
        return;
    }

    if (jogo.palavra.toLowerCase().includes(letra)) {
        let replyText = buildText(miscCommands.forca.msgs.correct, jogo.tema, formatWord(jogo.palavraOculta), jogo.tentativas);
        await waUtil.sendTextWithMentions(client, message.chat_id, replyText, [], { expiration: message.expiration });
    } else {
        jogo.tentativas--;
        if (jogo.tentativas <= 0) {
            let loseText = buildText(miscCommands.forca.msgs.lose, jogo.tema, jogo.palavra.toUpperCase());
            await waUtil.sendTextWithMentions(client, message.chat_id, loseText, [], { expiration: message.expiration });
            delete jogosForca[message.chat_id];
            return;
        }
        let replyText = buildText(miscCommands.forca.msgs.wrong, jogo.tema, formatWord(jogo.palavraOculta), jogo.tentativas);
        await waUtil.sendTextWithMentions(client, message.chat_id, replyText, [], { expiration: message.expiration });
    }
}

// Formata palavra para exibição (underscore + zero-width space + espaço extra)
function formatWord(array) {
    return array
        .map(c => {
            if (c === "_") return "_\u200B";
            if (c === " ") return "  \u200B";
            return c;
        })
        .join(" ");
}

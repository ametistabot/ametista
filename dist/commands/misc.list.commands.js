import * as miscFunctions from './misc.functions.commands.js';
const miscCommands = {
    sorteio: {
        guide: `Ex: *{$p}sorteio* 100 - Sorteia um número aleatório de 1 a 100.\n`,
        msgs: {
            reply: `🎲 *Sorteio!*: \n\n` +
                `O número sorteado foi *{$1}*`,
            error_invalid_value: 'O valor do número inserido é inválido, escolha um número maior que 1.'
        },
        function: miscFunctions.sorteioCommand
    },
    sorteiomembro: {
        guide: `Ex: *{$p}sorteiomembro* - Sorteia um membro aleatório do grupo.\n`,
        msgs: {
            reply: `🎲 *Sorteio!*: \n\n` +
                `O membro sorteado foi *@{$1}*`,
        },
        function: miscFunctions.sorteiomembroCommand
    },
    mascote: {
        guide: `Ex: *{$p}mascote* - Exibe o inigualável e onipotente WhatsApp Jr.\n`,
        msgs: {
            reply: '🐵 WhatsApp Jr.'
        },
        function: miscFunctions.mascoteCommand
    },
    /*
    simi: {
        guide: `Ex: *{$p}simi* frase  - Envia um texto para o SimSimi responder.\n_Comando temporariamente indisponível!_\n`,
        msgs: {
            reply: `🐤 *SimSimi*: \n\n`+
            `{$1}: {$2}`,
        },
        function: miscFunctions.simiCommand
    },*/
    viadometro: {
        guide: `Ex: *{$p}viadometro* @membro - Mede o nível de viadagem do membro mencionado.\n\n` +
            `Ex: Responder com *{$p}viadometro* - Mede o nível de viadagem do membro respondido.\n`,
        msgs: {
            error_mention: "[❗] Apenas um membro deve ser marcado por vez.",
            error_message: "[❗] Houve um erro ao obter os dados da mensagem.",
            reply: "🏳️‍🌈 *Gaydar*\n\n" +
                'Foi detectado um nível de homossexualidade de *{$1}%*'
        },
        function: miscFunctions.viadometroCommand
    },
    detector: {
        guide: `Ex: Responder com *{$p}detector* - Exibe o resultado da máquina da verdade.\n`,
        msgs: {
            wait: "⏳ Calibrando o detector...",
            error_message: "[❗] Houve um erro ao obter os dados da mensagem."
        },
        function: miscFunctions.detectorCommand
    },
    roletarussa: {
        guide: `Ex: *{$p}roletarussa* - Teste sua sorte na roleta russa.\n\n`,
        msgs: {
            reply_alive: '🔫 *Roleta russa*\n\n' +
                "😁 A arma não disparou, você sobreviveu a roleta russa.",
            reply_dead: '🔫 *Roleta russa*\n\n' +
                "💀 A arma disparou, você morreu.",
        },
        function: miscFunctions.roletarussaCommand
    },
    casal: {
        guide: `Ex: *{$p}casal* - Escolhe 2 pessoas aleatórias do grupo para formar um casal.\n`,
        msgs: {
            error: "[❗] Este comando precisa de no mínimo 2 membros no grupo.",
            reply: '👩‍❤️‍👨 *Casal*\n\n' +
                "💕 Muito amor envolvido entre @{$1} e @{$2}. Eu já shippo!"
        },
        function: miscFunctions.casalCommand
    },
    caracoroa: {
        guide: `Ex: *{$p}caracoroa* cara - Escolhe cara e joga a moeda.\n\n` +
            `Ex: *{$p}caracoroa* coroa - Escolhe coroa e joga a moeda.\n`,
        msgs: {
            wait: "🪙 Lançando a moeda ",
            reply_victory: "😁 *Vitória!*\n\n" +
                "O resultado caiu *{$1}*\n",
            reply_defeat: "😭 *Derrota!*\n\n" +
                "O resultado caiu *{$1}*\n"
        },
        function: miscFunctions.caracoroaCommand
    },
    ppt: {
        guide: `Ex: *{$p}ppt* pedra - Escolhe pedra, para jogar pedra, papel ou tesoura.\n\n` +
            `Ex: *{$p}ppt* papel - Escolhe papel, para jogar pedra, papel ou tesoura.\n\n` +
            `Ex: *{$p}ppt* tesoura - Escolhe tesoura, para jogar pedra, papel ou tesoura.\n`,
        msgs: {
            error: "[❗] Você deve escolher entre *pedra*, *papel*  ou *tesoura*",
            reply_victory: "😁 *Vitória!*\n\n" +
                "Você escolheu {$1} e o bot escolheu {$2}\n",
            reply_defeat: "😭 *Derrota!*\n\n" +
                "Você escolheu {$1} e o bot escolheu {$2}\n",
            reply_draw: "😐 *Empate!*\n\n" +
                "Você escolheu {$1} e o bot escolheu {$2}\n"
        },
        function: miscFunctions.pptCommand
    },
    gadometro: {
        guide: `Ex: *{$p}gadometro* @membro - Mede o nível de gadisse do membro mencionado.\n\n` +
            `Ex: Responder com *{$p}gadometro* - Mede o nível de gadisse do membro respondido.\n`,
        msgs: {
            error_mention: "[❗] Apenas um membro deve ser marcado por vez.",
            error_message: "[❗] Houve um erro ao obter os dados da mensagem.",
            reply: "🐃 *Gadômetro*\n\n" +
                'Foi detectado um nível de gado de *{$1}%*'
        },
        function: miscFunctions.gadometroCommand
    },
    bafometro: {
        guide: `Ex: *{$p}bafometro* @membro - Mede o nível de alcool do membro mencionado.\n\n` +
            `Ex: Responder com *{$p}bafometro* - Mede o nível de alcool do membro respondido.\n`,
        msgs: {
            reply: "🍺 *Bafômetro*\n\n" +
                'Foi detectado um nível de álcool de *{$1}%*',
            error_mention: "[❗] Apenas um membro deve ser marcado por vez.",
            error_message: "[❗] Houve um erro ao obter os dados da mensagem.",
        },
        function: miscFunctions.bafometroCommand
    },
    top5: {
        guide: `Ex: *{$p}top5* tema - Exibe uma ranking de 5 membros aleatórios com o tema que você escolher.\n`,
        msgs: {
            error_members: "O grupo deve ter no mínimo 5 membros para usar este comando.",
            reply_title: "🏆 *TOP 5 {$1}*\n\n",
            reply_item: "{$1} {$2}° Lugar - @{$3}\n"
        },
        function: miscFunctions.top5Command
    },
    par: {
        guide: `Ex: *{$p}par* @membro1 @membro2 - Mede o nível de compatibilidade dos 2 membros mencionados.\n`,
        msgs: {
            reply: "👩‍❤️‍👨 *Par*\n\n" +
                'A chance de compatibilidade entre @{$1} e @{$2} é de *{$3}%*'
        },
        function: miscFunctions.parCommand
    },
    chance: {
        guide: `Ex: *{$p}chance ficar rico* - Calcula sua chance de um tema aleatório a sua escolha.\n`,
        msgs: {
            reply: "🤔 *Chance*\n\n" +
                'Tem *{$1}%* de chance de *{$2}*',
        },
        function: miscFunctions.chanceCommand
    },
    frase: {
        guide: `Ex: *{$p}fch* - Exibe uma frase aleatória montada com as cartas do jogo Cartas contra a Humanidade.\n`,
        msgs: {
            reply: "🙊 *Frases do WhatsApp Jr:*\n\n" +
                '{$1}'
        },
        function: miscFunctions.fraseCommand
    },
    tarot: {
        guide: `Ex: *{$p}tarot* - Tire três cartas do tarot e receba suas interpretações.\n`,
        msgs: {
            // {$1} será substituído pela lista formatada das 3 cartas
            reply: `🔮 *Leitura de Tarot* 🔮\n\n{$1}\n\n*Que as boas vibrações guiem seu caminho! 💜*`
        },
        function: miscFunctions.tarotCommand
    },

simsimi: {
    guide: `Ex: *{$p}simsimi* - Converse com o Simsimi.\n`,
    msgs: {
        reply: "🐥: _{$1}_",
        error_empty: "[❗] Digite algo para a Simsimi responder!",
        error_limit: "[❗] Simsimi indisponível no momento, tente novamente mais tarde!"
    },
    function: miscFunctions.simsimiCommand
},
emojifilme: {
    guide: `Ex: *{$p}emojifilme* - Adivinhe o filme pelos emojis.\nEx: *{$p}resposta* nome do filme - Dê seu palpite para adivinhar o filme.`,
    msgs: {
        start: "🎬 *Adivinhe o filme!* 🎭\n\n{$1}\n\n_Use *#resposta* `nome` para tentar adivinhar!_",
    },
    function: miscFunctions.emojifilmeCommand
},

resposta: {
    guide: `Ex: *{$p}emojifilme* - Adivinhe o filme pelos emojis.\nEx: *{$p}resposta* nome do filme - Dê seu palpite para adivinhar o filme.`,
    msgs: {},
    function: miscFunctions.respostaCommand
},
forca: {
    guide: `Ex: *{$p}forca* - Inicia um jogo da forca.\n` +
           `Ex: *{$p}chute* letra - Chuta uma letra.\n`,
    msgs: {
        start: "☠️ *Forca Iniciada!*\n\nTema: *{$1}*\n*Palavra:* `{$2}`\n\nTentativas restantes: *{$3}*\nUse *#chute* `letra` para jogar!",
        correct: "*✅ Acertou!*\n\nTema: *{$1}*\n*Palavra:* `{$2}`\n\nTentativas restantes: *{$3}*",
        wrong: "❌ *Errou!*\n\nTema: *{$1}*\n*Palavra:* `{$2}`\n\nTentativas restantes: *{$3}*",
        win: "🎉 *Parabéns!*\n\nVocês acertaram a palavra: *{$2}*",
        lose: "😵 *Acabaram as tentativas!*\n\nA palavra era: *{$2}*",
        error_no_game: "Não há nenhum jogo da forca ativo neste grupo.",
        error_invalid: "Use apenas uma letra por vez. Exemplo: *#chute* a",
        error_used: "Essa letra já foi usada! Tente outra.",
        error_already: "Já existe um jogo da forca em andamento neste grupo."
    },
    function: miscFunctions.forcaCommand
},
chute: {
    guide: `Ex: *{$p}forca* - Inicia um jogo da forca.\n` +
           `Ex: *{$p}chute* letra - Chuta uma letra.\n`,
    msgs: {},
    function: miscFunctions.chuteCommand
}
};
export default miscCommands;

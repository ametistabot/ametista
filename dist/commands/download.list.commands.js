import * as downloadFunctions from './download.functions.commands.js';
const downloadCommands = {
    play: {
        guide: `Ex: *{$p}play* musica - Faz download de uma música do *Youtube* e envia como audio.\n`,
        msgs: {
            wait: "🎧 Sua música está sendo baixada e processada, espere um minutinho!\n\n" +
                "🎬 *Título*: {$1}\n" +
                "🕝 *Duração*: {$2}",
            error_limit: "[❗] O vídeo deve ter no máximo *6 minutos*!",
            error_live: "[❗] Esse vídeo não pode ser convertido em áudio, lives não são aceitas.",
            error_not_found: "[❗] Nenhum áudio foi encontrado!"
        },
        function: downloadFunctions.playCommand
    },
    yt: {
        guide: `Ex: *{$p}yt* titulo - Faz download de um video do *Youtube* com o titulo digitado e envia.\n`,
        msgs: {
            wait: "🎥 Seu video está sendo baixado e processado, espere um minutinho!\n\n" +
                "🎬 *Título*: {$1}\n" +
                "🕝 *Duração*: {$2}",
            error_limit: "[❗] O video deve ter no máximo *6 minutos*!",
            error_live: "[❗] Houve um erro de download, o bot não aceita download de lives.",
            error_not_found: "[❗] Nenhum vídeo foi encontrado!"
        },
        function: downloadFunctions.ytCommand
    },
    fb: {
        guide: `Ex: *{$p}fb* link - Faz download de um video do *Facebook* pelo link digitado e envia.\n`,
        msgs: {
            wait: "🎥 Sua mídia está sendo baixada e processada, espere um minutinho!\n\n" +
                "🎬 *Título*: {$1}\n" +
                "🕝 *Duração*: {$2}",
            error_limit: "[❗] O video deve ter no máximo *6 minutos*!"
        },
        function: downloadFunctions.fbCommand
    },
    ig: {
        guide: `Ex: *{$p}ig* link - Faz download de videos/fotos do *Instagram* pelo link digitado e envia.\n`,
        msgs: {
            wait: "🎥 Sua mídia está sendo baixada e processada, espere um minutinho!\n\n" +
                "👤 *Autor*: {$1} (@{$2})\n" +
                "🎬 *Descrição*: {$3}\n" +
                "❤️ *Likes*: {$4}",
        },
        function: downloadFunctions.igCommand
    },
    x: {
        guide: `Ex: *{$p}x* link - Faz download de um video/imagem do *X/Twitter* pelo link digitado e envia.\n`,
        msgs: {
            wait: "🎥 Sua mídia está sendo baixada e processada, espere um minutinho!\n\n" +
                "🎬 *Postagem*: {$1}",
            error_not_found: '[❗] Não foi encontrada nenhuma mídia, verifique o link!'
        },
        function: downloadFunctions.xCommand
    },
    tk: {
        guide: `Ex: *{$p}tk* link - Faz download de um video do *Tiktok* pelo link digitado e envia.\n`,
        msgs: {
            wait: "🎥 Sua mídia está sendo baixada e processada, espere um minutinho!\n\n" +
                "👤 *Perfil*: @{$1}\n" +
                "🎬 *Descrição*: {$2}",
            error_not_found: 'Não foi encontrada nenhuma mídia, verifique o link'
        },
        function: downloadFunctions.tkCommand
    },
    img: {
        guide: `Ex: *{$p}img* tema - Envia uma imagem com o tema que você digitar.\n`,
        msgs: {
            error: '[❗] Não foi possível obter nenhuma imagem, tente novamente com outra pesquisa!',
        },
        function: downloadFunctions.imgCommand
    }
};
export default downloadCommands;

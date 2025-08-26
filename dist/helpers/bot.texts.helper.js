const botTexts = {
    starting: "Ametista na área!" + "\n  Iniciando na versão {$1}\n",
    connecting: '⏱ Conectando... O bot está conectando e sincronizando as conversas se necessário (Isso pode levar algum tempo)',
    bot_data: "✓ Obteve dados do BOT",
    no_update_available: '✓ Não há atualização disponível, seu bot está na versão mais recente.',
    update_available: '! Uma nova atualização foi encontrada, aguarde o término da atualização...',
    error_check_update: 'Não foi possível checar se há alguma atualização disponível, o bot será iniciado.',
    bot_updated: 'Seu bot foi atualizado com sucesso e será desligado, inicie ele novamente.',
    not_connected: '! Parece que você não está com um dispositivo conectado.\n',
    input_connection_method: 'Qual dos métodos você prefere usar para se conectar?\n\n' +
        '1 - QR Code\n' +
        '2 - Código de Pareamento\n\n',
    input_phone_number: '\nDigite aqui o número em que o bot vai ficar, o número precisa ter o código internacional' +
        '(Ex: 5521912345678) -> ',
    show_pairing_code: 'Seu código de pareamento é {$1}',
    server_started: '✓ Servidor iniciado!',
    groups_loaded: '✓ Todos os grupos foram carregados e atualizados.',
    admin_registered: `✅ Seu número foi cadastrado como DONO, agora você pode utilizar os comandos de {$p}admin`,

    new_user: "💜✨ Seja bem-vindo(a) ao {$1}! ✨💜\n\n" +
              `💐 Olá {$2}, é um prazer ter você por aqui! 💜\n🔮 Para acessar o menu de comandos, digite *{$p}menu* e descubra tudo o que posso fazer. 🌟`,
    new_group: "🌌 Olá, *{$1}*, Sou a *Ametista* e a energia agora está no ar!\nSe precisar de orientação, basta digitar " + `*{$p}menu* ✨`,
    guide_header_text: '❔ USO DO COMANDO ❔\n\n',
    no_guide_found: '[❗] Não foi encontrado um guia para este comando.',
    error_command_usage: "[❗] Parece que você usou o comando *{$1}* incorretamente ou não sabe como utilizá-lo.\n\n" +
        "{$2}",
    error_command: "[❗] Não foi possível realizar o comando *{$1}*.\n\n" +
        "*Motivo* : {$2}\n",
    library_error: 'Houve um erro interno ao realizar esse comando, tente novamente mais tarde.',
    command_rate_limited_message: "[❗] Você está impossibilitado de mandar comandos por *{$1}* segundos, pega leve poxa! 🙄",
    group_blocked_command: "[❗] O comando *{$1}* está temporariamente bloqueado neste grupo pelo administrador.",
    globally_blocked_command: "[❗] O comando *{$1}* está indisponível no momento por ordem do meu dono, tente novamente mais tarde.",
    detected_link: "🥴 Ei @{$1}, o *anti-link* está ativado e um possível link foi detectado na sua mensagem, ela foi apagada por segurança.",
    group_welcome_message: "👋 Olá, @{$1} ✨\n\n" +
			"💜 Seja bem-vindx ao grupo: *{$2}*\n" +
			"{$3}\n" +
			`Digite *{$p}menu* para descobrir todos os comandos disponíveis 💫`,
    ban_message: "🥴 Parece que alguém vacilou! +{$1} será banido.\n\n" +
        "➡️ *Tipo*: BAN MANUAL\n" +
        "➡️ *Quem baniu*: {$2}",
    blacklist_ban_message: "🥴 Parece que alguém vacilou! +{$1} será banido.\n\n" +
        "➡️ *Tipo*: LISTA NEGRA\n" +
        "➡️ *Quem baniu*: {$2}",
    antifake_ban_message: "🥴 Parece que alguém vacilou! +{$1} será banido.\n\n" +
        "➡️ *Motivo*: ANTI-FAKE\n" +
        "➡️ *Quem baniu*: {$2}",
    antiflood_ban_messages: "🥴 Parece que alguém vacilou! +{$1} será banido.\n\n" +
        "➡️ *Motivo*: ANTI-FLOOD\n" +
        "➡️ *Quem baniu*: {$2}",
    sync_blacklist: '🎯 Foram banidos {$1} membros na sincronização da *lista negra*!',
    sync_antifake: '🎯 Foram banidos {$1} membros na sincronização do *anti-fake*!',
    owner_registered: '✓ Número do DONO configurado.',
    owner_not_found: 'O número do DONO ainda não foi configurado, digite !admin para cadastrar seu número como dono do bot.',
    migrating_database: '! O banco de dados está sendo migrado, por favor aguarde...',
    user_types: {
        owner: '😺 Dono',
        admin: '⭐ Admin',
        user: '👤 Usuário',
    },
    disconnected: {
        command: "A conexão com o WhatsApp foi encerrada pelo comando do Administrador.",
        fatal_error: "A conexão com o WhatsApp foi encerrada devido a uma falha grave no código.",
        logout: "A sua sessão com o WhatsApp foi deslogada, conecte-se novamente.",
        restart: "A sua conexão com o WhatsApp precisa ser reiniciada, tentando reconectar...",
        bad_connection: "A sua conexão com o WhatsApp foi encerrada, tentando reconectar... Motivo : {$1} - {$2}"
    },
    permission: {
        group: 'Este comando só pode ser usado em *grupos*.',
        bot_group_admin: 'Esse comando só pode ser realizado se o bot for *administrador do grupo*.',
        ban_admin: 'O bot não tem permissão para *banir um administrador*.',
        admin_group_only: 'Apenas *administradores do grupo* podem usar este comando.',
        admin_bot_only: 'Apenas *administradores do bot* podem usar este comando.',
        owner_bot_only: 'Apenas o *dono do bot* pode usar este comando.',
        owner_group_only: 'Apenas o *dono do grupo* pode usar este comando.',
    }
};
export default botTexts;

module.exports = {
    name: 'welcome',
    description: 'Este comando dá te as boas vindas',
    execute(message, args, Discord){
       const newEmbed = new Discord.MessageEmbed()
       .setColor('8638D2')
       .setTitle('Bem Vindo/a ao Servidor!')
       .setURL('https://youtube.com/c/itsaninhaz')
       .setDescription('Aqui em baixo tens algumas dicas para te orientar no servidor!')
       .addFields(
            {name: 'Que servidor é este?', value: 'Este é o Servidor Oficial do canal da Aninhaz'},
            {name: 'Como me posso verificar para ter acesso a todos os canais?', value: 'Vai ao canal <#749855876927586304> e reage ao emoji.'},
            {name: 'Caso necessite ajuda?', value: 'Tens o canal <#848235102140104734> onde podes pedir ajuda à staff.'}
       )
       .setImage('https://i.ibb.co/6tB9NDS/aninhaz-WELCOME.png')
       .setFooter('Espero que aproveitem o servidor ao máximo. Obrigada!');
    
       message.channel.send(newEmbed);
    }


}
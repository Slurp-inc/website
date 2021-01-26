
new Vue({
  el: '#top',
  data: {
    headertext: 'Slurp Incorporated',
    discordjointext: 'Join us on Discord',
    discordjoinlink: 'https://discord.gg/xgTF7rccAk'
  }
})

new Vue({
  el: '#main1',
  data: {
    message: 'Say hello to our members...',
    members: [
      {
        name: 'Slurp',
        picture: 'https://cdn.discordapp.com/avatars/760225250716680283/ce23e7a1dcc18812708bdfdcd66a365c.png?size=128',
        role: 'CEO'
      },
      {
        name: 'Indeed Slurp',
        picture: 'https://cdn.discordapp.com/avatars/689148779948933181/d846f31fd78a743cfe3cab9944f0c575.png?size=128',
        role: 'CPO'
      },
      {
        name: 'Astley',
        picture: 'https://cdn.discordapp.com/avatars/690283141096669225/c95711434979b82f0b5c579204ff36bd.png?size=128',
        role: 'Computerizer'
      },
      {
        name: 'Pie',
        picture: 'https://cdn.discordapp.com/avatars/680457838711144606/2f2c5743441a00d6c767f96a53fdb542.png?size=128',
        role: 'PR'
      },
      {
        name: 'Cher',
        picture: 'https://cdn.discordapp.com/avatars/696785956140744796/ae5eb1e0ccdf312928a3acb985e11334.png?size=128',
        role: 'CMO'
      }
    ]
  }
})

new Vue({
  el: '#main2',
  data: {
    mainmessage: 'Hello Slurps!',
    secondarymessage: 'We welcome all aspiring slurps to this company! Let us build the slurp community!'
  }
})

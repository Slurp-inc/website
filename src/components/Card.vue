<template>
    <div class="wrapper">
      <div class="card" v-bind:key="member.name" v-for="member in members">
        <img v-bind:src="member.picture" />
        <h2 class="card-title">{{ member.name }}</h2>
        <p id="role">{{ member.role }}</p>
      </div>
    </div>
</template>

<script>
/*
const { Client } = require('discord.js');
//const { config } = require('dotenv'); 
//let directod;


const client = new Client({
    
});
/*
config({
    path: __dirname = "../assets/.env"
});
*
client.on("ready", () => {
    console.log("Online");
});

client.on("message", msg => {
    if (msg == "&update") {
        msg.Reply("Nice");
        let roleID = "802939262286168074";
        let membersWithRole = msg.guild.roles.cache.get(roleID).members;
        console.log(membersWithRole);
    }
})

client.login(process.env, TOEKN);
/*
function createDirector(membersWithRole) {
    for (i in membersWithRole) {
        let member = {
        name: 's'
        }
    }
    
}
*/
export default {
    data() {
        return {
            
            /*members: [
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
            ]*/

        }
    }
}
</script>

<style scoped>
    .card {
        margin: 15px;
        width: 350px;
        padding: 25px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        border: solid 2px black;
    }

    .card:hover {
        box-shadow: 1px 1px 10px 5px #818181;
        transition-duration: 0.25s;
    }

    .card-title {
        font-size: 15px;
    }

    .card img {
        width: 150px;
        border-radius: 50%;
        margin-bottom: 15px;
    }
</style>
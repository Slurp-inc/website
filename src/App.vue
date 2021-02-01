<template>
  <head>
    <meta name="viewport" content="width=device-width">
  </head>
  <div id="top">
    <div id="nav">
      <div id="nav-fixed">
        <img
          id="icon"
          src="https://media.discordapp.net/attachments/802841041476517929/803581447478312981/rooHyperSip.png"
        />
      </div>
      <div id="navlinks">
        <button id="discord" href="https://discord.gg/xgTF7rccAk">
          {{ discordjointext }}
        </button>
      </div>
      <div id="router">
        <Navbar />
      </div>
    </div>
    <div v-if="currentRouteName == 'Home'">
      <header>{{ homeheader }}</header>
    </div>
    <div v-else-if="currentRouteName == 'About'">
      <header>{{ aboutheader }}</header>
    </div>
  </div>
  <router-view />
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  components: {
    Navbar
  },
  data() {
    return {
      homeheader: 'Slurp Incorporated',
      aboutheader: 'About Slurp Incorporated',
      discordjointext: 'Join us on Discord',
      discordjoinlink: 'https://discord.gg/xgTF7rccAk'  
    }
  },
  computed: {
    currentRouteName() {
        return this.$route.name;
    }
  }
}
</script>

<style>
  * {
    font-family: Verdana;
    margin: 0;
  }

  #top {
    width: 100%;
    background: url('https://i.pinimg.com/originals/26/01/03/2601039697d8c8c730ec09e78a8395e0.png'), linear-gradient(to bottom, #e18aaa, #ffd1dc);
    height: 500px;
    background-attachment: fixed;
    background-position: center;
  }

  #top header {
    color: white;
    font-family: 'Ubuntu';
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    height: 90%;
    margin-top: 40px;
    font-size: 72px;
    text-shadow: 5px 5px 8px black;
    overflow: hidden;
  }

  #nav {
    align-items: center;
    padding: 20px;
    background-color: transparent;
  }

  #nav-fixed {
    display: flex;
    align-items: center;
  }

  .router-link {
    color: aqua;
  }

  #router {
    position: fixed;
    top: 100px;
    color: aqua;
  }

  #icon {
    position: fixed;
    top: 15px;
    left: 15px;
    width: 65px;
    height: auto;
    border-radius: 50%;
    box-shadow: 2px 3px 25px black;
  }

  #icon:hover {
    animation: rotate_icon;
    animation-duration: 5s;
    animation-iteration-count: infinite;
  }

  #discord {
    position: fixed;
    top: 15px;
    right: 15px;
    width: 200px;
    padding: 15px;
    border-radius: 5px;
    border: solid 3px white;
    color: black;
    background-color: white;
    font-size: 16px;
    box-shadow: 2px 3px 51px #000000;
  }

  #discord:hover {
    box-shadow: 2px 3px 25px #000000;
    transition-duration: 0.25s;
  }

  @keyframes rotate_icon {
    from{}
    25% {
      transform: rotateZ(45deg)
    }
    75% {
      transform: rotateZ(-45deg)
    }
    100% {
      transform: rotateZ(0)
    }
  }

  @media screen and (max-width: 650px) {
    header {
      font-size: 48px;
    }
  }
</style>

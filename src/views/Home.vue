<template>
  <div class="home">
    <!--<div id="title">
      <header>{{ headertext }}</header>
    </div>-->
    <div id="main1">
      <p>{{ message }}</p>
      <div class="wrapper">
        <Card />
      </div>
    </div>
    <div id="main2">
    <div><p id="title">{{ mainmessage }}</p>
      {{ secondarymessage }}
    </div>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

import Card from "@/components/Card.vue";

export default {
  name: "Home",
  
  components: {
    Card,
  },
  data() {
    return {
      message: 'Say hello to our members...',
      headertext: 'Slurp Incorporated',
      mainmessage: 'Hello Slurps!',
      secondarymessage: 'We welcome all aspiring slurps to this company! Let us build the slurp community!'
    }
  }
};
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');

  #main1 {
    padding: 25px;
    box-shadow: 2px 2px 25px black;
    height: 100%;
  }

  #title header {
    color: white;
    font-family: 'Ubuntu';
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    height: 90%;
    font-size: 72px;
    text-shadow: 5px 5px 8px black;
    overflow: hidden;
  }

  .wrapper {
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
  }

  #main2 {
    display: flex;
    align-items: center;
    height: 500px;
    padding: 50px;
    background: url('https://i.pinimg.com/originals/26/01/03/2601039697d8c8c730ec09e78a8395e0.png'), linear-gradient(to bottom, #ffaee0, #e18aaa);
    background-attachment: fixed;
    background-position: center;
    color: white;
    text-shadow: 2px 2px 15px black;
  }

  #title {
    text-transform: uppercase;
    font-family: 'Ubuntu';
    font-size: 72px;
  }

  
</style>

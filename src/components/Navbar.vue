<template>
  <div id="nav">
    <button id="open"></button>
    <div id="menu">
        <router-link class="w" id="home" to="/">Home</router-link> <br>
        <router-link class="router-link" id="about" to="/about">About</router-link>
    </div>
   <!-- <router-link class="w" id="home" to="/">Home</router-link>
    <!<router-link class="router-link" id="about" to="/about">About</router-link>-->
    
    <!--<div><img id="menu-icon" src="https://img.icons8.com/cotton/64/ffffff/menu.png"/></div>-->
  </div>
</template>

<script>
export default {

}
</script>

<style>
    * {
        text-decoration: none;
    }
    /*#nav {
        left: -200px;
        width: 200px;
        background: #666;
    }*/

    #menu {
        position: absolute; /* Position them relative to the browser window */
        margin-top: 50px;
        left: -140px; /* Position them outside of the screen */
        transition: 0.3s; /* Add transition on hover */
        padding: 15px; /* 15px padding */
        height: 300px;
        width: 80px; /* Set a specific width */
        border: none;
        text-decoration: none; /* Remove underline */
        font-size: 20px; /* Increase font size */
        background: rgb(228, 187, 187);
        color: rgb(218, 31, 31); /* White text color */
        border-radius: 0 0 5px 0; /* Rounded corners on the top right and bottom right side */
    }

    #open {
        position: absolute; /* Position them relative to the browser window */
        left: -120px; /* Position them outside of the screen */
        transition: 0.3s; /* Add transition on hover */
        padding: 15px; /* 15px padding */
        height: 50px;
        width: 140px; /* Set a specific width */
        border: none;
        text-decoration: none; /* Remove underline */
        font-size: 20px; /* Increase font size */
        background: rgb(228, 187, 187);
        color: rgb(218, 31, 31); /* White text color */
        border-radius: 0 5px 5px 0; /* Rounded corners on the top right and bottom right side */
    }

    /*#nav ul li {
        display: inline;
        text-align: center;
        padding: 12px;
        color: white;
        text-decoration: none;
        font-size: 17px;
    }

    #menu-icon {
        position: fixed;
        display: inline;
        top: 100px;
        left: 240px;
        transition: 0.5s;
    }*/

    #open:hover {
        /*cursor: pointer;*/
        left: -20px;
    }

    #open:hover ~ #menu {
        left: -20px;
    }

    #menu:hover ~ #open {
        left: -20px;
    }

    #menu:hover {
        left: -20px;
    }

    
</style>
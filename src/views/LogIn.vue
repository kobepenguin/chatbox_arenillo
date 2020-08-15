<template>


  <div id="login">
    <router-view></router-view>
    <div class="container-fluid home-container d-flex flex-column" style="height:100vh">
      <div class="row home-row" style="height:100%">
        <div class="col-lg-3 home-col3">
        </div>
        <div class="col-lg-6 home-col6 ">
          <div class = "loginBox">
            <img class = "logo" src="@/assets/logo.png">
            <br>
            <span class = "join" >Join the conversation now.</span>
            <br>
            <span class = "chat" >Chat</span>
            <span class = "time" >Time.</span>
            <br>

            <button class="googlebutton" v-if="!authenticated" @click="googleSignin" ><img src="@/assets/google.png"  style="width:20px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login with Google</button>
            
          </div>
        </div>
        <div class="col-lg-3 home-col4">
        </div>
      </div>
    </div>
  </div>
  
</template>
<script>
import firebase from '@/config/firebase.js'
import router from '@/router'


  export default {
    name: 'LogIn',
   
    created() {
        firebase.auth().onAuthStateChanged(function(user) {
                if (user) {    
                     router.push('/chatbox').catch(()=>{});     
                } 
              });
    
    },
    computed: {
        authenticated(){
          return this.$store.getters.getLogin
        }
    },
    methods: {
      googleSignin() {
        this.$store.dispatch('googleSignin')
        
      }
    }
    
}


</script>
<style>

.join{
  font-family:  system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif;
    font-weight: 700;
  
    font-size: 40px;
    color:rgba(0, 0, 0, 0.856);
    float: left;
}
.chat{
  margin-top: -15px;
  font-family:  system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif;
    font-weight: 100;
    font-stretch: 50%;
    font-size: 40px;
    color: #0ec755;
    float: left;
}
.time{
  margin-top: -15px;
  font-family:  system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif;
    font-weight: 100;
    font-stretch: 50%;
    font-size: 40px;
    color: #3191ff;
    float: left;
}

.googlebutton{
  display: inline-block;
  border-radius: 50px;
  width: 200px;
  height: 40px;
  color: azure;
  background-color: #0ec755;
  border: none;
  font-size: 16px;
  font-weight: 100px;
  padding-top: 0px;
  margin-left: -800px;
  margin-top: 270px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.googlebutton:hover{
  -webkit-transition: 0.5s;
  transition: 0.5s;
  display: inline-block;
  border-radius: 50px;
  border: 1px solid #3191ff;
  width: 200px;
  height: 40px;
  color: azure;
  background-color: #3191ff;
  border: none;
  font-size: 16px;
  font-weight: 100px;
  padding-top: 0px;
  margin-left: -800px;
  margin-top: 270px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.googlebutton:active{
  outline: none;
}

.googlebutton:focus{
  outline: none;
}

.logo{
  float: left;
  width: 50px;
  height: 50px;
  margin-top: 150px;

  
}
.home-col3{
  background-color: #0ec755;
}


.loginBox{

    display: inline-block;

    
   
}
#login {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

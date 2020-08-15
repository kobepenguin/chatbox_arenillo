<template>
  <div class = "chatbox" >
      <div class="container-fluid home-container d-flex flex-column" style="max-height:100vh" >
      <div class="row home-row"  style="height:100vh">

        <div class="col-lg-3 home-col3r1">
        </div>

        <div class="col-lg-6 home-col6r1 p-0 m-0" >
          <div class="top_portion">
            <a class="home_mid" style="color: #1d2125;">&nbsp;&nbsp;&nbsp;&nbsp;Chat</a>
            <button class = "logout" type= "button" @click="logOut" style="color: red">Logout</button>
          </div>  

          <div class="content" v-for="mymessage in messageList" :key="mymessage">
             <Message v-bind:newmessage ="mymessage.value.message" v-bind:name ="mymessage.value.displayName" v-bind:photo ="mymessage.value.photoURL"></Message>
          </div>   

          <footer class="footer">
            <form @submit.prevent="onSubmit">
                    <textarea row = "0" column="10" class="chattextbox" placeholder="Type a message" v-model = "message"></textarea>
                    <input class="sendbtn" type = "submit" value="Send"/>
            </form>
          </footer>

        </div>

        <div class="col-lg-3 home-col4r1">
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import Message from '@/components/Message.vue'

export default {
  
  name: 'Chatbox',
    components:{
    Message
  },
  data(){
    return {
      message: "",
      messageList: this.$store.getters.getMessage
    }
  },
  methods: {
    onSubmit(){
      this.$store.dispatch('messageSave', {msg: this.message})
      console.log("hehe")  
    },
    logOut(){
      this.$store.dispatch('clearDB')
      this.$router.replace("/")
      this.$router.go()
    }
    
  },
  mounted() {
    
    this.number = this.$store.dispatch('messageListener')
  }

}
</script>

<style scope>

  .home-container{
    margin: 0px;
    padding: 0;
    max-width: 100%;
  }
  /* .content{

  } */

  .home-col6r1{
    padding: 0px;
    margin: 0px;
    border-left: .5px solid #e6ecf0;
    border-right: .5px solid #e6ecf0;
  }

/* tweet area */
.footer{
  position: fixed;
  bottom: 0;
  width: 50%;
  /* Set the fixed height of the footer here */
  height: 100px;
  /* Vertically center the text there */
  border-top: .5px solid #e6ecf0 ;
  border-left: .5px solid #e6ecf0;
  border-right: .5px solid #e6ecf0;
  background-color: white;
}
  .top_portion{
    position: -webkit-sticky;
    position: sticky;  
    top: 0 ;
    background-color: #FFFFFF;
    padding-top: 10px;
    margin: 0px;
    height: 70px;
    border-bottom: .5px solid #e6ecf0;
  }

  .home_mid{
    font-family:  system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif;
    font-weight: 700;
    font-stretch: 50%;
    font-size: 40px;
    float: left;
    margin-left: 17px;
  }


 .chattextbox{
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif;
    color: #1d2125;
    position: absolute;
    font-size: 19px;
    margin-left: 20px;
    resize: none;
    outline: none;
    width: 85%;
    height: 100px;
    left: 0;
    border: none;
    vertical-align: middle;
    box-shadow: none;
  
  }
  .logout{
    background-color: white;
    border: none;
    transform: translateX(500px);
    margin-top: 13px;
    float: left;
  }
  
  .sendbtn{
    float: right;
    border-radius: 50px;
    border: none;
    background-color: #0ec755;
    color: #FFFFFF;
    text-align: center;
    font-family:  system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif;
    font-weight: 400;
    font-stretch: 100%;
    font-size: 15px;
    margin-top: 30px;
    margin-right: 10px;
    padding-top: 0;
    vertical-align: center;
    padding-top: 0px;
    width: 60px;
    height: 30px;
    transition: 0.5s;
  }

  .sendbtn:hover{
    transition: 0.5s;
    background-color: #3191ff;
  }

    .sendbtn:focus{
    outline: none;
  }




#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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

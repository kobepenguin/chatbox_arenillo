<template>
  <div class = "message">

    <img class="profilepic" v-bind:src="photo">
    <p class="name">{{name}}</p>
    <div class="area">
      <p class="bubble">{{newmessage}}</p>
    <!-- <img class="remove" src="@/assets/remove.png"> -->


    </div>
    
    
  
  </div>
</template>

<script>
export default {
    name: 'Message',
    props: {
      newmessage:String,
      name:String,
      photo:String
    },
    data(){
      return {
        messageList: this.$store.getters.getMessage
      }
    },
    methods:{
      
    }
}
</script>

<style>

.profilepic{
  float: right;
  width: 40px;
  height: 40px;
  border-radius: 100px;
  margin-top: 10px;
  margin-left: 10px;
}
.name{
    color: rgb(32, 32, 32);
    font-family:  system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif;
    font-weight: 400;
    font-stretch: 100%;
    font-size: 11px;
    text-align: end;
    margin: 0px;
    padding-right: 5px;
}
.remove{
    color: rgb(255, 29, 29);
    font-family:  system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif;
    font-weight: 400;
    font-stretch: 100%;
    font-size: 11px;
    display: inline-block;
    vertical-align: bottom;
  margin-right: 100;
    bottom: 0;
    padding-right: 5px;
}
.message{
  margin-right:20px;
  overflow: auto;
  font-size: 30px;
}
 .bubble{
    border-radius: 20px;
    border: none;
    background-color: #0ec755;
    color: #FFFFFF;
    text-align: start;
    font-family:  system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif;
    font-weight: 400;
    font-stretch: 100%;
    font-size: 15px;
    float: right;
    padding-left: 10px;
    padding-right: 10px;
    margin-top:0px;
    margin-bottom:15px;
    min-width: 10px;
    max-width: 300px;
    min-height: 30px;
    max-height: 400px;
    word-wrap: break-word;
    overflow: hidden;
  }
</style>
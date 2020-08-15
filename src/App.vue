<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
name: 'App',
created: function () {  
  this.$router.push("/login")
}
}
</script>

<style>

</style>

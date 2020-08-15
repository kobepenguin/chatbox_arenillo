import Vue from 'vue'
import VueRouter from 'vue-router'
import ChatBox from '@/views/ChatBox.vue'
import LogIn from '@/views/LogIn.vue'
import firebase from '@/config/firebase.js'
Vue.use(VueRouter)

  const routes = [

    {
      path: '/login',
      name: 'LogIn',
      component: LogIn,

    },
    {
      path: '/chatbox',
      name: 'ChatBox',
      component: ChatBox,
      meta: { requiresAuth: true }
    }

]

const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record  => record.meta.requiresAuth)
  const currentUser = firebase.auth().currentUser
  console.log("lolaa")
  console.log(currentUser)
  console.log("STATUS")

  if (requiresAuth && !currentUser) {
      next('/login')
  } else {
      next()
  }
})

export default router

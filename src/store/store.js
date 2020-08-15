import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import firebase from '@/config/firebase.js'

export const store = new Vuex.Store({
    state:{
        login: false,
        user: null,
        messages: [],
        newMessage: null,
        deleteMessage: null
    },
    
    actions: {
        
        googleSignin({commit}){
            
            const provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(provider)
            .then(function(result) {
                console.log(result);
                const user = result.user;
                const {displayName, email, uid, photoURL} = user;
                const userInfo = {displayName, email, uid, photoURL}
                
                commit('addUser', {val: userInfo})
                commit('loginStatus', {val:true})

            })
            .catch(function(error){
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = error.credential;
                console.log(errorCode, errorMessage, email, credential);
                })
                console.log(provider)
            
        },
        
        messageSave({ state}, payload){
            const newMessage = state.user
            newMessage["message"] = payload.msg
            firebase.database().ref('/').child('messages').child('entries').push(newMessage)


        },
        messageListener({commit}){
            firebase.database().ref('/').child('messages').child('entries').on('child_added', 
                (snap) => {
                    const messageObj = {key: snap.key, value: snap.val()}
                    console.log(messageObj)
                    commit('newMessage', {val: messageObj})
                })
        },
        clearDB({commit}){
            firebase.database().ref('/').child('messages').remove()
            firebase.database().goOffline()
            commit('loginStatus', {val:false})
            firebase.auth().currentUser.delete().then(function() {
                console.log("User deleted")
            }).catch(function(error) {
            console.log(error)
            });
            
        }
        
    },
    mutations:{
        loginStatus(state, payload){
            state.login = payload.val
        },
      
        newMessage(state, payload){
            state.messages.push(payload.val)
            

        },
        removeMessage(state, payload){
            state.messages.forEach((element, index) => {
                if(element.key === payload.val){
                    state.messages.splice(index,1)
                }
            });
            
        },
        addUser(state, payload){
            
            state.user = payload.val
            console.log("wew3")
        }
        
    },
    getters:{
        getLogin(state){
            return state.login
        },
        getUser(state){
            return state.user
        },
        getMessage(state){
            return state.messages
        },
        getNumberofMessage(state){
            return state.numberofMessage
        }
    }
        })




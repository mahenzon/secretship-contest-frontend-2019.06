<template lang="pug">
  div#app.container
    Header(v-bind:userInfo="userInfo")
    router-view(v-bind:userInfo="userInfo" v-bind:allUsers="allUsers" v-bind:errorMessage="errorMessage" v-on:login-user="loginUser")
    Footer
</template>


<script>
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import axios from 'axios'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

import user from './user'
import router from './router';

const { createUser } = user
axios.defaults.withCredentials = true

export default {
  name: 'app',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      errorMessage: 'Unexpected error!',
      userInfo: {},
      allUsers: [createUser({ first_name: 'John', user_id: 12345 })],
    }
  },
  methods: {
    loginUser(params) {
      if (Object.keys(params).length === 0) {  // Check if empty object
        return router.push('/')
      }
      axios.post('http://localhost:3001/api/login', params)
        .then((response) => {
          this.userInfo = createUser(response.data.user)
          router.push('/profile')
        })
        .catch((error) => {
          this.errorMessage = error.response.data.error
          if(this.userInfo.user_id) {
            this.userInfo.logout()
          }
          router.push('/error')
        })
    },
  },
  created() {
    axios.get('http://localhost:3001/api/getMe')
      .then((response) => {
        this.userInfo = createUser(response.data.user)
      })
      .catch((error) => {
        if (error.response.status != 401) { 
          // Expecting Unauthorized only
          console.log(error.response)
        }
      })
  }
}
</script>

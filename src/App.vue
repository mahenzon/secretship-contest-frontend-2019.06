<template lang="pug">
  div#app.container
    Header(v-bind:userInfo="userInfo")
    router-view(v-bind:userInfo="userInfo" v-bind:errorMessage="errorMessage")
    Footer
</template>


<script>
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import axios from 'axios'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

import createUser from './helpers/user'
import router from './router';


export default {
  name: 'app',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      errorMessage: {
        text: 'unexpectedError',
        setText(text) {
          this.text = text
        }
      },
      userInfo: {},
    }
  },
  created() {
    const url = '/api/getMe'
    // const url = 'http://localhost:3001/api/getMe'
    axios.get(url, { withCredentials: true })
      .then((response) => {
        this.userInfo = createUser(response.data.user)
        this.$i18n.locale = userInfo.language_code
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

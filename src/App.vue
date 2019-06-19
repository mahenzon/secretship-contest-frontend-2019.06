<template lang="pug">
  div#app.container
    Header(v-bind:userInfo="userInfo")
    router-view(v-bind:userInfo="userInfo" v-bind:errorMessage="errorMessage")
    Footer
</template>


<script>
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

import createUser from './helpers/user'
import router from './router'


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
        args: [],
        setText(text) {
          this.text = text
        },
        setArgs(args) {
          while (this.args.length > 0) {
            // Emptying array safe, not replacing the object
            this.args.pop()
          }
          // Appending new data
          if (Array.isArray(args)) {
            // Unpack array to fullfill args array
            this.args.push(...args) 
          } else {
            // Push only one element
            this.args.push(args)
          }
        },
      },
      userInfo: {},
    }
  },
  created() {
    this.$axios.get('/api/getMe', { withCredentials: true })
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

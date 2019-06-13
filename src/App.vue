<template lang="pug">
  div#app.container
    Header(v-bind:userInfo="userInfo")
    router-view(v-bind:userInfo="userInfo" v-bind:allUsers="allUsers")
    Footer
</template>


<script>
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import axios from 'axios'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

const dateStringOptions = { year: 'numeric', month: 'long', day: 'numeric' }
function createUser ({user_id, username, first_name, last_name, profilePic, joinDate, language_code}) {

  return {
    user_id,
    username,
    first_name,
    last_name,
    language_code,
    joinDate,
    
    profilePic: profilePic || 'https://telegra.ph/file/1d86ed45c9ed18926660a.jpg',
    
    joinDateString() {
      try {
        return (new Date(this.joinDate)).toLocaleDateString(this.language_code, dateStringOptions)
      } catch (error) {
        return (new Date(this.joinDate)).toLocaleDateString('en-US', dateStringOptions)
      }
    },
    telegramLink() {
      return `https://t.me/${this.username}`
    },
    logout() {
      for (const prop of Object.keys(this)) {
        this[prop] = null
      }
    },
  }
}


export default {
  name: 'app',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      userInfo: createUser({
        user_id: 3595399,
        username: 'surik00',
        first_name: 'Suren',
        last_name: 'Khorenyan',
        joinDate: 1560291120000,
        language_code: 'ru',
        // profilePic: 'http://localhost:8081/img/logo.82b9c7a5.png',
        // profilePic: 'http://localhost:8081/img/logo.82b9c7a5.png',
      }),
      allUsers: [createUser({ first_name: 'John', user_id: 12345 })],
    }
  },
  created() {
    axios.get('https://httpbin.org/get')
      .then((response) => {
        // handle success
        console.log(response);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
  }
}
</script>

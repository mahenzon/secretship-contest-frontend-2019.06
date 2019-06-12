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

function createUser ({userId, username, firstName, lastName, profilePic, joinDate, locale}) {
  const dateStringOptions = { year: 'numeric', month: 'long', day: 'numeric' }
  let dateString
  try {
    dateString = (new Date(joinDate)).toLocaleDateString(locale, dateStringOptions)
  } catch (error) {
    dateString = (new Date(joinDate)).toLocaleDateString('en-US', dateStringOptions)
  }
  return {
    userId,
    username,
    firstName,
    lastName,
    locale,
    
    joinDate: dateString,
    profilePic: profilePic || 'https://telegra.ph/file/1d86ed45c9ed18926660a.jpg',
    telegramLink: `https://t.me/${username}`,

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
        userId: 3595399,
        username: 'surik00',
        firstName: 'Suren',
        lastName: 'Khorenyan',
        joinDate: 1560291120000,
        // locale: 'ru',
        // profilePic: 'http://localhost:8081/img/logo.82b9c7a5.png',
        // profilePic: 'http://localhost:8081/img/logo.82b9c7a5.png',
      }),
      allUsers: [createUser({ firstName: 'John', userId: 12345 })],
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

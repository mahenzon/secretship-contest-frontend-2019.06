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

import user from './user'
const { createUser } = user


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
        language_code: 'en',
        join_date: 1560291120000,
        profile_photo_id: 'AgADAgADKNkxG4fcNgAB7D6lxNdM8FRJDUsNAARBpmW0rIZhjuLBAAIC',
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

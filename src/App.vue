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
    // this.userInfo = createUser({
    //     "user_id": 3595399, "username":"surik00","first_name":"Suren","last_name":"Khorenyan","language_code":"en","profile_photo_id":"AgADAgADDeQxG4fcNgABmZPFDukwO1km_bcOAATlowK6ND80p_KQAgABAg","join_date":1560628074204
    //   })
  }
}
</script>

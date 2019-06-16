<template lang="pug">
  div#app.container
    Header(v-bind:userInfo="userInfo")
    router-view(v-bind:userInfo="userInfo" v-bind:allUsers="allUsers" v-bind:errorMessage="errorMessage")
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
      allUsers: [],
    }
  },
  created() {
    // TODO: Fetch all users
    this.allUsers = [
        {
            "user_id": 3595399,
            "username": "surik00",
            "first_name": "Suren",
            "last_name": "Khorenyan",
            "language_code": "en",
            "profile_photo_id": "AgADAgADDeQxG4fcNgABmZPFDukwO1km_bcOAATlowK6ND80p_KQAgABAg",
            "join_date": 1560628074204
        },
        {
            "user_id": 622348102,
            "username": null,
            "first_name": "Thomas",
            "last_name": "Anderson",
            "language_code": "en",
            "profile_photo_id": "AgADAgADqacxG0ZHGCWzptZhqjQVeodHUw8ABDrIsp-zohRHlHYCAAEC",
            "join_date": 1560682973279
        }
    ]

    const newArray = []
    for (let i = 0; i < 4; i++) {
      newArray.push(...([...this.allUsers]))
    }
    let i = 0
    this.allUsers = []
    newArray.forEach((elem, index) => {
      i += 1
      const newElem = { ...elem, user_id: i }
      this.allUsers.push(newElem)
    })
    // this.allUsers = []
    // newArray.forEach((elem) => {
    //   elem.user_id = this.allUsers.length
    //   this.allUsers[this.allUsers.length] = elem
    // })

    this.userInfo = createUser({
        "user_id": 3595399, "username":"surik00","first_name":"Suren","last_name":"Khorenyan","language_code":"en","profile_photo_id":"AgADAgADDeQxG4fcNgABmZPFDukwO1km_bcOAATlowK6ND80p_KQAgABAg","join_date":1560628074204
      })
    // axios.get('/api/getMe')
    // // axios.get('http://localhost:3001/api/getMe')
    //   .then((response) => {
    //     this.userInfo = createUser(response.data.user)
    //   })
    //   .catch((error) => {
    //     if (error.response.status != 401) { 
    //       // Expecting Unauthorized only
    //       console.log(error.response)
    //     }
    //   })
  }
}
</script>

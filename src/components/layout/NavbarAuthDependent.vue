<template lang="pug">
  ul(v-if="userInfo.user_id").navbar-nav.ml-auto
    li.nav-item
      router-link(to="/profile").nav-link Profile info
    button(@click="logout()").btn.btn-outline-dark.my-2.my-sm-0 Logout
  ul(v-else).navbar-nav.ml-auto
    a(href="#/login").btn.btn-outline-primary.my-2.my-sm-0 Login
</template>

<script>
import axios from 'axios'
import router from '../../router'

export default {
  name: 'NavbarAuthDependent',
  props: ['userInfo'],
  methods: {
    logout() {
      this.userInfo.logout()
      axios.post('/api/logout', { withCredentials: true })
      // axios.post('http://localhost:3001/api/logout', { withCredentials: true })
        .then((response) => {
          router.push('/')
        })
        .catch((error) => {
          this.errorMessage.setText(error.response.data.error)
          router.push('/error')
        })
    },
  },
}
</script>
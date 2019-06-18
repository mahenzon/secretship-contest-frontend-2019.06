<template lang="pug">
  ul(v-if="userInfo.user_id").navbar-nav.ml-auto
    NavbarLocaleButtons
    li.nav-item
      router-link(to="/profile").nav-link {{ $t('profileLabel') }}
    button(@click="logout()").btn.btn-outline-dark.my-2.my-sm-0 {{ $t('logoutButton') }}
  ul(v-else).navbar-nav.ml-auto
    NavbarLocaleButtons
    li.nav-item
      a(href="#/login").btn.btn-outline-primary.my-2.my-sm-0 {{ $t('loginButton') }}
</template>

<script>
import axios from 'axios'
import router from '../../router'
import NavbarLocaleButtons from './NavbarLocaleButtons'

export default {
  name: 'NavbarRight',
  props: ['userInfo'],
  components: {
    NavbarLocaleButtons,
  },
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
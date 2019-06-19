<template lang="pug">
  ul(v-if="userInfo.user_id").navbar-nav.ml-auto
    NavbarLocaleButtons
    li.nav-item
      router-link(to="/profile" v-t="'profileLabel'").nav-link
    button(@click="logout()" v-t="'logoutButton'").btn.btn-outline-dark.my-2.my-sm-0
  ul(v-else).navbar-nav.ml-auto
    NavbarLocaleButtons
    li.nav-item
      a(href="#/login" v-t="'loginButton'").btn.btn-outline-primary.my-2.my-sm-0
</template>

<script>
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
      this.$axios.post('/api/logout', { withCredentials: true })
        .then((response) => {
          router.push('/')
        })
        .catch((error) => {
          this.errorMessage.setText(error.response.data.error)
          if (error.response.data.args) {
            this.errorMessage.setArgs(error.response.data.args)
          }
          router.push('/error')
        })
    },
  },
}
</script>
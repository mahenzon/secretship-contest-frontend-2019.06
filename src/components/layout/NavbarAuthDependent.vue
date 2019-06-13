<template lang="pug">
  ul(v-if="userInfo.userId").navbar-nav.ml-auto
    li.nav-item
      router-link(to="/profile").nav-link Profile info
    button(@click="logout()").btn.btn-outline-dark.my-2.my-sm-0 Logout
  ul(v-else).navbar-nav.ml-auto
    a(href="https://t.me/myawbot?start=login" target="blank").btn.btn-outline-primary.my-2.my-sm-0 Login
</template>

<script>
import router from '../../router'

export default {
  name: 'NavbarAuthDependent',
  props: ['userInfo'],
  methods: {
    logout() {
      this.userInfo.logout()
      router.push('/')
    },
  },
}
</script>
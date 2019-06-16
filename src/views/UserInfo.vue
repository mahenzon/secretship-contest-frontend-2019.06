<template lang="pug">
  div(v-if="errorText").alert.alert-danger.text-center {{ errorText }}
  Profile(v-else v-bind:userInfo="userInfo")
</template>

<script>
import Profile from './Profile'

export default {
  name: 'UserInfo',
  components: {
    Profile,
  },
  data () {
    console.log('data!!')
    return {
      userInfo: {},
      errorText: null,
      noDataText: 'An error occured',
    }
  },
  mounted () {
    this.prepareUserInfo()
  },
  beforeRouteUpdate (to, from, next) {
    this.prepareUserInfo()
    next()
  },
  methods: {
    prepareUserInfo () {
      console.log('prepareUserInfo')
      // TODO: request to api to get user info!!
      this.userInfo = {}
      this.errorText = `Wrong user ID ${this.$route.params.id}`
    }
  }
}
</script>
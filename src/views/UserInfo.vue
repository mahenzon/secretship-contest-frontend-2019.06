<template lang="pug">
  Profile(v-if="userInfo" v-bind:userInfo="userInfo")
  div(v-else).alert.alert-danger.text-center Wrong user ID
</template>

<script>
import Profile from './Profile'
import router from '../router'


export default {
  name: 'UserInfo',
  // props: ['allUsers'],
  components: {
    Profile,
  },
  data () {
    console.log('data!!')
    return {
      userInfo: {},
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
    }
  }
}
</script>
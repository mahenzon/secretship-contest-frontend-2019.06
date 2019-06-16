<template lang="pug">
  div(v-if="errorText").alert.alert-danger.text-center {{ errorText }}
  Profile(v-else :userInfo="userInfo" :noDataText="noDataText")
</template>

<script>
import axios from 'axios';
import Profile from './Profile'
import createUser from '../helpers/user'

export default {
  name: 'UserInfo',
  components: {
    Profile,
  },
  data () {
    return {
      userInfo: {},
      errorText: null,
      noDataText: 'Loading user...',
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
    async prepareUserInfo() {
      const userId = Number(this.$route.params.id)
      if (Number.isNaN(userId)) {
        this.errorText = `Wrong user ID '${this.$route.params.id}'`
        return
      }
      try {
        const userUrl = `/api/user/${this.$route.params.id}`
        // const userUrl = `http://localhost:3001/api/user/${this.$route.params.id}`
        const response = await axios.get(userUrl)
        this.userInfo = createUser(response.data.user)
      } catch (error) {
        this.userInfo = {}
        this.noDataText = 'An error occured!'
        console.log(error)
        console.log(error.response)
      }
    }
  }
}
</script>
<template lang="pug">
  Profile(:userInfo="userInfo" :noDataText="noDataText")
</template>

<script>
import axios from 'axios';
import Profile from './Profile'
import createUser from '../helpers/user'
import router from '../router';

export default {
  name: 'UserInfo',
  props: ['errorMessage'],
  components: {
    Profile,
  },
  data () {
    return {
      userInfo: {},
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
        this.errorMessage.setText('invalidId')
        this.errorMessage.setArgs(this.$route.params.id)
        return router.push('/error')
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
<template lang="pug">
  h2 Logging in as {{ this.$route.query.first_name }}...
</template>

<script>
import axios from 'axios'

export default {
  name: 'Login',
  props: ['userInfo'],
  components: {
  },
  mounted () {
    this.$emit('login-user', this.$route.query)
  }
}
</script>

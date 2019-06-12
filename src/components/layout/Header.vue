<template lang="pug">
  Navbar(v-bind:userInfo="userInfo")
</template>

<script>
import Navbar from './Navbar'

export default {
  name: 'Header',
  components: {
    Navbar,
  },
  props: ['userInfo'],
}
</script>
<template lang="pug">
  UsersList.mx-1(v-bind:userInfo="userInfo")
</template>

<script>
import UsersList from './UsersList'

export default {
  name: 'Home',
  props: ['userInfo'],
  components: {
    UsersList,
  },
}
</script>

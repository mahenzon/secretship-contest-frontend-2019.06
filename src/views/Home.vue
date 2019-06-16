<template lang="pug">
  UsersList.mx-1(v-bind:allUsers="allUsers" v-bind:userInfo="userInfo")
</template>

<script>
import UsersList from './UsersList'

export default {
  name: 'Home',
  props: ['allUsers', 'userInfo'],
  components: {
    UsersList,
  },
}
</script>

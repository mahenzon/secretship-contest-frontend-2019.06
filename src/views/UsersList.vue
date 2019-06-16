<template lang="pug">
  div
    h3 Users:
    .users
      div.my-3(v-bind:key="user.user_id" v-for="user in allUsers")
        ListUser(v-bind:user="user" v-bind:userInfo="userInfo")
</template>

<script>
import ListUser from './ListUser'

export default {
  name: 'UsersList',
  props: ['allUsers', 'userInfo'],
  components: {
    ListUser,
  }
}
</script>

<style scoped>
  .users {
    height: 80vh;
    overflow-y: scroll;
  }
</style>


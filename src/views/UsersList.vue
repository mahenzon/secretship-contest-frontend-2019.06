<template lang="pug">
  div
    h3 Users:
    div.my-3(v-bind:key="user.user_id" v-for="user in allUsers")
      ListUser(v-bind:user="user")
</template>

<script>
import ListUser from './ListUser'

export default {
  name: 'UsersList',
  props: ['allUsers'],
  components: {
    ListUser,
  }
}
</script>

<template lang="pug">
  UsersList.mx-1(v-bind:allUsers="allUsers")
</template>

<script>
import UsersList from './UsersList'

export default {
  name: 'Home',
  props: ['allUsers'],
  components: {
    UsersList,
  },
}
</script>

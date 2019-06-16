<template lang="pug">
  .clearfix
    img.rounded-circle.img-fluid.avatar-mini.mr-2(alt="Avatar", v-bind:src="`http://localhost:3001/telegram-media/${user.profile_photo_id}`")
    div.py-2
      div {{ user.first_name }} {{ user.last_name }}
      small Join date: {{ joined (user) }}
</template>

<script>
import joinDateString from '../helpers/join-date'

export default {
  name: 'ListUser',
  props: ['user'],
  methods: {
    joined (user) {
      return joinDateString({ join_date: user.join_date, language_code: navigator.language || navigator.userLanguage })
    }
  }
}
</script>

<style scoped>
  .avatar-mini {
    width: 64px;
    height: 64px;
    object-fit: cover;
    -o-object-fit: cover;
    float: left;
  }
</style>

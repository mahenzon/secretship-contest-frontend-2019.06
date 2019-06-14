<template lang="pug">
  div(v-if="userInfo.user_id").container
    br
    .row
      .card
        .card-header
          h4 User Profile
        .card-body
          img#profile-image.rounded-circle.img-fluid(alt="User Pic", v-bind:src="userInfo.profilePic || 'https://telegra.ph/file/1d86ed45c9ed18926660a.jpg'")
          .container
            h2 {{ userInfo.first_name }} {{ userInfo.last_name }}
            p(v-if="userInfo.username")
              a(v-bind="{href: userInfo.telegramLink()}" target="blank") @{{ userInfo.username }}
            p
              small.text-secondary ID: {{ userInfo.user_id }}
              span(v-if="userInfo.language_code")
                br
                small.text-secondary Language: {{ userInfo.language_code }}
          hr
          div Join date: {{ userInfo.joinDateString() }}
  div(v-else)
    h1 {{ noDataText || 'Please authorize' }}
    div {{ userInfo }}
</template>

<script>
export default {
  name: 'Profile',
  props: ['userInfo', 'noDataText'],
}
</script>

<style scoped>
  #profile-image {
    width: 420px;
  }
</style>

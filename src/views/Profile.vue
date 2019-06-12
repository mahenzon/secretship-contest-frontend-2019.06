<template lang="pug">
  div(v-if="userInfo.userId").container
    br
    .row
      .card
        .card-header
          h4 User Profile
        .card-body
          img#profile-image.rounded-circle.img-fluid(alt="User Pic", v-bind:src="userInfo.profilePic")
          .container
            h2 {{ userInfo.firstName }} {{ userInfo.lastName }}
            p(v-if="userInfo.username")
              a(v-bind="{href: userInfo.telegramLink}" target="blank") @{{ userInfo.username }}
            p
              small.text-secondary ID: {{ userInfo.userId }}
              span(v-if="userInfo.locale")
                br
                small.text-secondary Locale: {{ userInfo.locale }}
          hr
          div Join date: {{ userInfo.joinDate }}
  div(v-else)
    h1 Please authorize
    div {{ userInfo }}
</template>


<script>
export default {
  name: 'Profile',
  props: ['userInfo'],
}
</script>

<style scoped>
  #profile-image {
    width: 420px;
  }
</style>

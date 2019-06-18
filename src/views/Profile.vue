<template lang="pug">
  div(v-if="userInfo.user_id").container
    .row
      .card
        .card-header
          h4 User Profile
        .card-body.img-container
          a(:href="userInfo.getProfilePic()")
            img.profile-image.rounded-circle.img-fluid.mb-3(alt="User Pic", v-bind:src="userInfo.getProfilePic()")
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
</template>

<script>
export default {
  name: 'Profile',
  props: ['userInfo', 'noDataText'],
}
</script>

<style scoped>
  .img-container {
    max-width: 420px;
  }
  .profile-image {
    max-width: 100%;
    object-fit: cover;
    -o-object-fit: cover;
  }
</style>

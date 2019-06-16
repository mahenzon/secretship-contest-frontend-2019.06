<template lang="pug">
  div
    a(href="#")
      img.rounded-circle.img-fluid.avatar-mini.mr-2(v-if="user.profile_photo_id" alt="Avatar", v-bind:src="`http://localhost:3001/telegram-media/${user.profile_photo_id}`")
      div(v-else :style="{ backgroundColor: circleColor }").circle.avatar-mini.mr-2
        span.initials {{ initials }}
    div.py-2
      div(v-bind:style="{ color: nameColor }") {{ user.first_name }} {{ user.last_name }}
      small Join date: {{ joined }}
</template>

<script>
import joinDateString from '../helpers/join-date'
import colorPalette from '../helpers/color-palette'

const {
  colorsNameFg,
  colorsUserpicBg,
  colorsCount,
  colorsIndexes,
} = colorPalette

export default {
  name: 'ListUser',
  props: ['user', 'userInfo'],
  data() {
    let langCode
    if (this.userInfo.language_code) {
      langCode = this.userInfo.language_code
    } else {
      langCode = navigator.language || navigator.userLanguage
    }
    const joined = joinDateString({ join_date: this.user.join_date, language_code: langCode })

    let initials = this.user.first_name.charAt(0)
    if (this.user.last_name) {
      initials += this.user.last_name.charAt(0)
    }

    const colorIndex = colorsIndexes[this.user.user_id % colorsCount]
    const nameColor = colorsNameFg[colorIndex]
    const circleColor = colorsUserpicBg[colorIndex]
    return {
      joined,
      initials,
      nameColor,
      circleColor,
    }
  },
  methods: {

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

  .circle {
    color: whitesmoke;
    background-color: #ccc;
    border-radius: 50%;
    height: 64px;
    text-align: center;
    width: 64px;
  }

  .initials {
    font-size: calc(64px / 2); /* 50% of parent */
    line-height: 1;
    position: relative;
    top: calc(64px / 4); /* 25% of parent */
  }
</style>

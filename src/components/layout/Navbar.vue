<template lang="pug">
  nav.navbar.navbar-expand-lg.navbar-light.bg-light.mb-3.navbar-expand-md
    .navbar-brand Contest
    button.navbar-toggler(type='button', data-toggle='collapse', data-target='#navbarText', aria-controls='navbarText', aria-expanded='false', aria-label='Toggle navigation')
      span.navbar-toggler-icon
    #navbarText.collapse.navbar-collapse
      ul.navbar-nav.mr-auto
        li.nav-item
          router-link(to="/" v-t="'homeLabel'").nav-link
        li.nav-item
          router-link(to="/about" v-t="'aboutLabel'").nav-link
      NavbarRight(v-bind:userInfo="userInfo")
</template>

<script>
import NavbarRight from './NavbarRight'

export default {
  name: 'Navbar',
  components: {
    NavbarRight,
  },
  props: ['userInfo'],
}
</script>

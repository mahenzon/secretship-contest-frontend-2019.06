<template lang="pug">
  nav.navbar.navbar-expand-lg.navbar-light.bg-light
    .navbar-brand Contest
    ul.navbar-nav.mr-auto
      li.nav-item
        router-link(to="/").nav-link Home 
    button.navbar-toggler(type='button', data-toggle='collapse', data-target='#navbarText', aria-controls='navbarText', aria-expanded='false', aria-label='Toggle navigation')
      span.navbar-toggler-icon
    #navbarText.collapse.navbar-collapse
      ul.navbar-nav.mr-auto
        li.nav-item
          router-link(to="/about").nav-link About
      NavbarAuthDependent(v-bind:userInfo="userInfo")
</template>

<script>
import NavbarAuthDependent from './NavbarAuthDependent'

export default {
  name: 'Navbar',
  components: {
    NavbarAuthDependent,
  },
  props: ['userInfo'],
}
</script>

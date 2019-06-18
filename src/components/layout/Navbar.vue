<template lang="pug">
  nav.navbar.navbar-expand-lg.navbar-light.bg-light.mb-3.navbar-expand-sm
    .navbar-brand Contest
    button.navbar-toggler(type='button', data-toggle='collapse', data-target='#navbarText', aria-controls='navbarText', aria-expanded='false', aria-label='Toggle navigation')
      span.navbar-toggler-icon
    #navbarText.collapse.navbar-collapse
      ul.navbar-nav.mr-auto
        li.nav-item
          router-link(to="/").nav-link {{ $t('homeLabel') }}
        li.nav-item
          router-link(to="/about").nav-link {{ $t('aboutLabel') }}
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

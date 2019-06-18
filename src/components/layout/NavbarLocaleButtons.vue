<template lang="pug">
  li.nav-item.dropdown
    a#navbarDropdownMenuLink.nav-link.dropdown-toggle(href='#' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false')
      | {{ $t('language') }}
    .dropdown-menu(aria-labelledby='navbarDropdownMenuLink')
      a.dropdown-item(href='#' @click="setLocale('en')") 🇬🇧 EN
      a.dropdown-item(href='#' @click="setLocale('ru')") 🇷🇺 RU
</template>

<script>
export default {
  name: 'NavbarLocaleButtons',
  methods: {
    setLocale(locale) {
      // TODO: send request and set to DB
      this.$i18n.locale = locale
    }
  },
}
</script>
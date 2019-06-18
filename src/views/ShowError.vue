<template lang="pug">
  h1 Loading...
</template>

<script>
import router from '../router'

export default {
  name: 'ShowError',
  props: ['errorMessage'],
  mounted() {
    console.log(this.$route.query)
    this.errorMessage.setText(this.$route.query.text)
    router.push('/error')
  },
}
</script>

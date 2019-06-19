<template lang="pug">
  h1 Loading...
</template>

<script>
import router from '../router'

export default {
  name: 'ShowError',
  props: ['errorMessage'],
  mounted() {
    this.errorMessage.setText(this.$route.query.text)
    if (this.$route.query.args) {
      this.errorMessage.setArgs(this.$route.query.args)
    }
    router.push('/error')
  },
}
</script>

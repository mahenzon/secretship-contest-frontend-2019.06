<template lang="pug">
  div(v-t="this.errorMessage.text").alert.alert-danger.text-center
</template>

<script>
export default {
  name: 'Error',
  props: ['errorMessage'],
}
</script>
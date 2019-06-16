<template lang="pug">
  div.alert.alert-danger.text-center {{ this.errorMessage }}
</template>

<script>
export default {
  name: 'Error',
  props: ['errorMessage'],
}
</script>
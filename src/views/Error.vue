<template lang="pug">
  div.alert.alert-danger.text-center {{ $t(this.errorMessage.text) }}
</template>

<script>
export default {
  name: 'Error',
  props: ['errorMessage'],
}
</script>
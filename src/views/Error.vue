<template lang="pug">
  div.alert.alert-danger.text-center {{ $t(this.errorMessage.text, this.errorMessage.args)}}
</template>

<script>
export default {
  name: 'Error',
  props: ['errorMessage'],
}
</script>
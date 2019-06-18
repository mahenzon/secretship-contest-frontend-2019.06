<template lang="pug">
  div
    div.alert.alert-info.text-center {{ $t('aboutAlert') }}:
    div#tgPost
</template>


<script>
export default {
  name: 'About',
  mounted() {
    // Insert Telegram post:
    const newScript = document.createElement('script')
    newScript.src = 'https://telegram.org/js/telegram-widget.js?6'
    newScript.setAttribute('data-telegram-post', 'SecretshipContests/4')
    newScript.setAttribute('width', '100%')
    document.getElementById('tgPost').appendChild(newScript);
  }
}
</script>

<template lang="pug">
  div
    div(v-t="'aboutAlert'").alert.alert-info.text-center
    .row
      div.col-12.col-sm-12.col-md-8.col-lg-7#tgPost
      div.col-12.col-sm-12.col-md-4.col-lg-5
        h3(v-t="'sourceCode'")
        .list-group
          a.list-group-item.list-group-item-action(target='_blank' href='https://github.com/surik00/secretship-contest-bot-2019.06')
            | surik00/secretship-contest-bot-2019.06
          a.list-group-item.list-group-item-action(target='_blank' href='https://github.com/surik00/secretship-contest-backend-2019.06')
            | surik00/secretship-contest-backend-2019.06
          a.list-group-item.list-group-item-action(target='_blank' href='https://github.com/surik00/secretship-contest-frontend-2019.06')
            | surik00/secretship-contest-frontend-2019.06

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
    document.getElementById('tgPost').appendChild(newScript)
  }
}
</script>

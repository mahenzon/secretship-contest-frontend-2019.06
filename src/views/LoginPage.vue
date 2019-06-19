<template lang="pug">
  .login-form
    h3(v-t="'loginTitle'").auth-title

    .row.row-sm-offset-3
      .col-xs-12.col-sm-6#tgLogin.text-center
        div(v-t="'loginButtonErrorLoad'")#errorText.text-center
    .row.row-sm-offset-3.login-tg
      .col-xs-12.col-sm-6
        hr.hr-or
        span(v-t="'loginOr'").span-or
    .row.row-sm-offset-3
      .col-xs-12.col-sm-6
        a(href="https://t.me/myawbot?start=login" target="blank" v-t="'loginTitleButton'").btn.btn-lg.btn-outline-primary.btn-block
</template>

<script>
export default {
  name: 'LoginPage',
  mounted() {
    // Insert Telegram login button:
    const newScript = document.createElement('script')
    newScript.src = 'https://telegram.org/js/telegram-widget.js?6'
    newScript.setAttribute('data-telegram-login', 'myawbot')
    newScript.setAttribute('data-size', 'large')
    newScript.setAttribute('data-auth-url', `${this.$axios.defaults.baseURL}api/login`)
    document.getElementById('tgLogin').appendChild(newScript)
    document.getElementById('errorText').innerHTML = ''
  },
}
</script>

<style scoped>
  @media (min-width: 768px) {
    .row-sm-offset-3 div:first-child[class*="col-"] {
        margin-left: 25%;
    }
  }

  .login-form .auth-title {
    text-align: center;
    line-height: 300%;
  }

  .login-tg {
    margin-top: 1em;
    margin-bottom: 1em;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
  }

  .login-form .login-tg {
    position: relative;
    font-size: 1.5em;
    color: #aaa;
  }

  .login-form .login-tg .hr-or {
    background-color: #cdcdcd;
    height: 1px;
    margin-top: 0px!important;
    margin-bottom: 0px!important;
  }

  .login-form .login-tg .span-or {
    display: block;
    position: absolute;
    left: 50%;
    top: -0.8em;
    margin-left: -1.5em;
    background-color: white;
    width: 3em;
    text-align: center;
  }
</style>

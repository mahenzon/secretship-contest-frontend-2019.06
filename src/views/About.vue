<template lang="pug">
  div
    h1 This is an example about page

    .alert.alert-primary.alert-dismissible.fade.show(role='alert')
      | With Bootstrap!
      button.close(type='button', data-dismiss='alert', aria-label='Close')
        span(aria-hidden='true') ×
</template>


<script>
export default {
  name: 'About',
}
</script>
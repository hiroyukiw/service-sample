<template lang="pug">
v-app
  headders 
  nuxt
  footer-contact
  footers
  
</template>

<script>
import Headders from '~/components/Headders.vue'
import FooterContact from '~/components/FooterContact.vue'
import Footers from '~/components/Footers.vue'

export default {
  components: {
    Headders,
    FooterContact,
    Footers
  }
}
</script>

<style lang="stylus" scoped>

</style>

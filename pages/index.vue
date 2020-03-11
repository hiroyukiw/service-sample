<template lang="pug">
  main
    mainvisual
    section01
    section02
    section03
    section04
</template>

<script>

import Mainvisual from '~/components/home/Mainvisual.vue'
import Section01 from '~/components/home/Section01.vue'
import Section02 from '~/components/home/Section02.vue'
import Section03 from '~/components/home/Section03.vue'
import Section04 from '~/components/home/Section04.vue'

export default {
  components: {
    Mainvisual,
    Section01,
    Section02,
    Section03,
    Section04
  }
}
</script>

<style lang="stylus">
.eyechatch
  width 15%
  height  80px
  
.text-area
  width 85% 
</style>
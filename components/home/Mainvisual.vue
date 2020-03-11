<template lang="pug">
  v-parallax(
    :src="require('@/assets/images/home/hero.jpg')"
    height="800"
  )
    v-layout(
      column 
      align-center 
      justify-center
    )
      h1(
        v-text="CopyTitle"  
        class="mb-8 display-2 text-center copy-title"
      )
      .text-center
        v-btn(
          v-for="CopyContactButton in CopyContactButtons"
          :key="CopyContactButton.id"
          :class="CopyContactButton.class"
          class="ma-4 copybuttons"
          dark
          large
        ) 
          | {{CopyContactButton.text}}
</template>

<script>
export default {
  data () {
    return {
      CopyTitle: "Material Design Component Framework",
      CopyContactButtons: [
        { id: 1, text: 'Contact', class: 'copybutton01' },
        { id: 2, text: 'Document Request', class: 'copybutton02' },
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.copy-title
  color #000000
.copybuttons
  width 220px
  &.copybutton01
    background base-color
  &.copybutton02
    background accent-color
</style>
<template lang="pug">
div#as
  v-app-bar(
    fixed 
    elevate-on-scroll
  )
    v-layout
      v-toolbar-title(
        class="title-logo mr-4"
        )
        nuxt-link(to="/")
          logo
      v-btn.hidden-sm-and-down(
        v-for="(menu, index) in getAll"
        v-bind:key="menu.id"
        :href="menu.link"
        text) 
        | {{ menu.category }} 
        
      v-spacer
      v-btn(
        text 
        class="mx-2"
      ) 
        | login
      v-btn(
        class="amber darken-3" 
        dark
      ) 
        | contact
    v-app-bar-nav-icon(
      @click.stop="drawer = !drawer" 
      class="hidden-md-and-up"
    )

</template>

<script>
import Logo from '~/components/Logo.vue'
import { mapGetters } from 'vuex'


export default {
  components: {
    Logo
  },
  data () {
    return {
      drawer: false,
      group: null,
      list: [],
    }
  },
  computed: {
    ...mapGetters({
      getAll: 'json/getAll',
    }),
  },
  watch: {
    group () {
      this.drawer = false
    },
  },
}
</script>

<style lang="stylus">
.v-toolbar
  flex none
.title-logo
  display flex
  align-items center
  a
    display flex
    align-items center
    .logo
      width 80px
  
</style>
<template lang="pug">
  section.section-two.light-blue.lighten-5
    v-layout(
      column 
      wrap 
      class="py-12" 
      align-center)
      v-flex(
        xs12 
        sm4 
        class="my-4")
        .text-center
          h2.display-1.mb-12(v-text="UseSeaneTitle")
          span.subheading(v-text="UseSeaneSubTitle")
      v-flex(xs12).my-12
        v-container(grid-list-xl)
          v-layout(
            row 
            wrap 
            align-center)
            v-flex(
              xs12 
              md4 
              v-for="(seane, index) in getSeane"
              :key="seane.id")
              v-hover(
                v-slot:default="{ hover }"
                open-delay="200")
                v-card(
                  flat 
                  class="text-center mx-auto pa-12"
                  color="white light-1"
                  :href="seane.link"
                  :elevation="hover ? 16 : 2")
                  v-icon(v-text="seane.icon" color="blue darken-2")
                  v-card-title(
                    primary-title 
                    class="layout justify-center"
                  )
                    h3.headline(v-text="seane.title")
                  v-card-text
                    p.subheading(v-text="seane.text")
                

</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      UseSeaneTitle: "Vuetify usage scene",
      UseSeaneSubTitle: "Take your site to the next level with Vuetify.There are many usage scenes."
    }
  },
  computed: {
    ...mapGetters({
      getSeane: 'json/getSeane',
    }),
  },
}
</script>
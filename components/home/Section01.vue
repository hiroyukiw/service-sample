<template lang="pug">
  section.section-one
    v-content(
      v-for="SectionTitle in SectionTitles"
      :key="SectionTitle.id"
      class="py-6"
      )
      v-layout(
        column 
        wrap 
        class="my-4"
      )
        v-flex(xs12)
          v-container(grid-list-xl)
            v-layout(
              row 
              wrap
              class="align-center"
            )
              v-flex(
                :class="SectionTitle.class1"
                xs12
                md6 )
                v-card(
                  flat 
                  class="transparent"
                )
                  h2(
                    v-text="SectionTitle.title"
                    class="display-1 mb-12"
                    ) 
                  p.text-left(v-html="SectionTitle.text") 
                  .text-left(v-if="SectionTitle.button")
                    v-btn(
                      rounded 
                      color="primary" 
                      dark 
                      href="/about"
                    ) 
                      | About
              v-flex(
                :class="SectionTitle.class2"
                xs12 
                md6
                )
                v-card(
                  flat 
                  class="transparent"
                )
                  v-img(
                    :src="SectionTitle.images"
                  )
</template>


<script>
export default {
  data () {
    return {
      SectionTitles: [
        { 
          id: 1, 
          title: "What is Vuetify?", 
          class1: "section-second-order1",
          class2: "section-second-order2",
          text: "Vuetify is a Vue UI Library with beautifully handcrafted Material Components.<br> No design skills required — everything you need to create amazing applications is at your fingertips.",
          images: require('@/assets/images/home/section01-01.png'),
          button: false,
        },
        { 
          id: 2, 
          title: "Why  Vuetify?", 
          class1: "section-second-order2",
          class2: "section-second-order1",
          text: "Building applications with Vue has never been easier.<br> Supercharge your development process with all of the tools you need to succeed.",
          images: require('@/assets/images/home/section01-02.png'),
          button: true,
        },
      ]
    }
  }
}
</script>

<style lang="stylus">
.section-second-order1
  order 2
  +breakpoint(md)
    order 1
.section-second-order2
  order 1
  +breakpoint(md) 
    order 2

</style>
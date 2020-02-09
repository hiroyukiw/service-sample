<template lang="pug">
div
  section.section-one
    v-layout(column wrap class="py-12")
      v-flex(xs12)
        v-container(grid-list-xl)
          v-layout.align-center(row wrap)
            v-flex(xs12 md6)
              v-card(flat class="transparent")
                h2.headline First Title
                p.text-left texttexttext
                template
                  .text-left
                    v-btn(rounded color="primary" dark href="/pre-made-themes") Rounded Button
            v-flex(xs12 md6)
              v-card(flat class="transparent")
                v-img(:src="require('@/assets/images/section01.jpg')")
  section.section-one
    v-layout(column wrap class="py-12")
      v-flex(xs12)
        v-container(grid-list-xl)
          v-layout.align-center(row wrap)
            v-flex(xs12 md6)
              v-card(flat class="transparent")
                v-img(:src="require('@/assets/images/section02.jpg')")
            v-flex(xs12 md6)
              v-card(flat class="transparent")
                h2.headline Second Title
                p.text-left sddsdtexttexttext
  section
    v-layout(column wrap class="my-12" align-center)
      v-flex(xs12 sm4 class="my-4")
        .text-center
          h2.headline Title
          span.subheading Subtitle
      v-flex(xs12)
        v-container(grid-list-xl)
          v-layout(row wrap align-center)
            v-flex(xs12 md4)
              v-card(flat class="transparent")
                v-card-title(primary-title class="layout justify-center")
                  h3.headline.text-center Material Design
                p.subheading Subtitle
                v-img(:src="require('@/assets/images/section03.jpg')")
            v-flex(xs12 md4)
              v-card(flat class="transparent")
                v-card-title(primary-title class="layout justify-center")
                  h3.headline.text-center Material Design
                p.subheading Subtitle
                v-img(:src="require('@/assets/images/section04.jpg')")
            v-flex(xs12 md4)
              v-card(flat class="transparent")
                v-card-title(primary-title class="layout justify-center")
                  h3.headline.text-center Material Design
                p.subheading Subtitle
                v-img(:src="require('@/assets/images/section05.jpg')")
  section
    v-parallax(:src="require('@/assets/images/hero.jpg')" height="380")
      v-layout.mainvisual(column align-center justify-center)
        h1(class="mb-2 display-1 text-center") MianTitles
        p.subtitle-1 Subtitle
        .text-center
          v-btn.ma-2(tile color="indigo" dark href="/pre-made-themes") BUTTON
          v-btn.ma-2(tile color="indigo" dark href="/pre-made-themes") BUTTON
  section
    v-layout(column wrap class="my-12" align-center)
      v-flex(xs12 sm4 class="my-4")
        v-container(grid-list-xl)
          v-flex(xs12 md4)
            v-list.transparent
              v-list-item
                v-list-item-content
                  v-list-item-title ABCD
              v-list-item
                v-list-item-content
                  v-list-item-title ABCD
</template>


<style lang="stylus" scoped>
.section-one
  background #fafbfc
</style>
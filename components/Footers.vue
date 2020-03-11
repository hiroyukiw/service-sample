<template lang="pug">
  .footer-area
    section.my-12
      v-container(grid-list-xl)
        v-layout(row wrap justify-center)
          v-flex(xs12 sm3)
            v-card(flat class="transparent")
              v-card-title(primary-title class="layout justify-center")
                .headline Company info
              v-list.transparent
                v-list-item
                  v-list-item-content
                    v-list-item-title abc
                    v-list-item-title abc
                    v-list-item-title abc
                    v-list-item-title abc

          v-flex(xs12 sm3)
            v-card(flat class="transparent")
              v-card-title(primary-title class="layout justify-center")
                .headline Company info
              v-list.transparent
                v-list-item
                  v-list-item-content
                    v-list-item-title abc
                    v-list-item-title abc
                    v-list-item-title abc
                    v-list-item-title abc
          v-flex(xs12 sm3)
            v-card(flat class="transparent")
              v-card-title(primary-title class="layout justify-center")
                .headline Company info
              v-list.transparent
                v-list-item
                  v-list-item-content
                    v-list-item-title abc
                    v-list-item-title abc
                    v-list-item-title abc
                    v-list-item-title abc
          v-flex(xs12 sm3)
            v-card(flat class="transparent")
              v-card-title(primary-title class="layout justify-center")
                .headline Company info
              v-list.transparent
                v-list-item
                  v-list-item-content
                    v-list-item-title abc
                    v-list-item-title abc
                    v-list-item-title abc
                    v-list-item-title abc

      v-container(grid-list-xl)
        v-layout(wrap)
          v-flex(xs9 md6)
            v-list
              v-btn.hidden-sm-and-down(text) about
              v-btn.hidden-sm-and-down(text) price
              v-btn.hidden-sm-and-down(text) case
              v-btn.hidden-sm-and-down(text) help
          v-flex(xs9 md6 class="justify-end")
            v-list.float-right.transparent
              v-btn(text) help
              v-btn(text) help2
      v-container.text-center(grid-list-xl)
        p info
    v-footer
      v-layout(row wrap align-center)
        v-flex(xs12)
          v-btn(
            ref="button"
            block
            color="primary"
            @click="$vuetify.goTo(0)")
          p.ml-4.text-center
            | &copy; {{ now }} {{ copyright }}
</template>

<script>
export default {
  data: () => {
    return {
      now: '',
      copyright: 'sample'
    };
  },
  created: function() {
    var d = new Date();
    this.now = d.getFullYear();
  }
}
</script>
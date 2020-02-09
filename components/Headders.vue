<template lang="pug">
v-app-bar
  v-layout
    v-toolbar-title.mr-10 Page Title
    v-btn.hidden-sm-and-down(text) about
    v-btn.hidden-sm-and-down(text) price
    v-btn.hidden-sm-and-down(text) case
    v-btn.hidden-sm-and-down(text) help
    v-spacer
    v-btn contact
</template>

<style lang="stylus">
.v-toolbar
  flex none
</style>
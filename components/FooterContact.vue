<template lang="pug">
  .get-area
    section
      v-parallax(:src="require('@/assets/images/footer-bg.jpg')" height="380")
        v-layout.mainvisual(column align-center justify-center)
          h1(class="mb-2 display-1 text-center") MianTitles
          p.subtitle-1 Subtitle
          .text-center
            v-btn.ma-2(tile color="indigo" dark href="/pre-made-themes") BUTTON
            v-btn.ma-2(tile color="indigo" dark href="/pre-made-themes") BUTTON

</template>
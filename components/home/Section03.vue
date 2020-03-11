<template lang="pug">
	section.py-12
		v-layout(column align-center justify-center)
			v-flex(xs12 sm4 class="my-4")
				.text-center
					h2.headline Title
					span.subheading Subtitle
			v-flex(xs12 sm4 class="my-4")
				client-only
					swiper(:options="swiperOption")
						swiper-slide(v-for="(item, index) in items" :key="index") {{item.title}}
						.swiper-pagination(slot="pagination")
						.swiper-button-prev(slot="button-prev")
						.swiper-button-next(slot="button-next")
		v-container.mt-12.mb-6
			div(class="d-flex flex-wrap")
				div.card(v-for="n in 20" :key="n") s
		v-container.my-6.text-center
			v-btn(color="blue lighten-2" dark large href="/pre-made-themes") Get Started
			v-btn.ma-4(color="blue lighten-2" dark large href="/pre-made-themes") Get Started
</template>

<script>

let items = [];
for(let i=1; i<=5; i++)
{
  items.push({
    no: i,
    title: 'title' + i
  });
}

export default {
	data () {
		return {
			items:items,
			swiperOption: {
				autoplay: {
					delay: 2500,
					disableOnInteraction: false
				},
				pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
				slidesPerView: 2,
				centeredSlides: true,
				spaceBetween: 5,
				loop: true,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev'
				}
			}
		}
	}
}
</script>


<style lang="stylus">
.swiper-container
  height 300px
  width 100%
	.swiper-slide
    text-align center
    font-size 38px
    font-weight 700
    background-color #eee
    display flex
    justify-content center
    align-items center
    border-left 1px solid #fff

.card
	width 20%
	text-align center
</style>
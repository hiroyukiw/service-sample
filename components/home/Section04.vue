<template lang="pug">
	section
		v-container(grid-list-xl)
			v-layout(column wrap align-center)
				v-flex(xs12 sm4 class="my-4")
					.text-center
						h2.headline Title
						span.subheading Subtitle
		v-container(grid-list-xl)
			v-layout(column wrap align-center)
				v-flex(v-for='item in items' :key='item.id' xs12 sm4 class="my-4 d-flex justify-start")
					v-img(:src="item.eyecatch.url" class="eyechatch mr-8")
					.text-area
						.name.title(v-text="item.title")
						time.data(v-text="item.date.slice(0, 10)" :datetime="item.date")
						.post(v-html='item.post.slice(0, 200)')
        


</template>


<script>
import axios from "axios";

export default {
  data () {
    return {
      // 取得したデータを入れる
      items: []
    }
  },

  mounted() {
    this.asyncData()
  },
  methods: {
    asyncData() {
      axios
        .get('https://websample.microcms.io/api/v1/news',{
          headers: { 'X-API-KEY': 'b73987ce-4dc4-4f15-b310-134ce67fa219' }
        })
        .then(res =>{
        console.log(res)
          this.items= res.data.contents
        })
    }
  }
}
</script>
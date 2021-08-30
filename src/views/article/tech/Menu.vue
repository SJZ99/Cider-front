<template>
  <div>
		<div id="main">

			<div id="title">
				<h1>{{title}}</h1>
				<v-divider id="divider"/>
			</div>

			<div id="content">
				<v-card
					id="content-card"
					v-for="(article, id) in articles"
					:key="id"
					@click="changePath('/tech/' + title.toLowerCase() + '/' + article.id)"
				>

					<v-card-title id="card-title">

						<v-img 
							src="@/assets/home/forward.svg"
							max-width="1em"
							id="svg"
						></v-img>
						&nbsp;&nbsp;&nbsp;
						{{article.title}}

						<v-spacer />
					</v-card-title>

				</v-card>
			</div>

		</div>
		<div id="right-bar">

			<v-card id="bar-card" flat>

				<v-card-title class="text-center">Contributed By</v-card-title>
				<v-card-text class="text-center">(sort by char)</v-card-text>
				<v-divider id="divider"/>

				<v-card-text class="text-center">YUYUE</v-card-text>

			</v-card>

		</div>
  </div>

</template>

<script>
import axios from '../../../main'

export default {
	data () {
		return {
			articles: [
				{
					title: 'Backend server isn\'t enable!',
					id: 1,
				},
				{
					title: 'Connect to devloper',
					id: 2,
				},
				{
					title: 'title3',
					id: 3,
				}
			]
		}
	},
	computed: {
		title () {
			var param = this.$router.currentRoute.params.lang.toUpperCase();
			return param
		}
	},
	methods: {
		changePath (goToPath) {
			this.$router.push(goToPath).catch((error) => {
				if (error.name != "NavigationDuplicated") {
						throw error;
				}
			});
		},
		setData (articles) {
			this.articles = articles;
		}
	},
	beforeRouteEnter (to, from, next) {
		axios
			.get('tech/' + to.params.lang)
			.then(function (response) {
				console.log(response.data)
				next(vm => vm.setData(response.data))
			})
			.catch(function (response) {
				console.log(response)
				next()
				// next('404')
			})
	}
}
</script>

<style lang='scss'>
@import '@/scss/views/tech/menu.scss'
</style>
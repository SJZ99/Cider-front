<template>
  <div>
		<div class="section1">
			<router-link to="/">
				<v-img src="@/assets/tech/return.svg" class="img"></v-img>
			</router-link>

			<h1>TECH</h1>

		</div>

		<div class="section2">
			<v-card
				id="card"
				color="white"
				elevation="10"
				v-for="(card, index) in cards"
				:key="index"
				@click="changePath(card.link)"
			>
				<v-card-title>

					<v-spacer />

					{{card.lang}}
					<v-spacer />
					<v-img :src="card.icon" max-width="3.2em" max-height="3.4em"></v-img>

					<v-spacer />
				</v-card-title>
			</v-card>
			<v-img src="@/assets/curve.svg" id="curve"></v-img>
		</div>

		<div class="section3">
			<h2>ARE YOU HESITATE TO DO?</h2>

			<transition appear-active-class="fade-transition">
				<v-card 
					v-if="showCard"
					flat
					color="transparent"
					dark
					class="card"
					transition="fade-transition"
					@click="showCard = !showCard; btnOps.visible = !btnOps.visible;"
				>
					<h3
						transition="fade-transition"
						class="text-center"
					>
						Some must be done before you learn its meaning.
					</h3>
				</v-card>
			</transition>

		
			<ParticleEffectButton
				:visible.sync="btnOps.visible"
				:animating.sync="btnOps.animating"
				:options="btnOps"
				cls="btn-cls"
				class="btn"
			>
				<h1>
					Do it!
				</h1>
				
			</ParticleEffectButton>

		</div>
  </div>
</template>

<script>
	import ParticleEffectButton from "vue-particle-effect-buttons"
	export default {
    components: {
		ParticleEffectButton,
    },

    data() {
		return {
			showCard: false,
			cards: [
				{
					lang: 'JAVA',
					icon: require('../../../assets/langIcon/java.svg'),
					link: 'tech/java',
				},
				{
					lang: 'HTML',
					icon: require('../../../assets/langIcon/html.svg'),
					link: 'tech/html',
				},
				{
					lang: 'CSS',
					icon: require('../../../assets/langIcon/css.svg'),
					link: 'tech/css',
				},
				{
					lang: 'Vue',
					icon: require('../../../assets/langIcon/vue.png'),
					link: 'tech/vue',
				},
				{
					lang: 'Vuetify',
					icon: require('../../../assets/langIcon/vuetify.svg'),
					link: 'tech/vuetify',
				},
				{
					lang: 'Spring',
					icon: require('../../../assets/langIcon/spring-circle.svg'),
					link: 'tech/spring',
				},
				{
					lang: 'Arduino',
					icon: require('../../../assets/langIcon/arduino.svg'),
					link: 'tech/arduino',
				},
				{
					lang: 'Algori',
					icon: require('../../../assets/langIcon/algorithm.svg'),
					link: 'tech/algorithm',
				},
				{
					lang: 'Mysql',
					icon: require('../../../assets/langIcon/mysql.svg'),
					link: 'tech/mysql',
				},
			],
			btnOps: {
				type: "triangle",
				easing: "easeOutQuart",
				size: 6,
				particlesAmountCoefficient: 5,
				oscillationCoefficient: 5,

				onComplete: () => {
					this.showCard = !this.btnOps.visible;
					// console.log(this);
				},

				onBegin: () => {
					console.log("begin");
				},

				visible: true,
				animating: false
			},
		}
	},
	methods: {
		changePath(goToPath) {
			this.$router.push(goToPath).catch((error) => {
				if (error.name != "NavigationDuplicated") {
						throw error;
				}
			});
		},
	},
  }
</script>

<style lang='scss'>
@import '@/scss/views/tech/tech.scss';
</style>
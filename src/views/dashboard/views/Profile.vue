<template>
  <div id="background">
    <v-card
			class="mx-auto"
			max-width="344"
    >
			<v-img
				src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
				height="200px"
			></v-img>

			<v-card-title>
				{{writer.name}}
			</v-card-title>

			<v-card-subtitle>
				{{writer.experience}}
			</v-card-subtitle>

			<v-card-actions>

				<v-spacer></v-spacer>

				<v-btn
					icon
					@click="show = !show"
				>
					<v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
				</v-btn>
			</v-card-actions>

			<v-expand-transition>
			<div v-show="show">
				<v-divider></v-divider>

				<v-card-text>
					{{writer.intro}}
				</v-card-text>
			</div>
			</v-expand-transition>
    </v-card>

  </div>
</template>

<script>
export default {
	data: () => ({
		show: false,
		writer: {
			name: 'Yu_Yue',
			experience: '2020-2021 #7636 E.E.L',
			intro: 'Java lover, using java over two years. Touch frontend by vue through Spring.',
		},
		portfolio: ['title1', 'title2'],
	}),
}
</script>

<style lang='scss'>
@import '@/scss/dashboard/profile.scss'
</style>
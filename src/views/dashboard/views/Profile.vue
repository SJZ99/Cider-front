<template>
  <div id="background-profile">
		<v-row>
			<v-col cols="12" sm="5">
				<v-card
					id="profile-card"
				>
					<v-img
						:src="card_img"
						height="200px"
						@click="overlay = true"
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
			</v-col>
			<v-spacer />
			<v-col cols="12" sm="7">
				<div id="profile-form">
					<material-card>
						<template v-slot:heading>
							<div class="text-h3 font-weight-light">
								Edit Profile
							</div>

							<div class="text-subtitle-1 font-weight-light">
								Complete your profile
							</div>
						</template>

						<v-form>
							<v-container class="py-0">
								<v-row>
									<v-col
										cols="12"
										md="4"
									>
										<v-text-field
											label="Nationality"
											:value="writer.nationality"
										/>
									</v-col>

									<v-col
										cols="12"
										md="4"
									>
										<v-text-field
											label="User Name"
											:value="writer.name"
											disabled
										/>
									</v-col>

									<v-col
										cols="12"
										md="4"
									>
										<v-text-field
											label="Email Address (disabled)"
											:value="writer.email"
											disabled
										/>
									</v-col>

									<v-col
										cols="12"
										md="6"
									>
										<v-text-field
											label="Pen Name"
											:value="writer.penName"
										/>
									</v-col>

									<v-col
										cols="12"
										md="6"
									>
										<v-text-field
											label="Experience"
											:value="writer.experience"
										/>
									</v-col>			

									<v-col cols="12">
										<v-textarea
											label="Intro"
											:value="writer.intro"
										/>
									</v-col>

									<v-col
										cols="12"
										class="text-right"
									>
										<v-btn
											color="success"
											class="mr-0"
										>
											Update Profile
										</v-btn>
									</v-col>
								</v-row>
							</v-container>
						</v-form>
					</material-card>
				</div>
			</v-col>
			<v-spacer />
		</v-row>

		<v-overlay 
			:value="overlay"
		>
			<v-item-group>
				<v-container>
					<v-row>
						<v-col
							v-for="(img, id) in imgs"
							:key="id"
							cols="6"
							sm="4"
						>
							<v-item
								v-slot="{ active, toggle }"
								id="item"
							>
								<v-card
									:color="active ? 'primary' : ''"
									class="d-flex"
									dark
									@click="toggle; overlay = false; card_img = img"
								>
									<v-img :src="img" id="img"></v-img>
								</v-card>
							</v-item>
						</v-col>
					</v-row>
				</v-container>
			</v-item-group>
		</v-overlay>

  </div>
</template>

<script>
import MaterialCard from '@/views/dashboard/components/MeterialCard.vue'
export default {
	data: () => ({
		show: false,
		overlay: false,
		writer: {
			name: 'Yu_Yue',
			experience: '2020-2021 #7636 E.E.L',
			intro: 'Java lover, using java over two years. Touch frontend by vue through Spring.',
			nationality: 'ROC (Taiwan)',
			penName: 'Yu_Yue',
			email: '9987jdvrb@gmail.com'
		},
		portfolio: ['title1', 'title2'],
		imgs: [
			require('@/assets/bar/city.jpg'),
			require('@/assets/bar/sunset.jpg'),
			require('@/assets/profile/aurora.jpg'),
			require('@/assets/profile/keyboard.jpg'),
			require('@/assets/profile/cloud-org.jpg'),
			require('@/assets/profile/cloud-blu.jpg'),
		],
		card_img: require('@/assets/bar/city.jpg'),
	}),

	components: {
		'material-card': MaterialCard,
	},

}
</script>

<style lang='scss'>
@import '@/scss/dashboard/profile.scss'
</style>
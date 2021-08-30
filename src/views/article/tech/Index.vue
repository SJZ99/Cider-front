<template>
	<v-app>
		<Header v-if="this.$router.currentRoute.meta.header"></Header>
		<router-view />
	</v-app>
</template>

<script>

import Header from '@/components/Header.vue'
export default {
	components: {
		Header
	},
}
</script>

<style>

</style>
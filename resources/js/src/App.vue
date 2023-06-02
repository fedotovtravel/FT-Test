<template>
	<div :class="{'app_lock': IS_SHOW_SPINNER}">
		<div v-if="IS_SHOW_SPINNER" class="spinner-wrapper">
			<div class="loading-spinner">
				<clip-loader
					class="preloader" :color="'#F77821'"
					:loading="true" :size="70" size-unit="px"/>
			</div>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
import {mapGetters} from 'vuex'
import {ClipLoader} from '@saeris/vue-spinners'
export default {
	name: 'app',
	components: { ClipLoader },
	data () {
		return {

		}
	},
	computed: {
		...mapGetters(['IS_SHOW_SPINNER'])
	},
}
</script>
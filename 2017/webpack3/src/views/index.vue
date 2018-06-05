<template>
	<div>
		这是{{page}}页面<p class="red">wefewfe</p><div class="img"></div>
		<span @click="action">action</span>
		<child :name="'huaping'"></child>
	</div>
</template>
<style lang="stylus">
	.red
		color blue
	.img
		width 300px
		height 300px
		background url("/src/images/demo.jpg") no-repeat 0 0
</style>
<script>
import { child, action } from './child.vue';
const a = 1212;
const arr = [1,2,3];
console.log(arr.findIndex((item) => item < 3))
import "../style/style.css"
export default {
	data: function () {
		return {
			page: 'index'
		}
	},
	components: {
		child
	},
	methods: {
		action() {
			action({name: 'huaping'})
		}
	}
}
</script>
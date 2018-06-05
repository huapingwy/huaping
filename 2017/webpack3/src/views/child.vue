<template>
	<div>props{{name}}</div>
</template>
<style>
	
</style>
<script>
	import Vue from 'vue';
	const initObject = {
		props: {
			name: String
		}
	};
	export default initObject
	export function action (name = {}) {
		console.log(name)
	}
</script>
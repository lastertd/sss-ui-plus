<template>

	<s-button type="default"  @click="handleClick"     >click me</s-button>


</template>

<script setup lang="ts">
import {notify, confirm, message} from "@sss-ui-plus/components"

const handleClick = function (){
	notify({
		title:'hhh',
		type:'success'
	})
}

</script>


<style lang="less">


#app {
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	gap: 10px;
	padding-top: 50px;
	color: var(--sss-color-black-light);
}


</style>




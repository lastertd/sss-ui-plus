
<template>
	<component :style="buttonSdl" >
	</component>
</template>

<script lang="ts">

import {computed} from "vue";

const buttonSdl = computed(() => {
	return{
		'--sss-com-css-var':props.cssVar
	}
})
</script>

<style>

.s-button{
	--sss-button-font-color:black;
	--sss-button-bg-color:gray
}
.s-button{
	color: var(--sss-button-font-color);
	background-color: var(--sss-button-bg-color);
}
.s-button--success{
	--sss-button-font-color:white;
	--sss-button-bg-color:green;
}

</style>
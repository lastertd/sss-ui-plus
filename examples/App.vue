<template>

<!--<s-dialog v-model="f" @closed="handleClosed"> 111</s-dialog>-->

	<s-button type="primary" prefix-icon="medal">ccc</s-button>




</template>

<script setup lang="ts">

import {ref} from "@vue/runtime-core";
// import {message} from "../packages/SMessage"
import {notify} from "../es/index"
import {nextTick, onMounted} from "vue";

const f = ref(true);

const handleClosed = ()  => {
	console.log("dialog closed!")
}


onMounted( async () => {

})

</script>


<style lang="less">
#app {
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	gap: 10px;
	margin-top: 50px;
	color: var(--sss-color-black-dark);
}



</style>




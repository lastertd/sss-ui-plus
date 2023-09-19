<template>
	<s-row horizontal="flex-start" :gap="30">
		<s-button
			v-for="i in 3"
			:key="i"
			@mouseover="(e) => (buttonRef = e.currentTarget)"
		>hover me
		</s-button>
	</s-row>


	<s-floating :reference="buttonRef" floating-class="floating-singleton-ttt" trigger="hover" :close-delay="300">
		hello!
	</s-floating>
</template>

<script setup>

import {ref} from "vue";

const buttonRef = ref();

</script>

<style  lang="less">
.floating-singleton-ttt{
	transition: all  .3s ease;
}
</style>
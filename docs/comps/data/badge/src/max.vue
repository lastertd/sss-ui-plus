<template>
	<s-row justify-content="flex-start" :gap="25">
		<s-button @click="foo">click me</s-button>
		<s-badge :value="num" >
			<s-button>default</s-button>
		</s-badge>

		<s-badge :value="num" maxvalue="110">
			<s-button>default</s-button>
		</s-badge>

	</s-row>



</template>

<script setup lang="ts">

import {ref} from "vue";

const num = ref(90);

const foo  = () => num.value++;

</script>




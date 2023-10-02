<template>
	<s-row justify-content="center">
		<s-button ref="reference">hover me</s-button>
	</s-row>

	<s-floating :reference="reference" trigger="hover">
		floating element
	</s-floating>


</template>

<script setup lang="ts">

import {ref} from "vue";

const reference = ref();

</script>




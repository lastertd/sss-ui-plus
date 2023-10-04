<template>
	<s-row justify-content="flex-start" :gap="25">
		<s-button ref="btn" @click="foo">click me</s-button>
	</s-row>


</template>

<script setup lang="ts">

import {ref} from "vue";
import {useBadge} from "sss-ui-plus/es";

const btn = ref(null);
const value = ref(90);

const badge = useBadge(btn, {
	value
});

const foo = () => {
	value.value++;
}

</script>




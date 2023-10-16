<template>
	<component
		:is="props.tag"
		:class="kls"
	>
		<slot/>
	</component>
</template>

<script setup lang="ts">

import {useNS} from "@sss-ui-plus/hooks";
import {SColProps} from "./col";
import {computed} from "vue";

defineOptions({
	name: 's-col',
	inheritAttrs: true,
})
const ns = useNS('col');
const props = defineProps(SColProps);
const kls = computed(() => {
	return[
		ns.namespace,
		ns.bb('span', props.span),
		ns.bb('offset', props.offset),

	]
})


</script>



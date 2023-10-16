<template>
	<ul :class="kls">
		<slot/>
	</ul>
</template>
<script setup lang="ts">

import {STimelineProps} from "./timeline";
import {computed} from "vue";
import {useNS} from "@sss-ui-plus/hooks";

defineOptions({
	name: "s-timeline",
	inheritAttrs: true
})
const ns = useNS('timeline');
const props = defineProps({...STimelineProps});
const kls = computed(() => {
	return [
		ns.namespace,
		ns.m(props.direction),
		ns.m(props.size)
	]
})


</script>




<script setup lang="ts">
import {SPartial} from "@sss-ui-plus/components"
import {SBadgeProps} from "./badge.ts";
import {computed, ref, useSlots, watch} from "vue";
import {useBadge} from "@sss-ui-plus/hooks/useBadge.ts";

defineOptions({
	name:"SBadge",
	inheritAttrs:false
})

const props = defineProps({...SBadgeProps});
const slot = useSlots();
let target = ref<HTMLElement | null>(null);

// 最大值省略
const val = computed(() => {
	if (props.maxvalue !== undefined && typeof props.value === "number"){
		if (props.value > props.maxvalue){
			return `${props.maxvalue}+`
		}
		else return props.value
	}else {
		return props.value
	}
})


const {hidden, show, setTxt, stop} = useBadge(target, props.type, val);

watch(() => props.hidden,(flag) => {
	if (flag) hidden();
	else show();
})


defineExpose({
	hidden,
	show,
	setTxt,
	stop
})




</script>

<template>
	<SPartial v-if="slot.default" ref="target" v-bind="$attrs">
		<slot></slot>
	</SPartial>

	<span v-else ref="target"  style="display: inline-block;width: 10px;height: 10px">
	</span>


</template>


<script setup lang="ts">
import {SPartial} from "../../abstract/index"
import {SBadgeProps} from "./badge";
import {computed, ref, useSlots, watch} from "vue";
import {useBadge} from "@sss-ui-plus/hooks";

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


const {hidden, show, setTxt, stop} = useBadge(target, {
	value:val,
	type:props.type,
	isEmpty:props.empty
});

watch(() => props.hidden,(flag) => {
	if (flag) hidden();
	else show();
})


defineExpose({
	/**
	 * @description 隐藏badge元素
	 */
	hidden,
	/**
	 * @description 展示badge元素
	 */
	show,
	/**
	 * @description 设置badge元素文本
	 */
	setTxt,
	/**
	 * @description 停止使用badge元素
	 */
	stop
})




</script>

<template>
	<SPartial
		v-if="slot.default"
		ref="target"
		v-bind="$attrs"
		:class="{
			's-badge--empty':props.empty
		}"
	>
		<slot></slot>
	</SPartial>

	<span v-else ref="target"  style="display: inline-block;width: 10px;height: 10px">
	</span>


</template>


<template>
	<SPartial
		v-if="slot.default"
		ref="target"

	>
		<slot></slot>
	</SPartial>

	<span v-else ref="target" style="display: inline-block;width: 10px;height: 10px">
	</span>


</template>
<script setup lang="ts">
import {SPartial} from "../../abstract/index"
import {SBadgeProps} from "./badge";
import {computed, ref, useAttrs, useSlots, watch} from "vue";
import { useBadge, useNS} from "@sss-ui-plus/hooks";
import {toRef} from "@vue/runtime-core";
import {isEmpty, isNumber} from "@sss-ui-plus/utils";


defineOptions({
	name: "s-badge",
	inheritAttrs: false
})
const ns = useNS('badge');
const props = defineProps({...SBadgeProps});
const slot = useSlots();



let target = ref<HTMLElement | null>(null);


// 最大值省略
const val = computed(() => {
	if (!isEmpty(props.maxvalue) && isNumber(props.value) && props.value > Number(props.maxvalue)) {
		return `${props.maxvalue}+`
	}
	return props.value

})


const {hidden, show, setTxt, stop} = useBadge(target, {
	value: val,
	type: toRef(props, 'type'),
	variant: toRef(props, 'variant'),
});


watch(() => props.hidden, (flag) => flag ? hidden() : show())


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




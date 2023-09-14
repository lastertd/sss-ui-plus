<script setup lang="ts">
import "./button.less";
import SIcon from "../../SIcon/src/icon.vue";
import {SButtonProps, SButtonEmits} from "./button.ts"


defineOptions({
	name: "SButton",
	inheritAttrs: true
})


const props = defineProps({...SButtonProps})
const emits = defineEmits({...SButtonEmits})


const handleClick = (evt: Event) => {
	emits("click", evt)
}




</script>

<template>
	<button
		ref="container"
		class="sss-button"
		@click="handleClick($event)"
		:class="[
			{
				'is-round': props.round,
				'is-circle': props.circle,
				'is-disabled': props.disabled,
				'is-loading': props.loading,
				'is-empty': props.empty,
				'is-ghost': props.ghost,

			},
            type? `sss-button-type-${props.type}`:'',
            size? `sss-button-size-${props.size}`:'',
		]"
		:disabled="props.disabled || props.loading"
		:type="props.nativeType"

	>
		<s-icon :target="props.prefixIcon"  :vertical-padding="0"></s-icon>
		<slot></slot>
		<s-icon :target="props.suffixIcon" :vertical-padding="0"></s-icon>

	</button>
</template>
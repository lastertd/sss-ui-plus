<script setup lang="ts">
import "./icon.less"
import {SIconProps} from "./icon.ts";
import {onMounted, ref} from "vue";

defineOptions({
	name: "SIcon",
	inheritAttrs: false,
})

const icon = ref<HTMLElement | undefined>(undefined);

const props = defineProps({...SIconProps})


onMounted(() => {
	const el = icon.value!;

	if (props.color) {
		el.style.color = props.color;

	}
	if (props.noPadding) {
		el.style.padding = '0';
	}

})


</script>

<template>
	<component
		ref="icon"
		:is="props.type"
		:for="props.for"
		v-if="props.target"
		class=" sss-icon iconfont"
		:class="[{
			'is-rotating':props.rotating
		},
			`sss-${target}`

		]"
		v-bind="$attrs"
	></component>


</template>


<script setup lang="ts">
import {SIconProps} from "./icon";
import {nextTick, onMounted, ref, watch} from "vue";

defineOptions({
	name: "SIcon",
	inheritAttrs: false,
})

const icon = ref<HTMLElement | null>(null);

const props = defineProps({...SIconProps})


watch(() => props.target,(t) => {
	if (!t){
		return
	}
	nextTick().then(() => {
		if (props.noPadding){
			icon.value!.style.padding = '0'
		}
		if (props.color){
			icon.value!.style.color = props.color;
		}
	})
},{immediate:true})



</script>

<template>
	<component
		ref="icon"
		:is="props.type"
		:for="props.for"
		v-if="props.target"
		class=" s-icon iconfont"
		:class="[{
			'is-rotating':props.rotating
		},
			`sss-${target}`

		]"
		v-bind="$attrs"
	></component>


</template>


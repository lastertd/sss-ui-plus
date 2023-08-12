<template>


	<i
		ref="icon"
		v-if="props.target"
		class=" sss-icon iconfont"
		:class="[{
			'is-rotating':props.rotating
		},
			`sss-${target}`

		]"
	></i>




</template>

<script setup lang="ts">
import "./icon.less"
import {onMounted, ref} from "vue";

defineOptions({
	name: "SIcon",
})

const icon = ref<Element | undefined>(undefined);

const props = defineProps({
	target:String,
	verticalPadding:Number,
	rotating:Boolean,
	color:String
})



onMounted(() => {
	const el = icon.value as HTMLElement;

	if (props.verticalPadding !== undefined && props.target) {
		el.style.paddingTop = `${props.verticalPadding}px`;
		el.style.paddingBottom = `${props.verticalPadding}px`;
	}
	if (props.color) {
		el.style.color = props.color;
	}

})


</script>




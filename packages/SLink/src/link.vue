<template>
	<a
		ref="a"
		class="sss-link "
		:href="props.href"
		:class="[
			`sss-link-type-${props.type}`,
			{
				'has-underline':props.underline,
				'is-disabled':props.disabled
			}
		]"


	>
		<s-icon :target="props.prefixIcon" class="sss-link-prefix-icon"></s-icon>
		<span>
			<slot></slot>
		</span>
		<s-icon :target="props.suffixIcon" class="sss-link-suffix-icon"></s-icon>
	</a>

</template>

<script setup lang="ts">
import SIcon from "../../SIcon/src/icon.vue";
import {SLinkProps} from "./link";
import {onMounted, ref} from "vue";

defineOptions({
	name:'SLink',
})


const props = defineProps({...SLinkProps});
const a = ref<Element | undefined>(undefined);

onMounted(() => {
	const el = a.value as HTMLElement;
	el.style.pointerEvents = 'none';
})

</script>




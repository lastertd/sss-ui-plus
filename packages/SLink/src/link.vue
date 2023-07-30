<script setup lang="ts">
import SIcon from "../../SIcon/src/icon.vue";
import {SLinkProps} from "./link";

defineOptions({
	name:'SLink',
})


const props = defineProps({...SLinkProps});

</script>

<template>
	<a
		class="sss-link "
		:href="props.href"
		:class="[
			`sss-link-type-${props.type}`,
			{
				'has-underline':props.underline
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

<style scoped lang="less">


</style>
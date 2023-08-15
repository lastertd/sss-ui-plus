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
		@click.prevent="handleClick"

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


const handleClick = () => {
	if (!props.href || props.disabled) return;

	if (props.jumpMethod === 'push') {
		window.location.href = props.href
	}
	else if (props.jumpMethod === 'replace') {
		window.location.replace(props.href);
	}
	else if (props.jumpMethod === 'newView') {
		window.open(props.href);
	}
}

</script>




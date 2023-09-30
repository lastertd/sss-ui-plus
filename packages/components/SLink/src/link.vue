<template>
	<a
		ref="a"
		:class="linkKls"
		:href="props.href"
		v-bind="$attrs"
		@click.prevent="handleClick"

	>
		<s-icon :target="props.prefixIcon" :class="linkNS.e('icon')" ></s-icon>
		<span :class="linkNS.e('inner')">
			<slot></slot>
		</span>
		<s-icon :target="props.suffixIcon" :class="linkNS.e('icon')"></s-icon>
	</a>

</template>

<script setup lang="ts">
import {SLinkProps} from "./link";
import {SIcon} from "../../SIcon";
import {computed, ref} from "vue";
import {useNS} from "@sss-ui-plus/hooks/useNS";

defineOptions({
	name: 'SLink',
	inheritAttrs:false
})


const props = defineProps({...SLinkProps});
const a = ref<Element | undefined>(undefined);
const linkNS = useNS('link');

const linkKls = computed(() => {
	return [
		linkNS.namespace,
		linkNS.m(props.type),
		linkNS.is(props.disabled, 'disabled'),
		linkNS.is(props.underline, 'underline'),

	]
})


const handleClick = () => {
	if (!props.href || props.disabled) return;

	if (props.jumpMethod === 'push') {
		window.location.href = props.href
	} else if (props.jumpMethod === 'replace') {
		window.location.replace(props.href);
	} else if (props.jumpMethod === 'newView') {
		window.open(props.href);
	}
}

</script>




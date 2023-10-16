<template>
	<a
		ref="a"
		:class="kls"
		:href="props.href"
		@click.prevent="handleClick"

	>
		<s-icon :target="props.prefixIcon" :class="ns.e('icon')" ></s-icon>
		<span :class="ns.e('inner')">
			<slot></slot>
		</span>
		<s-icon :target="props.suffixIcon" :class="ns.e('icon')"></s-icon>
	</a>

</template>

<script setup lang="ts">
import {SLinkProps} from "./link";
import {SIcon} from "../../SIcon";
import {computed, ref} from "vue";
import {useNS} from "@sss-ui-plus/hooks/useNS";

defineOptions({
	name: 's-link',
	inheritAttrs:true
})
const ns = useNS('link');
const props = defineProps({...SLinkProps});
const kls = computed(() => {
	return [
		ns.namespace,
		ns.m(props.type),
		ns.is(props.disabled, 'disabled'),
		ns.is(props.underline, 'underline'),

	]
})


const a = ref<Element | undefined>(undefined);


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




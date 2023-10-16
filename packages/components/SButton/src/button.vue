<template>
	<button
		ref="container"
		v-bind="$attrs"
		:class="kls"
		:disabled="(props.disabled || props.loading)"
		:type="props.nativeType"
		@click="handleClick($event)"


	>
		<s-icon v-if="loading" target="loading" rotating></s-icon>
		<s-icon v-if="!props.loading" :target="props.prefixIcon"></s-icon>
		<slot></slot>
		<s-icon v-if="!props.loading" :target="props.suffixIcon"></s-icon>

	</button>
</template>


<script setup lang="ts">
import {SButtonProps, SButtonEmits} from "./button"
import {SIcon} from "../../SIcon";
import {computed} from "vue";
import {useNS} from "@sss-ui-plus/hooks/useNS";


defineOptions({
	name: "s-button",
	inheritAttrs: false
})
const ns = useNS('button');
const props = defineProps({...SButtonProps})
const emits = defineEmits({...SButtonEmits})
const kls = computed(() => {
	return [
		ns.namespace,
		ns.m(props.type),
		ns.m(props.size),
		ns.m(props.variant),
		ns.is(props.status),
		ns.is(props.disabled, 'disabled'),
		ns.is(props.loading, 'loading'),

	]


})


const handleClick = (evt: MouseEvent) => {
	emits("click", evt)
}


</script>


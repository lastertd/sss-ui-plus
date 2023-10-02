<template>
	<button
		ref="container"
		:class="buttonKls"
		:disabled="props.disabled || props.loading"
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
	name: "SButton",
	inheritAttrs: true
})


const props = defineProps({...SButtonProps})
const emits = defineEmits({...SButtonEmits})
const buttonNS = useNS('button');


const buttonKls = computed(() => {
	return [
		buttonNS.namespace,
		buttonNS.m(props.type),
		buttonNS.m(props.size),
		buttonNS.m(props.variant),
		buttonNS.is(props.status),
		buttonNS.is(props.disabled, 'disabled'),
		buttonNS.is(props.loading, 'loading'),

	]


})


const handleClick = (evt: Event) => {
	emits("click", evt)
}


</script>


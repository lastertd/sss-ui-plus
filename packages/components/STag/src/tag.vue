<template>
	<transition name="s-transition-scaleHorizontal" appear>
		<div class="s-tag"
		     :class="tagKls"
		     @click="emits('click',$event)"
		>
		<span class="s-tag__content">
			<slot/>
		</span>
			<s-icon class="s-tag__icon" v-if="props.closable"
			        target="close"
			        @click.stop="emits('close', $event)"
			></s-icon>
		</div>
	</transition>

</template>

<script setup lang="ts">
import {STagEmits, STagProps} from "./tag";
import {computed} from "vue";

defineOptions({
	name: "STag",
	inheritAttrs: true
})


const props = defineProps({...STagProps});
const emits = defineEmits({...STagEmits});
const tagKls = computed(() => {
	const type = props.type ? `s-tag--${props.type}` : '';
	const size = props.size ? `s-tag--${props.size}` : '';
	const theme = props.theme ? `s-tag--${props.theme}` : '';
	const status = props.status ? `is-${props.status}` : '';


	return [
		type,
		size,
		theme,
		status
	]
})


</script>




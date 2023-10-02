<template>
	<transition name="s-transition-scaleHorizontal" appear>
		<div :class="tagKls"
		     @click="emits('click',$event)"
		>
		<span :class="tagNS.e('content')">
			<slot/>
		</span>
			<s-icon
				v-if="props.closable"
				:class="tagNS.e('icon')"
				target="close"
				@click.stop="emits('close', $event)"
			></s-icon>
		</div>
	</transition>

</template>

<script setup lang="ts">
import {STagEmits, STagProps} from "./tag";
import {computed} from "vue";
import {useNS} from "@sss-ui-plus/hooks";

defineOptions({
	name: "STag",
	inheritAttrs: true
})


const props = defineProps({...STagProps});
const emits = defineEmits({...STagEmits});
const tagNS = useNS('tag');

const tagKls = computed(() => {
	return [
		tagNS.namespace,
		tagNS.m(props.type),
		tagNS.m(props.size),
		tagNS.m(props.variant),
		tagNS.is(props.status),
	]
})


</script>




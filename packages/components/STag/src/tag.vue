<template>
	<transition name="s-transition-scaleHorizontal" appear>
		<div :class="kls"
		     @click="emits('click',$event)"
		>
		<span :class="ns.e('content')">
			<slot/>
		</span>
			<s-icon
				v-if="props.closable"
				:class="ns.e('icon')"
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
	name: "s-tag",
	inheritAttrs: true
})
const ns = useNS('tag');
const props = defineProps({...STagProps});
const emits = defineEmits({...STagEmits});
const kls = computed(() => {
	return [
		ns.namespace,
		ns.m(props.type),
		ns.m(props.size),
		ns.m(props.variant),
		ns.is(props.status),
	]
})


</script>




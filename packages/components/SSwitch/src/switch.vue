<template>
	<div
		:class="kls"
		:style="sdl"
		@click="handleClick"
	>
		<input :class="ns.e('input')" type="radio" placeholder="ヾ(≧▽≦*)o">

		<span
			v-if="props.textStatus !== 'inside'"
			:class="[
				ns.e('label'),
				ns.em('label', 'left'),
				ns.is('active', !props.modelValue)
			]"
		>
			<s-icon :target="props.inactiveIcon"></s-icon>
			{{ props.inactiveText }}
		</span>

		<div
			:class="[
				 ns.e('inner'),
				 ns.is('round')
		     ]"
			v-bind="$attrs"

		>
			<span :class="[
					 ns.e('trigger'),
					 ns.is('round')
				   ]"
			>
				<s-icon
					v-if="props.triggerIcon && !props.loading"
					class="s-switch__trigger__icon"
					:target="props.triggerIcon"
				></s-icon>
				<s-icon v-if="props.loading" target="loading" rotating></s-icon>
			</span>


			<switch-txt
				v-if="props.textStatus === 'inside'"
				:class="ns.e('text')"
				:txt="text"
				:active="props.modelValue"
			></switch-txt>


		</div>

		<span
			v-if="props.textStatus !== 'inside'"
			:class="[
				ns.e('label'),
				ns.em('label', 'right'),
				ns.is('active', props.modelValue)
			]"

		>
			<s-icon :target="props.activeIcon"></s-icon>

			{{ props.activeText }}
		</span>

	</div>
</template>
<script setup lang="ts">
import {SSwitchEmits, SSwitchProps} from "./switch";
import {computed} from "vue";
import switchTxt from "./switchTxt.vue"
import {useNS} from "@sss-ui-plus/hooks";
import {getClrVar} from "@sss-ui-plus/utils";

defineOptions({
	name: 's-switch',
	inheritAttrs: false
})
const ns = useNS('switch');
const props = defineProps({...SSwitchProps});
const emits = defineEmits({...SSwitchEmits});
const kls = computed(() => {
	return [
		ns.namespace,
		ns.is('checked', props.modelValue),
		ns.is('disabled', props.disabled),
		ns.is('loading', props.loading),
		ns.m(props.size),
	]
})
const sdl = computed(() => {
	const color = props.color? props.color: props.type?  getClrVar(props.type) : getClrVar('primary');
	return {
		[ns.cssVar('color')]: color
	}
})


const text = computed(() => {
	if (props.modelValue) {
		return props.activeText;
	} else {
		return props.inactiveText;
	}
})


const handleClick = () => {
	const done = () => {
		if (props.loading || props.disabled) return
		if (props.modelValue) {
			emits("update:modelValue", false);
			emits("change", "off")
		} else {
			emits("update:modelValue", true);
			emits("change", "on");
		}
	}

	props.beforeChange && props.beforeChange(done);
	props.beforeChange || done();

}


</script>




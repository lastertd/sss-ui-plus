<template>
	<div
		:class="switchKls"
		:style="switchSdl"
		@click="handleClick"
	>
		<input :class="switchNS.e('input')" type="radio" placeholder="ヾ(≧▽≦*)o">

		<span
			v-if="props.textStatus !== 'inside'"
			:class="[
				switchNS.e('label'),
				switchNS.em('label', 'left'),
				switchNS.is('active', !props.modelValue)
			]"
		>
			<s-icon :target="props.inactiveIcon"></s-icon>
			{{ props.inactiveText }}
		</span>

		<div
			:class="[
				 switchNS.e('inner'),
				 switchNS.is('round')
		     ]"
			v-bind="$attrs"

		>
			<span :class="[
					 switchNS.e('trigger'),
					 switchNS.is('round')
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
				:class="switchNS.e('text')"
				:txt="text"
				:active="props.modelValue"
			></switch-txt>


		</div>

		<span
			v-if="props.textStatus !== 'inside'"
			:class="[
				switchNS.e('label'),
				switchNS.em('label', 'right'),
				switchNS.is('active', props.modelValue)
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

defineOptions({
	name: 'SSwitch',
	inheritAttrs: false
})

const props = defineProps({...SSwitchProps});
const emits = defineEmits({...SSwitchEmits});
const switchNS = useNS('switch');

const switchKls = computed(() => {
	return [
		switchNS.namespace,
		switchNS.is('checked', props.modelValue),
		switchNS.is('disabled', props.disabled),
		switchNS.is('loading', props.loading),
		switchNS.m(props.size),
	]
})

const switchSdl = computed(() => {
	const color = props.color? props.color: props.type?  `var(--sss-color-${props.type})` : 'var(--sss-color-primary)';
	return {
		'--sss-switch-color': color
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




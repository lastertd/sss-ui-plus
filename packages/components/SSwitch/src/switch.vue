<template>
	<div
		class="s-switch"
		:class="[{
			'is-checked':props.modelValue,
			'is-disabled':props.disabled,
			's-switch--small':props.size ==='small',
			's-switch--large':props.size === 'large'
			},
		]"
		@click="handleClick"
	>
		<input class="s-switch__input" type="radio" placeholder="ヾ(≧▽≦*)o">

		<span class="s-switch__label s-switch__label--left"
		      :class="[{'is-active':!props.modelValue}]"
		      v-if="!props.inlineText"
		>
			<s-icon class="s-switch__label__icon" :target="props.inactiveIcon"></s-icon>
			{{ props.inactiveText }}
		</span>

		<div class="s-switch__inner is-round"
		     v-bind="$attrs"
		>
			<span class="s-switch__trigger is-round">
				<s-icon
					v-if="props.triggerIcon"
					class="s-switch__trigger__icon"
					:target="props.triggerIcon"
					:rotating="props.rotating"
				></s-icon>
			</span>


			<switch-txt
				class="s-switch__text" v-if="props.inlineText"
				:txt="text"
				:active="props.modelValue"
			></switch-txt>


		</div>

		<span class="s-switch__label s-switch__label--right"
		      :class="[{'is-active':props.modelValue}]"
		      v-if="!props.inlineText"
		>
			<s-icon class="s-switch__label__icon" :target="props.activeIcon"></s-icon>

			{{ props.activeText }}
		</span>

	</div>
</template>
<script setup lang="ts">
import {SSwitchEmits, SSwitchProps} from "./switch";
import {computed} from "vue";
import switchTxt from "./switchTxt.vue"

defineOptions({
	name: 'SSwitch',
	inheritAttrs: false
})

const props = defineProps({...SSwitchProps});
const emits = defineEmits({...SSwitchEmits})

const text = computed(() => {
	if (props.modelValue) {
		return props.activeText;
	} else {
		return props.inactiveText;
	}
})


const handleClick = () => {
	const done = () => {
		if (props.loading) return
		if (props.modelValue) {
			emits("update:modelValue", false);
			emits("change", "off")
		} else {
			emits("update:modelValue", true);
			emits("change", "on");
		}
	}
	if (props.beforeChange) {
		props.beforeChange(done);
	} else done();
}


</script>




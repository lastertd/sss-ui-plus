<template>
	<div
		class="sss-switch-container"
		:class="[{
			'is-checked':props.modelValue,
			'is-disabled':props.disabled
			},
		]"
	>
		<input type="radio">

		<div class="sss-switch-default-text "
		     :class="[{'is-active':!props.modelValue}]"
		     v-if="!props.inlineText"
		>
			<s-icon :target="props.defaultIcon" style="padding: 0 5px 0 0"></s-icon>
			{{props.defaultText}}
		</div>

		<div class="sss-switch is-round"
			v-bind="$attrs"
			@click="handleClick"

		>


			<span class="sss-switch-trigger is-round"

			>
				<s-icon
					v-if="props.loading"
					class="sss-switch-trigger-icon"
					target="loading"
					rotating
					style="padding: 0;font-size: 19px"
				></s-icon>
			</span>
			<span class="sss-switch-text" v-if="props.inlineText">
				<s-icon :target="icon" style="padding: 0 5px 0 0"></s-icon>
				{{text}}
			</span>


		</div>

		<div class="sss-switch-active-text"
		     :class="[{'is-active':props.modelValue}]"
		     v-if="!props.inlineText"
		>
			<s-icon :target="props.activeIcon" style="padding: 0 5px 0 0"></s-icon>

			{{props.activeText}}
		</div>

	</div>
</template>


<script setup lang="ts">
import "./switch.less"
import {computed, ref} from "vue";
import {SSwitchEmits, SSwitchProps} from "./switch";

defineOptions({
	name: 'SSwitch',
	inheritAttrs: false
})

const props = defineProps({...SSwitchProps});
const emits = defineEmits({...SSwitchEmits})

const text = computed( () => {
	if (props.modelValue){
		return props.activeText;
	}else {
		return props.defaultText;
	}
})

const icon = computed(() => {
	if (props.modelValue) {
		return props.activeIcon;
	}
	else {
		return props.defaultIcon;
	}
})


const done = () => {
	if (props.loading) return
	if (props.modelValue) {
		emits("update:modelValue", false);
		emits("change", "default")
	} else {
		emits("update:modelValue", true);
		emits("change","active");
	}
}

const handleClick = () => {
	if (props.beforeChange){
		props.beforeChange(done);
	}else done();
}


</script>



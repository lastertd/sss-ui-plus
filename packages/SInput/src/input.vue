<template>
	<div
		class="sss-input"
		:class="[
			{
				'is-disabled':props.disabled
			}
		]"
	>
<!--		input prefixSlot-->
		<div class="sss-input-prefixSlot" v-if="$slots.prefixSlot">
			<slot name="prefixSlot"></slot>
		</div>

<!--		input prefix icon-->
		<label :for="props.id" @mousedown.prevent v-if="props.prefixIcon">
			<s-icon class="sss-input-icon" style="padding-right: 0" :target="props.prefixIcon"></s-icon>
		</label>


		<input
			ref="inner"
			class="sss-input-inner"
			:type="props.type"
			:id="props.id"
			:maxlength="props.maxLength"
			:minlength="props.minLength"
			:placeholder="props.placeholder"
			:disabled="props.disabled"
			:readonly="props.readonly"
			:autofocus="props.autofocus"
			v-bind="$attrs"
			@input="handleInput"
			@focus="handleFocus"
			@blur="handleBlur"
			@compositionstart="handleCompositionStart"
			@compositionupdate="handleCompositionUpdate"
			@compositionend="handleCompositionEnd"
		>

<!--		input suffix icon-->
		<label :for="props.id" @mousedown.prevent v-if="props.suffixIcon">
			<s-icon class="sss-input-icon" :target="props.suffixIcon"></s-icon>
		</label>

<!--		input word limit icon-->
		<label
			v-if="showWordLimit"
			class="sss-input-limit"
			:data-overflow="modelValue.length > (props.maxLength as number)"
		>
			<s-icon target="warn" v-if="modelValue.length > (props.maxLength as number)"></s-icon>
			{{ modelValue.length }} / {{ props.maxLength }}
		</label>

		<s-icon
			v-if="showCloseIcon"
			class="sss-input-icon sss-input-icon-close"
			target="cricle-close"
			@click="handleCloseIconClick"
			tabindex="0"
			@mousedown.prevent

		></s-icon>
		<s-icon
			v-if="showEyeIcon"
			class="sss-input-icon sss-input-icon-eye"
			target="eye"
			@click="handleEyeIconClick"
			tabindex="0"
			@mousedown.prevent

		></s-icon>


		<!--		input suffixSlot-->
		<div class="sss-input-suffixSlot" v-if="$slots.suffixSlot">
			<slot name="suffixSlot"></slot>
		</div>


		<!--	input alert-->
		<transition name="sss-transition-down-fade">
			<label v-if="alertFlag"  class="sss-input-alert" :for="id" >
				<s-icon :target="alertIcon"></s-icon>
				{{ alertText }}
			</label>
		</transition>
	</div>





</template>

<script setup lang="ts">
import "./input.less"
import {SInputEmits, SInputProps} from "./input";
import SIcon from "../../SIcon/src/icon.vue";

import {computed, onMounted, Ref, watch, ref} from "vue";

defineOptions({
	name: "SInput",
	inheritAttrs:false
})

const props = defineProps({...SInputProps});
const emits = defineEmits({...SInputEmits});


const inner:Ref<HTMLElement | undefined> = ref(undefined);
/**
 * 标志是否正在组合中文
 */
const composing:Ref<Boolean> = ref(false);
/**
 * 判断是不是第一次输入，此时如果没有绑定v-model将会控制台提示
 */
let f = true;


/**
 * 用作校验
 */
const alertFlag = ref(false);
const alertText = ref("default text");
const alertIcon = ref("error");
const alert = function (text:string, icon?:string) {
	alertFlag.value = true;
	alertText.value = text;
	alertIcon.value = icon ? icon:"error";

}


const showEyeIcon = computed((): Boolean => {
	if (props.modelValue === undefined || props.modelValue === null || props.modelValue === '')
		return false

	return props.showPassword && props.type === 'password' && !props.disabled
})

const showCloseIcon = computed((): Boolean => {
	if (props.modelValue === undefined || props.modelValue === null || props.modelValue === '')
		return false

	return props.clearable && !props.readonly && !props.disabled
})


//获取v-model的绑定值
const modelValue = computed(() => {
	if (props.modelValue === undefined || props.modelValue === null) return '';
	return props.modelValue.toString();
});


const handleInput = function (evt: Event) {
	if (props.readonly) return
	const input = evt.target as HTMLInputElement;

	//没有绑定v-model
	if (props.modelValue === undefined || props.modelValue === null) {
		input.value = '';
		logOfMissBind(input);
	}

	if (composing.value) return;

	emits("update:modelValue", input.value);
	emits('input', input.value);
}

const handleCloseIconClick = function () {
	const input = inner.value as HTMLInputElement;
	emits("update:modelValue", '');
	emits('input', '');
	input.value = '';
	input.focus();
}

const handleEyeIconClick = function () {
	const input = inner.value as HTMLInputElement;
	if (input.type === 'password') {
		input.type = 'text';
	} else input.type = 'password';
	setTimeout(() => {
		input.setSelectionRange(input.value.length, input.value.length);
	})


}
const handleCompositionStart = function () {
	composing.value = true;
}
const handleCompositionUpdate = function () {
}

const handleCompositionEnd = function () {
	const input = inner.value as HTMLInputElement;
	composing.value = false;
	emits("update:modelValue", input.value);
	emits('input', input.value);
}

const handleBlur =  function () {
	if (props.checkFunc) {
		props.checkFunc(props.modelValue as string, alert)
	}
}

const handleFocus = function () {
	alertFlag.value = false;
}


const logOfMissBind = function (target: HTMLElement) {
	if (f) {
		console.log("AT: ", target);
		console.log("ERROR: Missing binding value for element.")
	}
	f = false;

}
/**
 * @description modelValue改变时，修改真实value
 */
const setNativeInputValue = function () {
	const input = inner.value as HTMLInputElement;
	input.value = modelValue.value;
}

watch(modelValue, () => {
	setNativeInputValue();
})


onMounted(() => {
	setNativeInputValue();
})



</script>


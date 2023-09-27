<template>
	<div class="s-input" ref="container"
	     :class="[
			{
				'is-disabled':props.disabled,
				's-input--small':props.size === 'small',
				's-input--large':props.size === 'large'
			},


		]"
	     v-bind="$attrs"
	>
		<!--		input prefixSlot-->
		<div class="s-input__slot s-input__slot--prefix" v-if="$slots.prefixSlot">
			<slot name="prefixSlot"></slot>
		</div>

		<!--		input prefix icon-->
		<s-icon class="s-input__icon s-input__icon--prefix"
		        :target="props.prefixIcon"
		        :type="'label'"
		        :for="props.id"
		        @mousedown.prevent
		></s-icon>


		<input class="s-input__inner" ref="inner"
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
		       @compositionend="handleCompositionEnd"
		>

		<!--		input suffix icon-->
		<s-icon class="s-input__icon s-input__icon--suffix"
		        :target="props.suffixIcon"
		        :type="'label'"
		        :for="props.id"
		        @mousedown.prevent
		></s-icon>

		<!--		input word limit icon-->
		<label class="s-input__icon s-input__icon--limit" v-if="showWordLimit"

		       :data-overflow="getValueLength() > (props.maxLength as number)"
		>
			<s-icon target="warning" v-if="getValueLength() > (props.maxLength as number)"></s-icon>

			{{ getValueLength() }} / {{ props.maxLength }}
		</label>

		<s-icon class="s-input__icon s-input__icon--clear" v-if="showCloseIcon"
		        target="cricle-close"
		        @click="onClear"
		        tabindex="0"
		        @mousedown.prevent

		></s-icon>
		<s-icon class="s-input__icon s-input__icon--switch" v-if="showEyeIcon"
		        target="eye"
		        @click="handleEyeIconClick"
		        tabindex="0"
		        @mousedown.prevent

		></s-icon>


		<!--		input suffixSlot-->
		<div class="s-input__slot s-input__slot--suffix" v-if="$slots.suffixSlot">
			<slot name="suffixSlot"></slot>
		</div>


	</div>


</template>
<script setup lang="ts">
import {SInputEmits, SInputProps} from "./input"
import {SIcon} from "../../SIcon";
import {computed, onMounted, Ref, watch, ref} from "vue";
import useAlert from "@sss-ui-plus/hooks/useAlert";
import {unrefElement} from "@vueuse/core";
import {delay} from "@sss-ui-plus/utils";


defineOptions({
	name: "SInput",
	inheritAttrs: false
})


const props = defineProps({...SInputProps});
const emits = defineEmits({...SInputEmits});

const container = ref<HTMLElement | null>(null);
const inner: Ref<HTMLInputElement | undefined> = ref(undefined);


const {
	icon: alertIcon,
	text: alertText,
	show: alertShow,
	hidden: alertHidden,
	toggle: alertToggle
} = useAlert(container);

// 标志是否正在组合中文
const composing: Ref<Boolean> = ref(false);
// 标志输入框value是否合法
const isLegal = ref<boolean | undefined>(true);


const alert = function (text?: string, icon?: string) {
	alertText.value = text;
	alertIcon.value = icon;
	alertShow();

}


const showEyeIcon = computed((): Boolean => {
	if (props.modelValue == undefined || props.modelValue === '')
		return false

	return props.showPassword && props.type === 'password' && !props.disabled
})

const showCloseIcon = computed((): Boolean => {
	if (props.modelValue == undefined || props.modelValue === '')
		return false

	return props.clearable && !props.readonly && !props.disabled
})

/**
 * @description  输入框value受控于 绑定值
 * @notice 注意if性能问题
 */
watch(() => props.modelValue, (value) => {
	unrefElement(inner)!.value = value ? value.toString() : '';

	if (value !== undefined) {
		emits("change", value.toString());
	}


	//重置
	isLegal.value = true;
	alertHidden();

	if (props.minLength !== undefined) {
		isLegal.value &&= (getValueLength() >= Number.parseInt(props.minLength as string))
	}
	if (props.maxLength !== undefined) {
		isLegal.value &&= (getValueLength() <= Number.parseInt(props.maxLength as string));
	}


})


const handleInput = function () {
	// 只读、禁用、正在组合中文
	if (props.readonly || props.disabled || composing.value) return

	const input = unrefElement(inner)!

	emits("update:modelValue", input.value);
	// 当没有绑定值时， 设置输入框value为空
	input.value = (props.modelValue == undefined) ? '' : String(props.modelValue);

	emits('input', input.value);


}

const handleBlur = function (event: FocusEvent) {
	props.checkFunc && (isLegal.value = props.checkFunc(props.modelValue as string, alert));
	emits("blur", event);

}

const handleFocus = function (event: FocusEvent) {
	emits('focus', event);
}


const onClear = function () {
	const input = unrefElement(inner)!;

	emits("update:modelValue", '');
	emits('clear');
	input.focus();
}

const handleEyeIconClick = async function () {
	const input = unrefElement(inner) as HTMLInputElement;

	if (input.type === 'password') {
		input.type = 'text';
	} else input.type = 'password';


	// 避免光标跑到输入框前面去
	await delay();
	input.setSelectionRange(input.value.length, input.value.length);


}
const handleCompositionStart = function () {
	composing.value = true;
}
const handleCompositionEnd = function () {
	const input = unrefElement(inner) as HTMLInputElement;

	composing.value = false;
	emits("update:modelValue", input.value);
	emits('input', input.value);
}

/**
 * @description 获取绑定值长度
 * @notice 注意初次渲染时， 绑定值可能是null | undefined
 */
const getValueLength = () => {
	return (props.modelValue == undefined) ? 0 : String(props.modelValue).length;
}


onMounted(() => {
	// 根据绑定值更新输入框value
	unrefElement(inner)!.value = (props.modelValue == undefined) ? '' : String(props.modelValue);
	// 判断数据是否合法
	if (props.minLength !== undefined) {
		isLegal.value &&= (getValueLength() >= Number.parseInt(props.minLength as string))
	}
	if (props.maxLength !== undefined) {
		isLegal.value &&= (getValueLength() <= Number.parseInt(props.maxLength as string));
	}
})


defineExpose({
	isLegal,
	alert,
	showAlert: alertShow,
	hiddenAlert: alertHidden,
	toggleAlert: alertToggle,
	clear: onClear,
	focus: () => unrefElement(inner)!.focus(),
	blur: () => unrefElement(inner)!.blur(),
	select: () => unrefElement(inner)!.select(),
})


</script>



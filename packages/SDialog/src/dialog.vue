<template>
	<div
		ref="container"
		class="sss-message-dialog-container"
		v-show="visible"
	>
		<MsgBox
			ref="msgBox"
			transition='down-fade'

			:show-head="props.showHead"
			show-body
			show-close
			:show-foot="props.showFoot"
			:cancel-btn-text="props.cancelBtnText"
			:confirm-btn-text="props.confirmBtnText"
			:close-on-press-escape="props.closeOnPressEscape"
			:draggable="props.draggable"
			:top="props.top"
			:before-close="props.beforeClose"
			:title="props.title"
			v-bind="$attrs"
			@cancel="handleCancel"
			@confirm="handleConfirm"
			@open="handleOpen"
			@opened="handleOpened"
			@close="handleClose"
			@closed="handleClosed"
			class="sss-message-dialog"


		>
			<template #default>
				<slot></slot>
			</template>

		</MsgBox>

	</div>

</template>


<script setup lang="ts">

import MsgBox from "../../SMessageBox/src/msgBox.vue";

import useLockScroll from "../../../src/hooks/useLockScroll";
import useMark from "../../../src/hooks/useMark";
import {nextTick, onMounted, watch, ref} from "vue";
import {useEventListener} from "@vueuse/core";
import getHTMLElement from "../../../src/utils/getHTMLElement";
import indexManager from "../../../src/utils/managers/IndexManager";
import {MessageTriggerTypes} from "../../../src/types";
import {SDialogEmits, SDialogProps} from "./dialog";
import "./dialog.less"

defineOptions({
	name: 'SDialog',
	inheritAttrs: false,
})

const props = defineProps({...SDialogProps});
const emits = defineEmits({...SDialogEmits})


const msgBox= ref<InstanceType<typeof MsgBox> | undefined>(undefined);


const container = ref<Element | undefined>(undefined);
const visible = ref<Boolean>(props.modelValue);

// 标志modelValue是外部修改还是事件提交导致的修改
let f = true;


const {lockScroll, unLockScroll} = useLockScroll();
const {mark, hiddenMark, showMark} = useMark(container, 'cover');


watch(() => props.modelValue, newVal => newVal ? modelToTrue() : modelToFalse());


// 是否点击遮罩关闭元素
if (props.closeOnClickMark && props.showMark) {
	useEventListener(mark, 'click', () => {
		msgBox.value!.close("mark")
	})
}


const handleOpen = function () {
	emits('open')
	getHTMLElement(container).style.zIndex = indexManager.nextIndex().toString();
	if (props.lockScroll) lockScroll();
	if (props.showMark) showMark();
	if (props.appendToBody) appendToBody();

}

const handleOpened = function () {
	emits('opened');

}

const handleClose = function (trigger: MessageTriggerTypes) {
	emits('close', trigger);
	f = false;
	emits('update:modelValue', false);
	modelToFalse();


}

const handleClosed = function () {
	visible.value = false;
	emits("closed");

}


const handleCancel = function () {
	emits('cancel');
	f = false;
	emits('update:modelValue', false);
	modelToFalse();


}

const handleConfirm = function () {
	emits('confirm');
	f = false;
	emits('update:modelValue', false);
	modelToFalse();

}


const modelToFalse = function () {
	if (f) {
		msgBox.value!.close('system');
		f = true;
		return;
	}

	if (props.lockScroll) unLockScroll();
	if (props.showMark) hiddenMark();
	msgBox.value!.hidden();
}


const modelToTrue = async function () {
	visible.value = true;
	// 当container是v-if展示时，msgBox要等待下一个tick才能获取到
	await nextTick();
	msgBox.value!.open();
}


/**
 * @description 在挂载完毕之后，将元素添加到body
 */
const appendToBody = function () {
	const el: HTMLElement = getHTMLElement(container);
	document.body.appendChild(el);
}


onMounted(() => {
	if (props.modelValue) msgBox.value!.open();

})

</script>



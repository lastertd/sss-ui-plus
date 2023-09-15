<script setup lang="ts">
import "./dialog.less"
import {SDialogEmits, SDialogProps} from "./dialog.ts"
import {SMessageBox, SMessageBoxInstance} from "@sss-ui-plus/components"
import {nextTick, onMounted, watch, ref} from "vue";
import {unrefElement, useEventListener} from "@vueuse/core";
import {IndexManager} from "@sss-ui-plus/utils";
import {MessageTriggerTypes} from "@sss-ui-plus/typings";
import {useMark, useLockScroll} from "@sss-ui-plus/hooks";

defineOptions({
	name: 'SDialog',
	inheritAttrs: false,
})

const props = defineProps({...SDialogProps});
const emits = defineEmits({...SDialogEmits})
const indexManager = new IndexManager();
const msgBox = ref<SMessageBoxInstance | null>(null);
const container = ref<HTMLElement | null>(null);
const visible = ref<Boolean>(props.modelValue);

// 标志modelValue是外部修改还是事件提交导致的修改
let f = true;


const {lockScroll, unLockScroll} = useLockScroll();
const {mark, hiddenMark, showMark} = useMark(container, 'cover');

const handleOpen = function () {
	emits('open')
	unrefElement(container)!.style.zIndex = indexManager.nextIndex().toString();
	if (props.lockScroll) lockScroll();
	if (props.showMark) showMark();

}

const handleOpened = function () {
	emits('opened');

}

const handleClose = function (trigger: MessageTriggerTypes) {
	emits('close', trigger);
	f = false;
	emits('update:modelValue', false);


}

const handleClosed = function () {
	visible.value = false;
	emits("closed");

}


const handleCancel = function () {
	emits('cancel');
	f = false;
	emits('update:modelValue', false);


}

const handleConfirm = function () {
	emits('confirm');
	f = false;
	emits('update:modelValue', false);

}

const modelToTrue = async function () {
	visible.value = true;
	// 当container是v-if展示时，msgBox要等待下一个tick才能获取到
	await nextTick();
	msgBox.value!.open();
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


watch(() => props.modelValue, newVal => newVal ? modelToTrue() : modelToFalse());


// 是否点击遮罩关闭元素
if (props.closeOnClickMark && props.showMark) {
	useEventListener(mark, 'click', () => {
		msgBox.value!.close("mark")
	})
}


onMounted(() => {
	if (props.modelValue) msgBox.value!.open();

})

</script>
<template>
	<teleport to="body" :disabled="!props.appendToBody">
		<div
			ref="container"
			class="sss-message-dialog-container"
			v-show="visible"
		>
			<SMessageBox
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


			</SMessageBox>

		</div>

	</teleport>

</template>



<template>
	<teleport to="body" :disabled="!props.appendToBody">
		<div v-show="visible" ref="container"
		     :class="kls"

		>
			<SMessageBox
				ref="msgBox"
				v-bind="attrs"
				:class="ns.e('inner')"
				:transition="props.transition ||defaultTransition"
				:title="props.title"
				:no-header="props.noHeader"
				:no-body="props.noBody"
				:no-footer="props.noFooter"
				:show-close-icon="props.showCloseIcon"
				:cancel-btn-text="props.cancelBtnText"
				:confirm-btn-text="props.confirmBtnText"
				:btn-size="props.btnSize"
				:close-on-press-escape="props.closeOnPressEscape"
				:before-close="props.beforeClose"
				@cancel="onCancel"
				@confirm="onConfirm"
				@open="onOpen"
				@opened="opened"
				@close="onClose"
				@closed="closed"
				@hidden="onHidden"


			>
				<template #header v-if="$slots.header">
					<slot name="header"/>
				</template>


				<template #default>
					<slot></slot>
				</template>

				<template #footer v-if="$slots.footer">
					<slot name="footer"/>
				</template>

			</SMessageBox>
		</div>
	</teleport>

</template>


<script setup lang="ts">
import {SDrawerProps, SDrawerEmits} from "./drawer"
import {SMessageBox, SMessageBoxInstance} from "../../SMessageBox";
import {nextTick, onMounted, Ref, watch, ref, computed} from "vue";
import {unrefElement, useEventListener} from "@vueuse/core";
import {IndexManager} from "@sss-ui-plus/utils";
import {MessageTriggerTypes} from "@sss-ui-plus/typings";
import {useAttrs, useLockScroll, useMark, useNS} from "@sss-ui-plus/hooks";


defineOptions({
	name: "s-drawer",
	inheritAttrs: false
})
const ns = useNS('drawer');
const props = defineProps({...SDrawerProps});
const emits = defineEmits({...SDrawerEmits})
const attrs = useAttrs('scoped');
const kls = computed(() => {
	return [
		ns.namespace,
		ns.m(props.position),
		ns.is('part', props.part),
	]
})


const msgBox: Ref<SMessageBoxInstance | null> = ref(null);
const container: Ref<HTMLElement | null> = ref(null);

const indexManager = new IndexManager();
const visible: Ref<Boolean> = ref(props.modelValue);
// 标志modelValue是外部修改还是事件提交导致的修改
let changedBySystem = true;


const {lockScroll, unLockScroll} = useLockScroll();
const {mark, hiddenMark, showMark} = useMark(container, props.part ? 'part' : 'cover');


// 默认过渡通过position计算
const defaultTransition = computed(() => {
	switch (props.position) {
		case 'top':
			return 's-transition-fadeDown--completely'
		case 'right':
			return 's-transition-fadeLeft--completely'
		case 'bottom':
			return 's-transition-fadeUp--completely'
		case 'left':
			return 's-transition-fadeRight--completely'
	}
})


// 打开时的回调,所有状态设置为true
const onOpen = function () {
	visible.value = true;
	changedBySystem = true;
	emits("update:modelValue", true);
	emits('open');
	unrefElement(container)!.style.zIndex = indexManager.nextIndex().toString();
	if (props.lockScroll && !props.part) lockScroll();
	if (props.modal) showMark();

}

const onClose = function (trigger: MessageTriggerTypes) {
	emits('close', trigger);
}

/** （关闭, 取消， 确认）的回调，状态设置为false
 * visible在打开后设置以， 确保过渡的话正常执行
 * 解锁浏览器滚动在打开后设置， 确保消息框过渡时不会抖动
 */

const onHidden = function () {
	changedBySystem = false;
	emits('hidden');
	emits('update:modelValue', false);
	if (props.modal) hiddenMark();
}

const onCancel = function () {
	emits('cancel');
}

const onConfirm = function () {
	emits('confirm');


}

const opened = function () {
	emits('opened');

}

const closed = function () {
	if (props.lockScroll && !props.part) unLockScroll();
	visible.value = false;
	emits("closed");

}

const modelToTrue = async function () {

	// 当container是v-if展示时，msgBox要等待下一个tick才能获取到
	await nextTick();
	msgBox.value!.open();
}

const modelToFalse = function () {
	if (changedBySystem) {
		msgBox.value!.close('system');
		changedBySystem = false;
		return;
	}

	msgBox.value!.hidden();
}


// 不使用立即监听， 改成挂载后执行，挂载前msgBox不能访问
watch(() => props.modelValue, newVal => newVal ? modelToTrue() : modelToFalse());
onMounted(() => {
	if (props.modelValue) modelToTrue();

})

// 是否点击遮罩关闭元素
if (props.closeOnClickMark && props.modal) {
	useEventListener(mark, 'click', () => {
		msgBox.value!.close("mark")
	})
}

defineExpose({

	/**
	 * @description func, 打开消息框, 会触发open事件
	 */
	open: () => msgBox.value!.open(),
	/**
	 * @description func, 关闭消息框, 会触发close事件
	 */
	close: (trigger: MessageTriggerTypes) => msgBox.value!.close(trigger),
	/**
	 * @description func, 关闭消息框, 无副作用
	 */
	hidden: () => msgBox.value!.hidden(),
	/**
	 * @description func, 关闭/打开消息框, 无副作用
	 */
	toggle: () => msgBox.value!.toggle(),
	/**
	 * @description func, 关闭消息框, 触发cancel事件
	 */
	cancel: () => msgBox.value!.cancel(),
	/**
	 * @description func, 关闭消息框, 触发confirm事件
	 */
	confirm: () => msgBox.value!.confirm(),


})

</script>

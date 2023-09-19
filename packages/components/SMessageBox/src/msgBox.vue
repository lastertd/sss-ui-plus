<script setup lang="ts">
import {SMsgBoxProps, SMsgBoxEmits} from "./msgBox";
import {SIcon, SIconInstance} from "../../SIcon";
import {SButton} from "../../SButton";
import {computed, nextTick, Ref, ref} from "vue";
import {MessageTriggerTypes} from "@sss-ui-plus/typings";
import {useFlag, useDraggable} from "@sss-ui-plus/hooks";
import {throttle, fnUnion} from "@sss-ui-plus/utils";


defineOptions({
	name: 'SMessageBox',
	inheritAttrs: false
})

const props = defineProps({...SMsgBoxProps});
const emits = defineEmits({...SMsgBoxEmits})


const closeIcon: Ref<SIconInstance | null> = ref(null);
const outer: Ref<HTMLElement | undefined> = ref(undefined);
const header: Ref<HTMLElement | undefined> = ref(undefined);
const drag: Ref<HTMLElement | undefined> = ref(undefined);


const msgBoxIcon = computed(() => {
	if (props.icon) return props.icon
	return props.type
})

let {flag: visFlag, setTrue, setFalse} = useFlag(false);
useDraggable(drag, header, computed(() => {
	return props.draggable
}));


// 打开消息框
const open = fnUnion(setTrue, async () => {
	emits("open");
	if (props.draggable) drag.value!.appendChild(outer.value!);

	await nextTick();

	outer.value?.focus();
	closeIcon.value?.$el.focus();


});

// 关闭消息框
const close = throttle(function (trigger: MessageTriggerTypes) {
	const done = function () {
		hidden();
		emits('close', trigger);
	}

	if (!props.closeOnPressEscape && trigger === 'esc') return;

	props.beforeClose ? props.beforeClose(done) : done();

}, 500);

// 前两者轮换
const toggle = function () {
	if (visFlag.value){
		close('system');
	}
	else {
		open();
	}
}

const hidden = fnUnion(setFalse,() => {
	emits('hidden');
})


// 取消消息框
const cancel = throttle(function () {
	hidden();
	emits("cancel");
}, 500);

// 确认消息框
const confirm = throttle(function () {
	hidden();
	emits('confirm');
}, 500);


defineExpose({

	/**
	 * @description func, 打开消息框, 会触发open事件
	 */
	open: open,
	/**
	 * @description func, 关闭消息框, 会触发close事件
	 */
	close: close,
	/**
	 * @description func, 关闭消息框, 无副作用
	 */
	hidden,
	/**
	 * @description func, 关闭/打开消息框, 会触发事件
	 */
	toggle,
	/**
	 * @description func, 关闭消息框, 触发cancel事件
	 */
	cancel: cancel,
	/**
	 * @description func, 关闭消息框, 触发confirm事件
	 */
	confirm: confirm,

})


</script>

<template>

		<transition
			:name="`sss-transition-${props.transition}`"
			@afterEnter="emits('opened')"
			@afterLeave="emits('closed')"
		>
			<div class="s-message-box" ref="outer" v-show="visFlag"
			     v-bind="$attrs"
			     tabindex="0"
			     @keydown.esc="close('esc')"
			     :class="[
				`s-message-box--${props.type || 'default'}`
			]"
			     :style="`top:${props.top}`"

			>
				<s-icon :target="msgBoxIcon" class="s-message-box__icon"></s-icon>

				<div class="s-message">

					<div class="s-message__header" ref="header" v-if="!props.noHeader"

					     :class="[
						{
							's-message__header--default':!$slots.header
						}
					]"
					>
						<template v-if="!$slots.header">
							<h1 class="s-message__header__title">{{ props.title }}</h1>
							<s-icon
								ref="closeIcon"
								v-if="props.showCloseIcon"
								target="close"
								class="s-message__header__icon"
								tabindex="0"
								@click="close('icon')"
							></s-icon>
						</template>
						<slot name="header"/>
					</div>


					<div class="s-message__body" ref="body" v-if="!props.noBody">
						<slot></slot>
						<template v-if="props.text">
							<div class="s-message__body__text">
								{{ props.text }}
							</div>
						</template>
					</div>

					<div class="s-message__footer" ref="footer" v-if="!props.noFooter"
					     :class="[
						{
							's-message__footer--default':!$slots.footer
						}
					]"
					>
						<template v-if="!$slots.footer">
							<div class="s-message__footer--default">
								<s-button
									:size="props.btnSize" type="cyan" ghost
									@click="cancel"
								>{{ props.cancelBtnText }}
								</s-button>
								<s-button
									:size="props.btnSize" type="primary"
									@click="confirm"

								>{{ props.confirmBtnText }}
								</s-button>
							</div>
						</template>
						<slot name="footer"/>
					</div>

				</div>
			</div>
		</transition>


	<!--	draggable container-->
	<div ref="drag" :style="`top:${props.top}`" v-if="props.draggable" class="s-message-draggable-container">

	</div>
</template>



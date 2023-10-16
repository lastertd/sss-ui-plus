<template>

	<transition
		:name="props.transition"
		@afterEnter="emits('opened')"
		@afterLeave="emits('closed')"
	>
		<div v-show="visFlag" ref="outer"
		     v-bind="useAttrs('scoped').value"
		     :class="kls"
		     :style="`top:${props.top}`"
		     tabindex="0"
		     @keydown.esc="close('esc')"
		>
			<s-icon :target="props.icon || props.type" :color="msgIconColor" :class="ns.e('icon')"></s-icon>

			<div :class="[MsgNS.namespace, ns.e('inner')]">

				<div v-if="!props.noHeader" ref="header"
				     :class="[
						MsgNS.e('header'),
						MsgNS.em('header', 'default', !$slots.header),

					]"


				>
					<template v-if="!$slots.header">
						<h1 :class="MsgNS.ee('header', 'title')">{{ props.title }}</h1>
						<s-icon v-if="props.showCloseIcon" ref="closeIcon"
						        :class="MsgNS.ee('header', 'icon')"
						        target="close"
						        tabindex="0"
						        @click="close('icon')"
						></s-icon>
					</template>
					<slot name="header"/>
				</div>


				<div v-if="!props.noBody" ref="body"
				     :class="MsgNS.e('body')"
				>
					<slot></slot>
					<template v-if="props.text">
						<div :class="MsgNS.e('text')">
							{{ props.text }}
						</div>
					</template>
				</div>

				<div ref="footer" v-if="!props.noFooter"
				     :class="[
						 MsgNS.e('footer'),
						 MsgNS.em('footer', 'default', !$slots.footer),
					]"
				>
					<template v-if="!$slots.footer">
						<div :class="MsgNS.em('footer', 'default')">
							<s-button :size="props.btnSize" type="cyan" variant="ghost" @click="cancel">
								{{ props.cancelBtnText }}
							</s-button>
							<s-button :size="props.btnSize" type="primary" @click="confirm">{{ props.confirmBtnText }}
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

<script setup lang="ts">
import {SMsgBoxProps, SMsgBoxEmits} from "./msgBox";
import {SIcon, SIconInstance} from "../../SIcon";
import {SButton} from "../../SButton";
import {computed, nextTick, Ref, ref} from "vue";
import {MessageTriggerTypes} from "@sss-ui-plus/typings";
import {useFlag, useDraggable, useNS, useAttrs} from "@sss-ui-plus/hooks";
import {throttle, fnUnion, getClrVar} from "@sss-ui-plus/utils";


defineOptions({
	name: 's-messageBox',
	inheritAttrs: false
})
const MsgNS = useNS('message');
const ns = useNS('message-box');
const props = defineProps({...SMsgBoxProps});
const emits = defineEmits({...SMsgBoxEmits})
const kls = computed(() => {
	return [
		ns.namespace,
		ns.m(props.type)

	]
})

const closeIcon: Ref<SIconInstance | null> = ref(null);
const outer: Ref<HTMLElement | undefined> = ref(undefined);
const header: Ref<HTMLElement | undefined> = ref(undefined);
const drag: Ref<HTMLElement | undefined> = ref(undefined);



const msgIconColor = computed(() => {
	if (props.iconColor) return props.iconColor;
	switch (props.type) {
		case 'success':
			return getClrVar("success");
		case 'info':
			return getClrVar("info");
		case 'warning':
			return getClrVar("warning");
		case 'danger':
			return getClrVar("danger");
	}
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
const close = throttle(function (trigger: MessageTriggerTypes = 'system') {
	const done = function () {
		hidden();
		emits('close', trigger);
	}

	if (!props.closeOnPressEscape && trigger === 'esc') return;

	props.beforeClose ? props.beforeClose(done) : done();

}, 500);

// 前两者轮换
const toggle = function () {
	if (visFlag.value) {
		close('system');
	} else {
		open();
	}
}

const hidden = fnUnion(setFalse, () => {
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





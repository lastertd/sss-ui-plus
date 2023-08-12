<template>

	<transition
		:name="`sss-transition-${props.transition}`"
		@afterEnter="handleAfterEnter"
		@afterLeave="handleAfterLeave"
	>
		<div
			ref="outer"
			v-show="visFlag"
			class="sss-message-box"
			v-bind="$attrs"
			tabindex="0"
			@keydown.esc="onClose('esc')"
			:class="[
				`sss-message-type-${props.type || 'default'}`
			]"
			:style="`top:${props.top}`"

		>
			<s-icon :target="msgBoxIcon" class="sss-message-icon"></s-icon>
			<div class="sss-message">
				<!--				message head-->
				<div
					ref="head"
					v-if="props.showHead"
					class="sss-message-head"
				>
					<h3 >{{ props.title }}</h3>
					<s-icon
						ref="closeIcon"
						v-if="props.showClose"
						target="close"
						class="sss-message-head-icon"
						tabindex="0"
						@click="onClose('icon')"
					></s-icon>

				</div>
				<!--				message body-->
				<div
					v-if="$slots.default || props.text"
					class="sss-message-body"
				>

					<slot>
						<p class="sss-message-text">{{ props.text }}</p>
					</slot>

				</div>

				<!--				message foot-->
				<div
					v-if="props.showFoot"
					class="sss-message-foot"
				>
					<s-button
						:size="props.btnSize" class="clear-after" type="cyan" ghost
						@click="onCancelBtnClick"
					>{{ props.cancelBtnText }}
					</s-button>
					<s-button
						:size="props.btnSize" class="clear-after" type="primary"
						@click="onConfirmBtnClick"

					>{{ props.confirmBtnText }}
					</s-button>
				</div>
			</div>
		</div>
	</transition>

	<div ref="drag" :style="`top:${props.top}`" v-if="draggable" class="sss-message-draggable-container">

	</div>
</template>


<script setup lang="ts">
import SIcon from "../../SIcon";
import SButton from "../../SButton";
import {SMsgBoxProps, SMsgBoxEmits} from "./msgBox";
import "./msgBox.less"
import useFlag from "../../../src/hooks/useFlag";
import {computed, nextTick, onMounted, Ref, ref} from "vue";
import throttle from "../../../src/utils/decorator/throttle";
import {fnUnion} from "../../../src/utils/fnUnion";
import getHTMLElement from "../../../src/utils/getHTMLElement";
import {useDraggable} from "../../../src/hooks/useDraggable";
import {MessageTriggerTypes} from "../../../src/types";


defineOptions({
	name: 'SMessageBox',
	inheritAttrs: false
})

const props = defineProps({...SMsgBoxProps});
const emits = defineEmits({...SMsgBoxEmits})

const closeIcon: Ref<typeof SIcon | undefined> = ref(undefined);
const outer: Ref<HTMLElement | undefined> = ref(undefined);
const head: Ref<HTMLElement | undefined> = ref(undefined);
const drag: Ref<HTMLElement | undefined> = ref(undefined);

const f = computed(() => {
	return true
})


const msgBoxIcon = computed(() => {
	if (props.icon) return props.icon
	return props.type
})

let {flag: visFlag, setTrue, setFalse: hidden, toggle} = useFlag(false);
useDraggable(drag, head, f);


const open = fnUnion(setTrue, async () => {
	emits("open");
	if (props.draggable) drag.value!.appendChild(outer.value!);

	if (!props.showClose) return
	await nextTick();
	getHTMLElement(closeIcon).focus();


});


const onClose = throttle(function (trigger: MessageTriggerTypes) {
	const done = function () {
		hidden();
		emits('close', trigger);
	}

	if (!props.closeOnPressEscape && trigger === 'esc') return;
	if (props.beforeClose) {
		props.beforeClose(done);
	} else {
		done();
	}

}, {}, 500);

const onCancelBtnClick = throttle(function () {
	hidden();
	emits("cancel");
}, {}, 500);

const onConfirmBtnClick = throttle(function () {
	hidden();
	emits('confirm');
}, {}, 500);


const handleAfterLeave = function () {
	emits('closed');
}

const handleAfterEnter = function () {
	emits('opened');
}


defineExpose({
	open,
	hidden,
	toggle,
	close: onClose,
})


</script>




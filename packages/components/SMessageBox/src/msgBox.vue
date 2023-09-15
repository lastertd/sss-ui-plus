

<script setup lang="ts">
import "./msgBox.less"
import {SIcon, SIconInstance} from "../../SIcon";
import SButton from "../../SButton";
import {SMsgBoxProps, SMsgBoxEmits} from "./msgBox.ts";
import {computed, nextTick, Ref, ref} from "vue";
import {MessageTriggerTypes} from "@sss-ui-plus/typings/base.ts";
import {useFlag, useDraggable} from "@sss-ui-plus/hooks";
import {throttle, fnUnion} from "@sss-ui-plus/utils";


defineOptions({
	name: 'SMessageBox',
	inheritAttrs: false
})

const props = defineProps({...SMsgBoxProps});
const emits = defineEmits({...SMsgBoxEmits})



const closeIcon:Ref<SIconInstance | null> = ref(null);
const outer: Ref<HTMLElement | undefined> = ref(undefined);
const head: Ref<HTMLElement | undefined> = ref(undefined);
const drag: Ref<HTMLElement | undefined> = ref(undefined);

const f = computed(() => {
	return props.draggable
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

	await nextTick();

	outer.value?.focus();
	closeIcon.value?.$el.focus();


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

}, 500);



const onCancelBtnClick = throttle(function () {
	hidden();
	emits("cancel");
}, 500);

const onConfirmBtnClick = throttle(function () {
	hidden();
	emits('confirm');
},  500);


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
			<s-icon :target="msgBoxIcon" style="padding-top: 5px"  class="sss-message-icon"></s-icon>
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
						style="padding: 4px"
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

	<!--	draggable container-->
	<div ref="drag" :style="`top:${props.top}`" v-if="props.draggable" class="sss-message-draggable-container">

	</div>
</template>



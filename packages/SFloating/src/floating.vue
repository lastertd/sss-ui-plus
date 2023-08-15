	<template>

	<div v-if="slots.reference" class="sss-floating-reference" ref="reference" :style="`display:${props.expression}`">
		<slot name="reference"></slot>
	</div>


	<div ref="floating" :style="_floatingStyles" :class="props.floatingClass">

		<transition
			:name="`sss-transition-${props.transition}`"
			@afterEnter="emits('opened')"
			@afterLeave="emits('closed')"
		>
			<div v-if="flag "
			     class="sss-floating-floating"
			     :data-placement="placement"
			     :data-theme="props.theme"
			     v-bind="$attrs"

			>

				<slot></slot>
				<div v-if="props.showArrow" ref="_arrow" class="sss-floating-arrow" :style="arrowStyle"></div>
			</div>
		</transition>
	</div>


</template>

<script setup lang="ts">
import "./floating.less"
import {SFloatingEmits, SFloatingProps} from "./floating";
import {useFloating, offset, flip, shift, autoUpdate, arrow} from "@floating-ui/vue";

import {computed, onMounted, watch, ref, useSlots, onBeforeUnmount} from "vue";

import {unrefElement, useEventListener, useMutationObserver} from "@vueuse/core";
import useFlag from "../../../src/hooks/useFlag";

import IndexManager from "../../../src/utils/managers/IndexManager";


defineOptions({
	name: 'SFloating',
	inheritAttrs: false,
})

const props = defineProps({...SFloatingProps});
const emits = defineEmits({...SFloatingEmits});
const slots = useSlots();

// 在floating不可见时， 阻止修改css样式
let _:any;
const _floatingStyles = computed(() => {
	if (flag.value){
		_ = floatingStyles.value;
		return floatingStyles.value;
	}else {
		return _;
	}
})


const t = computed(() => {
	return ref(unrefElement(props.reference)).value;
})


const reference = ref<HTMLElement | null>(null);
const floating = ref<HTMLElement | null>(null);
const _arrow = ref<HTMLElement | null>(null);


// 当元素具有reference槽时优先槽，其次reference属性
const {floatingStyles, placement, middlewareData, update} = (() => {
	if (slots.reference) {
		return useFloating(reference, floating, {
			placement: props.placement,
			whileElementsMounted: autoUpdate,
			middleware: [offset(props.offset), flip(), shift(), arrow({element: _arrow})]
		});
	} else {
		return useFloating(t, floating, {
			placement: props.placement,
			whileElementsMounted: autoUpdate,
			middleware: [offset(props.offset), flip(), shift(), arrow({element: _arrow})]
		});
	}

})();
const {flag, setTrue, setFalse} = useFlag(false);


let openTimer: NodeJS.Timeout;
let closeTimer: NodeJS.Timeout;


const open = () => {

	clearTimeout(openTimer);
	clearTimeout(closeTimer);

	if (flag.value || props.disabled) return


	openTimer = setTimeout(() => {
		setTrue();
		floating.value!.style.zIndex = IndexManager.nextIndex().toString();


		emits("open");
	}, props.openDelay)


}

const close = () => {
	clearTimeout(openTimer);
	clearTimeout(closeTimer);

	if (!flag.value) return


	closeTimer = setTimeout(() => {
		setFalse();
		emits("close");
	}, props.closeDelay);
}

const toggle = () => {
	if (flag.value) close()
	else open();
}

const clickBody = (evt: Event) => {

	const target = evt.target as HTMLElement;
	const floatingEl = unrefElement(floating) as HTMLElement;
	const referenceEl = unrefElement(reference) as HTMLElement;

	if (!(floatingEl.contains(target) || referenceEl.contains(target))) {
		close();
	}
}


// 箭头相关
const arrowStyle = ref<{
	left: string | undefined
	top: string | undefined
	transform: string
}>({
	left: undefined,
	top: undefined,
	transform: 'translate3d(0,0,0)'

})
if (props.showArrow) {
	watch(() => middlewareData.value.arrow, (val) => {
		const arrowEl = _arrow.value as HTMLElement;
		const {x, y} = val!;

		if (!arrowEl) return;

		arrowStyle.value.left = `${x}px`;
		arrowStyle.value.top = `${y}px`;

	})

}

// 当reference是可以移动的时，快速跟踪
if (props.quickTrack) {
	useMutationObserver(t, () => {
		update();
	}, {
		attributes: true
	})
}

// 可以通过点击body关闭floating
if (props.closeOnClickBody) {
	useEventListener(document.body, 'click', clickBody);
}

// 是否在挂载后默认打开
onMounted(() => {
	if (props.openOnMounted) open();
})


// trigger
if (props.trigger === 'hover') {

	if (slots.reference) {
		useEventListener(reference, 'mouseenter', open);
		useEventListener(reference, 'mouseleave', close);
	} else {
		useEventListener(t, 'mouseenter', open);
		useEventListener(t, 'mouseleave', close);
	}


	useEventListener(floating, 'mouseenter', open);
	useEventListener(floating, 'mouseleave', close);
}

if (props.trigger === 'click') {

	if (slots.reference) {
		useEventListener(reference, 'click', toggle);

	} else {
		useEventListener(t, 'click', toggle);
	}


}

if (props.trigger === 'clickToOpen' ) {
	if (slots.reference) {
		useEventListener(reference, 'click', open);

	} else {
		useEventListener(t, 'click', open);
	}
}


if (props.trigger === 'focus') {
	if (slots.reference) {
		useEventListener(reference, 'mousedown', open);
	} else {
		useEventListener(t, 'mousedown', open);

	}
	useEventListener(document.body, 'mouseup', close);

}



onMounted(() => {
	// ssr友好
	import("./creatFloatingContainer").then(() => {
		if (props.teleported) {
			const container = document.body.querySelector('.___sss-floating-container') as HTMLDivElement;
			container.appendChild(unrefElement(floating)!);
		}
	});


})
onBeforeUnmount(() => {
	if (props.teleported) {
		const container = document.body.querySelector('.___sss-floating-container') as HTMLDivElement;
		container.removeChild(unrefElement(floating)!);
	}
})


defineExpose({
	close,
	open,
	toggle,
})


</script>




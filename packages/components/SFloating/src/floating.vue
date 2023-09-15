<script setup lang="ts">
import "./floating.less"
import {SFloatingProps, SFloatingEmits} from "./floating.ts";
import {useFloating, offset, flip, shift, autoUpdate, arrow} from "@floating-ui/vue";
import {computed, onMounted, watch, ref, useSlots, onBeforeUnmount, Ref} from "vue";
import {unrefElement, useEventListener, useMutationObserver} from "@vueuse/core";
import {useFlag} from "@sss-ui-plus/hooks";
import {IndexManager} from "@sss-ui-plus/utils";
import {SPartial} from "../../abstract"


defineOptions({
	name: 'SFloating',
	inheritAttrs: false,
})

const props = defineProps({...SFloatingProps});
const emits = defineEmits({...SFloatingEmits});
const slots = useSlots();
const indexManager = new IndexManager();


// slot.reference优先级高于props.reference
const reference: Ref<HTMLElement | null> = slots.reference ? ref(null) : computed(() => {
	return ref(unrefElement(props.reference)).value;

});
const floating = ref<HTMLElement | null>(null);
const _arrow = ref<HTMLElement | null>(null);


const {floatingStyles, placement, middlewareData, update} = useFloating(reference, floating, {
	placement: props.placement,
	whileElementsMounted: autoUpdate,
	middleware: [offset(props.offset), flip(), shift(), arrow({element: _arrow})]
});
const {flag, setTrue, setFalse} = useFlag(false);

// 在floating不可见时， 阻止修改css样式
let _: any;
const _floatingStyles = computed(() => {
	if (flag.value) {
		_ = floatingStyles.value;
		return floatingStyles.value;
	} else {
		return _;
	}
})

let openTimer: NodeJS.Timeout;
let closeTimer: NodeJS.Timeout;


const open = () => {

	clearTimeout(openTimer);
	clearTimeout(closeTimer);

	if (flag.value || props.disabled) return


	openTimer = setTimeout(() => {
		setTrue();
		floating.value!.style.zIndex = indexManager.nextIndex().toString();


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

// 当reference位置会发生变化且floating元素跟不上变化时，开启此项
if (props.quickTrack) {
	useMutationObserver(reference, () => {
		update();
	}, {
		attributes: true
	})
}

// 可以通过点击body关闭floating
if (props.closeOnClickBody) {
	useEventListener(document.body, 'click', (evt: Event) => {

		const target = evt.target as HTMLElement;
		const floatingEl = unrefElement(floating) as HTMLElement;
		const referenceEl = unrefElement(reference) as HTMLElement;

		if (!(floatingEl.contains(target) || referenceEl.contains(target))) {
			close();
		}
	});
}


// trigger
if (props.trigger === 'hover') {
	useEventListener(reference, 'mouseenter', open);
	useEventListener(reference, 'mouseleave', close);

	useEventListener(floating, 'mouseenter', open);
	useEventListener(floating, 'mouseleave', close);
}

if (props.trigger === 'click') {
	useEventListener(reference, 'click', toggle);
}

if (props.trigger === 'clickToOpen') {
	useEventListener(reference, 'click', open);

}


if (props.trigger === 'focus') {
	useEventListener(reference, 'mousedown', open);

	useEventListener(document.body, 'mouseup', close);

}


onMounted(() => {
	// 避免在加载文件时操作dom, ssr友好
	import("./creatFloatingContainer.ts").then(() => {
		if (props.teleported) {
			const container = document.body.querySelector('.___sss-floating-container') as HTMLDivElement;
			container.appendChild(unrefElement(floating)!);
		}
	});

	// 是否在挂载后打开
	if (props.openOnMounted) open();


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

<template>

	<SPartial v-if="slots.reference" ref="reference"
	          :style="`display:${props.expression}`">
		<slot name="reference"></slot>
	</SPartial>


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


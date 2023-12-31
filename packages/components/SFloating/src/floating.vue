<template>

	<SPartial v-if="slots.reference" ref="reference">
		<slot name="reference"></slot>
	</SPartial>


	<div ref="floating" v-bind="useAttrs('scopedOnly').value"  :style="_floatingStyles" :class="props.floatingClass">

		<transition
			:name="props.transition"
			@afterEnter="emits('opened')"
			@afterLeave="emits('closed')"
		>
			<div
				v-if="flag "
				v-bind="useAttrs('scoped').value"
				:class="ns.namespace"
				:data-placement="placement"


			>

				<slot></slot>
				<div v-if="props.showArrow" ref="_arrow" class="s-floating__arrow" :style="arrowStyle"></div>
			</div>
		</transition>
	</div>


</template>


<script setup lang="ts">
import {SFloatingProps, SFloatingEmits} from "./floating";
import {useFloating, offset, flip, shift, autoUpdate, arrow} from "@floating-ui/vue";
import {computed, onMounted, watch, ref, useSlots, onBeforeUnmount, Ref} from "vue";
import {unrefElement, useEventListener, useMutationObserver} from "@vueuse/core";
import {useFlag, useAttrs} from "@sss-ui-plus/hooks";
import {IndexManager} from "@sss-ui-plus/utils";
import {SPartial} from "../../abstract"
import {useNS} from "@sss-ui-plus/hooks/useNS";
import {toRef} from "@vue/runtime-core";


defineOptions({
	name: 's-floating',
	inheritAttrs: false,
})
const ns = useNS('floating');
const props = defineProps({...SFloatingProps});
const emits = defineEmits({...SFloatingEmits});
const slots = useSlots();


// slot.reference优先级高于props.reference
const reference: Ref<HTMLElement | null> = slots.reference ? ref(null) : toRef(props, 'reference')
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
		floating.value!.style.zIndex = new IndexManager().nextIndex().toString();


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
	let trigger: Element | null;
	useEventListener(document.body, 'mousedown', (evt: Event) => {
		if (!flag.value) return;
		evt.stopPropagation();

		trigger = evt.target as Element;

	})
	useEventListener(document.body, 'mouseup', (evt: Event) => {
		if (!flag.value) return;
		evt.stopPropagation();

		const floatingEl = unrefElement(floating) as HTMLElement;
		const referenceEl = unrefElement(reference) as HTMLElement;


		if (!(floatingEl.contains(trigger) || referenceEl.contains(trigger))) {
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
	import("./creatFloatingContainer").then(() => {
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
	/**
	 * @description 关闭floating元素
	 */
	close,
	/**
	 * @description 打开floating元素
	 */
	open,
	/**
	 * @description 打开/关闭floating元素轮循
	 */
	toggle,
})


</script>


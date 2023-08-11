<template>

	<div class="sss-floating-reference" ref="reference">
		<slot name="reference"></slot>
	</div>

	<div ref="floating" :style="floatingStyles" >

		<transition :name="`sss-transition-${props.transition}`">
			<div v-if="flag && !props.disabled" class="sss-floating-floating"
			     :data-placement="placement"
			     :data-theme="props.theme"
			     v-bind="$attrs"
			>

				<slot></slot>
				<div v-if="props.showArrow" ref="_arrow" class="sss-floating-arrow" :style="style" ></div>
			</div>
		</transition>
	</div>


</template>

<script setup lang="ts">
import "./floating.less"
import {SFloatingEmits, SFloatingProps} from "./floating";
import {useFloating, offset, flip, shift, autoUpdate, arrow} from "@floating-ui/vue";
import {ref} from "@vue/runtime-core";
import useFlag from "../../../src/hooks/useFlag";
import { onMounted, watch} from "vue";
import {unrefElement, useEventListener} from "@vueuse/core";
import IndexManager from "../../../src/utils/managers/IndexManager.ts";

defineOptions({
	name: 'SFloating',
	inheritAttrs: false,
})

const props = defineProps({...SFloatingProps});
const emits = defineEmits({...SFloatingEmits});


const reference = ref<HTMLElement | undefined>(undefined);
const floating = ref<HTMLElement | undefined>(undefined);
const _arrow = ref<HTMLElement | undefined>(undefined);


const {floatingStyles, placement, middlewareData} = useFloating(reference, floating, {
	placement: props.placement,
	whileElementsMounted: autoUpdate,
	middleware: [offset(props.offset), flip(), shift(), arrow({element: _arrow})]
});
const {flag, setTrue, setFalse} = useFlag(false);

let openTimer: NodeJS.Timeout;
let closeTimer: NodeJS.Timeout;


const style = ref<{
	left:string | undefined
	top:string | undefined
	transform:string
}>({
	left: undefined,
	top: undefined,
	transform: 'translate3d(0,0,0)'

})

const open = () => {

	clearTimeout(openTimer);
	clearTimeout(closeTimer);

	if (flag.value) return


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


watch(() => middlewareData.value.arrow, (val) => {
	const arrowEl = _arrow.value as HTMLElement;
	const {x, y} = val!;

	if (!arrowEl) return;

	style.value.left = `${x}px`;
	style.value.top = `${y}px`;

})

if (props.trigger === 'hover') {
	useEventListener(reference, 'mouseenter', open);
	useEventListener(floating, 'mouseenter', open);
	useEventListener(reference, 'mouseleave', close);
	useEventListener(floating, 'mouseleave', close);
}

if (props.trigger === 'click') {
	useEventListener(reference, 'click', toggle);


}


if (props.trigger === 'focus') {
	useEventListener(reference, 'mousedown', open);
	useEventListener(document.body, 'mouseup', close);

}
if (props.closeOnClickBody) {
	useEventListener(document.body, 'click', clickBody);
}


onMounted(() => {
	import("./creatFloatingContainer").then(() => {
		if (props.teleported) {
			const container = document.body.querySelector('.___sss-floating-container') as HTMLDivElement;
			container.appendChild(unrefElement(floating)!);
		}
	});
	if (props.openOnMounted) {
		open();
	}

})

defineExpose({
	close,
	open,
	toggle,
})


</script>




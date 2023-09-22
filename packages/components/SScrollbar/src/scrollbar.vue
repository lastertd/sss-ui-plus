<script setup lang="ts">
import {SScrollbarEmits, SScrollbarProps} from "./scrollbar";
import {ref} from "vue";
import {unrefElement, useEventListener, useResizeObserver, useMutationObserver} from "@vueuse/core";


defineOptions({
	name: 'SScrollbar',
	inheritAttrs: false,
})


const props = defineProps({...SScrollbarProps});
const emits = defineEmits({...SScrollbarEmits})
const warp = ref<HTMLElement | undefined>(undefined);
const thumbY = ref<HTMLElement | undefined>(undefined);
const barY = ref<HTMLElement | undefined>(undefined);
const thumbX = ref<HTMLElement | undefined>(undefined);
const barX = ref<HTMLElement | undefined>(undefined);
const active = ref(0);



let flag: 'thumbX' | 'thumbY';


// 垂直滑块的大小， 位置
const thumbYStyle = ref({
	top: '0',
	right: '0',
	height: '0',
});

//水平滑块的大小，位置
const thumbXStyle = ref({
	bottom: '0',
	left: '0',
	width: '0',
})
// 记录滑块移动的偏移量
const offset = {
	x: 0,
	y: 0
};
// 记录点击的坐标
const down = {
	x: 0,
	y: 0
};
// 记录移动距离
const move = {
	x: 0,
	y: 0
};
// 记录滑块原本位置
const origin = {
	x: 0,
	y: 0
}


const handleMove = (evt: MouseEvent) => {
	move.x = evt.clientX;
	move.y = evt.clientY;

	offset.x = move.x - down.x;
	offset.y = move.y - down.y;


	const warpEl = unrefElement(warp) as HTMLElement;
	const barYEl = unrefElement(barY) as HTMLElement;
	const barXEl = unrefElement(barX) as HTMLElement;
	const warpHeight = warpEl!.scrollHeight;
	const warpWidth = warpEl!.scrollWidth;
	const barHeight = barYEl!.offsetHeight;
	const barWidth = barXEl!.offsetWidth;

	if (flag === 'thumbY') {
		unrefElement(warp)!.scrollTop = warpHeight * offset.y / barHeight + origin.y;
	} else if (flag === 'thumbX') {
		unrefElement(warp)!.scrollLeft = warpWidth * offset.x / barWidth + origin.x;
	}
}

const handleClick = (evt: MouseEvent) => {
	if (evt.target !== evt.currentTarget) return;
	evt.stopPropagation();

	const warpEl = unrefElement(warp) as HTMLElement;
	const barYEl = unrefElement(barY) as HTMLElement;
	const thumbYEl = unrefElement(thumbY) as HTMLElement;
	const thumbXEl = unrefElement(thumbX) as HTMLElement;
	const barXEl = unrefElement(barX) as HTMLElement;
	const warpHeight = warpEl!.scrollHeight;
	const warpWidth = warpEl!.scrollWidth;
	const barHeight = barYEl!.offsetHeight;
	const barWidth = barXEl!.offsetWidth;

	offset.y = evt.clientY - barYEl!.getBoundingClientRect().top - thumbYEl!.offsetHeight / 2;
	offset.x = evt.clientX - barXEl!.getBoundingClientRect().left - thumbXEl!.offsetWidth / 2;

	offset.y = Math.min(Math.max(0, offset.y), barYEl!.offsetHeight - thumbYEl!.offsetHeight);
	offset.x = Math.min(Math.max(0, offset.x), barXEl!.offsetWidth - thumbXEl!.offsetWidth);


	if (flag === 'thumbY') {
		unrefElement(warp)!.scrollTop = warpHeight * offset.y / barHeight;
	} else if (flag === 'thumbX') {
		unrefElement(warp)!.scrollLeft = warpWidth * offset.x / barWidth;
	}
}

// 计算滑块大小
const computedThumbSize = () => {
	if (props.native) return

	const warpEl = unrefElement(warp) as HTMLElement;
	const barYEl = unrefElement(barY) as HTMLElement;
	const barXEl = unrefElement(barX) as HTMLElement;
	const {
		scrollHeight: warpHeight,
		scrollWidth: warpWidth,
		offsetHeight: viewHeight,
		offsetWidth: viewWidth
	} = warpEl!;

	const barHeight = barYEl!.offsetHeight;
	const barWidth = barXEl!.offsetWidth;

	const thumbHeight = viewHeight * barHeight / warpHeight;
	const thumbWidth = viewWidth * barWidth / warpWidth;


	// 在不可滚动时，设置滚动条不可见
	if (thumbHeight === barHeight) {
		unrefElement(barY)!.style.opacity = '0';

	} else {
		unrefElement(barY)!.style.opacity = '';
	}


	if (thumbWidth === barWidth) {
		unrefElement(barX)!.style.opacity = '0';
	} else {
		unrefElement(barX)!.style.opacity = '';

	}

	thumbYStyle.value.height = `${thumbHeight}px`;
	thumbXStyle.value.width = `${thumbWidth}px`;

}


// 计算滑块位置
const computedThumbPos = () => {
	if (props.native) return


	const warpEl = unrefElement(warp) as HTMLElement;
	const barYEl = unrefElement(barY) as HTMLElement;
	const barXEl = unrefElement(barX) as HTMLElement;

	const {scrollHeight: warpHeight, scrollWidth: warpWidth, scrollTop: viewOffsetY, scrollLeft: viewOffsetX} = warpEl!;

	const barHeight = barYEl!.offsetHeight;
	const barWidth = barXEl!.offsetWidth;


	const thumbOffsetY = viewOffsetY * barHeight / warpHeight;
	const thumbOffsetX = viewOffsetX * barWidth / warpWidth;


	thumbYStyle.value.top = `${thumbOffsetY}px`;
	thumbXStyle.value.left = `${thumbOffsetX}px`;


}

// 滑动
useEventListener(warp, 'scroll', () => {
	const el = unrefElement(warp) as HTMLElement
	computedThumbPos();
	emits('scroll', el.scrollLeft, el.scrollTop);
})

if (props.quickJump) {
	useEventListener(barY, "click", (evt: MouseEvent) => {
		flag = 'thumbY';
		handleClick(evt);
	});
	useEventListener(barX, "click", (evt: MouseEvent) => {
		flag = 'thumbX';
		handleClick(evt);
	});
}

if (!props.noResize) {
	// 监听元素大小变化
	useResizeObserver(warp, () => {
		computedThumbPos();
		computedThumbSize();
	})
}
// 监听元素子节点变化
useMutationObserver(warp, () => {
	computedThumbPos();
	computedThumbSize();
}, {
	attributes: true,
	childList: true,
	subtree: true,
})

useEventListener(thumbY, "mousedown", (evt: MouseEvent) => {
	down.y = evt.clientY;
	origin.y = unrefElement(warp)!.scrollTop;
	flag = 'thumbY';
	active.value = 1;

	unrefElement(document.body)!.addEventListener('mousemove', handleMove);
})
useEventListener(thumbX, "mousedown", (evt: MouseEvent) => {
	down.x = evt.clientX;
	origin.x = unrefElement(warp)!.scrollLeft;
	flag = 'thumbX';
	active.value = 2;


	unrefElement(document.body)!.addEventListener('mousemove', handleMove);
})


useEventListener(document.body, 'mouseup', () => {
	active.value = 0;

	unrefElement(document.body)!.removeEventListener('mousemove', handleMove);

})



</script>

<template>
	<div class="s-scrollbar"
	     :data-always="props.always"
	     :data-native="props.native"
	     v-bind="$attrs">
		<div ref="warp" class="s-scrollbar__warp">
			<slot></slot>
		</div>
		<div v-if="!props.native" ref="barY" class="s-scrollbar__bar is-vertical"
		     v-show="props.vertical"
		     :class="[{
				 'is-outside':props.isOutside,
	             'is-active':active === 1
			 }]"
		>
			<div ref="thumbY" class="s-scrollbar__bar__thumb is-round" :style="thumbYStyle"></div>
		</div>
		<div v-if="!props.native" ref="barX" class="s-scrollbar__bar is-horizontal "
		     v-show="props.horizontal"
		     :class="[{
				 'is-outside':props.isOutside,
	             'is-active':active === 2
			 }]"

		>
			<div ref="thumbX" class="s-scrollbar__bar__thumb is-round" :style="thumbXStyle"></div>
		</div>
	</div>


</template>

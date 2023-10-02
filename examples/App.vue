<template>


	<br>
	<s-progress :percentage="p" :color="foo" text-status="inside" style="height: 15px"></s-progress>

	<s-divider direction="horizontal" prefix-icon="edit">hell</s-divider>

	<s-progress :percentage="p" type="warning" icon="edit" text-status="outside"></s-progress>

	<br>

	<s-button type="cyan" variant="fantasy" @click="handleClick"> click me</s-button>

	<br>

	<br>

<s-play></s-play>




</template>

<script setup lang="ts">


import {onMounted, ref} from "vue";
import {Alert} from "@sss-ui-plus/utils";
import {unrefElement} from "@vueuse/core";
import useAlert from "@sss-ui-plus/hooks/useAlert";
import {confirm, notify, SIconInstance, SMessageBoxInstance} from "@sss-ui-plus/components";
import {message} from "@sss-ui-plus/components";
import Divider from "@sss-ui-plus/components/SDivider/src/divider.vue";
import {SMessageBox} from "@sss-ui-plus/components";
import SPlay from "./SPlay.vue";


const div = ref<HTMLElement | null>(null);
const val = ref<string | null>('212342342354');
const ipt = ref<SIconInstance | null>(null);
const msg = ref<SMessageBoxInstance | null>(null);
const f = ref(false)

const e = ref('info');


const p = ref(20);

setInterval(() => {
	p.value += 2;
	if (p.value > 100) p.value = 0;
}, 300)


const handleClick = () => {

	f.value = !f.value;
	e.value = 'cyan';


}

const foo = (num: number) => {
	if (num > 80) {
		return 'var(--sss-color-primary)'
	} else if (num > 60) {
		return 'var(--sss-color-info)'

	} else if (num > 40) {
		return 'var(--sss-color-warning)'

	} else if (num > 20) {
		return 'var(--sss-color-danger)'

	} else {
		return 'var(--sss-color-cyan)'

	}
}


</script>

<style lang="less">
@import "../packages/styles/mixn/_index";

.test {
	width: 80vw;
	height: 30px;
	.useBorderGray();
	.useBorderRadius(@infinite);
	background-color: var(--sss-color-primary-lighter);
	.useBGScanningLine(var(--sss-color-primary-lighter), .5s);
	padding: 10px;
}

body {

	//background-color: rebeccapurple;
	&::-webkit-scrollbar {
		width: 6px;
	}

	&::-webkit-scrollbar-thumb {
		background-color: var(--sss-color-gray-dark); /* 设置滚动条滑块的背景颜色 */
		border-radius: 9999px;

	}

	&::-webkit-scrollbar-button {
		display: none;
	}
}


#app {

	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	//gap: 10px;
	padding-top: 50px;
	font-size: 15px;
}

.demo {
	display: flex;
	justify-content: center;
	align-items: start;
	gap: 20px;
	margin: 20px 0;

	& * {
	}

}

</style>




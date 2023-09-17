<template>

<!--	<s-button ref="btn" type="cyan" @click="handleClick">click me</s-button>-->

	<s-partial ref="default">
		<slot></slot>
	</s-partial>
	<s-button type="cyan" round  >waring</s-button>


</template>

<script setup lang="ts">
import {SPartial} from "@sss-ui-plus/components"
import {ref} from "@vue/runtime-core";

import {useBadge} from "@sss-ui-plus/hooks/useBadge";



const f = ref(false);
const val = ref<number>(3)
const btn = ref();
const demo = ref();


const handleClick = function () {
	f.value = !f.value
	val.value++;
}

const {setTxt} = useBadge(demo, 'primary', val);


</script>


<style lang="less">


#app {
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	gap: 10px;
	padding-top: 50px;
	color: var(--sss-color-black-light);
}

.demo {
	width: 60px;
	height: 30px;
	border: solid 1px black;
	background: #1BA784;

}

</style>




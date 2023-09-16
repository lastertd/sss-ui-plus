<template>

	<s-button v-if="f" type="primary" ghost @click="f = !f">click me</s-button>
	<s-skeleton animated :loading="f" :throttle="300">
		<template #skeleton>
			<s-skeleton-item style="width: 33%"></s-skeleton-item>
			<s-skeleton-item></s-skeleton-item>
			<s-skeleton-item></s-skeleton-item>
			<s-skeleton-item style="width: 66%"></s-skeleton-item>
			<s-skeleton-item style="width: 15%" type="image" is-circle></s-skeleton-item>
		</template>
		<div style="line-height: 40px">
			<span>柳叶儿弯弯拂水花儿转，<br>水花儿转转着小船儿摇，小船儿摇摇过石桥南，石桥南她撑伞步款款，<br>款款入我心尖.</span>
			<img  style="width: 80px;height: 80px;border-radius: 50%"
			     src="https://p2.music.126.net/Zkv2uiS0odyVOui_mCpbPQ==/7992350024247151.jpg?param=130y130"
			      alt="desc"
			      @click="handleClick"
			>
		</div>

	</s-skeleton>
</template>

<script setup>

import {ref} from "vue";

const f = ref(true);

const handleClick = () => {
	window.open('https://music.163.com/#/song?id=34017157');
}

</script>
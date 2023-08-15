<template>

	<s-button @click="handleClick">click me</s-button>
	<s-skeleton :loading="f" :throttle="1000">
		<template #skeleton>
			<div class="container">
				<s-skeleton-item  ></s-skeleton-item>
				<s-skeleton-item style="width: 30%" ></s-skeleton-item>
				<s-skeleton-item style="width: 100px;height: 100px" type="image" is-circle ></s-skeleton-item>
			</div>

		</template>
		hello

	</s-skeleton>


</template>

<script setup lang="ts">


import {provide, ref} from "vue";


const f = ref(true);

const handleClick = () => {
	f.value = !f.value
}




</script>


<style lang="less">
@import "src/styles/global";
#app {
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	gap: 10px;
	margin-top: 50px;
	color: var(--sss-color-black-light);
}

.container{
	.useBorderBox();
	.useBorderRadius5px();
	.useBorderGray();
	min-height: 500px;
	min-width: 700px;
	padding: 20px;
}


</style>




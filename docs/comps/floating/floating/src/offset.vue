<template>

	<s-row horizontal="flex-start" :gap="30">
		<s-floating
			trigger="hover"
			:close-delay="300"

		>
			<template #reference>
				<s-button type="primary" ghost>hove me</s-button>
			</template>
			默认偏移量5，不附带箭头
		</s-floating>
		<s-floating
			trigger="hover"
			:close-delay="300"
			:offset="15"

		>
			<template #reference>
				<s-button type="primary" ghost>hove me</s-button>
			</template>
			设置偏移量15
		</s-floating>
		<s-floating
			trigger="hover"
			:close-delay="300"
			show-arrow

		>
			<template #reference>
				<s-button type="primary" ghost>hove me</s-button>
			</template>
			设置显示箭头
		</s-floating>
	</s-row>


</template>

<script setup lang="ts">




</script>

<style>
.floating-test-class{
	height: 40px;
	width: 40px;
	border-radius: 50%;

}
.floating-test-head{
	height: 40px;
	width: 40px;
	border-radius: 50%;
	transition: all .3s ease;
	&:hover{
		height: 60px!important;
		width: 60px!important;

	}
}
</style>

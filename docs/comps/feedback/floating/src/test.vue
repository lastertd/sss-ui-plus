<template>



	<s-floating trigger="hover"
	            :close-delay="300"
	            expression="inline-block"
	>
		<template #reference>
			<div class="floating-test-class">
				<img src="https://avatars.githubusercontent.com/u/84920591?v=4" alt="head" class="floating-test-head">
			</div>
		</template>
		sss
	</s-floating>
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

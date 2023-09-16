<template>
	<s-row horizontal="space-evenly">
		<s-floating transition="fade">
			<template #reference>
				<s-button type="primary" ghost>fade</s-button>
			</template>
			默认fade过渡
		</s-floating>

		<s-floating transition="vertical-scroll">
			<template #reference>
				<s-button type="primary" ghost>垂直卷轴</s-button>
			</template>
			vertical-scroll
		</s-floating>

		<s-floating transition="scale" >
			<template #reference>
				<s-button type="primary" ghost>缩放</s-button>
			</template>
			scale
		</s-floating>

		<s-floating transition="horizontal-scroll" placement="right">
			<template #reference>
				<s-button type="primary" ghost>水平卷轴</s-button>
			</template>
			horizontal-scroll
		</s-floating>




	</s-row>


</template>

<script setup lang="ts">


</script>




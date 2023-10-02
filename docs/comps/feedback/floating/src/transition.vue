<template>
	<s-row justify-content="flex-start" :gap="20">
		<s-floating transition="s-transition-fade">
			<template #reference>
				<s-button >fade</s-button>
			</template>
			默认fade过渡
		</s-floating>

		<s-floating transition="s-transition-scaleVertical">
			<template #reference>
				<s-button >垂直卷轴</s-button>
			</template>
			vertical-scroll
		</s-floating>
		<s-floating transition="s-transition-scaleHorizontal" placement="left">
			<template #reference>
				<s-button >水平卷轴</s-button>
			</template>
			horizontal-scroll
		</s-floating>

		<s-floating transition="s-transition-scale" >
			<template #reference>
				<s-button >缩放</s-button>
			</template>
			scale
		</s-floating>






	</s-row>


</template>

<script setup lang="ts">


</script>




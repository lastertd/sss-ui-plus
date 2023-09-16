<template>
	<s-row horizontal="space-evenly">
		<s-floating>
			<template #reference>
				<s-button type="primary" ghost>click</s-button>
			</template>
			hello world.
		</s-floating>

		<s-floating trigger="hover">
			<template #reference>
				<s-button type="primary" ghost>hover</s-button>
			</template>
			ヾ(≧▽≦*)o
		</s-floating>

		<s-floating trigger="focus">
			<template #reference>
				<s-button type="primary" ghost>focus</s-button>
			</template>
			don't leave me alone😢
		</s-floating>

		<s-floating trigger="clickToOpen" close-on-click-body >
			<template #reference>
				<s-button type="primary" ghost>clickToOpen</s-button>
			</template>
			reference only opens floating
		</s-floating>

		<s-floating trigger="unset" close-on-click-body open-on-mounted >
			<template #reference>
				<s-button type="primary" ghost>unset</s-button>
			</template>
			人生天地间,忽如远行客
		</s-floating>

	</s-row>


</template>

<script setup lang="ts">


</script>




<template>
	<s-row horizontal="space-evenly">
		<s-floating>
			<template #reference>
				<s-button type="primary" ghost>click</s-button>
			</template>
			ᕕ(◠ڼ◠)ᕗ
		</s-floating>

		<s-floating trigger="hover">
			<template #reference>
				<s-button type="primary" ghost>hover</s-button>
			</template>
			꒰ঌ(❀ᓀ‸ᓂ)໒꒱
		</s-floating>

		<s-floating trigger="focus">
			<template #reference>
				<s-button type="primary" ghost>focus</s-button>
			</template>
			꒰ঌ(⸝⸝ ↀ ᯅ ↀ⸝⸝)໒꒱
		</s-floating>

		<s-floating trigger="clickToOpen" close-on-click-body >
			<template #reference>
				<s-button type="primary" ghost>clickToOpen</s-button>
			</template>
			꒰ঌ👊⸝⸝ ＞ヮ＜）꒱
		</s-floating>

		<s-floating trigger="unset" close-on-click-body open-on-mounted style="background: #7f48b6;color: white" >
			<template #reference>
				<s-button type="primary" ghost>unset</s-button>
			</template>
			✄╰ひ╯
		</s-floating>

	</s-row>


</template>

<script setup lang="ts">


</script>




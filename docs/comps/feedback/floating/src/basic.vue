<template>
	<s-row justify-content="flex-start" :gap="20">
		<s-floating>
			<template #reference>
				<s-button>click</s-button>
			</template>
			ᕕ(◠ڼ◠)ᕗ
		</s-floating>

		<s-floating trigger="hover">
			<template #reference>
				<s-button>hover</s-button>
			</template>
			꒰ঌ(❀ᓀ‸ᓂ)໒꒱
		</s-floating>

		<s-floating trigger="focus">
			<template #reference>
				<s-button>focus</s-button>
			</template>
			꒰ঌ(⸝⸝ ↀ ᯅ ↀ⸝⸝)໒꒱
		</s-floating>

		<s-floating trigger="clickToOpen" close-on-click-body>
			<template #reference>
				<s-button>clickToOpen</s-button>
			</template>
			꒰ঌ👊⸝⸝ ＞ヮ＜）꒱
		</s-floating>

		<s-floating
			ref="popover"
			trigger="unset"
			close-on-click-body
			open-on-mounted
			placement="top-start"
		>
			<template #reference>
				<div class="demo"></div>
			</template>
			<div class="lls"></div>
		</s-floating>

		<s-button @click="handleClick">click me</s-button>

	</s-row>


</template>

<script setup lang="ts">

import {ref} from "vue";
import {SFloatingInstance} from "sss-ui-plus";

const popover = ref<SFloatingInstance | null>(null);

const handleClick = () => {
	popover.value!.open();
}

</script>
<style scoped>
.demo {
	z-index: 1000;
	position: fixed;
	right: 5vw;
	bottom: 10px;
}

.lls {
	width: 10vw;
	aspect-ratio: 1 / 1.5;
	background-image: url("https://pic.imgdb.cn/item/651ab7abc458853aef146edb.webp");
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
}
</style>



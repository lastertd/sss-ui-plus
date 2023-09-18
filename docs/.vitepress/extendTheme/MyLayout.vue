<script setup lang="ts">
import DefaultTheme from "vitepress/theme";
import {STooltip} from "@sss-ui-plus/components";

const {Layout} = DefaultTheme

</script>

<template>
	<Layout class="layout">
		<template #aside-outline-after>
			<div class="join-container">
				<s-tooltip placement="top">
					<s-button>加入我们✨</s-button>
					<template #content>
						成为
						<s-link href="https://github.com/lastertd/sss-ui-plus">sss-ui-plus</s-link>
						的开发者
					</template>
				</s-tooltip>
				<s-tooltip>
					<s-button>联系我们🧡</s-button>
					<template #content>
						获取更多的信息请联系
						<s-link href="mailto:lasterxin@outlook.com">lasterxin@outlook.com</s-link>
					</template>
				</s-tooltip>

			</div>
		</template>
	</Layout>

</template>

<style scoped>
.join-container {
	display: grid;
	padding: 5px;
	margin: 5px;
	gap: 30px;
}

</style>
<template>
	<s-row justify-content="flex-start" :gap="20">
		<s-input v-model="val">
			<template #prefixSlot>https://</template>
		</s-input>
		<s-input v-model="val">
			<template #suffixSlot>.com</template>
		</s-input>
	</s-row>
	<s-row justify-content="flex-start" :gap="20">
		<s-input v-model="val">
			<template #prefixSlot>
				<s-icon target="edit"></s-icon>
			</template>
		</s-input>
		<s-input v-model="val" class="with-button">
			<template #suffixSlot>
				<s-dropdown>
					<template #reference>
						<s-button type="cyan">click me</s-button>
					</template>
					<s-dropdown-item
						v-for="item in data"
						:value="item"
						@select="foo"
					>{{item}}</s-dropdown-item>
				</s-dropdown>
			</template>
		</s-input>
	</s-row>
</template>
<script setup lang="ts">

import {ref} from "vue";

const val = ref(undefined);
const data = ref(['item 1', 'item 2', 'item 3', 'item 4', 'item 5']);

const foo = (v:string) => {
	val.value = v;
}


</script>
<style lang="less">
.with-button .s-input__slot--suffix {
	padding: 0;

	& > * {
		border: none;
		border-radius: unset;
	}
}


</style>




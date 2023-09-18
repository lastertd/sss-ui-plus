<template>
	<s-input
		placeholder="输入框必须绑定value"
		v-model="value"
		show-word-limit
		:max-length="5"
		clearable
		type="password"
		show-password


	>
		<template #prefixSlot>
			helo
		</template>

	</s-input>
</template>

<script setup lang="ts">
import {ref} from "vue";

const value = ref<string>('1')
</script>



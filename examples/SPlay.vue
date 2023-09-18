<template>
	<s-input placeholder="输入框必须绑定value" show-word-limit :max-length="5"

	></s-input>
</template>

<script setup lang="ts">
import {ref} from "vue";

const value = ref<string>('12233122')
</script>



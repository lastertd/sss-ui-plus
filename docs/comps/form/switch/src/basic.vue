<template>
<s-row justify-content="flex-start" :gap="20">
	<s-switch></s-switch>
	<s-switch v-model="f"></s-switch>
</s-row>
</template>

<script setup lang="ts">

import {ref} from "vue";

const f = ref<boolean>(false);

</script>




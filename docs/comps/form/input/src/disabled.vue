<template>
	<s-input v-model="val" disabled placeholder="disabled"></s-input>
</template>
<script setup lang="ts">

import {ref} from "vue";

const val = ref(1234);
</script>




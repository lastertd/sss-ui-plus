<template>
	<s-input v-model="val" clearable  placeholder="clearable"></s-input>
</template>
<script setup lang="ts">

import {ref} from "vue";

const val = ref(undefined);
</script>




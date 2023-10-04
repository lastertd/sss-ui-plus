<template>
	<s-input v-model="val" placeholder="write something" ></s-input>
</template>
<script setup lang="ts">

import {ref} from "vue";

const val = ref(undefined);
</script>




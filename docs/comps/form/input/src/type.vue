<template>
	<s-input v-model="val" type="password"  placeholder="password" ></s-input>
	<div style="height: 20px"></div>
	<s-input v-model="val" type="password" placeholder="password" show-password ></s-input>
</template>
<script setup lang="ts">

import {ref} from "vue";

const val = ref(undefined);
</script>




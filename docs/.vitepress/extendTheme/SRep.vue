<script setup lang="ts">

import {ref} from "vue";

const props =defineProps({
	text:String,
	aim:String
})

const to = ref(`https://github.com/lastertd/sss-ui-plus/tree/master/packages/components/${props.aim}`)

</script>

<template>

	<s-link class="s-rep"  :href="to" suffix-icon="edit">组件</s-link>

</template>

<style scoped lang="less">
.vp-doc .s-rep{
	text-decoration: none;
	align-items: flex-end;
}

</style>
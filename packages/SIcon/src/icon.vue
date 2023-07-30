<script setup lang="ts">
import "./icon.less"
import {ref} from "vue";

defineOptions({
	name: "SIcon",
})

const icon = ref(null);

const props = defineProps({
	target:String
})



</script>

<template>


	<i
		ref="icon"
		v-if="props.target"
		class="iconfont sss-icon"
		:class="`sss-${target}`"
	></i>




</template>


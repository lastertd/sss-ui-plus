<template>
	<s-button
		empty
		@click="handleClick"
	>
		某个神秘按钮
	</s-button>
</template>

<script setup lang="ts">
import {confirm} from "sss-ui-plus/es/index";

const handleClick = () => {
	confirm({
		title:'待确认',
		text:"听我说..v me 50!",
		cancelBtnText:'no way',
		confirmBtnText:'v 50!!'
	})
}

</script>




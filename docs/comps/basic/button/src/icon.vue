<template>
	<s-row horizontal="flex-start" :gap="10">
		<s-button type="primary" prefix-icon="user2">个人中心</s-button>
		<s-button type="success" suffix-icon="upload" >上传文件</s-button>
		<s-button
			type="danger"
			prefix-icon="medal"
			suffix-icon="medal"
			@click="handleClick"
		>flower</s-button>
	</s-row>
</template>

<script setup>
import {message} from "sss-ui-plus/es/index";

const handleClick = () => {
	message({
		type:'success',
		text:'🌹🌹🌹',
	})
}

</script>

<template>
	<s-row justify-content="flex-start" :gap="10" wrap>
		<s-button prefix-icon="edit">edit</s-button>
		<s-button prefix-icon="upload" type="primary">upload</s-button>
		<s-button prefix-icon="medal" type="success">medal</s-button>
		<s-button suffix-icon="star" type="info">star</s-button>
		<s-button suffix-icon="" type="danger">flower</s-button>
		<s-button suffix-icon="option" type="warning">option</s-button>
		<s-button prefix-icon="email" suffix-icon="email" type="cyan">waring</s-button>
	</s-row>
	<s-row justify-content="flex-start" :gap="10" wrap>
		<s-button prefix-icon="upload" status="circle" type="primary"></s-button>
		<s-button prefix-icon="medal" status="round" type="success"></s-button>
		<s-button suffix-icon="star"  type="info"></s-button>
		<s-button suffix-icon="option" type="cyan" style="padding: 0 30px"></s-button>
	</s-row>
</template>

<script setup>
import {message} from "sss-ui-plus/es/index";

const handleClick = () => {
	message({
		type: 'success',
		text: '🌹🌹🌹',
	})
}

</script>

<template>
	<s-row justify-content="flex-start" :gap="10" wrap>
		<s-button status="round">default</s-button>
		<s-button status="round" type="primary">primary</s-button>
		<s-button status="round" type="success">success</s-button>
		<s-button status="round" type="info">info</s-button>
		<s-button status="round" type="danger">danger</s-button>
		<s-button status="round" type="warning">waring</s-button>
		<s-button status="round" type="cyan">waring</s-button>
	</s-row>

	<s-row justify-content="flex-start" :gap="10" wrap>
		<s-button variant="fantasy">fantasy</s-button>
		<s-button variant="fantasy" type="primary">primary</s-button>
		<s-button variant="fantasy" type="success">success</s-button>
		<s-button variant="fantasy" type="info">info</s-button>
		<s-button variant="fantasy" type="danger">danger</s-button>
		<s-button variant="fantasy" type="warning">waring</s-button>
		<s-button variant="fantasy" type="cyan">waring</s-button>
	</s-row>

	<s-row justify-content="flex-start" :gap="10" wrap>
		<s-button status="round" variant="empty">empty</s-button>
		<s-button status="round" variant="empty" type="primary">primary</s-button>
		<s-button status="round" variant="empty" type="success">success</s-button>
		<s-button status="round" variant="empty" type="info">info</s-button>
		<s-button status="round" variant="empty" type="danger">danger</s-button>
		<s-button status="round" variant="empty" type="warning">waring</s-button>
		<s-button status="round" variant="empty" type="cyan">waring</s-button>
	</s-row>

	<s-row justify-content="flex-start" :gap="10" wrap>
		<s-button variant="ghost">ghost</s-button>
		<s-button variant="ghost" type="primary">primary</s-button>
		<s-button variant="ghost" type="success">success</s-button>
		<s-button variant="ghost" type="info">info</s-button>
		<s-button variant="ghost" type="danger">danger</s-button>
		<s-button variant="ghost" type="warning">waring</s-button>
		<s-button variant="ghost" type="cyan">waring</s-button>
	</s-row>

	<s-row justify-content="flex-start" :gap="10" wrap>
		<s-button status="circle" prefix-icon="eye"></s-button>
		<s-button status="circle" prefix-icon="edit" type="primary" ></s-button>
		<s-button status="circle" prefix-icon="user2" type="success"></s-button>
		<s-button status="circle" prefix-icon="star" type="info"></s-button>
		<s-button status="circle" prefix-icon="close" type="danger"></s-button>
		<s-button status="circle" prefix-icon="upload" type="warning"></s-button>
		<s-button status="circle" prefix-icon="dongtai" type="cyan"></s-button>
	</s-row>
</template>
<script setup lang="ts">
</script>
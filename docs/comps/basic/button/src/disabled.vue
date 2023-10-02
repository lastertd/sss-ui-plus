<template>
	<s-row justify-content="flex-start" :gap="5" wrap>
		<s-button disabled>disabled</s-button>
		<s-button disabled type="primary">primary</s-button>
		<s-button disabled type="success">success</s-button>
		<s-button disabled type="info">info</s-button>
		<s-button disabled type="danger">danger</s-button>
		<s-button disabled type="warning">waring</s-button>
		<s-button disabled type="cyan">waring</s-button>
	</s-row>
	<s-row justify-content="flex-start" :gap="5" wrap>
		<s-button loading>loading</s-button>
		<s-button loading type="primary">primary</s-button>
		<s-button loading type="success">success</s-button>
		<s-button loading type="info">info</s-button>
		<s-button loading type="danger">danger</s-button>
		<s-button loading type="warning">waring</s-button>
		<s-button loading type="cyan">waring</s-button>
	</s-row>

	<s-row justify-content="flex-start" :gap="5" wrap>
		<s-button disabled variant="empty">disabled</s-button>
		<s-button disabled variant="empty" type="primary">primary</s-button>
		<s-button disabled variant="empty" type="success">success</s-button>
		<s-button disabled variant="empty" type="info">info</s-button>
		<s-button disabled variant="empty" type="danger">danger</s-button>
		<s-button disabled variant="empty" type="warning">waring</s-button>
		<s-button disabled variant="empty" type="cyan">waring</s-button>
	</s-row>


	<s-row justify-content="flex-start" :gap="5" wrap>
		<s-button loading variant="ghost">loading</s-button>
		<s-button loading variant="ghost" type="primary">primary</s-button>
		<s-button loading variant="ghost" type="success">success</s-button>
		<s-button loading variant="ghost" type="info">info</s-button>
		<s-button loading variant="ghost" type="danger">danger</s-button>
		<s-button loading variant="ghost" type="warning">waring</s-button>
		<s-button loading variant="ghost" type="cyan">waring</s-button>
	</s-row>

</template>
<script setup lang="ts">
</script>
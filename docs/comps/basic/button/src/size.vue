<template>
	<s-row horizontal="flex-start" :gap="10" vertical="flex-start">
		<s-button type="primary" size="large">large</s-button>
		<s-button type="success" size="normal">normal</s-button>
		<s-button type="cyan" size="small">small</s-button>

		<s-button type="primary" size="large" round empty>large</s-button>
		<s-button type="success" size="normal"  round empty>normal</s-button>
		<s-button type="cyan" size="small" round empty>small</s-button>
	</s-row>
	<s-row horizontal="flex-start" :gap="10" vertical="flex-start">
		<s-button type="primary" size="large" ghost>large</s-button>
		<s-button type="success" size="normal" ghost>normal</s-button>
		<s-button type="cyan" size="small" ghost>small</s-button>

		<s-button size="large">large</s-button>
		<s-button size="normal">normal</s-button>
		<s-button size="small">small</s-button>

	</s-row>
</template>
<script setup lang="ts">
</script>
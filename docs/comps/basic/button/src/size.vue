<template>
	<s-row justify-content="flex-start" align-item="flex-start" :gap="10" >
		<s-button type="primary" size="large">large</s-button>
		<s-button type="success" size="normal">normal</s-button>
		<s-button type="cyan" size="small">small</s-button>

		<s-button type="primary" size="large" variant="fantasy" >large</s-button>
		<s-button type="success" size="normal"  variant="fantasy" >normal</s-button>
		<s-button type="cyan" size="small" variant="fantasy" >small</s-button>
	</s-row>
	<s-row justify-content="flex-start" align-item="flex-start" :gap="10" >
		<s-button type="primary" size="large" variant="empty" >large</s-button>
		<s-button type="success" size="normal"  variant="empty" >normal</s-button>
		<s-button type="cyan" size="small" variant="empty" >small</s-button>

		<s-button type="primary" size="large" variant="ghost" >large</s-button>
		<s-button type="success" size="normal"  variant="ghost" >normal</s-button>
		<s-button type="cyan" size="small" variant="ghost" >small</s-button>
	</s-row>
	<s-button style="width: 70px;font-size: 20px" >高度被撑开</s-button>
</template>
<script setup lang="ts">
</script>
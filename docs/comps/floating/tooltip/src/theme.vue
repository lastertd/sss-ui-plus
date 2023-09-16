<template>
	<s-row horizontal="flex-start" :gap="20">
		<s-tooltip content="light theme">
			<s-button type="primary" ghost>hover me</s-button>
		</s-tooltip>
		<s-tooltip content="dark theme" theme="light">
			<s-button type="primary" ghost>hover me</s-button>
		</s-tooltip>

	</s-row>
</template>






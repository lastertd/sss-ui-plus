<template>
	<s-row justify-content="flex-start" :gap="20">
		<s-tooltip content="light theme">
			<template #content>
				tool tip
				<br>
				hello world!
			</template>
			<s-button>hover me</s-button>
		</s-tooltip>
	</s-row>
</template>





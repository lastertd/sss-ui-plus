<template>
	<s-row justify-content="flex-start" :gap="30">
		<s-badge :value="12">
			<s-button>comments</s-button>
		</s-badge>

		<s-badge value="new" type="success">
			<s-button>reply</s-button>
		</s-badge>

		<s-badge :value="12" type="info">
			<s-button>comments</s-button>
		</s-badge>

		<s-badge type="waring">
			<s-button>comments</s-button>
		</s-badge>

		<s-dropdown style="padding: 0 5px">
			<template #reference>
				<s-button>click me</s-button>
			</template>
			<s-dropdown-item style="width: 130px">
				item one
				<s-badge type="danger"></s-badge>
			</s-dropdown-item>
			<s-dropdown-item >
				item one
				<s-badge :value="123" type="cyan"></s-badge>
			</s-dropdown-item>
			<s-dropdown-item >
				item one
				<s-badge value="hot"></s-badge>
			</s-dropdown-item>
		</s-dropdown>

	</s-row>

</template>

<script setup lang="ts">

</script>




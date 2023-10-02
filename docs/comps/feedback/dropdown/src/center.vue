<template>
	<s-row justify-content="center">
		<s-dropdown
			style="height: 200px;width: 150px"
			close-on-click-body
			center
		>
			<template #reference>
				<s-button >导航项</s-button>
			</template>
			<s-dropdown-item
				v-for="i in 15"
				:label="`item ${i}`"
			></s-dropdown-item>
		</s-dropdown>
	</s-row>

</template>
<script setup>
</script>
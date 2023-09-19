<template>
	<s-row horizontal="center">
		<s-dropdown
			style="height: 150px"
			close-on-click-body
		>
			<template #reference>
				<s-button type="primary" ghost>导航项</s-button>
			</template>
			<s-dropdown-item
				v-for="i in 10"
				:label="`item ${i}`"
			></s-dropdown-item>
		</s-dropdown>
	</s-row>

</template>

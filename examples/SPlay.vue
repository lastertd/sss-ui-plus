<template>
	<s-row horizontal="center">
		<s-dropdown

		>
			<template #reference>
				<s-button type="primary" ghost>导航项</s-button>
			</template>
			<s-dropdown-item
				label="page111"
				suffix-icon="edit"
			></s-dropdown-item>
			<s-dropdown-item
				label="page1"
				suffix-icon="edit"
			></s-dropdown-item>
			<s-dropdown-item
				label="page2"
				is-active
				suffix-icon="edit"
			></s-dropdown-item>
			<s-dropdown-item
				label="friend1"
				disabled
				suffix-icon="user2"
			></s-dropdown-item>
			<s-dropdown-item
				label="friend2"
				suffix-icon="user2"
			></s-dropdown-item>
		</s-dropdown>
	</s-row>

</template>

<style lang="less">
.sss-dropdown-title{
	margin: 5px 0 0 0;
	font-weight: 1000;
	font-size: 10px;
	color: var(--sss-color-primary-light);
	padding: 7px 16px;
	text-align: left;
}
</style>
<script setup lang="ts">
</script>
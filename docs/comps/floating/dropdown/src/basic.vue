<template>
	<s-row horizontal="center">
		<s-dropdown>
			<template #reference>
				<s-button type="primary" ghost>导航项</s-button>
			</template>
			<s-dropdown-item
				label="项目主页"
				suffix-icon="home"
				tag="s-link"
				href="/"
				jump-method="push"
				style="padding: 7px 16px"

			></s-dropdown-item>
			<s-dropdown-item
				label="个人主页"
				suffix-icon="user"
				tag="s-link"
				href="https://github.com/lastertd"
				jump-method="newView"
				style="padding: 7px 16px"


			></s-dropdown-item>
			<s-dropdown-item
				label="代码仓库"
				suffix-icon="star"
				tag="s-link"
				href="https://github.com/lastertd/sss-ui-plus"
				jump-method="newView"
				style="padding: 7px 16px"


			></s-dropdown-item>

		</s-dropdown>
	</s-row>

</template>


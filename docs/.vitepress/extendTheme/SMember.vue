<script setup lang="ts">
import SMemberItem from "./SMemberItem.vue";

type m = {
	avatar:string,
	name:string,
	link:string,
}

const members:m[] = [
	{
		avatar:'https://avatars.githubusercontent.com/u/84920591?v=4',
		name:'laster',
		link:'https://github.com/lastertd'
	},


]
</script>

<template>
	<ul class="s-member">
		<s-member-item
			v-for="m in members"
			:avatar="m.avatar"
			:name="m.name"
			:link="m.link"
		></s-member-item>
	</ul>
</template>


<style scoped>
.s-member{
	list-style: none;
	display: flex;
	flex-flow: row wrap;
	justify-content: flex-start;
	align-items: center;
	gap: 10px;


}
</style>



<template>
	<li style="margin: 0">
		<a class="s-member-item" :href="props.link">
			<div class="s-member-item__avatar">
				<img :src="props.avatar" alt="avatar">
			</div>
			<span class="s-member-item__link">
			{{ props.name }}

		</span>
		</a>
	</li>


</template>

<script setup lang="ts">


const props = defineProps({
	avatar: String,
	name: String,
	link: String,
})

</script>


<style scoped lang="less">
.s-member-item {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-flow: row wrap;
	gap: 10px;
	color: inherit;
	list-style: none;


	&:hover {
		color: var(--sss-color-primary-light);

	}


	&__avatar {
		height: 40px;
		width: 40px;
		border-radius: 50%;
		overflow: hidden;

		& > img {
			transition: all .1s;

			&:hover {
				transform: scale(1.1);

			}
		}

	}

}

</style>
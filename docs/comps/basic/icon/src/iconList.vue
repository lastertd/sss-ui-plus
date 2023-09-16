<template>
	<div class="icon-list">
		<div
			class="icon-item"
			v-for="item in data" :key="item"
			@click="handleClick(item)"
		>
			<s-icon :target="item" class="icon-icon"></s-icon>
			{{item}}
		</div>

	</div>
</template>

<script setup lang="ts">
import {message} from "sss-ui-plus/es/index";

const data = [
	'eye',
	'other',
	'chart-line',
	'store',
	'user',
	'user-fill',
	'user2',
	'user-group',
	'controll',
	'comps',
	'time-fill',
	'tag-fill',
	'time',
	'star',
	'star2',
	'star-fill',
	'minus',
	'plus',
	'triangle-left',
	'triangle-right',
	'triangle-top',
	'triangle-bottom',
	'triangle-line-left',
	'triangle-line-up',
	'triangle-line-right',
	'home',
	'medal',
	'option',
	'title',
	'email',
	'upload',
	'upload-2',
	'delete',
	'editor',
	'menu',
	'file-md',
	'dongtai',
	'logout',
	'cricle-close',
	'close',
	'success',
	'danger',
	'warning',
	'info',
	'loading',
]

const handleClick = (target:string) => {
	navigator.clipboard.writeText(target);
	message({
		type:'success',
		text:`复制成功!!`,
		timeout:1000
	})

}


</script>


<style lang="less">
.icon-list{
	width: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(120px,1fr));
	border-left: 1px solid var(--sss-color-gray);
	border-top: 1px solid var(--sss-color-gray);


}
.icon-item{
	height: 80px;
	box-sizing: border-box;
	& * {
		box-sizing: inherit;
	}
	border-bottom: 1px solid var(--sss-color-gray);
	border-right: 1px solid var(--sss-color-gray);

	font-size: 15px;
	color: var(--sss-color-black-light);
	.icon-icon{
		font-size: 20px;
		color: var(--sss-color-black-light);


	}

	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;

	user-select: none;
}

.icon-item{
	&:hover{
		background: var(--sss-color-primary-fade);
	}
}
</style>
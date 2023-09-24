<template>
	<div class="icon-list">
		<div
			class="icon-item"
			v-for="item in data" :key="item"
			@click="handleClick(item)"

		>
			<s-icon :target="item" :rotating="item === 'loading'" class="icon-icon"></s-icon>
			{{item}}
		</div>

	</div>
</template>

<script setup lang="ts">
import {message} from "sss-ui-plus/es/index";

const data = [
	'success',
	'danger',
	'warning',
	'info',

	"minus",
	'plus',

	"tg-top-1",
	"tg-top-2",
	"tg-top-3",
	"tg-right-1",
	"tg-right-2",
	"tg-right-3",
	"tg-bottom-1",
	"tg-bottom-2",
	"tg-bottom-3",
	"tg-left-1",
	"tg-left-2",
	"tg-left-3",

	"image",
	"email",
	"logout",
	"delete",
	"edit",
	"user",
	"user-fill",
	"user2",
	"loading",
	"eye",
	"other",
	"tag-fill",
	"time",
	"star",
	"star-fill",
	"home",
	"medal",
	"option",
	"upload",
	"dongtai",
	"close",
	"cricle-close",

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
		font-size: 23px!important;
		color: var(--sss-color-black-light);
		margin-bottom: 10px;

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
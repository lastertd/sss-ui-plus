<template>


	<s-tooltip content="hello" transition="hhhh">
		hhh
	</s-tooltip>

	<div ref="ipt" style="height: 50px;width: 50px;border: 1px solid black"></div>

	<s-link type="primary" href="/hh" jump-method="newView">hello</s-link>

	<s-dropdown style="width: 100px;">
		<template #reference>
			hello
		</template>
		<s-dropdown-item disabled >hello</s-dropdown-item>
		<s-dropdown-item is-active tag="s-link" href="/">hh</s-dropdown-item>
		<s-dropdown-item prefix-icon="medal" :close-on-click="false" tag="s-link" href="/te" jump-method="newView">hello</s-dropdown-item>
		<s-dropdown-item>hello</s-dropdown-item>
		<s-dropdown-item>hello</s-dropdown-item>
	</s-dropdown>

</template>

<script setup lang="ts">

import {notify} from "../packages/SMessage"
import {computed, onMounted, provide, ref} from "vue";
import {useDraggable} from "../src/hooks/useDraggable";

const options = [
	{
		value: 'guide',
		label: 'Guide',
		children: [
			{
				value: 'disciplines',
				label: 'Disciplines',
				children: [
					{
						value: 'consistency',
						label: 'Consistency',
					},
					{
						value: 'feedback',
						label: 'Feedback',
					},
					{
						value: 'efficiency',
						label: 'Efficiency',
					},
					{
						value: 'controllability',
						label: 'Controllability',
					},
				],
			},
			{
				value: 'navigation',
				label: 'Navigation',
				children: [
					{
						value: 'side nav',
						label: 'Side Navigation',
					},
					{
						value: 'top nav',
						label: 'Top Navigation',
					},
				],
			},
		],
	},
	{
		value: 'component',
		label: 'Component',
		children: [
			{
				value: 'basic',
				label: 'Basic',
				children: [
					{
						value: 'layout',
						label: 'Layout',
					},
					{
						value: 'color',
						label: 'Color',
					},
					{
						value: 'typography',
						label: 'Typography',
					},
					{
						value: 'icon',
						label: 'Icon',
					},
					{
						value: 'button',
						label: 'Button',
					},
				],
			},
			{
				value: 'form',
				label: 'Form',
				children: [
					{
						value: 'radio',
						label: 'Radio',
					},
					{
						value: 'checkbox',
						label: 'Checkbox',
					},
					{
						value: 'input',
						label: 'Input',
					},
					{
						value: 'input-number',
						label: 'InputNumber',
					},
					{
						value: 'select',
						label: 'Select',
					},
					{
						value: 'cascader',
						label: 'Cascader',
					},
					{
						value: 'switch',
						label: 'Switch',
					},
					{
						value: 'slider',
						label: 'Slider',
					},
					{
						value: 'time-picker',
						label: 'TimePicker',
					},
					{
						value: 'date-picker',
						label: 'DatePicker',
					},
					{
						value: 'datetime-picker',
						label: 'DateTimePicker',
					},
					{
						value: 'upload',
						label: 'Upload',
					},
					{
						value: 'rate',
						label: 'Rate',
					},
					{
						value: 'form',
						label: 'Form',
					},
				],
			},
			{
				value: 'data',
				label: 'Data',
				children: [
					{
						value: 'table',
						label: 'Table',
					},
					{
						value: 'tag',
						label: 'Tag',
					},
					{
						value: 'progress',
						label: 'Progress',
					},
					{
						value: 'tree',
						label: 'Tree',
					},
					{
						value: 'pagination',
						label: 'Pagination',
					},
					{
						value: 'badge',
						label: 'Badge',
					},
				],
			},
			{
				value: 'notice',
				label: 'Notice',
				children: [
					{
						value: 'alert',
						label: 'Alert',
					},
					{
						value: 'loading',
						label: 'Loading',
					},
					{
						value: 'message',
						label: 'Message',
					},
					{
						value: 'message-box',
						label: 'MessageBox',
					},
					{
						value: 'notification',
						label: 'Notification',
					},
				],
			},
			{
				value: 'navigation',
				label: 'Navigation',
				children: [
					{
						value: 'menu',
						label: 'Menu',
					},
					{
						value: 'tabs',
						label: 'Tabs',
					},
					{
						value: 'breadcrumb',
						label: 'Breadcrumb',
					},
					{
						value: 'dropdown',
						label: 'Dropdown',
					},
					{
						value: 'steps',
						label: 'Steps',
					},
				],
			},
			{
				value: 'others',
				label: 'Others',
				children: [
					{
						value: 'dialog',
						label: 'Dialog',
					},
					{
						value: 'tooltip',
						label: 'Tooltip',
					},
					{
						value: 'popover',
						label: 'Popover',
					},
					{
						value: 'card',
						label: 'Card',
					},
					{
						value: 'carousel',
						label: 'Carousel',
					},
					{
						value: 'collapse',
						label: 'Collapse',
					},
				],
			},
		],
	},
	{
		value: 'resource',
		label: 'Resource',
		children: [
			{
				value: 'axure',
				label: 'Axure Components',
			},
			{
				value: 'sketch',
				label: 'Sketch Templates',
			},
			{
				value: 'docs',
				label: 'Design Documentation',
			},
		],
	},
]


const buttonRef = ref();






const handleClick = () => {
	notify({
		type: 'success',
		title: 'nih',
		text: 'hh1111111111111111111111111111111hh',
	})
}



</script>


<style lang="less">
#app {
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	gap: 10px;
	margin-top: 50px;
	color: var(--sss-color-black-light);
}

.container {
	position: relative;
	padding: 10px;
	width: 300px;
	height: 300px;
}

.item {
	box-sizing: border-box;
	margin: 10px 0;
	width: 100%;
	height: 80px;
	border: solid 1px var(--sss-color-gray-dark);
	background: var(--sss-color-primary-fade);
	border-radius: 5px;
	color: var(--sss-color-black-light);
	text-align: center;
	line-height: 80px;
}
.ttt{
	transition: all  .3s ease;
}

</style>




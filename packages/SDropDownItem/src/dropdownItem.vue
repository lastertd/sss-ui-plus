<template>
	<div
		v-if="props.label || $slots?.default"
		class="sss-dropdown-item"
		@click="handleClick"
		:data-center="isCenter"

	>
		<s-icon :target="props.prefixIcon" style="padding: 0" ></s-icon>
		<span v-if="$slots?.default"><slot></slot></span>
		<span v-else>{{props.label}}</span>
		<s-icon :target="props.suffixIcon" style="padding: 0" ></s-icon>
	</div>
</template>

<script setup lang="ts">

import "./dropdownItem.less"
import {SDropdownItemEmits, SDropdownItemProps} from "./dropdownItem";
import {inject} from "@vue/runtime-core";
import {Ref} from "vue";


const props = defineProps({...SDropdownItemProps});
const emits = defineEmits({...SDropdownItemEmits});

const inDropdown = inject('inDropdown') as Boolean | undefined;
const isCenter = inject('isCenter') as Ref<Boolean | undefined>;
const handleItemClick = inject('handleItemClick') as (val:string | undefined) => {};


if (inDropdown === undefined) {
	throw  SyntaxError('dropdown-item component should be within dropdown component')
}

const handleClick = () => {
	handleItemClick(props.value);
	emits("select",props.value);
}


</script>




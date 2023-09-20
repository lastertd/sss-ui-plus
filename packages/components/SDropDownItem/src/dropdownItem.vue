<script setup lang="ts">
import {SDropdownItemEmits, SDropdownItemProps} from "./dropdownItem"
import {SIcon} from "../../SIcon";
import {Ref, inject, warn} from "vue";

defineOptions({
	name: 'SDropdownItem',
	inheritAttrs: false
})


const props = defineProps({...SDropdownItemProps});
const emits = defineEmits({...SDropdownItemEmits});
const inDropdown = inject('inDropdown') as Boolean | undefined;
const isCenter = inject('isCenter') as Ref<Boolean | undefined>;
const DropdownItemClick = inject('DropdownItemClick') as (val: string | undefined) => void;
const close = inject('DropdownClose') as () => {}


if (inDropdown === undefined) {
	warn('dropdown-item component should be within dropdown component');
}

const handleClick = () => {
	DropdownItemClick(props.value);
	emits("select", props.value);
	emits('click');

	if (props.closeOnClick && !props.disabled) {
		close();
	}
}


</script>

<template>
	<component
		:is="props.tag"
		v-if="props.label || $slots?.default"
		class="s-dropdown__item"
		@click="handleClick"
		:data-center="isCenter"
		:href="props.href"
		:jumpMethod="props.jumpMethod"
		v-bind="$attrs"


		:class="[{
			'is-active':props.isActive,
			'is-disabled':props.disabled
		}]"


	>
		<s-icon :target="props.prefixIcon" style="padding: 0"></s-icon>
		<span v-if="$slots?.default"><slot></slot></span>
		<span v-else>{{ props.label }}</span>
		<s-icon :target="props.suffixIcon" style="padding: 0"></s-icon>
	</component>
</template>


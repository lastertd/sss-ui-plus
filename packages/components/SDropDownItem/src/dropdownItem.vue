<template>
	<li>
		<component
			:class="itemKls"
			v-bind="$attrs"
			:is="props.tag"
			:data-center="isCenter"
			:href="props.href"
			:jumpMethod="props.jumpMethod"
			@click="handleClick"
		>
			<s-icon :target="props.prefixIcon" ></s-icon>
			<span v-if="$slots?.default"><slot></slot></span>
			<span v-else>{{ props.label }}</span>
			<s-icon :target="props.suffixIcon" ></s-icon>
		</component>
	</li>

</template>

<script setup lang="ts">
import {SDropdownItemEmits, SDropdownItemProps} from "./dropdownItem"
import {SIcon} from "../../SIcon";
import {Ref, inject, warn, computed} from "vue";
import {useNS} from "@sss-ui-plus/hooks";

defineOptions({
	name: 'SDropdownItem',
	inheritAttrs: false
})


const props = defineProps({...SDropdownItemProps});
const emits = defineEmits({...SDropdownItemEmits});
const itemNS = useNS('dropdown-item');

const itemKls = computed(() => {
	return [
		itemNS.namespace,
		itemNS.is('active', props.active),
		itemNS.is('disabled', props.disabled),
	]
})



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




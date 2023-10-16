<template>
	<s-floating
		ref="floating"
		v-bind="useAttrs('scoped').value"
		:class="ns.namespace"
		:trigger="props.trigger"
		:placement="props.placement"
		:transition="props.transition"
		:open-delay="props.openDelay"
		:close-delay="props.closeDelay"
		:disabled="props.disabled"
		:offset="props.offset"
		:close-on-click-body="props.closeOnClickBody"
		:open-on-mounted="props.openOnMounted"
		:teleported="props.teleported"
		:show-arrow="props.showArrow"
		:floating-class="props.floatingClass"
		:reference="props.reference"
		:quick-track="props.quickTrack"
		@open="handleOpen"
		@opened="emits('opened')"
		@close="emits('close')"
		@closed="emits('closed')"


	>
		<template #reference v-if="slots.default">
			<slot></slot>
		</template>

		<template #default>
			<SMessageBox
				ref="msgBox"
				:class="ns.e('inner')"
				:transition="props.transition"
				:type="props.type"
				:cancel-btn-text="props.cancelBtnText"
				:confirm-btn-text="props.confirmBtnText"
				:title="props.text"
				:icon="props.icon"
				:icon-color="props.iconColor"

				@close="handleClose"
				@cancel="handleCancel"
				@confirm="handleConfirm"
			>
			</SMessageBox>

		</template>
	</s-floating>
</template>


<script setup lang="ts">
import {SPopconfirmEmits, SPopconfirmProps} from "./popconfirm";
import {SFloating} from "../../SFloating";
import {SMessageBoxInstance, SMessageBox} from "../../SMessageBox";
import {nextTick, ref, useSlots} from "vue";
import {useAttrs, useNS} from "@sss-ui-plus/hooks";

defineOptions({
	name: 's-popconfirm',
	inheritAttrs: false
})
const ns = useNS('popconfirm');
const props = defineProps({...SPopconfirmProps});
const emits = defineEmits({...SPopconfirmEmits})
const slots = useSlots();


const msgBox = ref<SMessageBoxInstance | undefined>(undefined);
const floating = ref<InstanceType<typeof SFloating> | undefined>(undefined);


const handleOpen = () => {
	emits('open');
	nextTick().then(() => {
		msgBox.value!.open();
	})
}


const _ = () => {
	msgBox.value!.open();
	floating.value!.close();
}

const handleClose = () => {
	_();
	emits('close')

}

const handleCancel = () => {
	_();
	emits("cancel")
}


const handleConfirm = () => {
	_();
	emits("confirm")
}


</script>

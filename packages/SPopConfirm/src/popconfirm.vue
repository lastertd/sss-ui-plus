<template>
	<s-floating
		ref="floating"
		:trigger="props.trigger"
		:placement="props.placement"
		:transition="props.transition"
		:open-delay="props.openDelay"
		:close-delay="props.closeDelay"
		:disabled="props.disabled"
		:offset="props.offset"
		:theme="props.theme"
		:close-on-click-body="props.closeOnClickBody"
		:open-on-mounted="props.openOnMounted"
		:teleported="props.teleported"
		:show-arrow="props.showArrow"
		:expression="props.expression"
		:floating-class="props.floatingClass"
		:reference="props.reference"
		:quick-track="props.quickTrack"

		@open="handleOpen"
		@opened="emits('opened')"
		@close="emits('close')"
		@closed="emits('closed')"

		class="sss-popconfirm"

	>
		<template #reference v-if="slots.default">
			<slot ></slot>
		</template>

		<template #default>
			<MsgBox class="sss-popconfirm-message-box"
			        ref="msgBox"
					show-head
					show-foot
			        :transition="props.transition"
			        :type="props.type"
			        :cancel-btn-text="props.cancelBtnText"
			        :confirm-btn-text="props.confirmBtnType"
			        :title="props.content"

			        @close="handleClose"
			        @cancel="handleCancel"
			        @confirm="handleConfirm"
			>
			</MsgBox>

		</template>
	</s-floating>
</template>

<script setup lang="ts">
import "./popconfirm.less"
import {SPopconfirmEmits, SPopconfirmProps} from "./popconfirm";
import SFloating from "../../SFloating";
import MsgBox from "../../SMessageBox/src/msgBox.vue";
import {nextTick, ref,useSlots} from "vue";


const props = defineProps({...SPopconfirmProps});
const emits = defineEmits({...SPopconfirmEmits})
const slots = useSlots();

const msgBox = ref<InstanceType<typeof MsgBox> | undefined>(undefined);

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

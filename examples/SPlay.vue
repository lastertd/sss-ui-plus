<script lang="ts">

import {defineComponent, h, VNode} from "vue";

/**
 * @description 取default slot中的第一个非（template slot）的组件节点
 */
export default defineComponent({
	setup(__, context) {
		const slots = context.slots;
		const attrs = context.attrs;

		const VNodeList:VNode[] = slots.default && slots.default();

		for (let i = 0; i < VNodeList.length; i++) {
			const VNode = VNodeList[i];
			console.log(VNode,"type: " ,VNode.type);
		}

		return () => {
			return h('div', {...attrs}, [slots.default()])
		}


	},
	name:'SPlay'


})
</script>




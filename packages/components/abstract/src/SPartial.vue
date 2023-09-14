
<script lang="ts">

import {defineComponent, h, useAttrs, warn} from "vue";

/**
 * @description 取default slot中的第一个非（template slot）的组件节点
 * 请注意, 第一个节点不允许是文本（注释）节点
 */
export default defineComponent({
	setup(__, context) {
		const slots = context.slots;
		const attr = useAttrs();
		let dft = slots.default && slots.default()[0];

		if (!dft) {
			warn('SPartial has empty slot');
		}


		while (typeof dft!.type === 'symbol') {
			dft = (dft as any)!.children[0];
		}

		if ((dft as unknown as string) === ' '){
			dft  = h('div',{reason:'not allowed', result:'force replacement with div'});
			warn('The first child node of SPartial is a text (annotation) node, which is not allowed');
		}

		return () => {
			return h(dft as any, {...attr})
		}


	},
	name: 'SPartial',
	expose:{
		test:'laster'
	}


})
</script>




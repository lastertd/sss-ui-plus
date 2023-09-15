<script lang="ts">

import {defineComponent, h, useAttrs, warn} from "vue";

/**
 * @description 取default slot中的第一个非（template slot）的组件节点
 */
export default defineComponent({
	setup(__, context) {
		const slots = context.slots;
		const attr = useAttrs();

		if (!slots.default){
			warn('SPartial has empty slot');
			return void 0
		}

		const VNodes = slots.default();
		let dft:any;
		let old: any;


		for (let i = 0; i < VNodes.length; i++) {
			const VNode = VNodes[i];
			if (VNode.type !== Symbol.for('v-cmt')){
				dft = VNode;
				break;
			}

		}
		if (!dft){
			warn("is a empty nodeList!");
			return
		}



		// 排除template slot comment 节点
		while (dft && typeof dft!.type === 'symbol') {
			let index = 0;

			// 文本节点 默认嵌套一层span
			if (dft!.type === Symbol.for('v-txt')) {
				dft = h('span', {}, [dft]);
				break;
			}
			// 不允许第一个元素是注释节点
			while (dft!.type === Symbol.for('v-cmt') && index < old.children.length) {
				console.log(old)
				dft = (old as any)!.children[++index];

			}

			if (index === 0){
				old = dft;
				dft = (dft as any)!.children[0];
			}


		}

		if (!dft){
			warn("There are no available VNodes for partial");
			return
		}

		console.log(dft)


		return () => {
			return h(dft as any, {...attr})
		}


	},
	name: 'SPartial',


})
</script>




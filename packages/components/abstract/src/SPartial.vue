<script lang="ts">

import {defineComponent, h, useAttrs, VNode, warn} from "vue";


/**
 * @description 获取第一个合法元素
 */
export default defineComponent({
	setup(__, context) {
		const slots = context.slots;
		const attrs = useAttrs();

		// slots.default为空, 抛出警告
		if (!slots.default) {
			warn('SPartial has empty slot');
			return void 0
		}

		const VNodes: VNode[] = slots.default();
		let dft: any;  //default, 目标节点
		let old: any;  //目标节点的父节点


		// 遍历default函数生成的虚拟节点列表, 找到第一个非注释节点
		for (let i = 0; i < VNodes.length; i++) {
			const VNode = VNodes[i];
			if (VNode.type !== Symbol.for('v-cmt')) {
				dft = VNode;
				break;
			}

		}

		// 经过遍历后，如果值为空，说明没有满足情况的节点，抛出警告
		if (!dft) {
			warn("is a empty nodeList!");
			return void 0
		}


		// 只有当节点类型是template、slot、txt、comment时, type才会是symbol
		// 这里是为了找到第一个满足情况的节点
		while (dft && typeof dft!.type === 'symbol') {
			let index = 0;

			// 当前是文本节点，满足要求， 为当前文本节点套上一层span
			if (dft!.type === Symbol.for('v-txt')) {
				dft = h('span', {...attrs}, [dft]);
				break;
			}
			// 当前节点是注释节点，则不断获取该节点的下一个节点
			while (dft!.type === Symbol.for('v-cmt') && index < old.children.length) {
				dft = (old as any)!.children[++index];

			}

			// 没有经历上面的过程则index不变, 此时只剩template和slot的情况
			// 获取当前节点的第一个子节点
			if (index === 0) {
				old = dft;
				dft = (dft as any)!.children[0];
			}


		}

		// 如果到最后也没有合法节点，则抛出警告
		if (!dft) {
			warn("There are no available VNodes for partial");
			return
		}


		// 最终渲染该节点
		return () => {
			return h(dft as any, {...attrs})
		}


	},
	name: 'SPartial',


})
</script>




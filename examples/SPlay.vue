<script lang="ts">
import {defineComponent, defineOptions, h, useAttrs, render, onMounted, watch} from "vue";
import {SFloatingProps} from "@sss-ui-plus/components";
import {useFloating, offset, flip, shift, autoUpdate, arrow} from "@floating-ui/vue";


export default defineComponent({
	setup(props, context) {
		const attr = useAttrs();
		const slots = context.slots

		const reference = slots.default && slots.default()[0];
		const floating = slots.floating && h('div', {}, [...slots.floating()]);
		console.log( floating)
		onMounted(() => {
			h(floating)
		})

		console.log(attr, props)
		return () => {
			return [h(reference, {...attr}),
				h(floating)
			]
		}


	},
	props: {...SFloatingProps},
	emits: ['open', 'opened', 'close', 'closed'],
	name: 'SFloating',

	slots: {
		default: {},
		floating: {}
	},
})
</script>




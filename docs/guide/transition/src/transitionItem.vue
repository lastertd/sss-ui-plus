<script setup lang="ts">
import {Prop, PropType} from "vue";
import {message, Transition} from "sss-ui-plus"

const props = defineProps({
	visible:Boolean,
	transition: String as Prop<Transition>
})

const handleClick = () => {
	navigator.clipboard.writeText(props.transition);
	message({
		type:'success',
		text:`复制成功!!`,
		timeout:700
	})
}

</script>

<template>
	<transition :name="props.transition">
		<div class="transition-box__inner" v-if="props.visible" @click="handleClick">
			{{props.transition}}
		</div>
	</transition>
</template>


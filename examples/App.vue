<template>

<!--	<s-button ref="btn" >click me</s-button>-->
	<button ref="btn">cccc</button>



	<s-floating trigger="click" :reference="btn" quick-track >
		<template #reference>
			<button ref="ipt">cccc</button>
			<s-input placeholder="hhh"></s-input>
		</template>
		<template #default>
			hello
		</template>
	</s-floating>




</template>

<script setup lang="ts">
import {notify} from "@sss-ui-plus/components"
import SPlay from "./SPlay.vue";
import {ref} from "@vue/runtime-core";
import {useDraggable} from "@sss-ui-plus/hooks";
import {computed} from "vue";
import {SPartial} from "../packages/components/abstract"

const f= ref(false);
const btn = ref();
const ipt = ref();

const v = computed(() => {
	return true
})

useDraggable(btn, btn, v);
useDraggable(ipt, ipt, v);



const handleClick = function (){
	notify({
		title:'hhh',
		type:'success'
	})
	f.value = !f.value
}

</script>


<style lang="less">


#app {
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	gap: 10px;
	padding-top: 50px;
	color: var(--sss-color-black-light);
}


</style>




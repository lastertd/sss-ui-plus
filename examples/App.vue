<template>

<!--	<s-button ref="btn" >click me</s-button>-->





	<s-floating trigger="click" :reference="btn" quick-track >
		<template #reference>
			<s-input placeholder="hhh"></s-input>
		</template>
		<template #default>
			hello
		</template>
	</s-floating>




</template>

<script setup lang="ts">
import {notify} from "@sss-ui-plus/components"
import {ref} from "@vue/runtime-core";


const f= ref(false);






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




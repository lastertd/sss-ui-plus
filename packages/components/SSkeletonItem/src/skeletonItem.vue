<script setup lang="ts">
import {SSkeletonItemProps} from "./skeletonItem";
import {inject, Ref, ref, warn} from "vue";
import {MaybeHTMLElement} from "@sss-ui-plus/typings";

defineOptions({
	name: 'SSkeletonItem',
	inheritAttrs: false
})

const props = defineProps({...SSkeletonItemProps});


const animated = inject('hasSkeletonAnimation') as Boolean;
const isWithinSkeleton = inject('isWithinSkeleton');
const item = ref(undefined) as Ref<MaybeHTMLElement>

if (isWithinSkeleton === undefined) {
	warn('skeleton-item component should be within skeleton component');
}

</script>

<template>
	<div
		ref="item"
		class="s-skeleton__item"
		:class="[{
			'is-circle':props.isCircle,
			'is-round':props.isRound,
			'animated':animated,
			's-skeleton__item--image':props.type === 'image'

		},
		]"
		v-bind="$attrs"
	>
		<svg v-if="props.type === 'image'" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
			<path fill="currentColor"
			      d="M96 896a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h832a32 32 0 0 1 32 32v704a32 32 0 0 1-32 32H96zm315.52-228.48-68.928-68.928a32 32 0 0 0-45.248 0L128 768.064h778.688l-242.112-290.56a32 32 0 0 0-49.216 0L458.752 665.408a32 32 0 0 1-47.232 2.112zM256 384a96 96 0 1 0 192.064-.064A96 96 0 0 0 256 384z"></path>
		</svg>
	</div>
</template>

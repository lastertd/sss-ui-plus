<template>
	<div class="_box">
		<div class="_top">
			<s-floating placement="top-start" trigger="hover" show-arrow :offset="10" theme="dark" :close-delay="300">
				<template #reference>
					<s-button variant="ghost">上左</s-button>
				</template>
				floating top-start
			</s-floating>
			<s-floating placement="top" trigger="hover" show-arrow :offset="10" theme="dark" :close-delay="300">
				<template #reference>
					<s-button variant="ghost">上边</s-button>
				</template>
				floating top
			</s-floating>
			<s-floating placement="top-end" trigger="hover" show-arrow :offset="10" theme="dark" :close-delay="300">
				<template #reference>
					<s-button variant="ghost">上右</s-button>

				</template>
				floating top-end
			</s-floating>

		</div>

		<div class="_left">
			<s-floating placement="left-start" trigger="hover" show-arrow :offset="10" theme="dark" :close-delay="300">
				<template #reference>
					<s-button variant="ghost">
						左上
					</s-button>

				</template>
				floating left-start
			</s-floating>
			<s-floating placement="left" trigger="hover" show-arrow :offset="10" theme="dark" :close-delay="300">
				<template #reference>
					<s-button variant="ghost">
						左边
					</s-button>
				</template>
				floating left
			</s-floating>
			<s-floating placement="left-end" trigger="hover" show-arrow :offset="10" theme="dark" :close-delay="300">
				<template #reference>
					<s-button variant="ghost">
						左下
					</s-button>
				</template>
				floating left-end
			</s-floating>

		</div>

		<div class="_right">
			<s-floating placement="right-start" trigger="hover" show-arrow :offset="10" theme="dark" :close-delay="300">
				<template #reference>
					<s-button variant="ghost">
						右上
					</s-button>
				</template>
				floating right-start
			</s-floating>
			<s-floating placement="right" trigger="hover" show-arrow :offset="10" theme="dark" :close-delay="300">
				<template #reference>
					<s-button variant="ghost">
						右边
					</s-button>
				</template>
				floating right
			</s-floating>
			<s-floating placement="right-end" trigger="hover" show-arrow :offset="10" theme="dark" :close-delay="300">
				<template #reference>
					<s-button variant="ghost">
						右下
					</s-button>
				</template>
				floating right-end
			</s-floating>


		</div>


		<div class="_bottom">
			<s-floating placement="bottom-start" trigger="hover" show-arrow :offset="10" theme="dark"
			            :close-delay="300">
				<template #reference>
					<s-button variant="ghost">
						下左
					</s-button>
				</template>
				floating bottom-start
			</s-floating>
			<s-floating placement="bottom" trigger="hover" show-arrow :offset="10" theme="dark" :close-delay="300">
				<template #reference>
					<s-button variant="ghost">
						下边
					</s-button>
				</template>
				floating bottom
			</s-floating>
			<s-floating placement="bottom-end" trigger="hover" show-arrow :offset="10" theme="dark" :close-delay="300">
				<template #reference>
					<s-button variant="ghost">
						下右
					</s-button>
				</template>
				floating bottom-end
			</s-floating>


		</div>
	</div>

</template>


<script setup lang="ts">
</script>
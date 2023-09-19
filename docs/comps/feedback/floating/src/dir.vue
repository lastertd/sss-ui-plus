<template>
	<div class="_box">
		<div class="_top">
			<s-floating placement="top-start" trigger="hover" show-arrow :offset="10" theme="dark" :close-delay="300">
				<template #reference>
					上左
				</template>
				floating top-start
			</s-floating>
			<s-floating placement="top" trigger="hover" show-arrow :offset="10" theme="dark" :close-delay="300">
				<template #reference>
					上边
				</template>
				floating top
			</s-floating>
			<s-floating placement="top-end" trigger="hover" show-arrow :offset="10" theme="dark" :close-delay="300">
				<template #reference>
					上右
				</template>
				floating top-end
			</s-floating>

		</div>

		<div class="_left">
			<s-floating placement="left-start" trigger="hover" show-arrow :offset="10" theme="dark" :close-delay="300">
				<template #reference>
					左上
				</template>
				floating left-start
			</s-floating>
			<s-floating placement="left" trigger="hover" show-arrow :offset="10" theme="dark" :close-delay="300">
				<template #reference>
					左边
				</template>
				floating left
			</s-floating>
			<s-floating placement="left-end" trigger="hover" show-arrow :offset="10" theme="dark" :close-delay="300">
				<template #reference>
					左下
				</template>
				floating left-end
			</s-floating>

		</div>

		<div class="_right">
			<s-floating placement="right-start" trigger="hover" show-arrow :offset="10" theme="dark" :close-delay="300">
				<template #reference>
					右上
				</template>
				floating right-start
			</s-floating>
			<s-floating placement="right" trigger="hover" show-arrow :offset="10" theme="dark" :close-delay="300">
				<template #reference>
					右边
				</template>
				floating right
			</s-floating>
			<s-floating placement="right-end" trigger="hover" show-arrow :offset="10" theme="dark" :close-delay="300">
				<template #reference>
					右下
				</template>
				floating right-end
			</s-floating>


		</div>


		<div class="_bottom">
			<s-floating placement="bottom-start" trigger="hover" show-arrow :offset="10" theme="dark" :close-delay="300">
				<template #reference>
					下左
				</template>
				floating bottom-start
			</s-floating>
			<s-floating placement="bottom" trigger="hover" show-arrow :offset="10" theme="dark" :close-delay="300">
				<template #reference>
					下边
				</template>
				floating bottom
			</s-floating>
			<s-floating placement="bottom-end" trigger="hover" show-arrow :offset="10" theme="dark" :close-delay="300">
				<template #reference>
					下右
				</template>
				floating bottom-end
			</s-floating>


		</div>
	</div>

</template>



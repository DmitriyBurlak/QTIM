<template>
	<NuxtLink
		class="w-full group transition-all duration-300 transform hover:-translate-y-5"
		:to="`/articles/${item?.id}`"
	>
		<div class="w-full">
			<div
				class="w-full h-[280px] bg-cover bg-center bg-no-repeat"
				:style="{ backgroundImage: `url(${item?.image || imageEmpty})` }"
			/>

			<div class="pt-6 line-clamp-3">
				{{ item?.title }}
			</div>
			<div class="text-pink-500 pt-3 h-6 transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0">
				Read more
			</div>
		</div>
	</NuxtLink>
</template>

<script setup lang="ts">
import type { Articles } from '../type';
import imageEmpty from '/assets/images/empty.jpeg'

const { item = undefined } = defineProps<{ item?: Articles }>()
</script> 
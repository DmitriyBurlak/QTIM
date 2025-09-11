<template>
	<section class="container">
		<USkeleton
			v-if="isLoading"
			class="w-full h-[126px] !bg-slate-200"
		/>
		<h1 v-else>
			{{ articles?.title }}
		</h1>

		<div
			class="w-full h-[700px] bg-cover bg-center bg-no-repeat mt-[82px]"
			:style="{ backgroundImage: `url(${articles?.image || imageEmpty})` }"
		/>

		<div class="pt-[80px] flex flex-col gap-8 max-w-[695px]">
			<span class="text-base">
				About
			</span>
			<h4>
				{{ articles?.description }}
			</h4>
		</div>
	</section>
</template>

<script setup lang="ts">
import { api as articlesApi } from '~/entities/articles'
import imageEmpty from '/assets/images/empty.jpeg'
import type { Articles } from '~/entities/articles/type';

const route = useRoute()

const articles = ref<Articles | null>(null)
const isLoading =ref(true)

const getArticleById = async () => {
	isLoading.value = true
	const { data } = await articlesApi.getArticlesById(route.params.id as string)
	isLoading.value = false

	watchEffect(() => {
		articles.value = data.value || null
	})
}
getArticleById()

</script>
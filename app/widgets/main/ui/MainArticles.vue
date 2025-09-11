<template>
	<section class="container !pb-[140px]">
		<h1 class="text-gradient">
			Articles
		</h1>

		<div class="pt-[60px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
			<ArticlesCardSkeleton v-if="isLoading && !articlesList?.length" />
			<template v-else>
				<ArticlesCard
					v-for="(item, idx) in articlesList"
					:key="idx"
					:item
				/>
			</template>
		</div>

		<NPagination
			v-if="pagination.total > pagination.pageCount"
			v-model:page="pagination.page"
			:total="pagination.total"
			:items-per-page="pagination.pageCount"
			class="mt-[50px]"
		>
			<template #next="{ }">
				<div class="border-slate-300 border text-[#494949]">
					<UIcon name="i-lucide-chevron-right" class="size-5" />
				</div>
			</template>

			<template #item="{ page, item }">
				<div
					class=""
					:class="{'bg-slate-800 !text-[#fff] hover:!bg-slate-800': page === item.value }"
				> 
					{{ item.value }}
				</div>
			</template>
		</NPagination>
	</section>
</template>

<script setup lang="ts">
import { api as articlesApi } from '~/entities/articles'
import { ArticlesCard, ArticlesCardSkeleton } from '~/entities/articles/ui';
import { NPagination } from '~/shared/ui';
import type { Articles } from '~/entities/articles/type';
import type { PaginationType } from '~/types/paginaion';

const router = useRouter()
const route = useRoute()

const articlesList = ref<Articles[]>([])
const isLoading =ref(true)

const pagination = reactive<PaginationType>({
	page: 1,
	total: 85,
	pageCount: 8,
})

if (route.query?.page && typeof route.query?.page === 'string') {
	pagination.page = +route.query?.page || 1
}

const getArticles = async () => {
	isLoading.value = true
	const { data } = await articlesApi.getArticles({ page: pagination.page, limit: pagination.pageCount })
	isLoading.value = false

	watchEffect(() => {
		articlesList.value = data.value || []
	})
}
getArticles()

watch(() => pagination.page, (newVal) => {
	if (newVal) {
		router.replace({
			query: {
				page: pagination.page
			}
		})
		getArticles()
	}
})
</script>
<template>
	<header>
		<div class="flex justify-between items-center px-10 py-[34px]">
			<NuxtLink 
				to="/"
				class="cursor-pointer text-[]"
			>
				<img src="/assets/images/logo.svg" alt="logo" class="w-[84px]">
			</NuxtLink>

			<div class="flex items-center gap-[90px]">
				<nav class="flex items-center gap-[58px]">
					<NuxtLink 
						v-for="link in headerLinks" 
						:key="link.path"
						:to="link.path"
						class="cursor-pointer text-[]"
					>
						{{ link.title }}
					</NuxtLink>
				</nav>

				<div class="flex items-center gap-4">
					<div class="size-[52px] rounded-full border-2 border-slate-200 flex justify-center items-center cursor-pointer">
						<img
							src="/assets/images/country/united_kingdom.svg"
							alt="coutry"
							class="size-6"
						>
					</div>

					<NButton
						class="w-[142px] h-[52px] flex items-center justify-center cursor-pointer"
						bg-color="bg-slate-900 hover:bg-slate-400"
					>
						Let’s work
					</NButton>
				</div>
			</div>
		</div>
	</header>
</template>

<script setup lang="ts">
import { NButton } from '~/shared/ui';

const headerLinks = ref([
	{
		title: 'Works',
		path: '/works',
	},
	{
		title: 'About',
		path: '/about',
	},
])
</script>
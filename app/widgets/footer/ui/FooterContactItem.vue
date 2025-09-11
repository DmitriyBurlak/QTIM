<template>
	<div class="flex flex-col gap-3 text-base leading-[120%]">
		<div>{{ item?.title }}</div>
		<div>
			<span
				v-for="(link, idx) in item?.links"
				:key="idx"
				class="flex flex-col gap-1"
			>
				<NuxtLink
					:to="link.link"
					:target="link.target"
				>
					{{ link.name }}
				</NuxtLink>
			</span>

			<span v-if="item?.adress">
				{{ item?.adress }}
				<img src="/assets/images/button_location.svg" alt="button_location" class="size-8 min-w-8 mt-2">
			</span>
		</div>
	</div>
</template>

<script setup lang="ts">
interface ItemLink {
	name: string;
	link: string;
	target: string;
}
const { item = undefined } = defineProps<{ item?: { title: string; adress?: string; links?: Array<ItemLink> } }>()
	
</script>
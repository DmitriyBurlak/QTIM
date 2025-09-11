<template>
	<UPagination
		:total
		:active-color="activeColor"
		:variant
		:active-variant="activeVariant"
		:color
		:items-per-page="itemsPerPage"
		:show-controls="false"
		:size
		:ui="{
			list: 'flex items-center gap-2',
			item: 'ring-slate-200 text-slate-900 size-11 min-w-11 rounded-xl bg-slate-200 hover:bg-slate-300 text-base flex items-center justify-center transition duration-400',
			next: 'size-11 min-w-11 rounded-xl bg-transparent hover:bg-slate-300 text-base flex items-center justify-center',
		}"
	>
		<template #next>
			<slot name="next" />
		</template>

		<template #item="{ page, pageCount, item, index }">
			<slot name="item" :page :item :page-count :index />
		</template>
	</UPagination>
</template>


<script setup lang="ts">

interface Props {
  total: number
	activeColor?: 'error' | 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'neutral'
  color?: 'error' | 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'neutral'
 	variant?: 'outline' | 'soft' | 'subtle' | 'ghost' | 'link' | 'solid'
	activeVariant?: 'outline' | 'soft' | 'subtle' | 'ghost' | 'link' | 'solid'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
	itemsPerPage: number
}

withDefaults(defineProps<Props>(), {
	activeColor: 'secondary',
	color: 'neutral',
	variant: 'outline',
	activeVariant: 'outline',
	size: 'md',
})
</script>

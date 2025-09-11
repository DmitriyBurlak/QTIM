<template>
	<USkeleton
		v-for="(_, idx) in count"
		:key="idx"
		class="w-full h-[346px] !bg-slate-200"
	/>
</template>

<script setup lang="ts">
	const { count = 8 } = defineProps<{ count?: number }>()
</script>
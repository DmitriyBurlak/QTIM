<template>
	<footer class="bg-pink-500 overflow-hidden">
		<div class="container !pt-[214px] !pb-0 relative">
			<div class="flex justify-between">
				<div class="relative flex flex-col gap-[56px] max-w-[520px]">
					<span class="-top-[74px] text-base absolute">
						Is there a project?
					</span>
					<div class="underline underline-offset-12 decoration-3 text-[110px] leading-[100%]">
						Let’s work together
					</div>
				</div>

				<div class="max-w-[178px] flex flex-col gap-9">
					<FooterContactItem
						v-for="(item, idx) in contactsItems"
						:key="idx"
						:item
					/>
				</div>
			</div>

			<div class="pt-[144px] flex justify-between">
				<div class="flex items-center gap-8 pb-[30px] text-base">
					<NuxtLink
						v-for="(link, idx) in leftLinks"
						:key="idx"
						:to="link.link"
						class="underline underline-offset-8"
					>
						{{ link.name }}
					</NuxtLink>
				</div>

				<div class="flex items-center gap-8 pb-[30px] text-base">
					<NuxtLink
						v-for="(link, idx) in rightLinks"
						:key="idx"
						:to="link.link"
						class="underline underline-offset-8"
					>
						{{ link.name }}
					</NuxtLink>
				</div>
			</div>
			<div class="size-[358px] bg-slate-900 rounded-full absolute -bottom-[179px] left-1/2 -translate-x-1/2 flex justify-center">
				<div class="text-slate-200 text-[32px] absolute top-[118px]">Go</div>
			</div>
		</div>
	</footer>
</template>

<script setup lang=ts>
import FooterContactItem from './FooterContactItem.vue';


const contactsItems = [
	{
		title: 'For all questions',
		links: [
			{
				name: '+7 (920) 278—00—68',
				link: 'tel:+7(920)2780086',
				target: '_blank'
			},
			{
				name: 'qtim@agency.com',
				link: 'mailto:qtim@agency.com',
				target: '_blank'
			},
		]
	},
	{
		title: 'Office in Russia',
		adress: '139 Ruben Station Lake Drew, NM 52678',
	},
	{
		title: 'Office in Dubai',
		adress: '139 Ruben Station Lake Drew, NM 52678',
	}
]

const leftLinks = [
	{
		name: 'Facebook',
		link: 'Facebook',
	},
	{
		name: 'Instagram',
		link: 'Instagram',
	},
	{
		name: 'Telegram',
		link: 'Telegram',
	},
]

const rightLinks = [
	{
		name: 'Behance',
		link: 'Behance',
	},
	{
		name: 'Linkedn',
		link: 'Linkedn',
	},
	{
		name: 'Privacy',
		link: 'Privacy',
	},
]
</script>
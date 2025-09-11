import type { PaginationParams } from "~/types/paginaion";

export interface Articles {
	id: string;
	createdAt: Date | string;
	title: string;
	image: string;
	description: string;
	preview: string;
}

export type GetArticlesParams = PaginationParams;
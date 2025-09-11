
export interface PaginationResponse<T> {
	data: T,
	count: number,
}

export interface PaginationParams {
	page?: number;
	limit?: number;
}

export interface PaginationType {
	page: number
	total: number
	pageCount: number
}

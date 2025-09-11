import { useApi } from '~/shared/lib/api'
import type { Articles, GetArticlesParams } from '../type'

const API_ENDPOINT = '/posts'

export const getArticles = (params: GetArticlesParams ) => {
	return useApi<Articles[]>({urlPath: `${API_ENDPOINT}`, options: { method: 'GET', params }, isShowMessageError: true })
}

export const getArticlesById = (id: string) => {
	return useApi<Articles>({urlPath: `${API_ENDPOINT}/${id}`, options: { method: 'GET' }, isShowMessageError: true })
}

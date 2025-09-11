import { useFetch, useRuntimeConfig, type UseFetchOptions } from 'nuxt/app'
import type { ResponseDto } from './types'

export function useApi<ResponseT, MappedResponseT = ResponseT>(
	{
		urlPath,
		options,
		isShowMessageError,
		server = false,
	}: {
		urlPath: string,
		options: UseFetchOptions<ResponseDto<ResponseT>, MappedResponseT>,
		isShowMessageError?: boolean,
		server?: boolean,
	}
) {

	const config = useRuntimeConfig()
	const baseURL = config.public.baseURL
	const isClient = import.meta.client
	const toast = useToast()

	const headers = {
    'Content-Type': 'application/json',
    ...(isClient ? {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization'
    } : {})
  }

  const fetchOptions: UseFetchOptions<ResponseDto<ResponseT>, MappedResponseT> = {
    baseURL,
    ...options,
    credentials: 'omit',
		headers,
    server, // выполнение на сервере - true
    async onResponseError({ response }) {
			if (!isClient) return
			
			const messageError = typeof response?._data === 'string' ? response?._data : 'Произошла непредвиденная ошибка'

			if (isShowMessageError) {
				toast.add({ 
					title: 'Произошла непредвиденная ошибка',
					color: 'error' 
				})
				console.log('Error: ', messageError);
			}
    }
  }
	return useFetch(urlPath, fetchOptions)
}
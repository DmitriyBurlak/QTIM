// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxt/ui',
    '@nuxt/eslint'
  ],
	runtimeConfig: {
		public: {
			baseURL: 'https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work',
		},
	},

  css: ['~/assets/css/main.css'],

  compatibilityDate: '2025-07-16'
})
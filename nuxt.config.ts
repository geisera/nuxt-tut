// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    runtimeConfig: {
        // Private config that is only available on the server
        FIREBASE_API_KEY: 'AIzaSyCSQoWBSHHSbdSgz9m1XsBq-47k2kuNS5s',
        // Config within public will be also exposed to the client
        public: {
            FIREBASE_API_KEY: 'AIzaSyCSQoWBSHHSbdSgz9m1XsBq-47k2kuNS5s',
        }
      },
})

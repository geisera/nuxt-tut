<template>
    <!--
      This example requires updating your template:
  
      ```
      <html class="h-full">
      <body class="h-full">
      ```
    -->
    <div class="min-h-full bg-white py-16 px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
      <div class="mx-auto max-w-max">
        <main class="sm:flex">
          <p class="text-4xl font-bold tracking-tight text-indigo-600 sm:text-5xl">{{ error.statusCode }}</p>
          <div class="sm:ml-6">
            <div class="sm:border-l sm:border-gray-200 sm:pl-6">
              <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">{{ error.message }}</h1>
              <p class="mt-1 text-base text-gray-500">Please check the URL in the address bar and try again.</p>
            </div>
            <div class="
                mt-10 
                flex 
                space-x-3 
                sm:border-l 
                sm:border-transparent 
                sm:pl-6">
                <button class="
                    btn 
                    inline-flex 
                    items-center 
                    rounded-md 
                    border 
                    border-transparent 
                    bg-12b488-600 
                    px-4 
                    py-2 
                    text-sm 
                    font-medium
                  text-white 
                  shadow-sm 
                  hover:bg-indigo-700 
                  focus:outline-none 
                  focus:ring-2 
                  focus:ring-indigo-500 
                  focus:ring-offset-2" 
                  @click="handleClearError">Go away</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  </template>

<script setup>
    defineProps(['error'])
    const handleClearError = () => clearError({ redirect: '/'})
</script>

<style scoped>

</style>
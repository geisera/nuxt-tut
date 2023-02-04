<template>
    <div class="min-h-full">
        <Disclosure as="nav" class="border-b border-gray-200 bg-white" v-slot="{ open }">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="flex h-16 justify-between">
                <div class="flex">
                    <div class="flex flex-shrink-0 items-center">
                        <nuxt-link to="/" class="font-bold">Nuxt-tut</nuxt-link>
                    </div>
                    <div class="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                        <nuxt-link v-for="item in navigation" :key="item.name" :to="item.to" :class="[item.current ? 'border-indigo-500 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700', 'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</nuxt-link>
                    </div>
                </div>
                <div class="-mr-2 flex items-center sm:hidden">
                    <!-- Mobile menu button -->
                    <DisclosureButton class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        <span class="sr-only">Open main menu</span>
                        <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
                        <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
                    </DisclosureButton>
                </div>
                </div>
            </div>

            <DisclosurePanel class="sm:hidden">
                <div class="space-y-1 pt-2 pb-3">
                    <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :class="[item.current ? 'bg-indigo-50 border-indigo-500 text-indigo-700' : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800', 'block pl-3 pr-4 py-2 border-l-4 text-base font-medium']" :aria-current="item.current ? 'page' : undefined">
                        <nuxt-link :to="item.to">{{ item.name }}</nuxt-link>
                    </DisclosureButton>
                </div>
            </DisclosurePanel>
        </Disclosure>

        <div class="py-10">
        <header>
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 class="text-3xl font-bold leading-tight tracking-tight text-gray-900">Welcome</h1>
            </div>
        </header>
        <main>
            <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <!-- Begin content -->
            <div class="px-4 py-8 sm:px-0">
                <slot />
            </div>
           
            <!-- /End replace -->
            </div>
        </main>
        </div>
    </div>
</template>
  
  <script setup>
  import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
  import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'
  
  const navigation = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about', current: false },
    { name: 'Products', to: '/products', current: false },
    { name: 'Test', to: '/test', current: false },
  ]
  </script>
  
  <style lang="css" scoped>
  .router-link-exact-active {
      color: #12b488
  }
  </style>
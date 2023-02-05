<template>
    <div class="min-h-full">        
        <div v-if="firebaseUser" class="py-10">
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
                    <!-- End content -->
                </div>
            </main>
        </div>
    </div>
</template>
  
<script setup>
const firebaseUser = useFirebaseUser();
</script>
  
  <style lang="css" scoped>
 
  </style>
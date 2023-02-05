<template>
    <div v-if="firebaseUser" class="container">
        <h1>USER DATA:</h1>
        <p>{{ firebaseUser }}</p>
    </div>
    <div v-else>Please sign in.</div>
</template>

<script setup>
definePageMeta({ 
    // authenticated route guard... 
    middleware: ["auth"] 
});

const firebaseUser = useFirebaseUser();
</script>
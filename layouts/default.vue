<template>
    <div class="min-h-full">
        <Navbar />
        <button v-if="firebaseUser" class="flex btn" @click="signOut">Sign Out</button>
        <button v-if="!firebaseUser" class="flex btn" @click="signIn">Sign In</button>
        <Login v-if="!firebaseUser"/>
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
console.log('firebaseUser: ' + JSON.stringify(firebaseUser));

const credentials = ref();

const signIn = async () => {
    const email = "geisera+1@gmail.com";
    const password = "abcd123456";
    credentials.value = await signInUser(email, password);
    console.log("Sign in credentials: ", credentials);
}

const signOut = async () => {
    credentials.value = await signOutUser();
}

onMounted(async () => {
    // const email = "geisera+1@gmail.com";
    // const password = "abcd123456";
    // const credentials = await createUser(email, password);
    // console.log("Credentials: ", credentials);
});
</script>
  
  <style lang="css" scoped>
 
  </style>
<template>
    <div>
        <button class="flex btn" @click="signIn">Sign In</button>
        <button class="flex btn" @click="signOut">Sign Out</button>
        <pre>
            {{ credentials }}
        </pre>
        <Login />
    </div>
    <div>
        <h2>Home</h2>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, ipsa porro dicta quia id nulla fugit. Aliquam, error eos ipsum enim cum provident tempore quisquam facilis eveniet nisi ut eaque.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ex exercitationem sed voluptatibus expedita praesentium atque eaque ullam, aspernatur nostrum similique dicta ea quo deleniti aliquid fugiat fugit? Commodi, ipsa!
        </p>
    </div>
</template>

<script setup>
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

<style scoped>
h2 {
    margin-bottom: 20px;
    font-size: 36px;
}
p {
    margin: 20px, 0;
}
</style>
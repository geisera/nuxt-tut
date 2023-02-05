<template>
    <div>
        <h2>About</h2>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, ipsa porro dicta quia id nulla fugit. Aliquam, error eos ipsum enim cum provident tempore quisquam facilis eveniet nisi ut eaque.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ex exercitationem sed voluptatibus expedita praesentium atque eaque ullam, aspernatur nostrum similique dicta ea quo deleniti aliquid fugiat fugit? Commodi, ipsa!
        </p>
    </div>
</template>

<script setup>
definePageMeta({ 
    // authenticated route guard... 
    middleware: ["auth"] 
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
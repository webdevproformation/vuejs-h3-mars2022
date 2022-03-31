<template>
    <h2>s'inscrire à la newsletter</h2>
    <form>
        <input type="email" :placeholder="placeholder">
        <input type="submit">
    </form>
</template>
<script>
export default {
    props : ["placeholder"]
}
</script>
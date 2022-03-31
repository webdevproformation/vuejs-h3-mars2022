<template>
    <div class="modal" @click="closeModal">
        <h1>je suis une fenêtre modale</h1>
    </div>
</template>
<script>
export default {
    methods : {
        closeModal : function(){
            this.$emit("close")
        }
    }
}
</script>
<style scoped>
.modal {
    position: fixed;
    top:0;
    left:0;
    width:100%;
    min-height: 100vh;
    background: rgba(0,0,0,0.2);
    display: flex;
    align-items: center;
    justify-content: center;
 }
</style>
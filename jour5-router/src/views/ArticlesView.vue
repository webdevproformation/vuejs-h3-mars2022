<template>
    <div>
         <article v-for="article in articles" :key="article.id">
            <h4>{{ article.title }}</h4>
            <RouterLink class="button button-outline" :to="{name : 'single-article' , params : { id : article.id }}">lire la suite !</RouterLink>
        </article>
    </div>
</template>

<script>
export default {
 data (){
     return {
         articles : []
     }
 },
 mounted : function(){
     fetch("https://jsonplaceholder.typicode.com/posts")
     .then(reponse => reponse.json())
     .then(data => {
         console.log(data)
         this.articles = data
     })
 }
}
</script>

<style scoped>
    div{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap : 10px;
    }
</style>
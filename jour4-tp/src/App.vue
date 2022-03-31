<script>
// Option Api
export default {
  data (){
    return {
      titre : "titre de l'application",
      chiffre : 10 ,
      verif : false,
      liste : ["lundi", "mardi" , "mercredi"]
    }
  },
  methods : {
    toggle : function(){
      this.verif = !this.verif; 
    }
  }
}
</script>
<template>
    <h1>{{ titre }}</h1>
    <button @click="toggle">toggle liste</button>
    <ul v-if="verif">
      <li v-for="(jour, index) in liste" :key="index">{{ jour }}</li>
    </ul>
    <p>{{ chiffre }}</p>
    <button @click="chiffre++">augmenter chiffre</button>
</template>
<style>
/* le style css s'appliquer au composant MAIS déborder sur les autres composants parent / enfant
si je veux limiter le style QUE sur le composant concerné ! scoped
attention il faut avoir les concernées DANS le template du composant */ 

/* si vous avez besoin de créer des règles css globales */
/*
créer un fichier src/main.css
import dans le fichier main.js => import "./main.css"
*/
</style>
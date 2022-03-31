<script>
import User from "./components/User.vue";
import Article from "./components/Article.vue"
import Newsletter from "./components/Newsletter.vue"
import Modal from "./components/Modal.vue";
// Option Api
export default {
  data (){
    return {
      titre : "titre de l'application",
      chiffre : 10 ,
      verif : false,
      liste : ["lundi", "mardi" , "mercredi"],
      user : {
        nom : "Alain",
        age : 15,
        adresse : "75 rue de Paris 75000 Paris"
      },
      placeholder : "saisir votre email",
      showModal : false
    }
  },
  methods : {
    toggle : function(){
      this.verif = !this.verif; 
    },
    toggleModal: function() {
      this.showModal = !this.showModal; 
    }
  },
  components : { User , Article , Newsletter , Modal } // déclaration 
}
</script>
<template>
<div>
    <h1>{{ titre }}</h1>

    <button @click="toggleModal">show modal</button>
    <button @click="toggle">toggle liste</button>
    <ul v-if="verif">
      <li v-for="(jour, index) in liste" :key="index">{{ jour }}</li>
    </ul>
    <p>{{ chiffre }}</p>
    <button @click="chiffre++">augmenter chiffre</button>
    <User :infos="user" @toggle="toggle" /> <!-- utiliser le composant --> 
    <Article><!-- envoyer des informations parent -> enfant remplissant la balise dans le parent -->
      <h1>je suis un article </h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, similique.</p>
      <ul>
        <li>item 1</li>
        <li>item 2</li>
      </ul>
      <template v-slot:liens><!-- slot nommé liens -->
            <a href="#">lien 1</a>
            <a href="#">lien 2</a>
      </template>
      <template v-slot:social><!-- slot nommé social -->
      </template>
    </Article>
    <Article>
      <template v-slot:social><!-- slot nommé social -->
        <span></span>
      </template>
      <h1>{{ titre }}</h1>
    </Article>
    <teleport to=".pied-page">
      <Newsletter :placeholder="placeholder" />
    </teleport>
    <teleport to=".pied-page" v-if="showModal" >
      <Modal @close="toggleModal"/>
    </teleport> 
</div>
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
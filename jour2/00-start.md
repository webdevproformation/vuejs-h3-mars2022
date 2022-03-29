Désolé 
=> très grosse douleur au pied 
=> impossible de mettre une chaussure 
=> impossible de marcher .... 

## lien vers le support 

- https://formation.webdevpro.net/vuejs
- login : vuejs
- mdp : opensource


## github 

- il arrive dans peu de temps 
https://github.com/webdevproformation/vuejs-h3-mars2022


## des questions ??? 

- vuejs 

librairie progressive => partie sur un projet html 
                      => intégralité sur un projet (comme un React)


=> vuejs => facile à apprendre (jQuery)

=> const app = Vue.createApp({})
=> app.mount("#app")


dans le html 

<div id="app">
    <h1 v-bind:title="" >{{ variable }} </h1>
    <h1 :title="">{{ variable }} </h1>
    <h1 v-on:keyup="fonction" >{{ variable }} </h1>
    <h1 @keyup="fonction" >{{ variable }} </h1>
    <input type="text" v-bind:value="prenom" v-on:keyup="fonction">
    <input type="text" v-model="prenom">
    <ul>
        <li v-for="etudiant in etudiants">{{ etudiant }}</li>
    </ul>
    <p v-if="verif">success</p>
</div>

dans l'application 

Vue.createApp({
    data(){ // fonction qui retourne un objet => state 
        return{
            verif : true,
            etudiants : ["Alain", "Béatrice", "Charles"]
        }
    },
    methods : {
        fonction(){},
        fonction2(){ // ok
            this.verif = false
        },
        function3 : function(){},// ok
        // ça ne marche pas 
        function4 : () => {
            // si vous créez une propriété de méthods qui contient une fonction fléchée => this n'est plus l'instance de l'app
        }
    }
})

// cas pratique 
// créer un nouveau fichier 01-exo.html qui utilise VueJS

// formulaire 
case à cocher (checkbox)
un champ input de type text => écrire du texte
p qui est vide

si vous cliquez sur la case à cocher et que vous écrivez dans le champ input => ça va remplir le p avec le texte de l'input

si vous décochez la case à cocher => masquer le p 



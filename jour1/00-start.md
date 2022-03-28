Vue JS 

## lien vers le support 

- https://formation.webdevpro.net/vuejs
- login : vuejs
- mdp : opensource


## github 

- il arrive dans peu de temps 
https://github.com/webdevproformation/vuejs-h3-mars2022

## présentation

- librairie 
- Evan You => Google => AngularJS (version 1 Angular)
- Angular > version 2 .... 12 

## React versus Vue 

React / Vue idem 

state
method 
props 
Redux VueX 
composant 

différence entre React / Vue 

const [nb , setNumber ] = useState(0)

setNumber(12) // utiliser une fonction pour changer une valeur dans mon state

Vue 
{
    data : () => {
        return {
            nb : 0
        }
    }
    methods : {
        modif : function(){
            this.nb = 12
        }
    }
}

react et jsx
{verif && <p>coucou les amis</p>}

vuejs Directive 
<p v-if="verif">coucou les amis</p>


react 
npx create-react-app projet 

vuejs 
index.html 
vue-cli 


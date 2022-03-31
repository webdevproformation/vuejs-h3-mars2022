## Options Api

=> la syntaxe proposée dans la version 2 de VueJS
=> conduit code difficile à maintenir SI les valeurs / méthodes de plusieurs composants dans un parent

{
    data (){
        return {

        }
    },
    methods : {

    }

}


## Composition Api
import { ref } from "vue" // import {useState} from "react"

{
    setup(){
        let nb = ref(0)
        //  let [nb] = useState(0) React
        // contenir l'ensemble des méthodes 
        function augmenterNb(){
            nb.value++ ;
        }
        // sortir les variables réactive ET les fonctions dans dans un fichier .js à part
        // import

        return { // lister toutes les variables à mettre à disposition dans le template
            nb , augmenterNb
        }
    }
}

liste de tache
stopper le projet jour4-tp
cd ..
npm init vue@latest => jour4-todo / le reste non pour l'instant
cd jour4-todo
npm i
npm run dev 

// compiler les fichiers dans src / si modifier dans un fichier .vue => hot module reload 

App
    Form => créer des tâches 
            <input type="text"> 
            <input type="text">
    Liste =>
        <ul>
            <li>tâche 1</li>
            <li>tâche 2</li>
        </ul>

src/App.vue => vider 
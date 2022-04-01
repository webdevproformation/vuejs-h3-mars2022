## lien vers le support 

- https://formation.webdevpro.net/vuejs
- login : vuejs
- mdp : opensource

## github 

- il arrive dans peu de temps 
https://github.com/webdevproformation/vuejs-h3-mars2022


version 3 de VueJS pour créer des composants =>
Composition API

{
    data(){},
    methods:{},
    watch:{},
    cycle de vie mounted(){}
    computed : {}

    // bouge pas
    components : {},
    directives : {},
    props: { } / []
}

import { ref , reactive , toRefs } from "vue"
{
    setup(){
        // variable réactive 
        const nb = ref(0)
        const list = ref([])
        const info = ref({})

        function modif(){
            nb.value = 10
        }
        return {
            nb ,
            modif
        }
    }

    // bouge pas
    components : {},
    directives : {},
    props: { } / []
}

## créer un nouveau projet 

cd ..
npm init vue@latest
jour5-tp
cd jour5-tp && npm i && npm run dev

App.vue


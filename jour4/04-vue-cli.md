## version web de vueJS

- très apprécié dans sa version web 
- facile à utiliser 
- Symfony => framework PHP en plus de Twig + vueJS 

## version complète de vueJS

- projet complet avec vueJS 
- en vueJS 3 // VueJS 2
- createApp // Options API
- { 
    data(){},
    methods: {}
    ....
}
- nouvelle syntaxe // Composition API
- projet vueJS complet 
- documentation vuejs.org
- https://vuejs.org/guide/quick-start.html#with-build-tools

## setup 

- terminal
- npm init vue@latest => permet de générer votre fichier package.json
- poser des questions 
- nom projet pas d'espace / pas de majuscule / pas caractères spéciaux 
- jour4-tp

React => react-router-dom
React => Redux // useContext // useReducer / useEffect
- le nom du projet j'ai choisi non partout

cd jour4-tp
npm i => node_modules 
npm run dev

http://localhost:3000/

// arborescence de notre projet vuejs
// public => stocker les images / pdf / word ...
// src (source)=> dans ce dossier que l'on va travailler 
// liaison entre DOM <===> vuejs (composant)
main.js import createApp(App)

import App from "./App.vue"

{
    data(){},
    methods : {}
}

// pour coloration syntaxique + autocomplétion 
// installer l'extension vuter

// App.vue
dans ce fichier 3 parties 
<script> => js // facultative
<template> => html // minimum
<style> => css // facultatif

regrouper toute la logique / vue / mise en forme dans un seul fichier 
SFC : Single File Component  dans un fichier .vue 
// https://vuejs.org/guide/scaling-up/sfc.html

.vue => .js 
version 2 vuejs webpack pour conversion 
version 3 vite pour convertir les fichier .vue => .js

webpack / vite dispose d'un module hot reload


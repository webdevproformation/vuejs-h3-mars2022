## teleport 

nouvelle balise <teleport to=""></teleport>
vueJS 3 

par défaut tous les composants que vous créez => enfant de App

=> mis dans le composant App

=> via la balise <teleport to=".selecteur-css"></teleport>
=> elle peut être injectée dans une autre balise 

=> index.html > <footer class="pied-page"></footer>

ajouter un petit formulaire de newsletter dans le footer 
ET garder la logique et valeur dans le composant où il est déclaré et exécuté 

// https://vuejs.org/guide/built-ins/teleport.html

// ressemble beaucoup React Portal 
// https://reactjs.org/docs/portals.html

// cas pratique
// créer un nouveau composant Modal

// dans App => ajouter un  bouton 
// cliquer dessus => apparaitre une fenêtre modal au dessus du design actuel 
// si vous cliquez sur le fond de la modal => faire dispaitre
// faire en sorte que la modal soit inséré non pas dans la balise ayant l'id #app MAIS dans la balise footer qui la class pied-page
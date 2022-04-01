# router 

React => react-router-dom
Vue => vue-router 
directement dans l'installation => proposé (installé + fichier de set up )

npm init vue@latest => 

router 
const routes = [
    {
        path : "/",
        name : "Home",
        component : Home
    },
    {
        path : "/about",
        name : "About",
        component : About
    }
]

// SPA => Single Page Application 
// lorsque vous changez de page => dans le navigateur
// pas de nouvel appel au serveur

React
<Link to=""></Link>
VueJS
<RouterLink to="/">Accueil</RouterLink>
<RouterLink :to="{name:'Home'}">Accueil</RouterLink>

React
App.jsx
<Outlet />

VueJS
<RouterViews />

=> documentation officielle 
=> https://router.vuejs.org/

cd ..
npm init vue@latest
jour5-router
cd jour5-router && npm i && npm run dev

DOM => history API 
https://developer.mozilla.org/en-US/docs/Web/API/History_API


React 
<BrowserRouter>
    <App />
</BrowserRouter>

Vue => main.js
createApp(App) 
.use()
.mount("#app")

// cas pratique créer un nouveau composant 
// connexion
// contient un formulaire deux champs login / password
// ce composant est accessible via l'url suivant http://localhost:3000/connexion 

// ---------------------------

// créer une nouvelle page => profils 
// requete https://jsonplaceholder.typicode.com/users

// accessible depuis l'adresse /profils 
pour chaque utiliser vous pouvez cliquer sur un bouton pour voir en détail son profil

// accéder à un nouveau composant profilsDetail 
// accessible depuis l'adresse /profils/:id 
// vous affichez son profil en détail et 
vous pouvez ajouter un bouton pour revenir sur la page précédente 



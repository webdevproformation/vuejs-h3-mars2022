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
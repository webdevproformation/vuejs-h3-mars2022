import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ConnexionView from '../views/ConnexionView.vue'
import ArticlesView from '../views/ArticlesView.vue'
import SingleView from '../views/SingleView.vue'
import ProfilsView from '../views/ProfilsView.vue'
import SingleProfilView from '../views/SingleProfilView.vue'
import NotFound from '../views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/a-propos',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/connexion',
      name: 'login',
      component: ConnexionView
    },
    {
      path: '/articles',
      name: 'articles',
      component: ArticlesView
    },
    {
      path: '/articles/:id',
      name: 'single-article',
      component: SingleView,
      props : true // l'id est récupération comment props de votre composant
    },
    {
      path: '/profils',
      name: 'profils',
      component: ProfilsView
    },
    {
      path: '/profils/:id',
      name: 'single-profil',
      component: SingleProfilView,
      props : true
    },
    {
      path: '/:pathMatch(.*)*', // expression régulière si aucune route ne match 
      name: 'not-found',
      component: NotFound
    }
  ]
})

export default router

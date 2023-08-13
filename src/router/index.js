import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import HabilidadesView from '../views/HabilidadesView.vue'
import ProjetosView from '../views/ProjetosView.vue'
import CertificadosView from '../views/CertificadosView.vue'
import ContatoView from '../views/ContatoView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/habilidades',
    name: 'habilidades',
    component: HabilidadesView
  },
  {
    path: '/projetos',
    name: 'projetos',
    component: ProjetosView
  },
  {
    path: '/certificados',
    name: 'certificados',
    component: CertificadosView
  },
  {
    path: '/contato',
    name: 'contato',
    component: ContatoView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

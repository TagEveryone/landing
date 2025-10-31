import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import i18n from '../i18n';

const supportedLocales = ['it', 'en'];
const defaultLocale = 'en';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/privacy-policy',
    name: 'privacy-policy',
    component: () => import('../views/PrivacyPolicy.vue')
  },
  {
    path: '/terms-of-service',
    name: 'terms-of-service',
    component: () => import('../views/TermsOfService.vue')
  },
  {
    path: '/cookie-policy',
    name: 'cookie-policy',
    component: () => import('../views/CookiePolicy.vue')
  }
];

// Crea le rotte localizzate
const localizedRoutes = supportedLocales.flatMap(locale => 
  routes.map(route => ({
    ...route,
    path: `/${locale}${route.path === '/' ? '' : route.path}`,
    name: `${route.name}-${locale}`,
  }))
);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...routes, // Rotte senza prefisso (useranno la lingua di default)
    ...localizedRoutes, // Rotte con prefisso lingua
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: () => import('../views/NotFound.vue')
    }
  ],
  // Aggiungi questa configurazione per il comportamento dello scroll
  scrollBehavior(to, _from, savedPosition) {
    // Se l'utente utilizza il pulsante indietro/avanti e c'è una posizione salvata
    if (savedPosition) {
      return savedPosition;
    }
    
    // Controlla se la rotta di destinazione ha un hash (anchor)
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth', // scroll fluido
        top: 80, // offset opzionale se hai una navbar fissa
      };
    }
    
    // Altrimenti, torna in cima alla pagina
    return { top: 0, behavior: 'smooth' };
  }
});

// Middleware per gestire il cambio di lingua basato sul path
router.beforeEach((to, _from, next) => {
  const pathLocale = to.path.split('/')[1];
  
  if (supportedLocales.includes(pathLocale)) {
    // Se il path inizia con una lingua supportata, imposta quella lingua
    i18n.global.locale.value = pathLocale as 'it' | 'en';
    localStorage.setItem('locale', pathLocale);
  } else {
    // Altrimenti usa la lingua di default o quella salvata
    const savedLocale = localStorage.getItem('locale') || defaultLocale;
    i18n.global.locale.value = savedLocale as 'it' | 'en';
  }
  
  next();
});

export default router;
export { supportedLocales, defaultLocale };
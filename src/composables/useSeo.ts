import { useI18n } from 'vue-i18n';
import { watch, onMounted, type ComputedRef } from 'vue';
import { useRoute } from 'vue-router';

interface SeoConfig {
  title: string | ComputedRef<string>;
  description: string | ComputedRef<string>;
  keywords?: string | ComputedRef<string>;
  ogType?: string;
}

export function useSeo(config: SeoConfig) {
  const { locale } = useI18n();
  const route = useRoute();
  const baseUrl = 'https://www.tageveryone.xyz'; // Sostituisci con il tuo dominio

  // Helper per ottenere il valore da string o ComputedRef
  const getValue = (value: string | ComputedRef<string>): string => {
    return typeof value === 'string' ? value : value.value;
  };

  const updateMeta = (name: string, content: string) => {
    let element = document.querySelector(`meta[name="${name}"]`);
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute('name', name);
      document.head.appendChild(element);
    }
    element.setAttribute('content', content);
  };

  const updateProperty = (property: string, content: string) => {
    let element = document.querySelector(`meta[property="${property}"]`);
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute('property', property);
      document.head.appendChild(element);
    }
    element.setAttribute('content', content);
  };

  const updateHreflang = () => {
    // Rimuovi vecchi hreflang
    document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(el => el.remove());

    // Ottieni il path senza prefisso lingua
    const pathParts = route.path.split('/').filter(Boolean);
    const supportedLocales = ['it', 'en'];
    let cleanPath = route.path;
    
    if (supportedLocales.includes(pathParts[0])) {
      cleanPath = '/' + pathParts.slice(1).join('/') || '/';
    }

    const languages = ['it', 'en'];

    // Aggiungi hreflang per ogni lingua
    languages.forEach(lang => {
      const link = document.createElement('link');
      link.setAttribute('rel', 'alternate');
      link.setAttribute('hreflang', lang);
      
      // Per italiano (default), usa il path senza prefisso
      // Per altre lingue, aggiungi il prefisso
      const localizedPath = lang === 'it' 
        ? cleanPath 
        : `/${lang}${cleanPath === '/' ? '' : cleanPath}`;
      
      link.setAttribute('href', `${baseUrl}${localizedPath}`);
      document.head.appendChild(link);
    });

    // Aggiungi x-default per la lingua predefinita (italiano)
    const defaultLink = document.createElement('link');
    defaultLink.setAttribute('rel', 'alternate');
    defaultLink.setAttribute('hreflang', 'x-default');
    defaultLink.setAttribute('href', `${baseUrl}${cleanPath}`);
    document.head.appendChild(defaultLink);

    // Canonical URL (usa sempre il path con la lingua corrente)
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `${baseUrl}${route.path}`);
  };

  const updateSeo = () => {
    // Title
    document.title = getValue(config.title);

    // Meta tags
    updateMeta('description', getValue(config.description));
    if (config.keywords) {
      updateMeta('keywords', getValue(config.keywords));
    }

    // Language
    document.documentElement.setAttribute('lang', locale.value);

    // Open Graph
    updateProperty('og:title', getValue(config.title));
    updateProperty('og:description', getValue(config.description));
    updateProperty('og:url', `${baseUrl}${route.path}`);
    updateProperty('og:type', config.ogType || 'website');
    updateProperty('og:locale', locale.value === 'it' ? 'it_IT' : 'en_US');
  
    updateProperty('og:image', `${baseUrl}/banner.png`);
    
    // Twitter Card
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', getValue(config.title));
    updateMeta('twitter:description', getValue(config.description));
    updateMeta('twitter:image', `${baseUrl}/banner.png`);
  
    // Hreflang
    updateHreflang();
  };

  onMounted(() => {
    updateSeo();
  });

  // Aggiorna SEO quando cambia la lingua
  watch([locale, () => route.path], () => {
    updateSeo();
  });

  return {
    updateSeo
  };
}

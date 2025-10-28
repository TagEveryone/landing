<script setup lang="ts">
import { useScrollTo } from '../composables/useScrollTo';

const { handleHashClick } = useScrollTo();

// Definizione dell'interfaccia per le funzionalità
interface Feature {
  icon: string;
  iconClass: string;
  isSoon?: boolean;
  key: string; // Chiave per le traduzioni
}

// Tutte le funzionalità unificate
const features: Feature[] = [
  {
    icon: '♾️',
    iconClass: 'text-indigo-400',
    key: 'unlimited_mention'
  },
  {
    icon: '💬',
    iconClass: 'text-green-400',
    key: 'basic_commands'
  },
  {
    icon: '🌐',
    iconClass: 'text-purple-400',
    key: 'basic_webapp'
  },
  {
    icon: '📋',
    iconClass: 'text-fuchsia-400',
    isSoon: true,
    key: 'custom_lists'
  },
  {
    icon: '🛠️',
    iconClass: 'text-cyan-400',
    key: 'dedicated_instance'
  },
  {
    icon: '🔗',
    iconClass: 'text-yellow-400',
    key: 'community_support'
  }
];
</script>

<template>
  <section class="py-24 bg-gray-900 border-t border-gray-800 relative overflow-hidden" id="features">
    <!-- Elementi decorativi di sfondo -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse-slow"></div>
      <div class="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse-slow animation-delay-2000"></div>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-linear-to-r from-indigo-400 via-purple-400 to-indigo-400">
          {{ $t('features.title') }}
        </h2>
        <p class="max-w-3xl mx-auto text-xl text-gray-300">
          {{ $t('features.subtitle') }}
        </p>
      </div>
      
      <div class="max-w-7xl mx-auto">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            v-for="(feature, index) in features" 
            :key="index"
            class="feature-card group p-6 rounded-2xl shadow-2xl transition-all duration-500 relative border border-gray-700/50 hover:border-indigo-500/50"
          >
            <div :class="`text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 ${feature.iconClass}`">{{ feature.icon }}</div>
            <h3 class="text-xl font-bold mb-2 text-gray-100 group-hover:text-indigo-300 transition-colors">
              {{ $t(`features.items.${feature.key}.title`) }}
            </h3>
            <p class="text-gray-400 leading-relaxed">
              {{ $t(`features.items.${feature.key}.description`) }}
            </p>
            
            <!-- Badge "Soon" -->
            <div v-if="feature.isSoon" class="absolute top-3 right-3">
              <span class="inline-flex items-center px-2.5 py-0.5 text-xs font-semibold bg-amber-500/70 text-white rounded-full shadow-lg">
                <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                </svg>
                {{ $t('features.badges.soon') }}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- CTA -->
      <div class="mt-16 text-center">
        <div class="max-w-4xl mx-auto bg-linear-to-r from-indigo-900/40 to-purple-900/40 backdrop-blur-sm border border-indigo-500/30 rounded-2xl p-8 shadow-2xl">
          <h3 class="text-2xl font-bold text-white mb-3">{{ $t('features.cta.title') }}</h3>
          <p class="text-lg text-gray-300 mb-6">{{ $t('features.cta.subtitle') }}</p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://matt05.it/tag_everyone?utm_source=landing&utm_medium=website&utm_campaign=add_bot" target="_blank"
              class="group inline-flex items-center px-6 py-3 bg-linear-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/50 hover:scale-105 transform">
              {{ $t('features.cta.primary') }}
              <svg class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a href="#contact" @click="(e) => handleHashClick(e, '#contact')"
              class="inline-flex items-center px-6 py-3 border-2 border-gray-600 text-gray-300 hover:border-gray-400 hover:text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 transform">
              {{ $t('features.cta.secondary') }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Base card style */
.feature-card {
  backdrop-filter: blur(10px);
  background: linear-gradient(135deg, rgba(30, 41, 59, 0.6), rgba(17, 24, 39, 0.8));
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.2);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.5), transparent);
  transform: translateX(-100%);
  transition: transform 0.6s ease;
}

.feature-card:hover::before {
  transform: translateX(100%);
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 60px 0 rgba(99, 102, 241, 0.3);
  background: linear-gradient(135deg, rgba(30, 41, 59, 0.8), rgba(17, 24, 39, 0.9));
}

@keyframes pulse-slow {
  0%, 100% {
    opacity: 0.1;
  }
  50% {
    opacity: 0.2;
  }
}

.animate-pulse-slow {
  animation: pulse-slow 4s ease-in-out infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}
</style>
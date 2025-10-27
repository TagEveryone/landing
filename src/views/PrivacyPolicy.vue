<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useSeo } from '../composables/useSeo';

const { t, tm } = useI18n();

useSeo({
  title: computed(() => t('seo.privacy.title')),
  description: computed(() => t('seo.privacy.description')),
  ogType: 'article'
});
</script>

<template>
    <div class="min-h-screen bg-gray-900 py-20">
        <div class="container mx-auto px-4 max-w-4xl">
            <!-- Header -->
            <div class="mb-12">
                <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
                    {{ t('privacy.title') }}
                </h1>
                <p class="text-gray-400">
                    {{ t('privacy.lastUpdated') }}: 27 Ottobre 2025
                </p>
            </div>

            <!-- Content -->
            <div class="prose prose-invert max-w-none">
                <!-- Introduzione -->
                <section class="mb-8">
                    <h2 class="text-2xl font-bold text-white mb-4">{{ t('privacy.intro.title') }}</h2>
                    <p class="text-gray-300 leading-relaxed mb-4">
                        {{ t('privacy.intro.description') }}
                    </p>
                </section>

                <!-- Dati raccolti -->
                <section class="mb-8">
                    <h2 class="text-2xl font-bold text-white mb-4">{{ t('privacy.dataCollected.title') }}</h2>
                    <p class="text-gray-300 leading-relaxed mb-4">
                        {{ t('privacy.dataCollected.description') }}
                    </p>
                    <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4">
                        <li v-for="(item, index) in tm('privacy.dataCollected.items')" :key="index">
                            {{ item }}
                        </li>
                    </ul>
                </section>

                <!-- Come utilizziamo i dati -->
                <section class="mb-8">
                    <h2 class="text-2xl font-bold text-white mb-4">{{ t('privacy.dataUsage.title') }}</h2>
                    <p class="text-gray-300 leading-relaxed mb-4">
                        {{ t('privacy.dataUsage.description') }}
                    </p>
                    <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4">
                        <li v-for="(item, index) in tm('privacy.dataUsage.items')" :key="index">
                            {{ item }}
                        </li>
                    </ul>
                </section>

                <!-- Condivisione dati -->
                <section class="mb-8">
                    <h2 class="text-2xl font-bold text-white mb-4">{{ t('privacy.dataSharing.title') }}</h2>
                    <p class="text-gray-300 leading-relaxed">
                        {{ t('privacy.dataSharing.description') }}
                    </p>
                </section>

                <!-- Sicurezza -->
                <section class="mb-8">
                    <h2 class="text-2xl font-bold text-white mb-4">{{ t('privacy.security.title') }}</h2>
                    <p class="text-gray-300 leading-relaxed">
                        {{ t('privacy.security.description') }}
                    </p>
                </section>

                <!-- Diritti dell'utente -->
                <section class="mb-8">
                    <h2 class="text-2xl font-bold text-white mb-4">{{ t('privacy.userRights.title') }}</h2>
                    <p class="text-gray-300 leading-relaxed mb-4">
                        {{ t('privacy.userRights.description') }}
                    </p>
                    <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4">
                        <li v-for="(item, index) in tm('privacy.userRights.items')" :key="index">
                            {{ item }}
                        </li>
                    </ul>
                </section>

                <!-- Contatti -->
                <section class="mb-8">
                    <h2 class="text-2xl font-bold text-white mb-4">{{ t('privacy.contact.title') }}</h2>
                    <p class="text-gray-300 leading-relaxed">
                        {{ t('privacy.contact.description') }}
                    </p>
                </section>
            </div>

            <!-- Back Button -->
            <div class="mt-12">
                <router-link to="/"
                    class="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-all duration-300">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    {{ t('privacy.backToHome') }}
                </router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>
.prose {
    color: #d1d5db;
}
</style>

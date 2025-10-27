<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useSeo } from '../composables/useSeo';

const { t, tm } = useI18n();

useSeo({
  title: computed(() => t('seo.cookies.title')),
  description: computed(() => t('seo.cookies.description')),
  ogType: 'article'
});
</script>

<template>
    <div class="min-h-screen bg-gray-900 py-20">
        <div class="container mx-auto px-4 max-w-4xl">
            <!-- Header -->
            <div class="mb-12">
                <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
                    {{ t('cookies.title') }}
                </h1>
                <p class="text-gray-400">
                    {{ t('cookies.lastUpdated') }}: 27 Ottobre 2025
                </p>
            </div>

            <!-- Content -->
            <div class="prose prose-invert max-w-none">
                <!-- Cosa sono i cookie -->
                <section class="mb-8">
                    <h2 class="text-2xl font-bold text-white mb-4">{{ t('cookies.whatAre.title') }}</h2>
                    <p class="text-gray-300 leading-relaxed">
                        {{ t('cookies.whatAre.description') }}
                    </p>
                </section>

                <!-- Come utilizziamo i cookie -->
                <section class="mb-8">
                    <h2 class="text-2xl font-bold text-white mb-4">{{ t('cookies.howWeUse.title') }}</h2>
                    <p class="text-gray-300 leading-relaxed mb-4">
                        {{ t('cookies.howWeUse.description') }}
                    </p>
                </section>

                <!-- Tipi di cookie -->
                <section class="mb-8">
                    <h2 class="text-2xl font-bold text-white mb-4">{{ t('cookies.types.title') }}</h2>
                    
                    <!-- Cookie essenziali -->
                    <div class="mb-6">
                        <h3 class="text-xl font-semibold text-indigo-400 mb-2">
                            {{ t('cookies.types.essential.title') }}
                        </h3>
                        <p class="text-gray-300 leading-relaxed">
                            {{ t('cookies.types.essential.description') }}
                        </p>
                    </div>

                    <!-- Cookie di preferenze -->
                    <div class="mb-6">
                        <h3 class="text-xl font-semibold text-indigo-400 mb-2">
                            {{ t('cookies.types.preferences.title') }}
                        </h3>
                        <p class="text-gray-300 leading-relaxed">
                            {{ t('cookies.types.preferences.description') }}
                        </p>
                    </div>

                    <!-- Cookie analitici -->
                    <div class="mb-6">
                        <h3 class="text-xl font-semibold text-indigo-400 mb-2">
                            {{ t('cookies.types.analytics.title') }}
                        </h3>
                        <p class="text-gray-300 leading-relaxed">
                            {{ t('cookies.types.analytics.description') }}
                        </p>
                    </div>
                </section>

                <!-- Gestione dei cookie -->
                <section class="mb-8">
                    <h2 class="text-2xl font-bold text-white mb-4">{{ t('cookies.management.title') }}</h2>
                    <p class="text-gray-300 leading-relaxed mb-4">
                        {{ t('cookies.management.description') }}
                    </p>
                    <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4">
                        <li v-for="(item, index) in tm('cookies.management.items')" :key="index">
                            {{ item }}
                        </li>
                    </ul>
                </section>

                <!-- Cookie di terze parti -->
                <section class="mb-8">
                    <h2 class="text-2xl font-bold text-white mb-4">{{ t('cookies.thirdParty.title') }}</h2>
                    <p class="text-gray-300 leading-relaxed">
                        {{ t('cookies.thirdParty.description') }}
                    </p>
                </section>

                <!-- Contatti -->
                <section class="mb-8">
                    <h2 class="text-2xl font-bold text-white mb-4">{{ t('cookies.contact.title') }}</h2>
                    <p class="text-gray-300 leading-relaxed">
                        {{ t('cookies.contact.description') }}
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
                    {{ t('cookies.backToHome') }}
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

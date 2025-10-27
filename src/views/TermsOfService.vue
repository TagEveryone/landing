<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useSeo } from '../composables/useSeo';

const { t, tm } = useI18n();

useSeo({
  title: computed(() => t('seo.terms.title')),
  description: computed(() => t('seo.terms.description')),
  ogType: 'article'
});
</script>

<template>
    <div class="min-h-screen bg-gray-900 py-20">
        <div class="container mx-auto px-4 max-w-4xl">
            <!-- Header -->
            <div class="mb-12">
                <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
                    {{ t('tos.title') }}
                </h1>
                <p class="text-gray-400">
                    {{ t('tos.lastUpdated') }}: 27 Ottobre 2025
                </p>
            </div>

            <!-- Content -->
            <div class="prose prose-invert max-w-none">
                <!-- Accettazione termini -->
                <section class="mb-8">
                    <h2 class="text-2xl font-bold text-white mb-4">{{ t('tos.acceptance.title') }}</h2>
                    <p class="text-gray-300 leading-relaxed">
                        {{ t('tos.acceptance.description') }}
                    </p>
                </section>

                <!-- Uso del servizio -->
                <section class="mb-8">
                    <h2 class="text-2xl font-bold text-white mb-4">{{ t('tos.serviceUse.title') }}</h2>
                    <p class="text-gray-300 leading-relaxed mb-4">
                        {{ t('tos.serviceUse.description') }}
                    </p>
                    <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4">
                        <li v-for="(item, index) in tm('tos.serviceUse.items')" :key="index">
                            {{ item }}
                        </li>
                    </ul>
                </section>

                <!-- Comportamenti vietati -->
                <section class="mb-8">
                    <h2 class="text-2xl font-bold text-white mb-4">{{ t('tos.prohibited.title') }}</h2>
                    <p class="text-gray-300 leading-relaxed mb-4">
                        {{ t('tos.prohibited.description') }}
                    </p>
                    <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4">
                        <li v-for="(item, index) in tm('tos.prohibited.items')" :key="index">
                            {{ item }}
                        </li>
                    </ul>
                </section>

                <!-- Limitazione di responsabilità -->
                <section class="mb-8">
                    <h2 class="text-2xl font-bold text-white mb-4">{{ t('tos.liability.title') }}</h2>
                    <p class="text-gray-300 leading-relaxed">
                        {{ t('tos.liability.description') }}
                    </p>
                </section>

                <!-- Modifiche al servizio -->
                <section class="mb-8">
                    <h2 class="text-2xl font-bold text-white mb-4">{{ t('tos.modifications.title') }}</h2>
                    <p class="text-gray-300 leading-relaxed">
                        {{ t('tos.modifications.description') }}
                    </p>
                </section>

                <!-- Terminazione -->
                <section class="mb-8">
                    <h2 class="text-2xl font-bold text-white mb-4">{{ t('tos.termination.title') }}</h2>
                    <p class="text-gray-300 leading-relaxed">
                        {{ t('tos.termination.description') }}
                    </p>
                </section>

                <!-- Contatti -->
                <section class="mb-8">
                    <h2 class="text-2xl font-bold text-white mb-4">{{ t('tos.contact.title') }}</h2>
                    <p class="text-gray-300 leading-relaxed">
                        {{ t('tos.contact.description') }}
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
                    {{ t('tos.backToHome') }}
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

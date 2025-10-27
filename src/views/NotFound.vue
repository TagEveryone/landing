<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { useSeo } from '../composables/useSeo';
import { HomeIcon, ArrowLeftIcon } from '@heroicons/vue/24/solid';

const router = useRouter();
const { t } = useI18n();

useSeo({
  title: computed(() => t('seo.notFound.title')),
  description: computed(() => t('seo.notFound.description')),
});

const goHome = () => {
    router.push('/');
};
</script>

<template>
    <div class="min-h-screen bg-linear-to-br from-gray-900 via-indigo-900/30 to-gray-900 flex items-center justify-center px-4">
        <div class="text-center">
            <!-- Animazione 404 -->
            <div class="relative mb-8">
                <h1 class="text-9xl md:text-[200px] font-extrabold text-transparent bg-clip-text bg-linear-to-br from-indigo-400 to-purple-400 animate-pulse">
                    404
                </h1>
                <div class="absolute inset-0 blur-3xl opacity-30">
                    <div class="absolute inset-0 bg-linear-to-br from-indigo-500 to-purple-500"></div>
                </div>
            </div>

            <!-- Messaggio -->
            <div class="mb-8">
                <h2 class="text-3xl md:text-5xl font-bold text-white mb-4">
                    {{ $t('notFound.title') }}
                </h2>
                <p class="text-xl text-gray-300 max-w-md mx-auto">
                    {{ $t('notFound.message') }}
                </p>
            </div>

            <!-- Pulsanti -->
            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                    @click="goHome"
                    class="group inline-flex items-center px-6 py-3 bg-linear-to-br from-indigo-600 to-purple-600 text-white font-bold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/50 hover:scale-105 transform"
                >
                    <HomeIcon class="w-5 h-5 mr-2" />
                    {{ $t('notFound.goHome') }}
                </button>

                <button
                    @click="router.back()"
                    class="inline-flex items-center px-6 py-3 bg-gray-800/50 border-2 border-white/20 text-white font-bold rounded-xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105 transform"
                >
                    <ArrowLeftIcon class="w-5 h-5 mr-2" />
                    {{ $t('notFound.goBack') }}
                </button>
            </div>
        </div>
    </div>
</template>
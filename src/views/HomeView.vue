<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useSeo } from '../composables/useSeo';
import Hero from '../components/Hero.vue';
import Features from '../components/Features.vue';
import Statistics from '../components/Statistics.vue';
import Contact from '../components/Contact.vue';

const { t } = useI18n();

useSeo({
  title: computed(() => t('seo.home.title')),
  description: computed(() => t('seo.home.description')),
  keywords: computed(() => t('seo.home.keywords')),
  ogType: 'website'
});
</script>

<template>
  <div class="min-h-screen flex flex-col bg-gray-900 text-gray-100">
    <Hero />
    <Statistics />
    <Features />
    <Contact />
  </div>
</template>

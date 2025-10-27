<script setup lang="ts">
import { useScrollTo } from '../composables/useScrollTo';

const { handleHashClick } = useScrollTo();
</script>

<template>
    <section class="relative overflow-hidden">
        <!-- Sfondo a gradiente e griglia -->
        <div class="absolute inset-0 bg-gray-900 bg-linear-to-br from-gray-900 via-indigo-900/30 to-gray-900"></div>
        <div class="absolute inset-0 bg-[url('../assets/grid.svg')] bg-center mask-[linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

        <!-- Contenuto principale -->
        <div class="container mx-auto px-4 relative z-10 py-20 md:py-28">
            <div class="flex flex-col md:flex-row items-center justify-between gap-12">
                <!-- Sezione Testo -->
                <div class="md:w-1/2 mb-8 md:mb-0 text-white text-center md:text-left">
                    <h1 class="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
                        <span class="block text-white drop-shadow-lg">
                            Tag <span class="text-transparent bg-clip-text bg-linear-to-br from-indigo-400 to-purple-400">Everyone</span>
                        </span>
                        <span class="block mt-2 text-2xl md:text-3xl text-indigo-200 font-semibold">
                            {{ $t('hero.tagline') }}
                        </span>
                    </h1>

                    <p class="max-w-xl mx-auto md:mx-0 text-lg md:text-xl mb-10 text-gray-300 leading-relaxed">
                        {{ $t('hero.subtitle') }}
                    </p>

                    <!-- Pulsanti CTA -->
                    <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <a href="https://matt05.it/tag_everyone?utm_source=landing&utm_medium=website&utm_campaign=add_bot" target="_blank"
                            class="group relative inline-flex items-center justify-center px-7 py-3.5 text-lg font-bold text-white transition-all duration-300 bg-linear-to-br from-indigo-600 to-purple-600 rounded-xl shadow-2xl hover:shadow-indigo-500/50 hover:scale-105 transform">
                            <span class="relative z-10">{{ $t('hero.cta') }}</span>
                            <svg class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </a>

                        <a href="#features" @click="(e) => handleHashClick(e, '#features')"
                            class="inline-flex items-center justify-center px-7 py-3.5 text-lg font-bold text-white bg-gray-800/50 border-2 border-white/20 rounded-xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105 transform">
                            {{ $t('hero.secondaryCta') }}
                        </a>
                    </div>
                </div>

                <!-- Sezione Mockup Telefono -->
                <div class="md:w-1/2 flex justify-center animate-float">
                    <div class="relative transform hover:scale-105 transition-transform duration-500">
                        <!-- Glow di sfondo -->
                        <div class="absolute inset-0 bg-linear-to-br from-indigo-500 to-purple-500 rounded-[3rem] blur-2xl opacity-40"></div>
                        
                        <!-- Mockup -->
                        <div class="relative mx-auto border-gray-800 bg-gray-800 border-12 rounded-[2.5rem] h-[580px] w-[290px] shadow-2xl">
                            <div class="w-[140px] h-[18px] bg-gray-800 top-0 rounded-b-2xl left-1/2 -translate-x-1/2 absolute"></div>
                            <div class="h-10 w-[3px] bg-gray-800 absolute -start-[15px] top-[110px] rounded-s-lg"></div>
                            <div class="h-10 w-[3px] bg-gray-800 absolute -start-[15px] top-40 rounded-s-lg"></div>
                            <div class="h-14 w-[3px] bg-gray-800 absolute -end-[15px] top-[130px] rounded-e-lg"></div>
                            
                            <!-- Schermo -->
                            <div class="rounded-4xl overflow-hidden w-full h-full bg-gray-900">
                                <div class="flex flex-col h-full p-2">
                                    <!-- Chat Header -->
                                    <div class="p-3 bg-gray-900/80 backdrop-blur-sm rounded-t-2xl border-b border-gray-700/50">
                                        <div class="flex items-center">
                                            <img src="../assets/logo.png" alt="Logo" class="w-8 h-8 rounded-full mr-3" />
                                            <div class="font-semibold text-white">TagEveryone Bot</div>
                                        </div>
                                    </div>

                                    <!-- Messaggi Chat -->
                                    <div class="flex-1 p-3 flex flex-col gap-3.5 overflow-y-auto">
                                        <!-- Messaggio Utente -->
                                        <div class="flex flex-col max-w-[85%] self-end">
                                            <div class="bg-indigo-600 text-white px-3 py-2 rounded-xl rounded-br-sm text-sm shadow-md">
                                                @everyone
                                            </div>
                                            <span class="text-xs text-gray-500 mt-1.5 self-end mr-1">12:42</span>
                                        </div>

                                        <!-- Messaggio Bot -->
                                        <div class="flex flex-col max-w-[85%] self-start">
                                            <div class="bg-gray-700 text-white px-3 py-2 rounded-xl rounded-bl-sm text-sm shadow-md">
                                                {{ $t('hero.botMessage') }}
                                                <div class="text-xs mt-1.5 text-indigo-300/90">
                                                    @NovaByteX @ShadowCircuit7 @EchoVortex99 @GlitchPhantomX
                                                    @QuantumNebula_42 @CyberHawkRex @PixelRogue777 @NeonSpecter_21
                                                </div>
                                            </div>
                                            <span class="text-xs text-gray-500 mt-1.5 self-start ml-1">12:42</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
@keyframes float {
    0%, 100% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-15px);
    }
}

.animate-float {
    animation: float 6s ease-in-out infinite;
}
</style>
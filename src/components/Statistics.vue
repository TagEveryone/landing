<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { AtSymbolIcon, UserGroupIcon, ChartBarIcon, StarIcon } from '@heroicons/vue/24/solid';

interface Statistic {
    key: string;
    value: string;
    icon: typeof AtSymbolIcon;
    numericValue: number;
    suffix: string;
}

// Utilizziamo le chiavi per le traduzioni anziché il testo diretto
const statistics: Statistic[] = [
    {
        key: 'users',
        value: '490k+',
        icon: AtSymbolIcon,
        numericValue: 490,
        suffix: 'k+'
    },
    {
        key: 'groups',
        value: '1.7k+',
        icon: UserGroupIcon,
        numericValue: 1.7,
        suffix: 'k+'
    },
    {
        key: 'active_users',
        value: '45k+',
        icon: ChartBarIcon,
        numericValue: 45,
        suffix: 'k+'
    },
    {
        key: 'github_stars',
        value: '15+',
        icon: StarIcon,
        numericValue: 15,
        suffix: '+'
    }
];

// Stato per i valori animati
const animatedValues = ref<{ [key: number]: number }>({});
const hasAnimated = ref(false);
const sectionRef = ref<HTMLElement | null>(null);

// Funzione per animare i numeri
const animateValue = (index: number, start: number, end: number, duration: number) => {
    const startTime = performance.now();
    const hasDecimals = end !== Math.floor(end);

    const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function per un effetto più fluido
        const easeOutQuad = (t: number) => t * (2 - t);
        const easedProgress = easeOutQuad(progress);

        const currentValue = start + (end - start) * easedProgress;
        animatedValues.value[index] = hasDecimals 
            ? Math.round(currentValue * 10) / 10 
            : Math.floor(currentValue);

        if (progress < 1) {
            requestAnimationFrame(animate);
        } else {
            animatedValues.value[index] = end;
        }
    };

    requestAnimationFrame(animate);
};

// Intersection Observer per attivare l'animazione
const setupIntersectionObserver = () => {
    if (!sectionRef.value) return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !hasAnimated.value) {
                    hasAnimated.value = true;

                    // Avvia l'animazione per ogni statistica con un leggero ritardo
                    statistics.forEach((stat, index) => {
                        setTimeout(() => {
                            animateValue(index, 0, stat.numericValue, 2000);
                        }, index * 100);
                    });
                }
            });
        },
        { threshold: 0.2 }
    );

    observer.observe(sectionRef.value);

    return observer;
};

// Lifecycle hooks
onMounted(() => {
    // Inizializza i valori a 0
    statistics.forEach((_, index) => {
        animatedValues.value[index] = 0;
    });

    const observer = setupIntersectionObserver();

    onUnmounted(() => {
        observer?.disconnect();
    });
});
</script>

<template>
    <section ref="sectionRef" class="py-16 relative my-16">
        <div class="container mx-auto px-4">
            <div class="stats-container glass shadow-2xl rounded-2xl mx-auto max-w-5xl">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4 p-6 md:p-8">
                    <div v-for="(stat, index) in statistics" :key="index"
                        class="stat-item flex flex-col items-center text-center p-5 transition-transform duration-300 hover:transform hover:scale-105">
                        <!-- Icon with glowing background -->
                        <div class="mb-4 rounded-full p-3 bg-indigo-900/30 stat-icon-glow">
                            <component :is="stat.icon" class="w-6 h-6 text-indigo-400" />
                        </div>

                        <!-- Value with highlight -->
                        <div
                            class="text-3xl md:text-4xl font-bold mb-2 bg-linear-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                            {{ animatedValues[index] || 0 }}{{ stat.suffix }}
                        </div>

                        <!-- Label tradotto -->
                        <p class="text-gray-300">{{ $t(`statistics.items.${stat.key}.label`) }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.stats-container {
    backdrop-filter: blur(10px);
    background: linear-gradient(135deg, rgba(30, 41, 59, 0.7), rgba(17, 24, 39, 0.8));
    border: 1px solid rgba(255, 255, 255, 0.1);
    position: relative;
    overflow: hidden;
}

/* Animazione bordo che gira attorno al container */
.stats-container::before {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: 1rem;
    padding: 2px;
    background: linear-gradient(
        90deg,
        transparent,
        rgba(99, 102, 241, 0.8),
        rgba(168, 85, 247, 0.8),
        transparent
    );
    -webkit-mask: 
        linear-gradient(#fff 0 0) content-box, 
        linear-gradient(#fff 0 0);
    mask: 
        linear-gradient(#fff 0 0) content-box, 
        linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    animation: borderRotate 4s linear infinite;
    pointer-events: none;
}

@keyframes borderRotate {
    0% {
        background: linear-gradient(
            0deg,
            transparent,
            rgba(99, 102, 241, 0.8),
            rgba(168, 85, 247, 0.8),
            transparent
        );
    }
    25% {
        background: linear-gradient(
            90deg,
            transparent,
            rgba(99, 102, 241, 0.8),
            rgba(168, 85, 247, 0.8),
            transparent
        );
    }
    50% {
        background: linear-gradient(
            180deg,
            transparent,
            rgba(99, 102, 241, 0.8),
            rgba(168, 85, 247, 0.8),
            transparent
        );
    }
    75% {
        background: linear-gradient(
            270deg,
            transparent,
            rgba(99, 102, 241, 0.8),
            rgba(168, 85, 247, 0.8),
            transparent
        );
    }
    100% {
        background: linear-gradient(
            360deg,
            transparent,
            rgba(99, 102, 241, 0.8),
            rgba(168, 85, 247, 0.8),
            transparent
        );
    }
}

.stat-item {
    position: relative;
}

.stat-icon-glow {
    position: relative;
    transition: transform 0.3s ease;
}

.stat-icon-glow::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    padding: 2px;
    background: linear-gradient(135deg, rgba(130, 90, 235, 0.5), rgba(80, 70, 230, 0.5));
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
}

.stat-item:hover .stat-icon-glow {
    transform: scale(1.1);
}

@media (max-width: 768px) {
    .stats-container {
        margin-top: 2rem;
    }
}
</style>
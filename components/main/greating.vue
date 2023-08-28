<template>
<Transition
   @after-leave="() => $emit('start')"
>
    <div class="greating" v-if="!started">
        <h1>Valgomat 2023</h1>
        <p>11055 politikere som stiller til valg, har tatt VGs valgomat. Svar på påstandene, så finner vi ut hvem som er mest enig med deg!</p>

        <MainButton @click="started = true"/>
    </div>
</Transition>
</template>

<script setup lang="ts">
defineEmits(['start'])
const started = ref(false)
</script>

<style scoped>
.greating {
    color: var(--white);
    font: var(--text);

    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    
}

h1 {
    font-size: 5rem;
    font-weight: 700;
}

p {
    font-size: 1.5rem;
    font-weight: 400;
    text-align: center;
}

.v-enter-active,
.v-leave-active {
    animation: bounce 0.5s;
}

.v-enter-from,
.v-leave-to {
    animation: bounce 0.5s reverse;
}

@keyframes bounce {
    0% {
        transform: translate(-50%, -50%) scale(0);
    }
    50% {
        transform: translate(-50%, -50%) scale(1.25);
    }
    100% {
        transform: translate(-50%, -50%) scale(1);
    }
}
</style>
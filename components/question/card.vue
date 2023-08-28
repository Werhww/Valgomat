<template>
<Transition
    @after-leave="$emit('after-leave')"
    name="slide"
>
    <div class="card" v-if="show">
        <p>{{ questionNumber }}</p>
        <p @click="$emit('answer')">{{ question }}</p>
    </div>
</Transition>
</template>

<script setup lang="ts">
defineProps<{
    questionNumber: number,
    question: string
    show: boolean
}>()

defineEmits(['answer', 'after-leave'])
</script>

<style scoped>
.card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;

    padding: 3rem 5rem;
    border-radius: calc(var(--border-radius) * 2);
    /* border: var(--white) 0.1rem solid; */
    filter: drop-shadow(0px 0px 0.2rem rgba(0, 0, 0, 0.25));

    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);

    background-color: var(--dark);
}

.card p:first-child {
    font: var(--text);
    font-size: 1.5rem;
    font-weight: 900;

    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    
    background-color: var(--white);
    color: var(--black);    
    border-radius: 10rem;
}

.card p:last-child {
    font: var(--text);
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--white);
}


.slide-enter-active,
.slide-leave-active {
    animation: slideIn 0.5s ease-in-out forwards;
}

.slide-enter-from,
.slide-leave-to {
    animation: slideOut 0.5s ease-in-out;
}

@keyframes slideIn {
    0% {
        left: 100%;
    }
    35% {
        left: 40%; 
    }
    100% {
        left: 50%; 
    }
}

@keyframes slideOut {
    0% {
        left: 50%;
    }
    35% {
        left: 60%; 
    }
    100% {
        left: 0%; 
    }
}
</style>
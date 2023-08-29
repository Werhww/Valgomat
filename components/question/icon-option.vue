<template>
<div class="option">
    <p class="emoji">{{ emoji }}</p>
    <p>{{ text }}</p>
</div>
</template>

<script setup lang="ts">
defineProps<{
    emoji: string
    text: string
}>()
</script>

<style scoped>
.option {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    transition: all 0.2s ease-in-out;

    font: var(--text);
    font-size: 1rem;
    font-weight: 500;
    color: var(--white);
}

.emoji {
    font-size: 3rem;
}

.option:hover {
    scale: 1.2;
}
</style>
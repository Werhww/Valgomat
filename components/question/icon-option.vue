<template>
<div class="option">
    <p>{{ icon }}</p>
    <p>{{ text }}</p>
</div>
</template>

<script setup lang="ts">
defineProps<{
    icon: string
    text: string
}>()
</script>

<style scoped>
.option {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    font: var(--text);
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--white);
}
</style>
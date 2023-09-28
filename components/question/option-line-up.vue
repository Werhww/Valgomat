<template>
<div class="line-up">
    <QuestionIconOption emoji="🤮" text="Helt uenig" @click="$emit('answer', 'against', 1)" />
    <QuestionIconOption emoji="😒" text="Litt uenig" @click="$emit('answer', 'against', 0.8)"/>
    <QuestionIconOption emoji="😵‍💫" text="Hverken eller" @click="$emit('answer', 'neutral', .7)"/>
    <QuestionIconOption emoji="😊" text="Litt enig" @click="$emit('answer', 'for', 0.8)"/>
    <QuestionIconOption emoji="🤩" text="Helt enig" @click="$emit('answer', 'for', 1)"/>
</div>
</template>

<script setup lang="ts">
import { keys } from '~/utils/useConfig';

defineEmits<{
    (event:'answer', key:keys, multiplier:number): void
}>()
</script>

<style scoped>
.line-up {
    display: flex;
    gap: 2rem;
}
</style>

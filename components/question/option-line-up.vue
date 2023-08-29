<template>
<div class="line-up">
    <QuestionIconOption emoji="🤮" text="Helt uenig" @click="$emit('answer', {grade:10})" />
    <QuestionIconOption emoji="😒" text="Litt uenig"/>
    <QuestionIconOption emoji="😵‍💫" text="Hverken eller"/>
    <QuestionIconOption emoji="😊" text="Litt enig"/>
    <QuestionIconOption emoji="🤩" text="Helt enig"/>
</div>
</template>

<script setup lang="ts">
defineEmits(['answer'])
</script>

<style scoped>
.line-up {
    display: flex;
    gap: 2rem;
}
</style>

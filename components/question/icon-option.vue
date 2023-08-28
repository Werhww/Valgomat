<template>
<div class="option">
    <img :src="img" :alt="img">
    <p>{{ text }}</p>
</div>
</template>

<script setup lang="ts">
defineProps<{
    img: string
    text: string
}>()
</script>

<style scoped>
.option {
    
}
</style>
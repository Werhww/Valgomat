<template>
    <div class="party">
        <div>
            <img :src="icon" :alt="name">
            <p>{{name}}</p>
        </div>

        <ResultsStatusBar :score="score"/>
    </div>

</template>

<script setup lang="ts">
defineProps<{
    icon: string
    score: number
    name: string
}>()
</script>

<style scoped>

</style>
<template>
    <div class="stats">
        <div class="name-icon">
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
.stats {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    gap: 1rem;

    width: 100%;
}

.name-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.3rem;
}

.name-icon > p {
    color: white;
    font-size: 1.5rem;
    font-weight: 700;
}

.name-icon > img{
    width: 3rem;
}



</style>
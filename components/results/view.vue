<template>
    <div class="stats-representation">
        <ResultsPartyResults  v-for="party in Object.keys(parties)" :icon="parties[party].image" :score="parties[party].score" :name="party"/>
    </div>

</template>

<script setup lang="ts">
defineProps<{
    parties : {
        [key:string]: {
            score: number
            image: string
        }
    }
}>()
</script>

<style scoped>
.stats-representation {
    display: flex;
    flex-direction: column;

    width: 80%;
    margin-left: 10%;
    margin-right: 10%;

    overflow: hidden;
}
</style>
<template>
    <div class="stats-representation">
        <ResultsPartyResults  v-for="party in partiLineUp" :icon="party.image" :score="party.score" :name="party.name"/>
    </div>

</template>

<script setup lang="ts">
const prop = defineProps<{
    parties : {
        [key:string]: {
            score: number
            image: string
        }
    }
}>()

const partiLineUp = computed(()=> {
    let partiList: {
        name: string,
        image: string
        score: number
    }[] = []

    for(const key in prop.parties) {
        const parti = prop.parties[key]

        partiList.push({
            name: key,
            image: parti.image,
            score: parti.score
        })
    }

    partiList.sort((a, b) => b.score - a.score)
    return partiList
})

</script>

<style scoped>
.stats-representation {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    width: 80%;
    margin-left: 10%;
    margin-right: 10%;

    overflow: hidden;

    margin-top: 5rem;
}
</style>
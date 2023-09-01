<template>

<div class="status"><p>{{ shownValue }}</p></div>
</template>

<script setup lang="ts">
const prop = defineProps<{
    score: number
}>()

const value = ref(0)
const shownValue = ref(0)
const FullTransitionTime = ref(2)
const SegmentedTransitionTime = ref(0)

onMounted(()=> {
    setTimeout(()=> {
        value.value = prop.score

        SegmentedTransitionTime.value = (FullTransitionTime.value / prop.score) * 1000
        console.log(SegmentedTransitionTime.value)
        countUp(prop.score)
    }, 200)
})

function countUp(score:number) {
    if(score == shownValue.value) return
    shownValue.value++
    setTimeout(() => countUp(score), SegmentedTransitionTime.value)
}


</script>

<style scoped>
.status {
    transition: all v-bind(FullTransitionTime + "s") cubic-bezier(0, 0.20, 0.50, 0.99);
    height: 1.1rem;
    border-radius: .3rem;

    background-color: greenyellow;
    width: v-bind(value + "%");

    display: flex;
    justify-content: end;

}

.status p {
    color: black;
    font-weight: 700;
    margin-right: 1rem;
}
</style>
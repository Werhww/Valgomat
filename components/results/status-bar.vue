<template>
<div class="status"></div>
</template>

<script setup lang="ts">
const prop = defineProps<{
    score: number
}>()

const value = ref(0)
onMounted(()=> {
    setTimeout(()=> {
        value.value = prop.score
    }, 200)
})


</script>

<style scoped>
.status {
    transition: all 1.5s ease-in;
    height: 0.3rem;
    background-color: greenyellow;
    width: v-bind(value + "%");
}
</style>
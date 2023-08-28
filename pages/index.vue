<template>
    <MainGreating v-on:start="startQuestioning" v-if="!started"/>
    <QuestionCard :show="showQuestion" :question="question" :question-number="questionNumber" v-on:answer="answer" v-on:after-leave="showQuestion = true"/>
</template>

<script setup lang="ts">
function startQuestioning() {
    started.value = true
    showQuestion.value = true
}

function answer() {
    console.log("answer")
    questionNumber.value++
    showQuestion.value = false
}

const question = ref("Hva er ditt navn?")
const questionNumber = ref(1)
const started = ref(false)
const showQuestion = ref(false)
</script>

<style scoped>

</style>
<template>
    <MainGreating v-on:start="startQuestioning" v-if="!started"/>
    <QuestionCard :show="showQuestion && started" :question="question" :question-number="questionNumber" v-on:answer="answer"/>
    <QuestionCard :show="!showQuestion && started" :question="question" :question-number="questionNumber" v-on:answer="answer"/>

</template>

<script setup lang="ts">
function startQuestioning() {
    started.value = true
    showQuestion.value = true
}

function answer(test:any) {
    console.log(test)
    console.log("answer")
    questionNumber.value++
    showQuestion.value = !showQuestion.value
}

const question = ref("Hva er ditt navn?")
const questionNumber = ref(1)
const started = ref(false)
const showQuestion = ref(false)
</script>

<style scoped>

</style>
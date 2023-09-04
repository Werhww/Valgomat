<template>
    <MainGreating v-on:start="startQuestioning" v-if="!started"/>
    <QuestionCard :show="showQuestion && started && !finished" :question="question" :question-number="questionNumber" v-on:answer="answer"/>
    <QuestionCard :show="!showQuestion && started && !finished" :question="question" :question-number="questionNumber" v-on:answer="answer"/>

    <ResultsView v-if="finished" :parties="stats" />
</template>

<script setup lang="ts">
const stats = ref(partys)

const started = ref(false)
const showQuestion = ref(false)
const finished = ref(false)

function startQuestioning() {
    started.value = true
    showQuestion.value = true

}

function answer(test:any) {
    console.log(test)
    console.log("answer")
    questionNumber.value++
    showQuestion.value = !showQuestion.value

    if(questionNumber.value == 10) {
        finished.value = true
    }
}

const question = ref("Hva er ditt navn?")
const questionNumber = ref(1)
</script>

<style scoped>
.loading-ani {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    scale: 2;
}
</style>
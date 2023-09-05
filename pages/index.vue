<template>
    <MainGreating v-on:start="startQuestioning" v-if="!started"/>
    <QuestionCard :show="showQuestion && started && !finished" :question="question" :question-number="questionNumber" v-on:answer="answer"/>
    <QuestionCard :show="!showQuestion && started && !finished" :question="question" :question-number="questionNumber" v-on:answer="answer"/>

    <ResultsView v-if="finished" :parties="stats" />
</template>

<script setup lang="ts">
import { questionTypes } from '~/utils/useConfig';

const stats = ref(partys)

const started = ref(false)
const showQuestion = ref(false)
const finished = ref(false)

const newQuestions = ref<questionTypes[]>([])
const question = ref("test")
const questionNumber = ref(1)

function startQuestioning() {
    asignQuestion()
    started.value = true
    showQuestion.value = true
}

function answer(test:any) {
    if(questionNumber.value == 10) {
        finished.value = true
    }

    questionNumber.value++
    showQuestion.value = !showQuestion.value
    asignQuestion()
}

function asignQuestion() {
    console.log('err')
    console.log(newQuestions.value)
    question.value = "test"

}

onMounted(()=>{
    console.log('getting questions')
    newQuestions.value = newQuestionList()
})
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
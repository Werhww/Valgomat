<template>
    <MainGreating v-on:start="startQuestioning" v-if="!started"/>
    
    <QuestionCard :show="showQuestion && started && !finished" :question="question.question" :question-number="questionNumber" v-on:answer="answer"/>
    <QuestionCard :show="!showQuestion && started && !finished" :question="question.question" :question-number="questionNumber" v-on:answer="answer"/>

    <ResultsView v-if="finished" :parties="stats" />
</template>

<script setup lang="ts">
import { questionTypes, keys, partyNames } from '~/utils/useConfig';

const stats = ref(partys)

const started = ref(false)
const showQuestion = ref(false)
const finished = ref(false)

const newQuestions = ref<questionTypes[]>([])

const question = ref<questionTypes>({
    question: "",
    for: {},
    neutral: {},
    against: {}
})
const questionNumber = ref(1)


function startQuestioning() {
    asignQuestion()
    started.value = true
    showQuestion.value = true
}

function answer(key: keys, multiplier: number) {
    addPoints(question.value, key, multiplier)

    if(questionNumber.value == newQuestions.value.length) {
        finished.value = true
        return
    }

    questionNumber.value++
    showQuestion.value = !showQuestion.value
    asignQuestion()
}

function asignQuestion() {
    question.value = newQuestions.value[questionNumber.value - 1]
}

function addPoints(question: questionTypes, key: keys, multiplier: number) {
    for(const parti in question[key]) {
        stats.value[parti as partyNames].score += (question[key][parti] * multiplier)
    }
}

onMounted(()=>{
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
<template>
    <MainGreating v-on:start="startQuestioning" v-if="!started"/>
    <LoadingRoller v-if="started && loading" class="loading-ani" />

    <QuestionCard :show="showQuestion && started && !loading" :question="question" :question-number="questionNumber" v-on:answer="answer"/>
    <QuestionCard :show="!showQuestion && started && !loading" :question="question" :question-number="questionNumber" v-on:answer="answer"/>

</template>

<script setup lang="ts">
const stats = ref(partys)


const started = ref(false)
const loading = ref(false)

function startQuestioning() {
    started.value = true
    loading.value = true
    showQuestion.value = true

    setTimeout(()=> {
        loading.value = false
    }, 2000)
}

function answer(test:any) {
    console.log(test)
    console.log("answer")
    questionNumber.value++
    showQuestion.value = !showQuestion.value
}

const question = ref("Hva er ditt navn?")
const questionNumber = ref(1)
const showQuestion = ref(false)
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
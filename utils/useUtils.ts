import { questionTypes } from "./useConfig"

export function newQuestionList(): questionTypes[] {
    const AMOUNT_OF_QUESTION = 5
    let question_list = []
    let int_list:number[] = []

    for(let i = 0; i < AMOUNT_OF_QUESTION; i++) {
        const {question, number} = randomQuestion(int_list)
        int_list.push(number)
        question_list.push(question)
    }

    return question_list
}

function randomQuestion(intList: number[]) {
    const number  = Math.floor(Math.random() * questions.length)
    if(intList.find(()=>number)) return randomQuestion(intList)
    return {
        question: questions[number],
        number: number
    }
}

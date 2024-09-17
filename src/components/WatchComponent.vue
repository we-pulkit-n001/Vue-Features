<template>
<h1>WatchComponent</h1>

<div>
    <p>Ask a question?</p>
    <input type="text" v-model="question"/>

    <div>Answer: {{ answer }}</div>
    <img :src="responseData.image" style="width:200px">

</div>

</template>

<script setup>
import { ref, watch } from 'vue'

const question = ref('');
const answer = ref('question contains ?');

const responseData = ref('');

watch(question, async(newQuestion) => {
    if(newQuestion.indexOf('?') > -1){
        answer.value = "Thinking...";
        responseData.value = '';
        try{
            const res = await fetch('https://yesno.wtf/api');
            const resJson = await res.json();
            responseData.value = resJson;
            answer.value = resJson.answer;
        }
        catch(error){
            answer.value = 'Error! Could not reach the api';
        }
    }

});

</script>

<style>

</style>
<template>
  <button @click="increase">+</button>
  <span>{{ counterData.count }}</span>
  <span>{{ counterData.title }}</span>
  <button @click="decrease">-</button>
</template>

<script setup>
import { reactive } from 'vue';


// const count = ref(0);

const counterData = reactive({
    count: 0,
    title: "This is new"
});


function increase(){
    counterData.count++;
}

function decrease(){
    counterData.count--;
}

// export default {
    // data(){
    //     return{
    //         count : 0
    //     }
    // },
    // methods: {
    //     increase(){
    //         this.count++
    //     },
    //     decrease(){
    //         this.count--
    //     }
    // }
// }
</script>

<style>

</style>
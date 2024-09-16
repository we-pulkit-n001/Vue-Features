<template>
  <h1>EventHandler</h1>
  <button @click="$event=>count++">Count Event</button>
  <span>{{ count }}</span>

    <div @click="onParentClick">
        <a href="http://www.google.com" @click="onLinkClick">Click Me</a>
    </div>

</template>

<script setup>

import { ref } from 'vue'

const count = ref(0);

const onLinkClick = () => {
    console.log("Link Clicked");
}

const onParentClick = () => {
    console.log("Parent Clicked");
}

</script>

<style>

</style>
<template>
  <h1>Posts Component</h1>
  <SinglePost :for="post in posts" :post="post" :key="post.id"/>
</template>

<script setup>
import SinglePost from './SinglePost';

import { ref } from 'vue'

const posts = ref([
  {id: 1, title: 'post 1'},
  {id: 2, title: 'post 2'},
  {id: 3, title: 'post 3'}
]);

</script>

<style>

</style>
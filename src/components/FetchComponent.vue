<template>
  <h1>Fetch Component</h1>

  <button @click="getPosts">Show Posts</button>

    <div v-for="p in posts" :key="p.id">
        <h2>{{ p.id }} - {{ p.title }}</h2>
        <p>{{ p.body }}</p>
    </div>

</template>

<script>
import axios from 'axios';

export default {
    data(){
        return{
            posts: []
        }
    },
    mounted(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => this.posts = response.data)
    }
// methods:{
    // getPosts(){
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then(response => response.json())
    //     .then(data => this.post = data)
    // }
// }
}   
</script>

<style>

</style>
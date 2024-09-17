<template>
   
  <h1>Here</h1>
  <router-view/>
  <MyComponent/>
  <ComputedComponent/>
  <EventHandler/>
  <FormInput/>
  <WatchComponent/>
  <PostsComponent/>
  <fetch-component/>
  

  <!-- <post-card>
    <h2>Card Title 1</h2>
    <button>Read More...</button>
  </post-card>
  <post-card>
    <h2>Card Title 2</h2>
    <button>Read More...</button>
  </post-card>
  <post-card>
    <h2>Card Title 3</h2>
    <button>Read More...</button>
  </post-card>

  <PostCard/> -->

  
</template>

<script>
// import PostCard from './components/PostCard.vue';
// import PostsComponent from './components/PostsComponent.vue';

export default {
  name: 'App',
  components: {
// PostsComponent,
// PostCard
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

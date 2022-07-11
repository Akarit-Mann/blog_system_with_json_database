<template>
  <div class="home">

      <div v-if="error">
        {{error}}
      </div>

      <div v-if="posts.length>0" class="layout">
        
        <div>
          <Posts :posts="posts"></Posts>
        </div>
        <div>
          <TagCloud :posts="posts"></TagCloud>
        </div>

      </div>

      <div v-else>
        <SpinneR></SpinneR>
      </div>

  </div>
</template>

<script>
import TagCloud from '../components/TagCloud'
import SpinneR from '../components/SpinneR'
import Posts from '../components/Posts'
import { ref } from '@vue/reactivity';
// import GetPost from '../composable/GetPost'
import getPosts from '../composable/GetPosts';

// import { computed } from '@vue/runtime-core';


export default {

  components: {
    TagCloud,
    SpinneR, Posts },

  setup(){

  let {posts,error,load} = getPosts();

  load();

    return{posts,error}

  }

}
</script>
<style >

  /* input{
    width: 400px;
    margin: 30px auto;
    display: block;
  } */
  .home{
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }
  .layout{
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 20px;
  }
</style>
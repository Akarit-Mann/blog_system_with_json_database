<template>
  
  <div class="tagWidth">

    <div v-if="error">{{error}}</div>
    
    <div v-if="posts.length" class="layout">
      <div>
        <Posts :posts="filterPost"></Posts>
      </div>
      <div>
        <TagCloud :posts="posts"></TagCloud>
      </div>
    </div>
    <div v-else>
      <SpinneR></SpinneR>
      <p>if this spinner is working, your code is something wrong.</p>
    </div>
  
  </div>

</template>

<script>

import TagCloud from '../components/TagCloud'
import Posts from '../components/Posts'
import SpinneR from '../components/SpinneR'
import getPosts from '@/composable/GetPosts'
import { computed } from '@vue/runtime-core';

export default {
  components: {

    TagCloud,
    Posts, SpinneR },

    props:['tag'],
    setup(props) {
       let {posts,error,load} = getPosts();

       load();

       let filterPost = computed(()=>{
        return posts.value.filter((post)=>{
            return post.tags.includes(props.tag)
        })
       })

       return{posts,error,filterPost}
    }

}
</script>

<style>

  .tagWidth{
    width: 1100px;
    margin: 0 auto;
  }

</style>
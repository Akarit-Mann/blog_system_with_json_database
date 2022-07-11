<template>
    <div   class="Tag-Cloud">

  <h1>TagCloud</h1>
    
    <div v-for="tag in uniqueTags" :key="tag" >
        <router-link :to="{name:'tag',params:{tag}}">{{tag}}</router-link>
    </div>

    </div>

</template>

<script>
import { ref } from '@vue/reactivity';
export default {
    props:['posts'],

    setup(props) {

        let tags = ref([])

        props.posts.forEach((post )=> {
            post.tags.forEach((tag)=>{
                tags.value.push(tag);
            })
        });
        
        let uniqueTags =tags.value.filter((tag,index,array)=>{
            return array.indexOf(tag)===index
        })

        

        return {uniqueTags}
    }
}
</script>

<style>

    .Tag-Cloud{
        padding: 10px;
    }
    .Tag-Cloud h1{
        border-bottom: 1px solid #eee;
        padding: 16px 8px;
        color: #444;
    }
    .Tag-Cloud div{
        display: inline-block;
    }
    .Tag-Cloud a{
        color: #ccc;
        text-decoration: none;
        margin: 10px;
    }
    .Tag-Cloud a.router-link-active{
        color: #ff8800;
        font-weight: bold;
    }

</style>
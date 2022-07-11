<template>
<div class="box">

    <router-link :to="{name:'detail',params:{id:post.id}}">
        <h2>{{post.title}}</h2>
    </router-link>
    <p>{{cutpostBody}}</p>

    <div v-for="tag in post.tags" :key="tag" class="pill">
        
        <router-link :to="{name:'tag',params:{tag}}">{{tag}}</router-link>
    </div>

</div>
</template>

<script>
import { computed } from '@vue/runtime-core'
export default {
    props:['post'],
    setup(props) {
        
        let cutpostBody = computed(()=>{
            return props.post.body.substring(0,99);
        })

        return {cutpostBody}
    }
}
</script>

<style>
    .box{
        /* display: flex; */
        /* justify-content: space-between; */
        /* align-items: center; */
        margin: 10px 0;
        max-width: 500px;
        padding: 20px;
        background-color: gray;
        border-radius: 5px;
        color:#fff;
    }
    .box a{
        
        /* color: rgb(255, 255, 0); */
        color: black;
    }
    .pill{
        display: inline-block;
        margin: 10px 10px 0 0;
        color: black;
        background-color:black;
        padding: 8px;
        border-radius: 20px;
        font-size: 14px;
    }
</style>
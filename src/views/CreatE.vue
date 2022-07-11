<template>
  <!-- <h1>Create Post</h1> -->
  <form @submit.prevent="addPost">

    <label for="">Title</label>
    <input type="text" v-model="title" required>

    <label for="">Body</label>
    <textarea v-model="body" required></textarea>

    <label >Tags(hit enter to add a tag)</label>
    <input type="text" v-model="tag" @keydown.enter.prevent="handleKeyDown" >
    
    <div  v-for="tag in tags" :key="tag" class="pill">
        {{tag}}
    </div>

    <button>Add Post</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router';
// import {} from 
export default {

    setup(props) {

        
        let router = useRouter();
        let title = ref("");
        let body = ref("");
        let tag = ref("");
        let tags = ref([]);

        let handleKeyDown = ()=>{
            if(!tags.value.includes(tag.value)){
                tags.value.push(tag.value)
            }
            tag.value = ""
        }

        let addPost = async()=>{
                 await fetch('http://localhost:3000/posts',{
                method:'POST',
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(
                    {
                        title:title.value,
                        body:title.value,
                        tags:tags.value
                    }
                )
            })

            router.push("/")

        }

    
        return {title,body,tag,tags,handleKeyDown,addPost}
    }

}
</script>

<style>
body{
    background-color:rgba(128, 128, 128, 0.151);
}

   form{
        max-width: 480px;
        margin: 0 auto;
        text-align: left;
    }
    input, textarea{
        display: block;
        margin: 10px 0;
        width: 100%;
        box-sizing: border-box; 
        padding: 10px;
        border: 1px solid #eee;

    }
    textarea{
        height: 100px;
    }   
    label{
        display: inline-block;
        margin-top:30px ;
        position: relative;
        color: #fff;
        background-color: #ff8800;
        padding: 5px;
        left: -30px;
        transform: rotateZ(-1.5deg);
    }
    button{
        display: block;
        margin-top:30px ;
        background-color: #ff8800;
        color: #fff;
        padding: 8px 16px ;
        font-size: 18px;
    }
    .pill{
        display: inline-block;
        margin: 10px 10px 0 0;
        color: #444;
        background-color: #ddd;
        padding: 8px;
        border-radius: 20px;
        font-size: 14px;
    }
</style>
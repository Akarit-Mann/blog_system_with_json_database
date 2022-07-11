<template>
  <div v-if="post" class="post">
  <h1>Post detail - {{id}}</h1>

    <p>
        This is title - <span> {{post.title}} </span>
    </p>
    <p>
        This is detail - <span >{{post.body}}</span>
    </p>
  </div>
  <div v-else class="error">
   <SpinneR></SpinneR>
    <!-- loading... -->
  </div>
</template>

<script>
import SpinneR from '../components/SpinneR'
import getPost from "../composable/GetPost"

export default {
  components: { SpinneR },
    props:['id'],
    setup(props) {
        let {post,error,load} = getPost(props.id);

        load();

        return{post,error}
    }
}


</script>

<style scoped>
  
  .post{
    text-align: start;
    max-width: 600px;
    margin: 10px auto;
    padding: 20px;
    background-color:#111;
    color: yellow;
    font-size: 20px;
    border-radius: 5px;
  }
  .error{
    color: red;
    font-size: 30px;
  }
</style>
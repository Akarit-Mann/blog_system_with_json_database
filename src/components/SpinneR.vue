<template>
  <div class="spin"></div>
</template>

<script>
export default {

}
</script>

<style>
  .spin{
    width: 40px;
    height: 40px;
    margin: 50px auto;
    border: 3px solid transparent;
    border-top-color:royalblue ;
    animation: spin 0.5s infinite;
    border-radius: 50%;
  }
  @keyframes spin{
    to{transform: rotate(360deg);}
  }
</style>
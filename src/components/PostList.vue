<template>
  <h1>Post List</h1>
  <div v-for="post in posts" v-bind:key="post.id">
    <SinglePost v-bind:post="post"></SinglePost>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from 'vue'
import SinglePost from './SinglePost'
export default {
  components: { SinglePost },
    props:['posts'],
    
    setup(props){
        // console.log(props.posts[0].title)
        onMounted(()=>{
          console.log("Component Mounted")
        });
        onUnmounted(()=>{
          console.log("Component Unmounted")
        });
        onUpdated(()=>{
          console.log("Update Component");
        })
    }
}
</script>

<style>

</style>
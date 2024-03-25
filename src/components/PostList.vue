<template>
  <h1>Post List</h1>
  <div v-for="post in posts" v-bind:key="post.id">
    <SinglePost v-bind:post="post"></SinglePost>
  </div>
</template>

<script>
import SinglePost from './SinglePost'
export default {
  components: { SinglePost },
    props:['posts'],
    
    setup(props){
        // console.log(props.posts[0].title)
    }
}
</script>

<style>

</style>
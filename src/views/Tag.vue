<template>
  <div v-if="posts.length">
    <PostList :posts="filteredPosts"></PostList>
  </div>

  <div v-else-if="error">{{error}}</div>  

  <div v-else>Loading ...</div>
  

</template>

<script>
import PostList from '../components/PostList'
import { computed } from 'vue';
import getPosts from '../composables/getPosts'
export default {
  components: { PostList },
    props:["tag"],
    setup(props){
        let {posts,error,load}=getPosts();
        load();
        let filteredPosts=computed(()=>{
            return posts.value.filter((lopPost)=>{
                return lopPost.tags.includes(props.tag)
                
            })
        })
        return {posts,error,filteredPosts}
    }
}
</script>

<style>

</style>
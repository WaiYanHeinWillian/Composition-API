<template>
  
  <div class="tag">
    <div v-if="posts.length" class="layout">
    <div>
      <PostList :posts="filteredPosts"></PostList>
    </div>
    <div>
      <TagCloud :posts="posts"></TagCloud>
    </div>
  </div>

  <div v-else-if="error">{{error}}</div>  

  <div v-else>Loading ...</div>
  </div>

</template>

<script>
import TagCloud from '../components/TagCloud'
import PostList from '../components/PostList'
import { computed } from 'vue';
import getPosts from '../composables/getPosts'
export default {
  components: {
    TagCloud, PostList },
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
  .tag{
    max-width: 1200px;
    margin: 0 auto;
  }
</style>
<template>
  <div class="home">
      <div v-if="error">
        {{error}}
      </div>
      
      <div v-if="posts.length>0">
        <PostList :posts="posts"></PostList>
      </div>

      <div v-else>
        LOADING.....
      </div>
    
  </div>
</template>

<script>
import { ref } from 'vue';




import PostList from '../components/PostList'
import getPosts from '../composables/getPosts'
export default {
  components: { PostList },
  setup(){
    let {posts,error,load}=getPosts();
    load();    
    return {posts,error};
  } 
}
</script>




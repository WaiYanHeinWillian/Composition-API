<template>
  <div class="home">
    <div v-if="showPost">
      <PostList :posts="posts"></PostList>
    </div>
    <button @click="showPost=!showPost">ShowPost</button>
    <button @click="posts.pop()">Delete Post</button>
    
  </div>
</template>

<script>
import { ref } from 'vue';




import PostList from '../components/PostList'
export default {
  components: { PostList },
  setup(){
    let posts=ref([
      {title:"post title1",body:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit culpa iure itaque ipsa aperiam numquam expedita obcaecati vel animi consequuntur, aliquam fuga libero eaque porro a exercitationem sunt voluptas ea! Dolor quo dolorem necessitatibus laborum, voluptate mollitia vero provident nobis corporis. Optio blanditiis fugiat suscipit necessitatibus soluta. Neque, distinctio. Sequi corrupti quam consectetur. Illo unde, doloribus laborum obcaecati aliquam molestiae laboriosam necessitatibus error autem aspernatur dolore similique minima in voluptate qui enim nesciunt sed repellat ex assumenda ad, deleniti quaerat? Dicta, quasi voluptate illo soluta delectus porro magnam aperiam non tempora ratione repellat nisi, explicabo incidunt temporibus tempore harum deserunt.",id:1},
      {title:"post title2",body:"lorem ipsum",id:2},
    ]);
    let showPost=ref(true)
    return {posts,showPost};
  } 
}
</script>




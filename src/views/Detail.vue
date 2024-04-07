<template>
  <h1>Detail...{{id}}</h1>
  <div v-if="post" class="post">
    <h2>{{post.title}}</h2>
    <p>{{post.body}}</p>
    <div v-for="tag in post.tags" :key="tag" class="pill">
      {{tag}}
    </div>
    <button class="delete" v-on:click="deletePost">Delete</button>
  </div>
  <div v-else>
    <Spinner></Spinner>
  </div>
</template>

<script>
import Spinner from '../components/Spinner'
import getPost from '../composables/getPost'
import {useRoute} from 'vue-router'
import {useRouter} from 'vue-router'
import {db} from '../firebase/config'
export default {
  components: { Spinner },
    props:['id'],
    setup(props){

        let route=useRoute();
        let router=useRouter();

        let {post,error,load}=getPost(route.params.id);
        load();

        let deletePost=async()=>{
          let postId=props.id;
          await db.collection('posts').doc(postId).delete();
          router.push({name:'home'});

        }

        return {post,error,deletePost}
    }
}
</script>

<style>
.post{
        margin: 0 40px 30px;
        padding-bottom: 30px;
        border-bottom: 1px dashed #e7e7e7;
    }
    .post h2{
        display: inline-block;
        position: relative;
        font-size: 26px;
        color: white;
        margin-bottom: 10px;
        max-width: 400px;
    }
    .post h2::before{
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        background: #ff8800;
        position: absolute;
        z-index: -1;
        padding-right: 40px;
        left: -30px;
        transform: rotateZ(-1deg);
    }
    .pill{
        display: inline-block;
        margin: 10px 10px 0 0;
        color: #444;
        background: #ddd;
        padding: 8px;
        border-radius: 20px;
        font-size: 14px;
    }
    button.delete{
      margin: 30px auto;
    }
</style>
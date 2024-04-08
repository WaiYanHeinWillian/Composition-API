<template>
  <h1>Real Time..</h1>
  <div v-for="post in posts" :key="post">
    <div>
        <h1>{{post.title}}</h1>
        <p>{{post.body}}</p><hr>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import {db} from '../firebase/config'
export default {
    setup(){
        let posts=ref([])
        db.collection('posts').orderBy("created_at","desc").onSnapshot((snap)=>{
            // console.log(snap.docs);
            posts.value=snap.docs.map((doc)=>{
                // console.log(doc.data())
                return {id:doc.id,...doc.data()}
            })
        });
        return {posts}    
    }
}
</script>

<style>

</style>
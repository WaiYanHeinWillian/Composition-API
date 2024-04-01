<template>
    <h2></h2>
    <router-link :to="{name:'Detail',params:{id:post.id}}"><h2>{{post.title}}</h2></router-link>
    <p>{{cutPostBody}}</p>
</template>

<script>
import { computed } from 'vue'
export default {
    props:["post"],
    setup(props){
        let cutPostBody=computed(()=>{
            return props.post.body.substring(0,200)+"...";
        });
        return {cutPostBody}
    }
}
</script>

<style>

</style>
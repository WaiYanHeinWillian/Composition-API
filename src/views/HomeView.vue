<template>
  <div class="home">
    <div v-for="name in filteredname" :key="name">
      <h1>{{name}}</h1>
    </div>
    <input type="text" v-model="search">
    <p>typing is - {{search}}</p>
  </div>
</template>

<script>
import { computed,ref } from 'vue'



export default {
  setup(){

    let names=ref(["kyawkyaw","zawzaw","marmar","tharthar"]);
    let search=ref("");

    let filteredname=computed(()=>{
      return names.value.filter(lopname=>{
        return lopname.includes(search.value)
      })
    })

    return {names,search,filteredname}
  }  
}
</script>

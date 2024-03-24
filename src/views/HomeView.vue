<template>
  <div class="home">
    <h1>Home Page</h1>
    <p>Hello {{name}} and age is {{age}}</p>

    <input type="text" v-model="name">
    <button @click="handleClick">Click</button>
    <button v-on:click="age++">Add Age</button>
  </div>
</template>

<script>
import { ref } from 'vue';


export default {
  setup(){
    let name=ref("wai yan hein");
    let age=ref(20);
    let handleClick=()=>{
      // console.log(name.value)
      name.value="kyaw kyaw"
    };
    return {name,age,handleClick}
    
  },
  
}
</script>

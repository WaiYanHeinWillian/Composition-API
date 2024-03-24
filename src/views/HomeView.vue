<template>
  <div class="home">
    <h1>Home Page</h1>
    <p>Hello {{name}} and age is {{age}}</p>
    <button @click="handleClick">Click</button>
  </div>
</template>

<script>


export default {
  setup(){
    let name="wai yan hein";
    let age=20;
    let handleClick=()=>{
      console.log("Click Me")
    };
    return {name,age,handleClick}
    
  },
  
}
</script>

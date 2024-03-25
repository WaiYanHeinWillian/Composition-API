<template>
  <div class="home">
    <h1>Home Page</h1>
    <!-- <p>{{personOne.name}}</p>
    <p>{{personOne.age}}</p> -->
    <button @click="changeOne">ChangePersonOne</button>
    <p>{{personOne}}</p>

    <!-- <p>{{personTwo.name}}</p>
    <p>{{personTwo.age}}</p> -->
    <button @click="changeTwo">ChangePersonTwo</button>
    <p>{{personTwo}}</p>
    
  </div>
</template>

<script>
import { reactive, ref } from 'vue';


export default {
  setup(){
    // let personOne=ref({name:"TunTun",age:30});
    // let changeOne=()=>{
    //   personOne.value.name="SuSu";
    // };

    // let personTwo=reactive({name:"KyawKyaw",age:50});
    // let changeTwo=()=>{
    //   personTwo.age=100;    }
    // return {personOne,changeOne,personTwo,changeTwo}


    let personOne=ref("MgMg");
    let personTwo=reactive(1000);
    let changeOne=()=>{
      personOne.value="KoKo";
    }

    let changeTwo=()=>{
      personTwo=20
    }

    return {personOne,changeOne,changeTwo}
    
    

  }
  
}
</script>

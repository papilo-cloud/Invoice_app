<template>
 <div>
  <h1>Hello Wold</h1>
  <!-- <p>{{doneTodos}}</p> -->
  <ul>
    <li v-for="done in dones" :key="done.id" @dblclick="dele(done.id)">{{done.clientName}} || {{done.id}}</li>
    <!-- <li></li> -->
  </ul>
 </div>
</template>

<script>
// import data from "./datas/dass.json";
export default {
  mounted () {
    this.$store.dispatch('loadDaas')
    console.log(this.$store.getters.doneTodos)
    console.log(this.$store.getters.getTodoById(3080)) 
},
methods: {
  dele(index) {
    this.$store.dispatch('delOdo', index)
    console.log(index)
  }
},
computed: {
  dones(){
    return this.$store.getters.doneTodos
  }
}
}
</script>

<style>

</style>
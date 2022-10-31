<template>
 <div class="app">
    <Heade />
    <router-view></router-view>
 </div>
</template>

<script>
import Heade from './components/Heade.vue';

export default {

    mounted() {
        this.$store.dispatch("loadDaas");
        console.log(this.$store.getters.getTodos);
        // console.log(this.$store.getters.getTodoById("RT3080"));
        console.log(this.$store.getters.doneTodosCount);
        console.log(this.$store.state.count);
        this.$store.commit("increment");
    },
    methods: {
        dele(index) {
            this.$store.dispatch("delOdo", index);
            console.log(index);
        }
    },
   
    components: { Heade }
}
</script>

<style>
*{
  margin: 0; 
  padding: 0;
  box-sizing: border-box;
}
  body{
    font-family: sans-serif;
    position: relative;
    width: 100%;
    background: #141625;
  }
  .app{
    position: relative;
    margin: 0;
    padding: 0;
    display: grid;
  }
  button{
    cursor: pointer;
  }
  @media screen and (min-width: 1000px) {
    .app{
      grid-template-columns: auto 1fr; 
    }
  }
</style>
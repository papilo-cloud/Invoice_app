<template>
 <div class="app">
    <Heade />
    <invoices />
 </div>
</template>

<script>
import Heade from './components/Heade.vue';
import Invoices from './components/Invoices.vue';

export default {
    mounted() {
        this.$store.dispatch("loadDaas");
        console.log(this.$store.getters.getTodos);
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
   
    components: { Heade, Invoices }
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
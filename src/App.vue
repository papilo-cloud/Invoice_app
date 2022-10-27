<template>
 <div class="app">
    <Heade />
    <invoices />
 </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Heade from './components/Heade.vue';
import Invoices from './components/Invoices.vue';

export default {
    mounted() {
        this.$store.dispatch("loadDaas");
        console.log(this.$store.getters.doneTodos);
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
    computed: {
        // dones(){
        //   return this.$store.getters.doneTodos
        // }
        ...mapGetters({
            dones: "doneTodos"
        })
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
</style>
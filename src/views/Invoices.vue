<template>
    <div class="inss">
      <new-invoice class="new" v-if="show"/>
      <div class="head">
        <div class="con">
          <h3>Invoices</h3>
          <p>{{total}}</p>
        </div>
        <div class="bun">
          <div>
            <button class="bun1" @click="showFilter">{{status}} <img class="ims" src="../assets/icon-arrow-down.svg" alt=""></button>
            <div class="asses" v-if="filter">
              <label for="all">
                <input type="radio" name="bunn" v-model="pick" value="all" id="all"> all
              </label>
              <div v-for="(shows, x) in showFilters" :key="x">
              <label :for="x">
                <input type="radio" name="bunn" v-model="pick" :value="shows" :id="x"> {{shows}}
              </label>
            </div>
            </div>
          </div>
          <button class="bun2" @click="showForm">
            <span><img src="../assets/icon-plus.svg" alt="plus"></span>{{dones}}</button>
        </div>
      </div>
      <div class="bdy">
        <Invoice :pick="pick"/>
      </div>
    </div>
  </template>
  
  <script>
import Invoice from '../components/Invoice.vue'
import { mapGetters } from 'vuex';
import NewInvoice from '../components/NewInvoice.vue';
import { onBeforeMount } from 'vue';

  export default {
    name: 'invoices',
    data() {
      return{
        show: false,
        filter: false,
        pick: 'all'
      }
    },
    components: {
      Invoice,
      NewInvoice,
      onBeforeMount
    },
  
    computed: {
        dones(){
          // return this.$store.getters.doneTodos
          const x = window.innerWidth >= 700 ?  ' New Invoices':' New';
          return x
        },
        total(){
          const x = window.innerWidth >= 700 ?  ` there are ${this.done} total invoices`:` ${this.done} invoices`;
          return x
        },
        status(){
          const x = window.innerWidth >= 700 ?  ` filter by status`:` filter`;
          return x
        },
        showFilters(){
          const shw =  this.$store.getters.getTodos
          const ans = [...new Set(shw.map(x => x.status)) ]
          return ans
          // console.log(ans)
        },
        ...mapGetters({
            done: "getTodosCount"
    }),
  },
  mounted() {
           console.log(this.$store.getters.getTodos.filter(x => x.status === 'paid'))
    this.done
    console.log(this.done)
  },
  methods: {
    showForm() {
      this.show = !this.show
    },
    showFilter() {
      this.filter = !this.filter;
      const x = document.querySelector('.ims')
      console.log(x.getAttribute)
      x.classList.toggle('imss')
    }
  }
} 
  </script>
  
  <style scoped>
    .inss{
      position: relative;
      width: 100%;
      margin: 0;
      color: white;
      padding: 20px;
    }
    .head{
      position: relative;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2em;
    }
    .head .bun{
      position: relative;
      display: flex;
      align-items: center;
    }
    .con h3{
      margin-bottom: 10px;
    }
    button{
      border: none;
      outline: none;
      cursor: pointer;
    }
    .bun .bun1{
      background: transparent;
      color: white;
      letter-spacing: 1px;
      font-size: 18px;
    }
     .imss{
      /* position: absolute; */
      transform: rotate(180deg);
      transition: .4s;
      /* padding: 10px;
      background: white; */
    }
    .bun .bun2{
      margin-left: 12px;
      color: white;
      background: #5362d3;
      border-radius: 24px;
      padding: 4px;
    }
    .bun2 span{
      position: relative;
      /* padding: 10px; */
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 30px;
      background: white;
      border-radius: 50%;
    }
    .asses{
      background: #1e2139;
      position: absolute;
      padding: 20px;
      left: -20px;
      top: 48px;
      z-index: 1;
      border-radius: 8px;
      box-shadow: 3px 3px 12px rgba(249, 249, 249, 0.1);
    }
    .asses label{
      cursor: pointer;
    }
    .asses input{
      margin-bottom: 10px;
    }
    @media screen and (min-width:768px) {
      .inss{
        min-width: 748px;
        margin: 20px auto;
      }
       .head{
        margin-bottom: 3em;
      }
    }
    @media screen and (min-width:1000px) {
      .inss{
        width: 820px;
      }
    }
  </style> 
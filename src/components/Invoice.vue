<template>
  <div class="ins">
    <div class="bdy" v-for="invs in dones" :key="invs.id">
      <div class="pos">
        <p class="id">#{{invs.id}}</p> <span>Due {{invs.paymentDue}}</span> 
        <span>{{invs.clientName}}</span> <p class="total">${{invs.total}}</p>
        <p class="p status"><span></span> {{invs.status}}</p>
        <img src="../assets/icon-arrow-right.svg" alt="">
      </div>
      <div class="small">
        <div class="sml1">
          <p>#{{invs.id}}</p> <span>Due {{invs.paymentDue}}</span> <p>${{invs.total}}</p>
        </div>
        <div class="sml2">
          <span>{{invs.clientName}}</span>
          <p class="status paid"><span class="paid"></span> {{invs.status}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
  return {
    classObject: {
      active: true,
      'text-danger': false
    }
  }
},

  computed: {
    activeClass(){
          return this.$store.getters.doneTodos
        },
        ...mapGetters({
            dones: "getTodos"
        })
    },
}
</script>

<style scoped>
  .bdy{
    position: relative;
    margin: 0;
    padding: 20px;
    margin-bottom: 10px;
    border-radius: 7px;
    background: #1e2139;
    /* background: #fff; */
  }
  .bdy .status span{
    position: relative;
    display: inline-block;
    width: 8px;
    height: 8px;
    background: #0C0e16;
    border-radius: 50%;
    top: 50%;
    /* left: 20px; */
  }
  .bdy .status .paid, .bdy .paid {
    background-color: rgba(255, 170, 0, 0.1);
  }
  
 .col {
  color: #141625, #1e2139,#252945,#dfe3fa,rgba(223, 227, 250, .06),
  #0C0e16, #888eb0,rgba(0, 0, 0, 0.25), #fff,#7e88c3 ,
  rgba(72, 84, 159, 0.25),rgba(12, 14, 22, .4),#363b53,
  rgba(55, 59, 83, 0.06)
  }
  @media screen and (max-width: 700px) {
    .small{
      display: flex;
      justify-content: space-between;
      align-items: center;
      letter-spacing: 1px;
    }
    .small .sml1 p:nth-child(1){
      margin-bottom: 10px;
    }
    .small .sml1 p:last-child{
      font-weight: 400;
      font-size: 24px;
    }
   

    .small .sml2{
      width: 140px;
      /* display: flex;
      flex-direction: column; */
      /* align-items: flex-start; */
      text-align: right;
    } 
    .small .sml2 span,  .small .sml1 span{
      font-size: 14px;
      color: rgba(172, 184, 159, 0.95);
      font-weight: 100;
    }
    .small .sml2 p {
      position: relative;
      padding: 14px;
      /* width: 100px; */
      text-align: center;
      border-radius: 10px;
      margin-top: 10px;
      right: 0;
    }
    .pos{
      display: none;
    }
  }
  @media screen and (min-width: 700px) {
    .small{
      display: none;
    }
    .pos{
      display: flex;
      /* justify-content: space-between; */
      align-items: center;
    }
    .pos span{
      font-size: 14px;
      color: rgba(172, 184, 159, 0.95);
      font-weight: 100;
    }
    .pos .total {
      font-weight: 400;
      font-size: 24px;
    }
    
    .pos p, .pos span{
      flex: 1;
      margin: 0;
      padding: 0;
    }
    .pos .id{
      flex: .74;
    }
    .pos img{
      /* flex: .1; */
      margin-left: 10px;
    }
    .pos .p{
      position: relative;
      padding: 14px;
      flex: .7;
      /* width: 40px; */
      text-align: center;
      border-radius: 10px;
      right: 0;
    }
   
  }
</style> 
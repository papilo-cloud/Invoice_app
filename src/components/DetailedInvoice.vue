<template>
  <div class="details">
    <div class="btn">
      <button @click="backBtn"><img src="../assets/icon-arrow-left.svg" alt=""> Go back</button>
    </div>
    <div class="head">
      
      <div class="edit" v-if="totalLen">
        <div>
          <p>status</p>
          <p class="status" :class="{paid: datas.status === 'paid', pending: datas.status === 'pending', draft: datas.status === 'draft'}">
            <span :class="{paid: datas.status === 'paid', pending: datas.status === 'pending', draft: datas.status === 'draft'}"></span> {{datas.status}}</p>
        </div>
        <div>
          <button>Edit</button>
          <button>Delete</button>
          <button>Mark as Paid</button>
        </div>
      </div>
      <div class="pend" v-else="totalLen">
          <p>status</p>
          <p class="status" :class="{paid: datas.status === 'paid', pending: datas.status === 'pending', draft: datas.status === 'draft'}">
            <span :class="{paid: datas.status === 'paid', pending: datas.status === 'pending', draft: datas.status === 'draft'}"></span> {{datas.status}}</p>
      </div>
    </div>
      
  </div>
</template>

<script>
export default {
  data() {
    return {
      datas: [],
      id: this.$route.params.id
    }
  },
  mounted() {
     const x = this.$store.getters.getTodoById(this.id)
     this.datas = this.$store.getters.getTodoById(this.id)
     const {id,createdAt} =  this.datas
     console.log(this.datas.status)

     console.log(this.datas)
  },
  methods: {
    backBtn() {
      this.$router.go(-1)
    }
  },
  computed: {
        dones(){
          // return this.$store.getters.doneTodos
          const x = window.innerWidth >= 700 ?  ' New Invoices':' New';
          return x
        },
        totalLen(){
          const x = window.innerWidth >= 700;
          return x
        },
        status(){
          const x = window.innerWidth >= 700 ?  ` filter by status`:` filter`;
          return x
        },
  }
}
</script> 

<style scoped>
  .details{
    position: relative;
    width: 100%;
    margin: 0;
    padding: 40px 20px 20px;
    color: #fff;
  }
  .btn {
    position: relative;
    padding: 0;
    margin-bottom: 20px;
  }
   button{
    background: transparent;
    outline: none;
    border: none;
    color: white;
  }
  .btn img{
    margin-right: 10px;
  }
  .head{
    position: relative;
    width: 100%;
    padding: 24px;
    background:rgba(72, 84, 159, 0.15);
    border-radius: 10px;
  }
  .pend{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .edit{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .edit div{
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    gap: 10px;
  }
  .edit button{
    margin-left: 14px;
  }
  .pend p:nth-child(1){
    margin-right: 10px;
  }
  .status{
    position: relative;
    padding: 12px;
    width: 100px;
    text-align: center;
    border-radius: 7px;
    display: inline-block;
  }
   .status span{
    position: relative;
    display: inline-block;
    width: 8px; 
    height: 8px;
    background: #0C0e16;
    border-radius: 50%;
    top: 50%;
    /* left: 20px; */
  }
   .status .paid {
    background-color: rgba(0, 255, 0, .3);
  }
   .paid {
    background-color: rgba(0, 220, 0, 0.1);
    color: rgba(0, 255, 0, .3);
  }
   .status .pending{
    background-color: rgba(255,120, 0, .3);
  }
   .pending{
    background-color: rgba(225, 120, 0, 0.1);
    color: rgba(255,170, 0, .3);
  }
   .status .draft{
    background-color: #fff;
    /* color: rgba(255,170, 0, .3); */
  }
   .draft{
    background-color: rgba(0, 0, 0, 0.14);
    /* color: rgba(255,170, 0, .3); */
  }
  
</style>
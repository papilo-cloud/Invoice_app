<template>
    <div class="inss">
      <div class="head">
        <div class="con">
          <h3>Invoices</h3>
          <!-- there are 7 total  -->
          <p>7 Invoices</p>
        </div>
        <div class="bun">
          <div>
            <button class="bun1">filter</button>
          </div>
          <button class="bun2"><span><img src="../assets/icon-plus.svg" alt="plus"></span> New Invoices</button>
        </div>
      </div>
      <div class="bdy">

      </div>
    </div>
  </template>
  
  <script>
  export default {
  
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
    }
    .head .bun{
      position: relative;
      display: flex;
      align-items: center;
    }
    button{
      border: none;
      outline: none;
      cursor: pointer;
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
  </style> 
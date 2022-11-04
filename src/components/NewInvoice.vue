<template>
    <div class="new">
      <h2>New Invoice</h2>
      <form>
          <p>Bill from</p>
        <div class="label">
          <label for="nm" class="nm1">
           <span> street Address</span>
          <input type="text" name="" id="nm" placeholder="name">
          </label>
          <label for="nm" class="nm2">
            <span>City</span>
            <input type="text" name="" id="nm">
          </label>
          <label for="nm" class="nm3">
            <span>Post Code</span>
            <input type="text" name="" id="nm">
          </label>
          <label for="nm" class="nm4">
            <span>Country</span>
            <input type="text" name="" id="nm">
          </label>
        </div>
          <p>Bill To</p>
        <div class="label1">
          <label for="nm" class="nm1">
            <span>Client's Name</span>
          <input type="text" name="" id="nm" placeholder="name">
          </label>
          <label for="nm" class="nm2">
            <span>Client's Email</span>
            <input type="text" name="" id="nm">
          </label>
          <label for="nm" class="nm3">
            <span>Street Address </span>
            <input type="text" name="" id="nm">
          </label>
          <label for="nm" class="nm4">
            <span>City</span>
            <input type="text" name="" id="nm">
          </label>
          <label for="nm" class="nm7">
            <span>Post Code</span>
            <input type="text" name="" id="nm">
          </label>
          <label for="nm" class="nm8">
            <span>Country</span>
            <input type="text" name="" id="nm">
          </label>
        </div>
        <div class="label2">
          <label for="nm" class="nm1">
            <span>Invoice Date</span>
          <input type="text" name="" id="nm" placeholder="name">
          </label>
          <label for="nm" class="nm2">
            <span>Payment Terms</span>
            <input type="text" name="" id="nm">
          </label>
          <label for="nm" class="nm3">
            <span>Project description </span>
            <input type="text" name="" id="nm">
          </label>
        </div>

        <p>Item List</p>
        <div class="label3">
          <label for="nm" class="nm1">
            <span>Item Name</span>
          <input type="text" name="" id="nm" placeholder="name">
          </label>
          <label for="nm" class="nm2">
            <span>Qty</span> 
            <input type="text" name="" id="nm">
          </label>
          <label for="nm" class="nm3">
            <span>Price</span>
            <input type="text" name="" id="nm">
          </label>
          <label for="nm" class="nm4">
            <span>Total</span>
            <p>$</p>
          </label>
        </div>
        <div class="sumbit">
          <button>Discard</button>
          <div>
            <button>Save as Draft</button>
            <button>Save and Send</button>
          </div>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style scoped> 
    .new{
      position: fixed;
      left: 0;
      bottom: 0;
      width: 80%;
      background: #141625;
      height: 100%;
      z-index: 100000;
      overflow-y: scroll;
      padding: 20px;
      margin: 0;
    }
    .new h2{
      margin-bottom: 20px;
    }
    form{
      position: relative;
      margin: 0;
      height: 100%;
      /* padding: 20px; */
      letter-spacing: 1px;
    }
    p{
      margin-bottom: 14px;
      color: rgba(100, 70, 220, 0.999);
    }
    form >div:not(.sumbit){
      display: grid;
      margin-bottom: 40px;
      width: 100%;
      gap:10px;
      grid-template-columns: 1fr 1fr;
      grid-auto-rows: minmax(40px, auto);
    }
    div label{
      margin:4px 0;
      width: 100%;
    }
    label span{
      font-size: 14px;
      color: rgba(244, 244, 244, 0.7);
    }
    .label .nm1{
      grid-column: 1/3;
      grid-row: 1 ;
    }
    .label .nm4{
      grid-column: 1/3;
      grid-row: 3 ;    
    }
    .label1 .nm1{
      grid-column: 1/3;
      grid-row: 1 ;
    }
    .label1 .nm2{
      grid-column: 1/3;
      grid-row: 2 ;
    }
    .label1 .nm3{
      grid-column: 1/3;
      grid-row: 3 ;
    }
    .label1 .nm8{
      grid-column: 1/3;
      grid-row:  5;
    }
    .label2 .nm1{
      grid-column: 1/3;
      grid-row:  1;
    }
    .label2 .nm2{
      grid-column: 1/3;
      grid-row:  2;
    }
    .label2 .nm3{
      grid-column: 1/3;
      grid-row:  3;
    }
    .label3 .nm1{
      grid-column: 1/3;
      grid-row:  1;
    }
    
    .label3 .nm4{
      grid-column: 1/3;
      grid-row:  3;
    }
    input{
      outline: none;
      border: none;
      padding: 12px;
      border-radius: 7px;
      background:rgba(72, 84, 159, 0.15);
      width: 100%;
      color: white;
    }
    .sumbit {
      position: relative;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      display: flex;
    }
    .sumbit > div{
      display: flex;
      gap: 4px;
    }
    .sumbit button{
      outline: none;
      border: none;
      padding: 14px;
      border-radius: 24px;
      font-size: 9px;
    }
    @media screen and (min-width: 768px) {
      .new{
        width: 760px;
      }
      form >div:not(.sumbit){
      grid-template-columns: repeat(3, 1fr);
      grid-auto-rows: minmax(40px, auto);
    }
    .sumbit button{
      font-size: 17px;
    }
    .label .nm1{
      grid-column: 1/4;
      grid-row: 1 ;
    }
    .label .nm2{
      grid-column: 1/2;
      grid-row: 2 ;    
    }
    .label .nm4{
      grid-column: 2/3;
      grid-row: 2 ;    
    }
    .label .nm4{
      grid-column: 3/4;
      grid-row: 2;    
    }
    .label1 .nm1{
      grid-column: 1/4;
      grid-row: 1 ;
    }
    .label1 .nm2{
      grid-column: 1/4;
      grid-row: 2 ;
    }
    .label1 .nm3{
      grid-column: 1/4;
      grid-row: 3 ;
    }
    .label1 .nm4{
      grid-column: 1/2;
      grid-row: 4;
    }
    .label1 .nm7{
      grid-column: 2/3;
      grid-row: 4;
    }
    .label1 .nm8{
      grid-column: 3/4;
      grid-row: 4;
    }
    .label2 .nm1{
      grid-column: 1/2;
      grid-row:  1;
    }
    .label2 .nm2{
      grid-column: 2/3;
      grid-row: 1;
    }
    .label2 .nm3{
      grid-column: 3/4;
      grid-row: 1;
    }
    .label3 .nm1{
      grid-column: 1/4;
      grid-row:  1;
    }
    
    .label3 .nm4{
      grid-column: 3/4;
      grid-row: 2;
      align-items: center;
    }
    }
  </style> 
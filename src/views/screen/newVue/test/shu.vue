<template>
  <div class="shu">

    <div class="shu_text">累计减排量<span style="color:rgb(13, 253, 255)">100.00
        (kgCO2e)</span><br>
      累积种植<span>100</span>棵树</div>
   
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
 .shu {
     
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      width: 100%;
      height: 100%;
      padding: 5% 0% 0 0%;
      background: url('~@/assets/images/树.png') no-repeat center;
      background-size: contain;


      justify-content: center;


      .shu_text {
        padding: 4rem 7rem;
     
        color: rgb(240, 225, 153);
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bold;
       
        font-size: 2.5rem;
       
        text-align: center;

        span {
          color: rgb(13, 253, 255);
          text-shadow: none;
          text-shadow: 0 0 8px rgb(13, 253, 255);
        }

      }


    }
</style>
<template>
<div class="index">
  <x-slides :selected.sync="selected">
    <x-slides-item name="1">
      <div class="box">1</div>
    </x-slides-item>
    <x-slides-item name="2">
      <div class="box">2</div>
    </x-slides-item>
    <x-slides-item name="3">
      <div class="box">3</div>
    </x-slides-item>
  </x-slides>
</div>
</template>

<script>
export default {
  name:'index',
  data(){
    return{
      selected: "1",
    }
  }
}
</script>
<style lang="scss" scoped>
* {margin: 0; padding: 0; box-sizing: border-box;}
html {
  --button-height: 32px;
  --font-size: 14px;
  --button-bg: white;
  --button-active-bg: #eee;
  --border-radius: 4px;
  --color: #333;
  --border-color: #999;
  --border-color-hover: red;
}
.index{
  margin: 20px;
}
.demoRow{
  margin: 10px 0;
}
.box{
  height: 300px;
  background: blue;
  color: white;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.demoCol {
  height: 50px;
  border: 1px solid #ccc;
  background: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
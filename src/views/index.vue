<template>
<div class="index">
  <x-tabs :selected="selected">
    <x-tabs-head>
      <x-tabs-item name="1">1</x-tabs-item>
      <x-tabs-item name="2">2</x-tabs-item>
    </x-tabs-head>
    <x-tabs-body>
      <x-tabs-pane name="1">content 1</x-tabs-pane>
      <x-tabs-pane name="2">content 2</x-tabs-pane>
    </x-tabs-body>
  </x-tabs>
</div>
</template>

<script>
export default {
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
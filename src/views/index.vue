<template>
<div class="index">
  <div>
    <x-row class="demoRow">
      <x-col span="8">
        <div class="demoCol">8</div>
      </x-col>
      <x-col span="8">
        <div class="demoCol">8</div>
      </x-col>
      <x-col span="8">
        <div class="demoCol">8</div>
      </x-col>
    </x-row>
    <x-row class="demoRow">
      <x-col span="6">
        <div class="demoCol">6</div>
      </x-col>
      <x-col span="6">
        <div class="demoCol">6</div>
      </x-col>
      <x-col span="6">
        <div class="demoCol">6</div>
      </x-col>
      <x-col span="6">
        <div class="demoCol">6</div>
      </x-col>
    </x-row>
    <x-row class="demoRow">
      <x-col span="4">
        <div class="demoCol">4</div>
      </x-col>
      <x-col span="4">
        <div class="demoCol">4</div>
      </x-col>
      <x-col span="4">
        <div class="demoCol">4</div>
      </x-col>
      <x-col span="4">
        <div class="demoCol">4</div>
      </x-col>
      <x-col span="4">
        <div class="demoCol">4</div>
      </x-col>
      <x-col span="4">
        <div class="demoCol">4</div>
      </x-col>
    </x-row>
    <x-row class="demoRow">
      <x-col span="2">
        <div class="demoCol">2</div>
      </x-col>
      <x-col span="2">
        <div class="demoCol">2</div>
      </x-col>
      <x-col span="2">
        <div class="demoCol">2</div>
      </x-col>
      <x-col span="2">
        <div class="demoCol">2</div>
      </x-col>
      <x-col span="2">
        <div class="demoCol">2</div>
      </x-col>
      <x-col span="2">
        <div class="demoCol">2</div>
      </x-col>
      <x-col span="2">
        <div class="demoCol">2</div>
      </x-col>
      <x-col span="2">
        <div class="demoCol">2</div>
      </x-col>
      <x-col span="2">
        <div class="demoCol">2</div>
      </x-col>
      <x-col span="2">
        <div class="demoCol">2</div>
      </x-col>
      <x-col span="2">
        <div class="demoCol">2</div>
      </x-col>
      <x-col span="2">
        <div class="demoCol">2</div>
      </x-col>
    </x-row>
  </div>
</div>
</template>

<script>
export default {
  name:'index',
  data(){
    return{
      value:'0'
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
.demoCol {
  height: 50px;
  border: 1px solid #ccc;
  background: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
<template>
<div class="index">
  <div>
    <x-input value="中文"></x-input>
    <x-input value="中文" disabled></x-input>
    <x-input value="中文" readonly></x-input>
  </div>
  <div>
    <x-input v-model="value"></x-input>
    <div>
      value: {{value}}
    </div>
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

</style>
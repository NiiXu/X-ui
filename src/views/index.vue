<template>
<div class="index">
  <x-layout style="color: white; margin-bottom:50px;">
    <x-header style="height: 50px; background:lightskyblue;">
      header
    </x-header>
    <x-content style="height: 100px; background:deepskyblue;">
      content
    </x-content>
    <x-footer style="height: 50px; background:lightskyblue;">
      footer
    </x-footer>
  </x-layout>

  <div>
    <x-layout style="color: white; overflow:hidden; margin-bottom:50px;">
      <x-sider style=" background:#ddd; width:200px; color: black;">
        sider
      </x-sider>
      <x-layout>
        <x-header style="height: 50px; background:lightskyblue;">
          header
        </x-header>
        <x-content style="height: 100px; background:deepskyblue;">
          content
        </x-content>
        <x-footer style="height: 50px; background:lightskyblue;">
          footer
        </x-footer>
      </x-layout>
    </x-layout>
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
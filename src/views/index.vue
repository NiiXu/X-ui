<template>
<div class="index">
  <x-popover>
    <x-button>上方弹出</x-button>
    <template slot="content">
      弹出内容
    </template>
  </x-popover>
  <x-popover position="bottom">
    <x-button>下方弹出</x-button>
    <template slot="content">
      弹出内容
    </template>
  </x-popover>
  <x-popover position="left">
    <x-button>左边弹出</x-button>
    <template slot="content">
      弹出内容
    </template>
  </x-popover>
  <x-popover position="right">
    <x-button>右边弹出</x-button>
    <template slot="content">
      弹出内容
    </template>
  </x-popover>

  <div>
    <x-popover trigger="hover">
      <x-button>上方弹出</x-button>
      <template slot="content">
        弹出内容
      </template>
    </x-popover>
    <x-popover position="bottom" trigger="hover">
      <x-button>下方弹出</x-button>
      <template slot="content">
        弹出内容
      </template>
    </x-popover>
    <x-popover position="left" trigger="hover">
      <x-button>左边弹出</x-button>
      <template slot="content">
        弹出内容
      </template>
    </x-popover>
    <x-popover position="right" trigger="hover">
      <x-button>右边弹出</x-button>
      <template slot="content">
        弹出内容
      </template>
    </x-popover>

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
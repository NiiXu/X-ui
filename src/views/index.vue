<template>
<div class="index">
  <x-button>默认按钮</x-button>
  <x-button icon="setting">默认按钮</x-button>
  <x-button :loading="true">默认按钮</x-button>
  <x-button disabled>默认按钮</x-button>

  <x-buttongroup>
    <x-button icon="left">上一页</x-button>
    <x-button>更多</x-button>
    <x-button icon="right" icon-position="right">下一页</x-button>
  </x-buttongroup>
</div>
</template>

<script>
export default {
  name:'index',
  data(){
    return{
      x:'0'
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
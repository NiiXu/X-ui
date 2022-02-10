<template>
<div>
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

</style>
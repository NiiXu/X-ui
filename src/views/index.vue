<template>
<div class="index">

  <div>
    <x-button @click="$toast('点击弹出提示')">上方弹出</x-button>
    <x-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</x-button>
    <x-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</x-button>
    <x-button @click="onClickButton">上方弹出</x-button>
  </div>


  <x-tabs :selected.sync="selectedTab" @update:selected="yyy">
    <x-tabs-head>
      <template slot="actions">
        <button>设置</button>
      </template>
      <x-tabs-item name="woman">
        <x-icon name="settings"></x-icon>美女
      </x-tabs-item>
      <x-tabs-item name="finance" >
        财经
      </x-tabs-item>
      <x-tabs-item name="sports">
        体育
      </x-tabs-item>
    </x-tabs-head>
    <x-tabs-body>
      <x-tabs-pane name="woman">
        美女相关资讯
      </x-tabs-pane>
      <x-tabs-pane name="finance">
        财经相关资讯
      </x-tabs-pane>
      <x-tabs-pane name="sports">
        体育相关资讯
      </x-tabs-pane>
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
  },
  methods: {
    onClickButton () {
      this.$toast('你知道我在等你吗？', {
        closeButton: {
          text: '知道了',
          callback: () => {
            console.log('他说知道了')
          }
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
* {margin: 0; padding: 0; box-sizing: border-box;}
img {max-width: 100%;}
html {
  --button-height: 32px;
  --font-size: 14px;
  --button-bg: white;
  --button-active-bg: #eee;
  --border-radius: 4px;
  --color: #333;
  --border-color: #999;
  --border-color-hover: #666;
}
#app {
}
body {
  font-size: var(--font-size);
}
</style>
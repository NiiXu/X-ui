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
<template>
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
.box{
  height: 300px;
  background: blue;
  color: white;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#app {
}
body {
  font-size: var(--font-size);
}
</style>
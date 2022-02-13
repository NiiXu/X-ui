<template>
  <div style="padding-top: 16px;">
    <h2>简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>
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

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import Slides from '../../../src/components/Slides'
  import SlidesItem from '../../../src/components/Slides-item'


  export default {
    components: {
      'x-slides':Slides, 'x-slides-item':SlidesItem
    },
    data () {
      return {
        selected: "1",
        content: `
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

          data: {
            selected: '1'
          }

          <style lang="scss" scoped>
            .box{
              height: 300px;
              background: blue;
              color: white;
              font-size: 30px;
              display: flex;
              justify-content: center;
              align-items: center;
            } 
          </style>

      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>
<style lang="scss" scoped>
  .box{
    height: 300px;
    background: blue;
    color: white;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

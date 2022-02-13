<template>
  <div style="padding-top: 16px;">
    <h2>24格网格</h2>
    <p>
      <strong>预览</strong>
    </p>
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

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<style scoped>
  * {
    box-sizing: border-box;
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
<script>
  import Row from '../../../src/components/Row'
  import Col from '../../../src/components/Col'

  export default {
    components: {'x-row':Row,'x-col': Col},
    data () {
      return {
        content: `
          * {
            box-sizing: border-box;
          }

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
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>
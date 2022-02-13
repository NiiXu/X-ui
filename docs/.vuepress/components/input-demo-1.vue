<template>
  <div style="padding-top: 16px;">
    <h2>简单用法</h2>
    <p>
      <strong>预览1</strong>
    </p>
    <x-input value="中文"></x-input>
    <x-input value="中文" disabled></x-input>
    <x-input value="中文" readonly></x-input>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import GInput from '../../../src/components/input'

  export default {
    components: {'x-input':GInput},
    data () {
      return {
        selected: '1',
        content: `
          <x-input value="中文"></x-input>
          <x-input value="中文" disabled></x-input>
          <x-input value="中文" readonly></x-input>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>
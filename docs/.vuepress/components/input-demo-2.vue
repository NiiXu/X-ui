<template>
  <div style="padding-top: 16px;">
    <h2>双向绑定</h2>
    <p>
      <strong>预览</strong>
    </p>
      <x-input v-model="value"></x-input>
    <div>
      value: {{value}}
    </div>

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
        value: '1',
        content: `
          data:{
            value: '1'
          }

         <x-input v-model="value"></x-input>
          <div>
            value: {{value}}
          </div>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>
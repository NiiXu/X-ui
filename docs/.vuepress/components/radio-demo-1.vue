<template>
  <div style="padding-top: 16px;">
    <h2>简单用法</h2>
    <p>
      <strong>预览1</strong>
    </p>
      <x-radio label="0" v-model="radio"> 男</x-radio>
      <x-radio label="1" v-model="radio"> 女</x-radio>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
import radios from '../../../src/components/radio'

export default {
  components: {'x-radio':radios},
  data () {
    return {
      radio:'0',
      content: `
        data(){
            radio:'0',
        }
        <x-radio label="0" v-model="sex"> 男</x-radio>
        <x-radio label="1" v-model="sex"> 女</x-radio>
      `.replace(/^ {8}/gm, '').trim()
    }
  }
}
</script>
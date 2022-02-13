<template>
  <div style="padding-top: 16px;">
    <h2>简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <x-tabs :selected="selected">
      <x-tabs-head>
        <x-tabs-item name="1">home</x-tabs-item>
        <x-tabs-item name="2">famliy</x-tabs-item>
      </x-tabs-head>
      <x-tabs-body>
        <x-tabs-pane name="1">content 1</x-tabs-pane>
        <x-tabs-pane name="2">content 2</x-tabs-pane>
      </x-tabs-body>
    </x-tabs>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import Tabs from '../../../src/components/Tabs'
  import TabsBody from '../../../src/components/Tabs-body'
  import TabsHead from '../../../src/components/Tabs-head'
  import TabsItem from '../../../src/components/Tabs-item'
  import TabsPane from '../../../src/components/Tabs-pane'

  export default {
    components: {'x-tabs':Tabs, 'x-tabs-body':TabsBody, 'x-tabs-head':TabsHead,'x-tabs-item':TabsItem, 'x-tabs-pane':TabsPane},
    data () {
      return {
        selected: '1',
        content: `
          data:{
            selected: '1'
          }

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
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>
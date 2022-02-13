<template>
  <div style="padding-top: 16px;">
    <h2>布局1</h2>
    <p>
      <strong>预览</strong>
    </p>

    <x-layout style="color: white; margin-bottom:50px;">
      <x-header style="height: 50px; background:lightskyblue;">
        header
      </x-header>
      <x-content style="height: 100px; background:deepskyblue;">
        content
      </x-content>
      <x-footer style="height: 50px; background:lightskyblue;">
        footer
      </x-footer>
    </x-layout>

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
</style>
<script>
  import Layout from '../../../src/components/Layout'
  import Header from '../../../src/components/Header'
  import Footer from '../../../src/components/Footer'
  import Content from '../../../src/components/Content'
  import Sider from '../../../src/components/Sider'

  export default {
    components: {'x-layout':Layout,'x-header':Header,'x-footer':Footer,'x-content':Content,'x-sider':Sider},
    data () {
      return {
        content: `
          <g-layout style="color: white; margin-bottom:50px;">
            <g-header style="height: 50px; background:lightskyblue;">
              header
            </g-header>
            <g-content style="height: 100px; background:deepskyblue;">
              content
            </g-content>
            <g-footer style="height: 50px; background:lightskyblue;">
              footer
            </g-footer>
          </g-layout>

      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>
<template>
  <div style="padding-top: 16px;">
    <h2>将触发方式改为 hover</h2>
    <p>
      <strong>预览</strong>
    </p>

    <x-popover trigger="hover">
      <x-button>上方弹出</x-button>
      <template slot="content">
        弹出内容
      </template>
    </x-popover>
    <x-popover position="bottom" trigger="hover">
      <x-button>下方弹出</x-button>
      <template slot="content">
        弹出内容
      </template>
    </x-popover>
    <x-popover position="left" trigger="hover">
      <x-button>左边弹出</x-button>
      <template slot="content">
        弹出内容
      </template>
    </x-popover>
    <x-popover position="right" trigger="hover">
      <x-button>右边弹出</x-button>
      <template slot="content">
        弹出内容
      </template>
    </x-popover>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<style>
</style>
<style scoped>
</style>
<script>
import Button from '../../../src/components/Button'
import Popover from '../../../src/components/Popover'


  export default {
    components: {'x-button':Button, 'x-popover':Popover},
    data () {
      return {
        content: `
            <x-popover trigger="hover">
              <x-button>上方弹出</x-button>
            <template slot="content">
                弹出内容
            </template>
            </x-popover>
            <x-popover position="bottom" trigger="hover">
            <x-button>下方弹出</x-button>
            <template slot="content">
                弹出内容
            </template>
            </x-popover>
            <x-popover position="left" trigger="hover">
            <x-button>左边弹出</x-button>
            <template slot="content">
                弹出内容
            </template>
            </x-popover>
            <x-popover position="right" trigger="hover">
            <x-button>右边弹出</x-button>
            <template slot="content">
                弹出内容
            </template>
            </x-popover>
      `.replace(/^ {8}/gm, '').trim()
      }
    },
    methods: {
      onClickButton () {
        this.$toast('<strong style="color:red;">加粗的提示</strong>', {
          enableHtml: true
        })
      }
    },
  }
</script>
<template>
  <div style="padding-top: 16px;">
    <h2>支持 HTML</h2>
    <p>
      <strong>预览</strong>
    </p>

    <x-popover>
      <x-button>上方弹出</x-button>
      <template slot="content">
        弹出内容
      </template>
    </x-popover>
    <x-popover position="bottom">
      <x-button>下方弹出</x-button>
      <template slot="content">
        弹出内容
      </template>
    </x-popover>
    <x-popover position="left">
      <x-button>左边弹出</x-button>
      <template slot="content">
        弹出内容
      </template>
    </x-popover>
    <x-popover position="right">
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

<script>
  import Button from '../../../src/components/Button'
  import Popover from '../../../src/components/Popover'

  export default {
    components: {'x-button':Button, 'x-popover':Popover},
    data () {
      return {
        content: `
             <x-popover>
      <x-button>上方弹出</x-button>
      <template slot="content">
        弹出内容
      </template>
    </x-popover>
    <x-popover position="bottom">
      <x-button>下方弹出</x-button>
      <template slot="content">
        弹出内容
      </template>
    </x-popover>
    <x-popover position="left">
      <x-button>左边弹出</x-button>
      <template slot="content">
        弹出内容
      </template>
    </x-popover>
    <x-popover position="right">
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
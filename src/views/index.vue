<template>
<div>
  <x-radio name="radio1" label="0" v-model="x">备用选项</x-radio>
  <x-radio name="radio1" label="1" v-model="x">备用选项</x-radio>
</div>
</template>

<script>
export default {
  name:'index',
  data(){
    return{
      x:'0'
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
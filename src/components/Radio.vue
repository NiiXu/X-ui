<template>
  <label class="my-radio" :class="{'is-checked': label === value}">
        <span class="my-radio__input">
            <span class="my-radio__inner"></span>
          <!--真实的radio，被隐藏，去掉.my-radio__original可以看到-->
            <input v-model="model" :name="name" :value="label" class="my-radio__original" type="radio" />
        </span>
    <span class="my-radio__label">
           <slot></slot>
      <!--如果没传内容，就用label的值-->
            <template v-if="!$slots.default">{{label}}</template>
        </span>
  </label>
</template>

<script>
export default {
  name: "MyRadio",
  computed:{
    model:{
      get(){
        return this.value
      },
      set(val){
        console.log(val)
        this.$emit('input', val)
      }
    },
  },
  props:{
    label:{ //接收label
      type:[String,Number,Boolean],
      default:''
    },
    value:null, // 接收v-model
    name:{ // 有可能传name
      type:String,
      default:''
    }


  }
}
</script>

<style lang="scss">
.my-radio {
  border: 1.5px solid #606266;
  border-radius: 8px;
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  padding: 12px 20px 10px 10px;
  vertical-align: center;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;

  .my-radio__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;

    .my-radio__inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
    }

    .my-radio__original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }

  .my-radio__label {
    font-size: 14px;
    padding-left: 10px;
  }
}

/*增加选中的样式*/
.is-checked {
  border: 1.5px solid #409eff;
  border-radius: 8px;

  .my-radio__input{
    .my-radio__inner{
      border-color:#409eff;
      background: #409eff;
      &:after{
        transform: translate(-50%,-50%) scale(1);
      }
    }
  }
  .my-radio__label{
    color:#409eff;
  }
}
</style>

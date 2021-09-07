// PBC 播放控件
<template>
  <div @click="changePlayState" class="PBC">
    <i v-if="!play" class="iconfont icon-bofang"></i>
    <i v-else class="iconfont icon-zanting"></i>
  </div>
</template>

<script>
export default {
  props: ['info', 'isPlay'],
  data () {
    return {
      play: this.isPlay
    }
  },
  methods: {
    changePlayState () {
      this.play = !this.play
      console.log('子组件中--控制组件点击后', this.play)
      this.$emit('func', this.play)
    }
  },
  created () {
    console.log('控制组件中刚进来的状态', this.play)
  }
}
</script>

<style lang="less" scoped>
  div.PBC {
    i.iconfont {
      font-size: 48px;
      color: #fff;
    }
  }
</style>

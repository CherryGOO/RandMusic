<template>
  <div class="progressBar">
    <van-progress inactive :percentage="percent" />
  </div>
</template>

<script>
export default {
  props: ['info', 'time', 'dTime'],
  data () {
    return {
      percent: 0
    }
  },
  methods: {
    getPercent () {
      this.percent = parseInt(this.dTime / this.time)
      console.log(this.percent)
    }
  },
  created () {
    console.log('进度条获得的总时间', this.time)
    this.getPercent()
  }
}
</script>

<style>

</style>

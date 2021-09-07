<template>
  <div class="home">
    <SongInfo :info='info'></SongInfo>
  </div>
</template>

<script>
// @ is an alias to /src
import { getInfo } from '../api/api/info'
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  data () {
    return {
      info: {}
    }
  },
  components: {
    // HelloWorld
    SongInfo: () => import('../components/songInfo/index.vue')
  },
  created () {
    getInfo({
      sort: '热歌榜',
      type: 'json'
    }).then(res => {
      console.log(res.data)
      this.info = res.data.info
      console.log(this.info)
    })
  }
}
</script>

<style lang="less" scoped>
  div.home {
    div.font {
      // font-size: 60px;
      font-size: 12px;
      color: green;
    }
    // font-size: 24px;
  }
</style>

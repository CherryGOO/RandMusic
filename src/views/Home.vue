<template>
  <div class="home">
    <SongInfo :info='info'></SongInfo>
<<<<<<< Updated upstream
=======
    <!-- <PBC :info='info' :isPlay='isPlay' @func='changePlayState'></PBC> -->
    <audio
      id="handleAudio"
      ref="audio"
      :src="info.mp3url"
      controls="controls"
      autoplay="autoplay"
    ></audio>
    <div class="refresh" @click="refresh">
      <i class="iconfont icon-shuaxin"></i>
      <p>换一首</p>
    </div>
    <!-- <ProgressBar :info='info' :time='totalTime' :dTime='goneTime'></ProgressBar> -->
    <button @click="toDemo">dome01</button>
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
=======
    // PBC: () => import('../components/operation/PBC.vue')
    // ProgressBar: () => import('../components/dispaly/progressBar.vue')
  },
  methods: {
    toDemo () {
      this.$router.push({
        path: '/demo'
      })
    },
    refresh () {
      this.getSongInfo()
    },
    onClick (name, title) {
      console.log(title)
      this.title = this.list[name].title
      console.log(this.title)
      this.getSongInfo()
    },
    play () {
      // this.isPlay = !this.isPlay
      if (this.isPlay) {
        this.$refs.audio.play()
      } else {
        this.$refs.audio.pause()
      }
      console.log(this.isPlay)
    },
    changePlayState (state) {
      this.isPlay = state
      console.log('父组件中接受到子组件传过来的状态后', this.isPlay)
      this.play()
    },
    updateTime () {
      this.goneTime = this.$refs.audio.currentTime
      // console.log(this.$refs.audio.currentTime)
    },
    getDuration () {
      // console.log(this.$refs.audio.duration)
      this.totalTime = this.$refs.audio.duration
    },
    getSongInfo () {
      getInfo({
        sort: this.title,
        type: 'json'
      }).then(res => {
        console.log(res.data)
        this.info = res.data.info
        console.log(this.info)
        // this.updateTime()
        // this.getDuration()
      })
    }
>>>>>>> Stashed changes
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

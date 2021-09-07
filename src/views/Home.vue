<template>
  <div class="home">
    <van-tabs @click="onClick" type="card">
      <van-tab v-for="item,index in list" :title="item.title" :key="index"></van-tab>
    </van-tabs>
    <SongInfo :info='info'></SongInfo>
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
  </div>
</template>

<script>
// @ is an alias to /src
import { getInfo } from '../api/api/info'
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  data () {
    return {
      info: {},
      isPlay: false,
      totalTime: 0,
      goneTime: 0,
      list: [
        {
          id: 1,
          title: '热歌榜'
        }, {
          id: 2,
          title: '新歌榜'
        }, {
          id: 1,
          title: '飙升榜'
        }, {
          id: 1,
          title: '原创榜'
        }
      ],
      title: '热歌榜'
    }
  },
  components: {
    // HelloWorld
    SongInfo: () => import('../components/songInfo/index.vue')
    // PBC: () => import('../components/operation/PBC.vue')
    // ProgressBar: () => import('../components/dispaly/progressBar.vue')
  },
  methods: {
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
  },
  created () {
    console.log('刚进来的状态', this.isPlay)
    this.getSongInfo()
  },
  mounted () {
    // var that = this
    // var audio = document.getElementById('handleAudio')
    // audio.addEventListener('playing', function () {
    //   that.isPlay = true
    //   console.log('父组件判断音乐是否在播放', that.isPlay)
    // })
    // audio.addEventListener('pause', function () {
    //   that.isPlay = false
    //   console.log('父组件判断音乐是否在播放', that.isPlay)
    // })
    // audio
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
    div.refresh {
      margin: 10px;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      i.iconfont {
        font-size: 24px;
        margin-right: 5px;
      }
      p {
        font-size: 14px;
      }
    }
    // font-size: 24px;
  }
</style>

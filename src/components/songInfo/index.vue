<template>
  <div class="songInfo">
    <div class="song-img">
      <img :src="info.imgurl" alt="">
    </div>
    <h3 class="song-name">{{info.name}}</h3>
    <h3 class="song-singer">{{info.auther}}</h3>
  </div>
</template>

<script>
export default {
  props: ['info']
}
</script>

<style lang="less" scoped>
  div.songInfo {
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    div.song-img {
      img {
        width: 70vw;
        height: 70vw;
        border-radius: 15px;
      }
      margin-bottom: 15px;
    }
    h3 {
      color: #fff;
      font-size: 16px;
      margin-bottom: 15px;
    }
  }
</style>

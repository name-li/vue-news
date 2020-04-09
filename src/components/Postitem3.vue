<template>
  <div class="video">
    <h4>{{data.title}}</h4>
    <div class="cover">
      <img :src="$axios.defaults.baseURL + data.cover[0].url" alt />
      <!-- 图片按钮遮罩 -->
      <div class="cover-layer">
        <span class="iconfont iconshipin"></span>
      </div>
    </div>
    <p>{{data.user.nickname}} {{data.comments_length}}跟帖</p>
  </div>
</template>

<script>
export default {
  props: ["data"]
};
</script>

<style scoped lang="less">
.video {
  padding: 20/360 * 100vw;
  border-bottom: 1px #eee solid;
  h4 {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    font-weight: normal;
  }
  .cover {
    width: 100%;
    margin: 20/360 * 100vw 0;
    height: 170/360 * 100vw;
    position: relative;
    img {
      display: block;

      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .cover-lanyer {
      width: 55/360 * 100vw;
      height: 55/360 * 100vw;
      background: rgba(0, 0, 0, 0.5);
      border-radius: 50%;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translateX(-27/360 * 100vw) translate(-27/360 * 100vw);
      display: flex;
      align-items: center;
      justify-content: center;
      .iconshipin {
        color: #fff;
        font-size: 32px;
      }
    }
  }
  p {
    color: #999;
    margin-top: 0%;
    margin-top: 5px;
  }
}
</style>
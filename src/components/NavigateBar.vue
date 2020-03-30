<template>
  <div class="person_centered">
    <!-- 返回 -->
    <span class="iconfont iconjiantou" @click="$router.back()"></span>
    <strong class="centered">{{title}}</strong>
    <!-- 回到首页 -->
    <span class="iconfont iconshouye" @click="$router.push('/')" v-if="shouyeShow"></span>
    <span v-else class="iconfont iconshouye" style="opacity:0"></span>
  </div>
</template>

<script>
export default {
  props: ["title", "shouyeShow"]
};
</script>

<style lang="less" scoped>
//  中心样式
.person_centered {
  display: flex;
  justify-content: space-between;
  padding: 0 20/360 * 100vw;
  line-height: 48/360 * 100vw;
  .iconshouye {
    font-size: 20px;
  }
}
</style>
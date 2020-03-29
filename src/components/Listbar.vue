<template>
  <div class="listbar">
    <router-link class="list_son" to="#">
      <span>{{label}}</span>
      <span class="tips">
      {{tips}}
        <span class="iconfont iconjiantou1"></span>
      </span>
    </router-link>
  </div>
</template>

<script>
export default {
    props:["label","tips"]
};
</script>

<style lang="less" scoped>
.listbar {
  padding-left: 20/360 * 100vw;

  flex-direction: column;
  line-height: 20/360 * 100vw;
  .list_son {
    display: flex;
    justify-content: space-between;
    height: 48/360 * 100vw;
    border-bottom: 1px solid#ccc;
    align-items: center;
    padding-right: 20/360 * 100vw;
    .tips {
      color: #ccc;
      .iconfont {
        margin-left: 5px;
      }
    }
  }
}
</style>
<template>
  <div>
    <NavigateBar title="精彩跟帖"></NavigateBar>
    <div class="comment-item" v-for="(item,index) in comments" :key="index">
      <p class="date">{{moment(item.create_date).format("YYYY-MM-DD hh:mm")}}</p>
      <div class="parent" v-if="item.parent">
        <span class="parent-user">回复：{{item.parent.user.nickname}}</span>
        <p class="parent-content">{{item.parent.content}}</p>
      </div>
      <p class="comment-content">{{item.content}}</p>
      <router-link to="#" class="link-post">
        <div>原文：{{item.post.title}}</div>
        <span class="iconfont iconjiantou1"></span>
      </router-link>
    </div>
  </div>
</template>

<script>
import NavigateBar from "@/components/NavigateBar";
import moment from "moment";
export default {
  data() {
    return {
      moment,
      comments: []
    };
  },
  components: {
    NavigateBar
  },
  mounted() {
    const localUserJson = JSON.parse(localStorage.getItem("userInfo"));
    this.$axios({
      url: "/user_comments",
      headers: {
        Authorization: localUserJson.token
      }
    }).then(res => {
      console.log(res);

      const { data } = res.data;
      this.comments = data;
    });
  }
};
</script>

<style lang="less" scoped>
.comment-item {
  padding: 20/360 * 100vw;
  border-bottom: 1px #eee solid;
  .date {
    color: #999;
  }
  .parent {
    padding: 10/260 * 100vw;
    background-color: #eee;
  }
  .comment-content {
    margin: 15/360 * 100vw;
  }
  .link-post {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #999;
    div {
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .span {
      margin-left: 5px;
    }
  }
}
</style>
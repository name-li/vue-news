<template>
  <div class="container">
    <!-- 个人中心 -->
    <NavigateBar title="个人中心" shouyeShow="true" />
    <router-link to="/edit-profile">
      <div class="header">
        <!-- 头像 -->
        <div class="avatar">
          <img :src="$axios.defaults.baseURL + userInfoData.head_img" alt />
        </div>

        <div class="profile">
          <div>
            <!-- 昵称 -->
            <span class="iconfont iconxingbienan" v-if="userInfoData.gender===1"></span>
            <span class="iconfont iconxingbienv" v-if="userInfoData.gender===0"></span>
            <span>{{ userInfoData.nickname }}</span>
          </div>
          <p>{{ moment(userInfoData.create_date).format("YYYY-MM-DD") }}</p>
        </div>
        <!-- 右侧箭头 -->
        <span class="arrow iconfont iconjiantou1"></span>
      </div>
    </router-link>

    <!-- 信息 -->
    <Listbar
      v-for="(item, index) in rows"
      :label="item.label"
      :tips="item.tips"
      :key="index"
      :path="item.path"
    />
    <Listbar label="退出" @click.native="handleClick()" />
  </div>
</template>

<script>
import Listbar from "@/components/Listbar";
import NavigateBar from "@/components/NavigateBar";
import moment from "moment";
export default {
  data() {
    return {
      rows: [
        { label: "我的关注", tips: "关注的用户", path: "/follow" },
        { label: "我的跟贴", tips: "跟帖/回复" },
        { label: "我的收藏", tips: "文章/视频" }
      ],
      //储存个人的详细信息
      userInfoData: {},
      //日期插件
      moment
    };
  },
  //注册组件,
  components: {
    Listbar,
    NavigateBar
  },
  mounted() {
    //组件加载完毕
    //获取本地储中的token和ID
    let userInfo = localStorage.getItem("userInfo");
    let userJson = JSON.parse(userInfo);
    console.log(userJson);
    this.$axios({
      url: "/user/" + userJson.user.id,
      //添加请求头信息
      headers: {
        Authorization: userJson.token
      }
    }).then(res => {
      console.log(res.data.data);

      // console.log("信息", this.userInfoData);

      let { data } = res.data;
      this.userInfoData = data;
    });
  },
  methods: {
    handleClick() {
      this.$dialog
        .confirm({
          title: "提示",
          message: "是否退出"
        })
        .then(() => {
          localStorage.removeItem("userInfo");
          this.$router.replace("/login");
        })
        .catch(() => {
          // on cancel
        });
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  //头部样式
  .header {
    padding: 20 / 360 * 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 5px #eee solid;
    .avatar {
      img {
        display: block;
        width: 70/360 * 100vw;
        height: 70/360 * 100vw;
        border-radius: 50%;
        object-fit: cover;
      }
    }
    .profile {
      flex: 1;
      padding-left: 20 / 360 * 100vw;
      line-height: 1.5;
      p {
        color: rgba(161, 161, 161);
      }
    }
  }
  //列表部分
}
</style>

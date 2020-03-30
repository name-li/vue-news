<template>
  <div class>
    <NavigateBar title="我的关注"></NavigateBar>
    <div class="follow" v-for="(item,index) in follow" :key="index">
      <div>
        <img :src="$axios.defaults.baseURL+item.head_img" alt />
      </div>
      <div class="title">
        <h3>{{item.nickname}}</h3>
        <span>{{ moment(item.create_date).format("YYYY-MM-DD") }}</span>
      </div>
      <div class="botton" @click="unFollow(item.id,index)">取消关注</div>
    </div>
  </div>
</template>

<script>
//引入组件
import NavigateBar from "@/components/NavigateBar";
import moment from "moment";
export default {
  data() {
    return {
      userJson: "",
      follow: [],
      moment
    };
  },
  components: {
    NavigateBar
  },
  mounted() {
    //获取本地储存中的ID和token
    let userInfo = JSON.parse(localStorage.getItem("userInfo"));
    console.log("token", userInfo);
    //把ID和token保存到本地以便复用
    this.userJson = userInfo;
    this.$axios({
      url: "/user_follows",
      headers: {
        Authorization: userInfo.token
      }
    }).then(res => {
      //请求的数据
      console.log(res);
      //解构出数据
      let { data } = res.data;
      this.follow = data;
      console.log("请求的数据", this.follow);
    });
  },
  methods: {
    //取消关注请求
    unFollow(id) {
      this.$dialog
        .confirm({
          title: "提示",
          message: "确定取消关注吗？"
        })
        .then(() => {
          $axios({
            url: "/user_unfollow/" + id,
            headers: {
              Authorization: this.userJson.token
            }.then(res => {
              //成功的的时候的提示
              this.$toast.success("取消关注成功");
              this.follow.splice(index, 1);
            })
          });
          // on confirm
        });
    }
  }
};
</script>

<style lang="less" scoped>
.follow {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20/360 * 100vw;
  border-bottom: 1px solid rgba(225, 225, 225);
  img {
    width: 70/360 * 100vw;
    height: 70/360 * 100vw;
    border-radius: 50%;
  }
  .title {
    flex: 1;
    margin-left: 10px;
    h3 {
      font-weight: normal;
    }
    span {
      color: rgba(151, 135, 136);
    }
  }
  .botton {
    background-color: rgba(225, 225, 225);
    padding: 7px;
    border-radius: 15px;
  }
}
</style>
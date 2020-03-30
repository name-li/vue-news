<template>
  <div>
    <NavigateBar title="编辑资料" />
    <div class="profile">
      <img :src="$axios.defaults.baseURL+userInfo.head_img" alt />
      <van-uploader :after-read="afterRead" class="uploader" />
    </div>
    <Listbar label="昵称" :tips="nickname"></Listbar>
    <Listbar label="密码" tips="火星"></Listbar>
    <Listbar label="昵称" tips="火星"></Listbar>
  </div>
</template>

<script>
// 引用组件
import NavigateBar from "@/components/NavigateBar";
import Listbar from "@/components/Listbar";
export default {
  data() {
    return {
      // 本地的用户数据
      userJson: {},
      //用户详情
      userInfo: {},
      //编辑弹窗的数据
      nickname: ""
    };
  },
  mounted() {
    let userInfo = JSON.parse(localStorage.getItem("userInfo"));
    // console.log(userInfo);
    //数据保存到data
    this.userJson = userInfo;
    //请求用户数据
    this.$axios({
      url: "/user/" + userInfo.user.id,
      //添加请求头
      headers: {
        Authorization: userInfo.token
      }
    }).then(res => {
      //   console.log(res);
      //   解构数据
      const { data } = res.data;
      //保存data
      this.userInfo = data;
      //   单独保存nickname给编辑的弹窗用
      this.nickname = data.nickname;
    });
  },
  methods: {
    //上传
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      //   console.log(file.file);
      let formData = new FormData();
      formData.append("file", file.file);
      //   图片上传请求
      this.$axios({
        url: "/upload",
        method: "post",
        headers: {
          Authorization: this.userJson.token
        },
        data: formData
      }).then(res => {
        console.log(res);
        console.log("数据", this.userInfo);
        let { url } = res.data.data;
        // 把数据赋值给data中
        this.userInfo.head_img = url;
        console.log(url);
        this.handleEdit({ head_img: url });
      });
    },
    //编辑头像方法
    handleEdit(data) {
      this.$axios({
        url: "/user_update/" + this.userInfo.id,
        headers: {
          Authorization: this.userJson.token
        },
        method: "post",
        data: data
      }).then(res => {
        console.log("编辑成功", res);
        this.$toast.success("修改头像成功");
      });
    }
  },
  components: {
    //注册组件
    NavigateBar,
    Listbar
  }
};
</script>

<style lang="less" scoped>
.profile {
  display: flex;
  padding: 20 / 360 * 100vw;
  justify-content: center;
  align-items: center;
  position: relative;

  img {
    width: 100 / 360 * 100vw;
    height: 100 / 360 * 100vw;
    border-radius: 50%;
  }

  .uploader {
    position: absolute;
    width: 100 / 360 * 100vw;
    height: 100 / 360 * 100vw;
    left: 50%;
    top: 50%;
    transform: translateX(-40 / 360 * 100vw) translateY(-40 / 360 * 100vw);
    opacity: 0;
  }
}
</style>
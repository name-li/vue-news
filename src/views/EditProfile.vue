<template>
  <div>
    <NavigateBar title="编辑资料" />
    <div class="profile">
      <img :src="$axios.defaults.baseURL+userInfo.head_img" alt />
      <van-uploader :after-read="afterRead" class="uploader" />
    </div>
    <Listbar label="昵称" :tips="userInfo.nickname" @click.native="show=true"></Listbar>
    <!-- 输入昵称弹窗框 -->
    <van-dialog v-model="show" title="昵称" show-cancel-button @confirm="handleShow">
      <van-field v-model="nickname" />
    </van-dialog>
    <!-- 密码 -->
    <Listbar label="密码" tips="******" @click.native="show1=true"></Listbar>
    <!-- 密码弹窗 -->
    <van-dialog v-model="show1" title="密码" show-cancel-button @confirm="passwordShow">
      <van-field v-model="password" type="password" />
    </van-dialog>
    <!-- 性别 -->
    <Listbar label="性别" :tips="['女','男'][userInfo.gender]" @click.native="show2=true"></Listbar>
    <!-- 性别弹窗 -->
    <van-action-sheet v-model="show2" :actions="actions" @select="onSelect" close-on-click-action />
  </div>
</template>

<script>
// 引用组件
import NavigateBar from "@/components/NavigateBar";
import Listbar from "@/components/Listbar";
export default {
  data() {
    return {
      // 本地的用户数据  v-model="userJson.user.nickname"
      userJson: {},
      //用户详情
      userInfo: {},
      //编辑弹窗的数据
      nickname: "",
      password: "",
      //输入昵称的弹窗
      show: false,
      //密码弹窗触发
      show1: false,
      show2: false,
      //男女选项
      actions: [
        { name: "男", value: 1 },
        { name: "女", value: 0 }
      ]
    };
  },
  mounted() {
    let userInfo = JSON.parse(localStorage.getItem("userInfo"));
    console.log("shuj", userInfo);
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
      // console.log(res);

      //   解构数据
      const { data } = res.data;
      //保存data
      this.userInfo = data;
      //   单独保存nickname给编辑的弹窗用
      this.nickname = data.nickname;
      console.log(this.userInfo);
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
        // console.log(res);
        console.log("数据", this.userInfo);
        let { url } = res.data.data;
        // 把数据赋值给data中
        this.userInfo.head_img = url;
        console.log(url);
        // 编辑头像传入要编辑的头像
        this.handleEdit({ head_img: url });
      });
    },
    //封装的请求函数方法
    handleEdit(data) {
      return this.$axios({
        url: "/user_update/" + this.userInfo.id,
        headers: {
          Authorization: this.userJson.token
        },
        method: "post",
        data: data
      }).then(res => {
        console.log("编辑成功", res);
        this.$toast.success("修改成功");
      });
    },
    //编辑昵称事件
    handleShow() {
      let request = this.handleEdit({
        nickname: this.nickname
      });
      //请求成功之后的请求
      request.then(() => {
        this.userInfo.nickname = this.nickname;
      });
    },
    //密码弹窗事件
    passwordShow() {
      this.handleEdit({ password: this.password });
    },
    //性别弹窗请求
    onSelect(item) {
      // 默认情况下点击选项时不会自动收起
      console.log("xinbie", item.value);

      // 可以通过 close-on-click-action 属性开启自动收起
      this.handleEdit({ gender: item.value });
      //渲染刷新
      this.userInfo.gender = item.value;
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
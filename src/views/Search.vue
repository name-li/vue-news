<template>
  <div>
    <!-- 头部 -->
    <div class="header">
      <span class="iconfont iconjiantou2" @click="$router.back()"></span>
      <div class="search-wrapper">
        <span class="iconfont iconsearch"></span>
        <input
          type="text"
          placeholder="请输入搜索关键字"
          autofocus
          v-model="value"
          @keyup.enter="handleSearch"
        />
      </div>
      <span @click="handleSearch">搜索</span>
    </div>
    <!-- 历史记录 -->
    <div class="record">
      <div class="title">
        <strong>历史记录</strong>
        <!-- 清除本地的搜索记录 -->
        <span class="iconfont iconicon-test" @click="handleClear"></span>
      </div>
      <div class="record-list">
        <!-- 历史记录列表 -->
        <span
          class="record-item"
          v-for="(item,index) in history"
          :key="index"
          @click="handleRecord(item)"
        >{{item}}</span>
      </div>
    </div>
    <!-- 搜索之后的结果 -->
    <div class="result-layer" v-if="showLayer">
      <div v-for="(item,index) in list" :key="index">
        <PostItem1 :data="item" v-if="item.type === 1 && item.cover.length < 3" />
        <!-- 大于等于3张图片 -->
        <PostItem2 :data="item" v-if="item.type === 1 && item.cover.length >= 3" />
        <!-- 视频 -->
        <PostItem3 :data="item" v-if="item.type === 2" />
      </div>
      <div class="empty" v-if="list.length===0">没有找到你想要的内容</div>
    </div>
  </div>
</template>

<script>
// 导入组件
//单张图片
import PostItem1 from "@/components/Postitem1";
import PostItem2 from "@/components/Postitem2";

import PostItem3 from "@/components/Postitem3";

export default {
  name: "search",
  data() {
    return {
      // 输入框的值
      value: "",
      //历史记录本地
      history: JSON.parse(localStorage.getItem("history")) || [],
      // 文章列表
      list: [],
      //浮层是否显示
      showLayer: false
    };
  },
  //绑定组件
  components: {
    PostItem1,
    PostItem2,
    PostItem3
  },
  watch: {
    // 监听输入框
    value() {
      if (this.value == "") {
        this.list = [];
        this.showLayer = false;
      }
    }
  },
  methods: {
    // 点击搜索按钮触发的函数
    handleSearch() {
      if (this.value == "") return;
      console.log("触发");

      this.history.unshift(this.value);
      //数组去重
      this.history = [...new Set(this.history)];
      //把历史记录添加到本地
      localStorage.setItem("history", JSON.stringify(this.history));
      this.getList();
    },
    //清除本地搜索记录
    handleClear() {
      this.history = [];
      localStorage.removeItem("history");
    },
    //点击历史记录列表的选项
    handleRecord(item) {
      this.value = item;
      this.getList();
    },
    getList() {
      this.$axios({
        url: "/post_search",
        params: {
          keyword: this.value
        }
      }).then(res => {
        this.showLayer = true;
        const { data } = res.data;
        this.list = data;
      });
    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        if (from.path === "/") {
          //隐藏浮层
          vm.showLayer = false;
          //清空关键字
          vm.value = "";
        }
      });
    }
  }
};
</script>

<style scoped lang="less">
//封装VM
@vms: 360 * 100vw;
// 头部
.header {
  padding: 10/360 * 100vw 20/360 * 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .search-wrapper {
    flex: 1;
    margin: 0 20/360 * 100vw;
    border: 1px #ccc solid;
    height: 38/360 * 100vw;
    padding: 0 10/360 * 100vw;
    display: flex;
    align-items: center;
    font-size: 14px;
    line-height: 0;
    border-radius: 50px;
    box-sizing: border-box;
    input {
      border: none;
      background: none;
      margin-left: 5px;
    }
  }
}
.record {
  margin-top: 10 / 360 * 100vw;
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20 / 360 * 100vw;
  }
  .record-list {
    padding: 0 10 / 360 * 100vw;
    display: flex;
    flex-wrap: wrap;
    .record-item {
      padding: 5px 10 / 360 * 100vw;
      border: 1px solid #ccc;
      font-size: 14px;
      margin: 5 / 360 * 100vw 10 / 360 * 100vw;
    }
  }
}
//浮层
.result-layer {
  position: absolute;
  top: 50 / 360 * 100vw;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #fff;
  overflow-y: auto;
  padding: 20 / 360 * 100vw;
  .result-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10 / 360 * 100vw;
    border-bottom: 1px solid #eee;
    p {
      float: 1;
      margin-right: 10px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    span {
      color: #fff;
    }
  }
}
.empty {
  text-align: center;
  color: #999;
  line-height: 2;
}
</style>
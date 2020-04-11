<template>
  <div class="home">
    <!-- 头部 -->
    <div class="header">
      <div class="iconfont iconnew"></div>
      <router-link to="/search" class="search">
        <span class="iconfont iconsearch"></span>
        <span>搜素新闻</span>
      </router-link>
      <router-link to="/personal">
        <span class="iconfont iconwode"></span>
      </router-link>
    </div>
    <!-- tab栏切换 -->
    <van-tabs v-model="active" swipeable sticky>
      <!-- 下拉滑动刷新 -->
      <!-- @scroll="handelScroll" -->
      <van-tab
        v-for="(item, index) in categories"
        :key="index"
        :title="item.name"
        v-if="item.is_top===1||item.name===`V`"
      >
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
          <!-- list组件 -->
          <!-- immediate-check 这个属性可以阻止list组件默认就加载一次 -->
          <van-list
            immediate-check
            v-model="item.loading"
            :finished="item.finished"
            finished-text="我也是有底线的"
            @load="onLoad"
          >
            <div v-for="(subItem,subindex) in item.list" :key="subindex">
              <Postitem1 :data="subItem" v-if="subItem.type===1&&subItem.cover.length<3"></Postitem1>
              <Postitem2 :data="subItem" v-if="subItem.type===1&&subItem.cover.length>=3"></Postitem2>
              <Postitem3 :data="subItem" v-if="subItem.type===2"></Postitem3>
            </div>
          </van-list>
        </van-pull-refresh>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Postitem1 from "@/components/Postitem1";
import Postitem2 from "@/components/Postitem2";
import Postitem3 from "@/components/Postitem3";
export default {
  data() {
    return {
      categories: [],
      active: 0,
      refreshing: false,
      // shi: ["你好", "事件"],
      // 本地token
      token: ""
      // finished: false
    };
  },
  watch: {
    active() {
      const arr = this.categories.filter(v => {
        return v.is_top || v.name === "V";
      });
      if (this.active === arr.length - 1) {
        this.$router.push("/category");
      }
      // console.log("监视");
      this.getList();
    }
  },
  components: {
    Postitem1,
    Postitem2,
    Postitem3
  },
  mounted() {
    const { token } = JSON.parse(localStorage.getItem("userInfo")) || {};
    const categories = JSON.parse(localStorage.getItem("categories"));
    this.token = token;
    if (categories) {
      if (
        (token && categories[0].name !== "关注") ||
        (!token && categories[0].name == "关注")
      ) {
        this.getData();
      } else {
        this.categories = categories;
        this.handleNav();
      }
    } else {
      this.getData();
    }
  },
  methods: {
    handleNav() {
      this.categories = this.categories.map(v => {
        v.list = [];
        v.loading = false;
        v.finished = false;
        v.scrollY = 0;
        v.isload = false;
        v.pageIndex = 1;
        return v;
      });
      this.getList();
    },
    getData() {
      const config = {
        url: "/category"
      };
      if (this.token) {
        config.headers = {
          Authorization: this.token
        };
      }
      this.$axios(config).then(res => {
        // console.log(res);
        const { data } = res.data;

        data.push({ name: "V" });
        this.categories = data;
        localStorage.setItem("categories", JSON.stringify(data));
        this.handleNav();
        // console.log(this.categories);
        // this.getList();
        // console.log("你好");
      });
    },
    getList() {
      const { id, pageIndex, finished, name, isload } = this.categories[
        this.active
      ];
      if (isload) return;
      this.categories[this.active].lsload = true;
      this.categories[this.active].pageIndex += 1;
      if (finished) return;
      const config = {
        url: "/post",
        params: {
          pageSize: 5,
          pageIndex,
          category: id
        }
      };

      if (name === "关注") {
        config.headers = {
          Authorization: this.token
        };
      }
      // 请求文章列表
      this.$axios(config).then(res => {
        const { data, total } = res.data;

        // console.log("文章列表", data);
        this.categories[this.active].list = [
          ...this.categories[this.active].list,
          ...data
        ];
        this.categories = [...this.categories];
        this.categories[this.active].loading = false;
        // console.log("本地数据", this.categories);
        if (this.categories[this.active].list.length === total) {
          this.categories[this.active].finished = true;
        }
        this.categories[this.active].isload = false;
        // console.log("索引", this.categories[this.active].pageIndex);
      });
    },
    onLoad() {
      this.getList();
      // console.log("请求下一页的数据");
    },
    onRefresh() {
      this.refreshing = false;
      // console.log("正在下拉刷新");
    }
  }
};
</script>

<style scoped lang="less">
.home {
  // -webkit-filter: grayscale(0.95);
  // 头部
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20/360 * 100vw;
    height: 50/360 * 100vw;
    background: #ff0000;
    .iconnew {
      font-size: 20px;
      transform: scale(3);
      position: relative;
      left: 20/360 * 100vw;
      color: #fff;
    }
    .search {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 5px;
      height: 32/360 * 100vw;
      margin: 0 50/360 * 100vw;
      border-radius: 50px;
      font-size: 13px;
      line-height: 1;
      vertical-align: middle;
      background: rgba(255, 255, 255, 0.5);
      span {
        color: #fff;
        margin-right: 5px;
      }
    }
    .iconwode {
      font-size: 20px;
    }
  }
  //重置vant组件的样式 必须要在添加/deep/
  /deep/.van-tabs__nav {
    background: #eee;
  }
  /deep/.van-tab {
    flex-basis: 15% !important;
  }
  /deep/.van-tab--active {
    border-bottom: #ff0000 1px solid !important;
  }
  /deep/.van-tabs__line {
    display: none;
  }
  /deep/.van-tab:nth-last-child(2) {
    position: absolute;
    width: 20px !important;
    right: 0;
    top: 0;
    box-sizing: unset;
    background: #eee;
  }
  /deep/.van-tabs__nav {
    position: static;
  }
  /deep/.van-tabs__wrap {
    padding-right: 20px;
  }
}
</style>
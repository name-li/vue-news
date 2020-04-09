<template>
  <div class="home">
    <!-- 头部 -->
    <div class="header">
      <div class="iconfont iconnew"></div>
      <router-link to="#" class="search">
        <span class="iconfont iconsearch"></span>
        <span>搜素新闻</span>
      </router-link>
      <router-link to="/personal">
        <span class="iconfont iconwode"></span>
      </router-link>
    </div>
    <!-- tab栏切换 -->
    <van-tabs v-model="active" swipeable sticky @scroll="handelScroll">
      <!-- 下拉滑动刷新 -->

      <van-tab v-for="(item, index) in categories" :key="index" :title="item.name">
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
          <!-- list组件 -->
          <!-- immediate-check 这个属性可以阻止list组件默认就加载一次 -->
          <van-list
            :immediate-check="false"
            v-model="item.loading"
            :finished="item.finished"
            finished-text="我也是有底线的"
            @load="onLoad"
          >
            <div v-for="(subItem,subindex) in categories[active].list" :key="subindex">
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
    // 监听active的改变
    active() {
      if (this.active === this.categories.length - 1) {
        this.$router.push("/栏目管理");
      }
      //栏目切换的时候重新请求文章数据
      this.getList();
      setTimeout(() => {
        // 页面滚动到当前栏目下的scrollY值
        window.scrollTo(0, this.categories[this.active].scrollY);
      }, 0);
    }
  },
  mounted() {
    //请求之前，判断有没有栏目数据
    // console.log(this.categories);

    const categories = JSON.parse(localStorage.getItem("categories"));
    //本地token
    const { token } = JSON.parse(localStorage.getItem("userInfo")) || {};
    if (categories) {
      //判断当前的登录状态
      if (
        (token && categories[this.active].name !== "关注") ||
        (!token && categories[this.active].name === "关注")
      ) {
        this.getCategories();
      } else {
        this.categories = categories;
        // 调用方法给每个栏目添加新属性
        this.handleCategories();
      }
    } else {
      this.getCategories();
    }
  },
  methods: {
    //请求栏目数据封装 如果有token就加上头信息
    getCategories() {
      const config = {
        url: "/category"
      };
      //判断token
      if (this.token) {
        config.headers = {
          Authorization: this.token
        };
      }
      // 请求栏目数据
      this.$axios(config).then(res => {
        const { data } = res.data;
        data.push({
          name: "∨"
        });
        //保存到data中
        this.categories = data;
        // 把栏目保存到本地中
        localStorage.setItem("categories", JSON.stringify(data));
        // 循环栏目添加数据
        this.handleCategories();
        // console.log(this.categories);
      });
    },
    // 循环栏目添加数据
    handleCategories() {
      this.categories = this.categories.map(v => {
        v.pageIndex = 1;
        v.list = [];
        v.loading = false;
        v.scrolY = 0;
        return v;
      });
      this.getList();
    },
    //请求文章列表
    getList() {
      const { id, pageIndex, finished, name } = this.categories[this.active];
      if (finished) return;
      const config = {
        url: "/post",
        params: {
          pageIndex,
          pageSize: 5,
          category: id
        }
      };
      if (name === "关注") {
        config.headers = {
          Authorization: this.token
        };
      }
      //请求
      this.$axios(config).then(res => {
        const { data, total } = res.data;
        // 合并新数组和当前的栏目的文章列表合并
        this.categories[this.active] = [
          ...this.categories[this.active].list,
          ...data
        ];
        // 用赋值的方式触发数据驱动
        this.categories = [...this.actegories];
        //告诉组件当前的请求加载完毕
        this.categories[this.active].loading = false;
        //判断当前是否加载完毕
        if (this.categories[this.active].list.length === total) {
          // 是的话吧加载完毕改为true
          thsi.categories[this.active].finished = true;
        }
      });
    },
    handelScroll(data) {
      // 因为栏目不管是从本地获取或者请求接口也好，都是需要时间，
      // 所以需要等this.categories有值时候才设置滚动条的高度s
      if (this.categories.length === 0) return;
      // scrollTop是滚动条的距离
      const { scrollTop } = data;
      // 把滚动条的高度赋值给当前栏目下的scrollY
      this.categories[this.active].scrollY = scrollTop;
    },
    onRefresh() {
      this.refreshing = false;
      console.log("正在下拉刷新");
    },
    // 请求下一的数据
    onLoad() {
      this.categories[this.active].pageIndex += 1;
      this.getList();
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
<template>
  <div>
    <!-- 组件调用 -->
    <NavigateBar title="栏目管理"></NavigateBar>

    <div class="category">
      <!-- 删除频道 -->
      <div class="category_edit">
        <p>点击删除以下频道</p>
        <div>
          <span
            v-for="(item,index) in categoriesDle"
            @click="handleDel(item,index)"
            :class="['关注','头条'].includes(item.name)?`active`:``"
            :key="index"
          >{{item.name}}</span>
        </div>
      </div>
      <!-- 添加频道 -->
      <div class="category_add">
        <p>点击添加以下频道</p>
        <div>
          <span
            v-for="(item,index) in categoriesAdd"
            @click="handleAdd(item,index)"
            :key="index"
          >{{item.name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavigateBar from "@/components/NavigateBar";
export default {
  data() {
    return {
      //本地栏目数据
      categories: [],

      // 显示删掉列表的数组
      categoriesDle: [],
      //显示添加列表的数组
      categoriesAdd: []
    };
  },
  components: {
    NavigateBar
  },
  mounted() {
    // 组件加载完毕后触发
    // 获取储存在本地的栏目
    this.categories = JSON.parse(localStorage.getItem("categories"));
    // console.log(this.categories);

    // 筛选删除了列表的栏目
    this.categoriesDle = this.categories.filter(v => {
      return v.is_top === 1;
    });
    //筛选添加列表的栏目
    this.categoriesAdd = this.categories.filter(v => {
      return v.is_top === 0;
    });
    console.log(this.categories[this.categories.length - 1]);
  },
  methods: {
    // 点击删除栏目
    handleDel(item, index) {
      //判断前两个点击无效
      if (["关注", "头条"].includes(item.name)) return;
      // 删除当前的那一项
      this.categoriesDle.splice(index, 1);
      // 把当前这一项改为0
      item.is_top = 0;
      //把改变的这一项放到添加列表上
      this.categoriesAdd.push(item);
    },
    handleAdd(item, index) {
      // 点击添加栏目
      // 从添加列表拿出点击的那一项
      this.categoriesAdd.splice(index, 1);
      // 点击的这一项变为零
      item.is_top = 1;
      //添加的顶部的删除列表中
      this.categoriesDle.push(item);
    }
  },
  destroyed() {
    //页面销毁触发的事件
    //this.categories[this.categories.length - 1 是把V添加到最后一位
    this.categories = [
      ...this.categoriesDle,
      ...this.categoriesAdd,
      this.categories[this.categories.length - 1]
    ];
    const str = JSON.stringify(this.categories);
    localStorage.setItem("categories", str);
  }
};
</script>

<style lang="less" scoped>
.category {
  padding: 0 20/360 * 100vw;
  .category_edit {
    div {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-top: 10px;
    }
    span {
      padding: 5px 10px;
      border: 1px solid #ccc;
      font-size: 16px;
      margin: 5/360 * 100vw 10/360 * 100vw;
    }
    p {
      font-size: 14px;
      color: #333;
    }
  }

  //点击添加频道
  .category_add {
    div {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-top: 10px;
      span {
        padding: 5px 10px;
        border: 1px solid #ccc;
        font-size: 16px;
        margin: 5/360 * 100vw 10/360 * 100vw;
      }
    }
  }
  .active {
    border: 1px red solid;
  }
}
</style>
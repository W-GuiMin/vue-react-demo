<template>
  <van-tabbar v-model="active" active-color="#00b38a" inactive-color="#c2cfcc" class="tab">
    <van-tabbar-item replace to="/main/home" class="tabbar__text">
      <van-icon name="wap-home-o" />职位
    </van-tabbar-item>
    <van-tabbar-item replace to="/main/search" class="tabbar__text">
      <van-icon name="search" />搜索
    </van-tabbar-item>
    <van-tabbar-item replace to="/main/mine" class="tabbar__text">
      <van-icon name="contact" />我的
    </van-tabbar-item>
  </van-tabbar>
</template>
<script>
import Vue from "vue";
import { Tabbar, TabbarItem, Icon } from "vant";
Vue.use(Tabbar)
  .use(TabbarItem)
  .use(Icon);
export default {
  data() {
    return {
      active: 0
    };
  },
  created() {
    this.active = this.$store.getters.getTabbar;
  }
};
</script>
<style lang="scss" scoped>
.tab {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 45px;
  line-height: 45px;
  border-top: 1px solid #e8e8e8;
  background-color: #f6f6f6;
  overflow: hidden;
  .tabbar__text {
    font-size: 1.6rem;
  }
}
</style>
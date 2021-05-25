<template>
  <div class="nav">
    <div class="nav-label">
      疫情实时数据
    </div>
    <div class="nav-list">
      <div class="nav-item" :class="menuIndex === index ? 'active' : ''" v-for="(item, index) in menu" :key="item.id" @click="toLink(item, index)">{{item.title}}</div>
    </div>
  </div>
</template>

<script>
import {ref, onMounted} from "vue";
import { useRoute, useRouter} from "vue-router"

export default {
  name: "Nav",
  setup() {

    const router = useRouter();

    /**
     * @note 导航栏的逻辑
     */

    const menu = ref([])
    const menuIndex = ref(0);

    menu.value = [
      {
        id: 1,
        title: "全球疫情",
        link: "/",
        type: 1
      }
    ];

    const toLink = (nav, index) => {
      menuIndex.value = index;
      nav.type === 1 ? router.push(nav.link) : location.href = nav.link;
    };

    return {
      menu,
      menuIndex,
      toLink
    }
  }
}
</script>

<style scoped>
.nav {
  width: 100%;
  height: 70px;
  padding: 0 8vw;
  box-sizing: border-box;
  background: #005dff;
  color: white;
  line-height: 70px;
  font-size: 20px;
  display: flex;
  overflow: hidden;
}
.nav-label {
  padding: 0 40px;
  margin-right: 20px;
  font-size: 25px;
  font-weight: bold;
  color: hsla(0, 0%, 100%, 0.9);
}
.nav-list{
  flex: 1;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
}
.nav-item {
  cursor: pointer;
  display: inline-block;
  color: hsla(0,0%,100%,.7);
  width: 10%;
}

.active {
  color: #ffffff;
  font-weight: bold;
}
</style>
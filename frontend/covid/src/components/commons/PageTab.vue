<template>
  <div style="background: #005dff;margin-top: -1px">
    <div class="pageTab">
      <div class="tab-item tab-active">国内疫情</div>
      <div class="tab-item">国外疫情</div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue"
import { useRoute, useRouter} from "vue-router"

export default {
  name: "PageTab",
  setup() {

    const router = useRouter();
    const tabIndex = ref(0);
  }
}
</script>

<style scoped>
.pageTab {
  width: 100%;
  height: 80px;
  background-color: #ddecff;
  border-radius: 35px 35px 0 0;
  display: flex;
  overflow: hidden;
}
.pageTab>div {
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  color: #445063;
  cursor: pointer;
}
.pageTab>div:nth-child(1) {
  border-radius: 35px 35px 0 0 ;
}
.pageTab>div:nth-child(2) {
  border-radius: 35px 35px 0 0;
}
.tab-active {
  background: white;
  color: #005dff !important;
}
</style>
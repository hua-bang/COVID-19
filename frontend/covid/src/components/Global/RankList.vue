<template>
  <div class="hb-rank-list">
    <div class="hb-header">
      <div class="hb-header-item" v-for="item in headers">
        {{item}}
      </div>
    </div>
    <div class="hb-content">
      <div class="hb-content-row" v-for="item in rankData">
        <div class="hb-content-row-item" >
          {{item.state ? item.state: "/"}}
        </div>
        <div class="hb-content-row-item" >
          {{item.country}}
        </div>
        <div class="hb-content-row-item" >
          {{item.records[0]}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RankList",
  props: {
    headers: {
      type: Array,
      default: ["state", "country", "records"]
    },
    rankData: {
      type: Array
    }
  }
}
</script>

<style scoped>
.hb-rank-list {
  width: 100%;
  box-shadow: 4px 4px 40px rgb(0 0 0 / 5%);
  border: 1px solid #dfe6ec;
  height: 300px;
  overflow-y: scroll;
  overflow-x: hidden;
}
.hb-header {
  width: 100%;
  height: 60px;
  display: flex;
  line-height: 60px;
}
.hb-header>div {
  flex: 1;
  text-align: center;
  font-weight: bolder;
}
.hb-content-row {
  display: flex;
  height: 60px;
  line-height: 60px;
}
.hb-content-row-item {
  flex: 1;
  text-align: center;
}
</style>
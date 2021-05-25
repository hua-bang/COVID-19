<template>
  <div class="container">
    <div class="global-confirmed">
      <div class="global-confirmed-chart">
        <div class="global-confirmed-chart-item">
          <Card>
            <h2>全球当日确诊列表</h2>
            <div class="rank_list">
              <RankList :rank-data="rankConfirmedData"></RankList>
            </div>
          </Card>
        </div>
        <div class="global-confirmed-chart-item">
          <Card>
            <h2>全球当日确诊图</h2>
            <div style="margin-top: 20px;width: 100%;height: 300px;">
              <Bar :x-arr="rankConfirmedXArr" :y-arr="rankConfirmedYArr" title="全球当日确诊图"></Bar>
            </div>
          </Card>
        </div>
      </div>
    </div>
    <div class="global-deaths">
      <div class="global-deaths-chart">
        <div class="global-deaths-chart-item">
          <Card>
            <h2>全球当日死亡列表</h2>
            <div class="rank_list">
              <RankList :rank-data="rankDeathsData"></RankList>
            </div>
          </Card>
        </div>
        <div class="global-deaths-chart-item">
          <Card>
            <h2>全球当日死亡图</h2>
            <div style="margin-top: 20px;width: 100%;height: 300px;">
              <Bar :x-arr="rankDeathsXArr" :y-arr="rankDeathsYArr" title="全球当日死亡图"></Bar>
            </div>
          </Card>
        </div>
      </div>
    </div>
    <div class="global-recovered">
      <div class="global-recovered-chart">
        <div class="global-recovered-chart-item">
          <Card>
            <h2>全球当日康复列表</h2>
            <div class="rank_list">
              <RankList :rank-data="rankRecoveredData"></RankList>
            </div>
          </Card>
        </div>
        <div class="global-recovered-chart-item">
          <Card>
            <h2>全球当日康复图</h2>
            <div style="margin-top: 20px;width: 100%;height: 300px;">
              <Bar :x-arr="rankRecoveredXArr" :y-arr="rankRecoveredYArr" title="全球当日康复图"></Bar>
            </div>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Card from "../components/commons/Card";
import {onMounted, ref} from "vue"
import RankList from "../components/Global/RankList";
import Bar from "../components/Global/Bar";
export default {
  name: "Global",
  components: {Bar, RankList, Card},
  setup() {
    const base_url = "http://localhost:8080/api";
    const rankConfirmedData = ref([]);
    const rankConfirmedXArr = ref([]);
    const rankConfirmedYArr = ref([]);

    const rankRecoveredData = ref([]);
    const rankRecoveredXArr = ref([]);
    const rankRecoveredYArr = ref([]);

    const rankDeathsData = ref([]);
    const rankDeathsXArr = ref([]);
    const rankDeathsYArr = ref([]);


    onMounted(() => {
      getConfirmedData();
      getDeathsData();
      getRecoveredData();
    })

    const getRecoveredData = () => {
      axios.get(`${base_url}/getData/TIME_SERIES_COVID19_RECOVERED_GLOBAL`).then(res => {
        let {data} = res.data;

        rankRecoveredData.value = data.sort((a, b) => {
          return b.records[0] - a.records[0];
        });

        rankRecoveredXArr.value = rankRecoveredData.value.map(v => `${v.state} | ${v.country}`);
        rankRecoveredYArr.value = rankRecoveredData.value.map(v => v.records[0]);

        console.log(rankConfirmedData);
      })
    }

    const getConfirmedData = () => {
      axios.get(`${base_url}/getData/TIME_SERIES_COVID19_CONFIRMED_GLOBAL`).then(res => {
        let {data} = res.data;

        rankConfirmedData.value = data.sort((a, b) => {
          return b.records[0] - a.records[0];
        });

        rankConfirmedXArr.value = rankConfirmedData.value.map(v => `${v.state} | ${v.country}`);
        rankConfirmedYArr.value = rankConfirmedData.value.map(v => v.records[0]);
      })
    }

    const getDeathsData = () => {
      axios.get(`${base_url}/getData/TIME_SERIES_COVID19_DEATHS_GLOBAL`).then(res => {
        let {data} = res.data;

        rankDeathsData.value = data.sort((a, b) => {
          return b.records[0] - a.records[0];
        });

        rankDeathsXArr.value = rankDeathsData.value.map(v => `${v.state} | ${v.country}`);
        rankDeathsYArr.value = rankDeathsData.value.map(v => v.records[0]);
      })
    }

    return {
      rankConfirmedXArr,
      rankConfirmedYArr,
      rankConfirmedData,
      rankRecoveredData,
      rankRecoveredXArr,
      rankRecoveredYArr,
      rankDeathsData,
      rankDeathsXArr,
      rankDeathsYArr
    }
  },
}
</script>

<style scoped>
.container {
  width: 100%;
  align-items: center;
}
.global-info{
  width: 100%;
  display: flex;
  background: #f0f2f5;
  justify-content: space-around;
}
.global-info-item {
  width: 28%;
}
.global-confirmed, .global-deaths, .global-recovered {
  width: 100%;
}
.global-confirmed-chart, .global-deaths-chart, .global-recovered-chart{
  margin-top: 20px;
  width: 100%;
  display: flex;
  overflow: hidden;
}

.global-confirmed-chart-item:nth-child(1), .global-deaths-chart-item:nth-child(1), .global-recovered-chart-item:nth-child(1){
  width: 30%;
  margin-left: 2%;
  margin-right: 1%;
}
.global-confirmed-chart-item:nth-child(2),.global-deaths-chart-item:nth-child(2), .global-recovered-chart-item:nth-child(2){
  width: 78%;
  margin-left: 1%;
  margin-right: 1%;
}
.rank_list {
  margin-top: 20px;
}
</style>
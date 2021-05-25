<template>
  <div ref="info" id="info">info</div>
</template>

<script>
import * as echarts from 'echarts';
import {onMounted, reactive} from "vue";

export default {
  name: "Info",
  setup() {
    let myChart;

    onMounted(() => {
      const info = document.querySelector("#info");
      renderChart(info);
    });

    const renderChart = (el) => {
      myChart = echarts.init(el);
      myChart.setOption({
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      });
    }
  }
}
</script>

<style scoped>
#info {
  height: 500px;
  width: 500px;
}
</style>
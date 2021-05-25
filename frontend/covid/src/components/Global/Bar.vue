<template>
  <div class="hb-bar" ref="area" id="area">
  </div>
</template>

<script>
import * as echarts from 'echarts';
import {onMounted, ref, watch, nextTick} from "vue";

export default {
  name: "Bar",
  props: {
    xArr: {
      type: Array,
      default: []
    },
    yArr: {
      type: Array,
      default: []
    },
    title: {
      type: String,
      default: "图表"
    }
  },
  setup(prop) {
    let myChart;
    const area = ref();

    const renderChart = (el) => {
      myChart = echarts.init(el);

      myChart.setOption({
        title: {
          text: prop.title
        },
        tooltip: {},
        xAxis: {
          data: prop.xArr
        },
        yAxis: {},
        dataZoom: [
          {
            show: true,
            start: 0,
            end: 100
          },
          {
            type: 'inside',
            start: 94,
            end: 100
          },
          {
            show: true,
            yAxisIndex: 0,
            filterMode: 'empty',
            width: 30,
            height: '80%',
            showDataShadow: false,
            left: '93%'
          }
        ],
        series: [{
          name: '当天新增量',
          type: 'bar',
          data: prop.yArr
        }]
      });
    };

    watch(() => [prop.xArr, prop.yArr], (newValue) => {
      nextTick(() => {
        renderChart(area.value);
      })
    })

    return {
      area
    }
  }
}
</script>

<style scoped>
.hb-bar {
  display: flex;
  margin: 0 auto;
  width: 120%;
  height: 100%;
}
</style>
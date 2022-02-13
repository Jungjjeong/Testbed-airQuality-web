<template>
  <div class="dashboard-editor-container">
    <github-corner class="github-corner" />

    <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
      <div class="component-back">
        <div class="component-title">온도</div>
      </div>
      <line-chart :chart-data="lineChartData" />

      <div class="component-back">
        <div class="component-title">습도</div>
      </div>
      <line-chart :chart-data="lineChartData2" />

      <div class="component-back">
        <div class="component-title">이산화탄소</div>
      </div>
      <line-chart :chart-data="lineChartData3" />

      <div class="component-back">
        <div class="component-title">미세먼지</div>
      </div>
      <line-chart :chart-data="lineChartData4" />

      <div class="component-back">
        <div class="component-title">초미세먼지</div>
      </div>
      <line-chart :chart-data="lineChartData5" />
    </el-row>
  </div>
</template>

<script>
import LineChart from './components/LineChart'

const lineChartData = {
  actualData: [20, 22, 22, 23, 19, 18, 18]
}
const lineChartData2 = {
  actualData: [50, 47, 46, 40, 44, 45, 43]
}
const lineChartData3 = {
  actualData: [650, 670, 700, 710, 700, 690, 700]
}
const lineChartData4 = {
  actualData: [40, 43, 44, 48, 45, 42, 40]
}
const lineChartData5 = {
  actualData: [30, 32, 35, 32, 30, 30, 29]
}
export default {
  name: 'DashboardAdmin',
  components: {
    LineChart
  },
  data() {
    return {
      lineChartData: lineChartData,
      lineChartData2: lineChartData2,
      lineChartData3: lineChartData3,
      lineChartData4: lineChartData4,
      lineChartData5: lineChartData5
    }
  },
  methods: {
    handleSetLineChartData(type) {
      this.lineChartData = lineChartData[type]
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;
}

.component-back {
    height: 30px;
    background: #F9F9F9;

    .component-title {
      font-size: 20px;
      font-weight: bold;
    }
}

@media (max-width:1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>

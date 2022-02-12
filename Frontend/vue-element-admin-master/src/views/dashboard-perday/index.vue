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

import axios from 'axios'

const lineChartData = {
  actualData: [22, 25, 23, 17, 18, 16, 17]
}
const lineChartData2 = {
  actualData: [52, 45, 39, 42, 45, 46, 44]
}
const lineChartData3 = {
  actualData: [650, 750, 703, 604, 600, 350, 400]
}
const lineChartData4 = {
  actualData: [40, 33, 55, 60, 53, 42, 32]
}
const lineChartData5 = {
  actualData: [30, 32, 37, 35, 34, 20, 25]
}

export default {
  name: 'DashboardAdmin',
  components: {
    LineChart
  },
  data() {
    return {
      lineChartData: lineChartData,
      lineChartData2:lineChartData2,
      lineChartData3:lineChartData3,
      lineChartData4,lineChartData4,
      lineChartData5,lineChartData5
    }
  },
  methods: {
    handleSetLineChartData(type) {
      this.lineChartData = lineChartData[type]
    }
  },
  methods: {
    send() {					// 전송 버튼 클릭 시
      axios({					// axios 통신 시작
        url: 'http://127.0.0.1:52273/',	// back 서버 주소
        method: 'POST',			// 전송방식을 post로 지정
        data: {				// body라고 생각하면 됨
          number: this.number		// key가 number이고 value가 입력받은 숫자(this.number)
        }
      })
        .then(res => {				// back 서버로부터 응답받으면
          alert(res.data.message)		// back 서버에서 보낸 message 출력
        })
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

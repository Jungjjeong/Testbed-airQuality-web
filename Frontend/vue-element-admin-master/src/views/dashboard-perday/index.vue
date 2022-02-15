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
  actualData: [12.2, 11.6, 11.2, 10.2, 9.8, 9.5, 8.9, 8.7, 15.2, 18.3, 20.2, 20.7, 20.5, 18.1, 20.7, 19.9, 18.4, 19.5, 20.1, 20.3, 19.2, 18.8, 15.7, 13.5]
}
const lineChartData2 = {
  actualData: [22, 21, 22, 22, 22, 23, 23, 22.5, 23, 26, 31.1, 32.5, 44.5, 44.7, 47.8, 46.9, 43.2, 48.5, 53, 51, 48, 47.2, 46.1, 42]
}
const lineChartData3 = {
  actualData: [352, 355, 351, 352, 354, 351, 352, 355, 352, 451, 550, 556, 578, 642, 644, 609, 512, 710, 800, 762, 700, 582, 479, 471]
}
const lineChartData4 = {
  actualData: [7.8, 8, 7.9, 8, 7.9, 7.9, 8, 7.5, 7.4, 8, 7.6, 7.6, 7.4, 7.5, 7.6, 7.6, 7.7, 7.5, 7.6, 7.5, 7.5, 7.7, 7.6, 7.5, 7.6, 7.5, 7.4, 7.5]
}
const lineChartData5 = {
  actualData: [7.7, 7.9, 7.8, 8, 7.9, 7.7, 7.8, 7.5, 7.4, 7.6, 7.6, 7.5, 7.4, 7.4, 7.5, 7.5, 7.7, 7.6, 7.6, 7.5, 7.5, 7.6, 7.6, 7.5, 7.5, 7.5, 7.5, 7.5]
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

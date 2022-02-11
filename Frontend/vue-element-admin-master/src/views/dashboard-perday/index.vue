<template>
  <div class="dashboard-editor-container">
    <github-corner class="github-corner" />

    <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
      <line-chart :chart-data="lineChartData" />
      <line-chart :chart-data="lineChartData" />
    </el-row>
  </div>
</template>

<script>
import LineChart from './components/LineChart'

import axios from 'axios'


const lineChartData = {
  newVisitis: {
    expectedData: [100, 120, 161, 134, 105, 160, 165],
    actualData: [120, 82, 91, 154, 162, 140, 145]
  },
  messages: {
    expectedData: [200, 192, 120, 144, 160, 130, 140],
    actualData: [180, 160, 151, 106, 145, 150, 130]
  },
  purchases: {
    expectedData: [80, 100, 121, 104, 105, 90, 100],
    actualData: [120, 90, 100, 138, 142, 130, 130]
  },
  shoppings: {
    expectedData: [130, 140, 141, 142, 145, 150, 160],
    actualData: [120, 82, 91, 154, 162, 140, 130]
  }
}

export default {
  name: 'DashboardAdmin',
  components: {
    LineChart
  },
  data() {
    return {
      lineChartData: lineChartData.newVisitis
    }
  },
  methods: {
    handleSetLineChartData(type) {
      this.lineChartData = lineChartData[type]
    }
  },
  methods: {
    send(){					// 전송 버튼 클릭 시
        axios({					// axios 통신 시작
          url: "http://127.0.0.1:52273/",	// back 서버 주소
          method: "POST",			// 전송방식을 post로 지정
          data: {				// body라고 생각하면 됨
            number: this.number,		// key가 number이고 value가 입력받은 숫자(this.number)
          },
        }).
        then(res => {				// back 서버로부터 응답받으면
            alert(res.data.message);		// back 서버에서 보낸 message 출력
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

@media (max-width:1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>

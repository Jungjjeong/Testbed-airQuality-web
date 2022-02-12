<template>
  <el-row :gutter="40" class="panel-group">
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="handleSetLineChartData('newVisitis')">
        <div class="card-panel-icon-wrapper icon-temperature">
          <svg-icon icon-class="temperature" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-text">
          온도
        </div>
        <div class="card-panel-description">
          <count-to :start-val="0" :end-val="temperature" :duration="1000" class="card-panel-num" />
          <div class="card-panel-unit">°C</div>
        </div>

      </div>
    </el-col>

    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="handleSetLineChartData('messages')">
        <div class="card-panel-icon-wrapper icon-message">
          <svg-icon icon-class="message" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-text">
          습도
        </div>
        <div class="card-panel-description">
          <count-to :start-val="0" :end-val="humidity" :duration="1000" class="card-panel-num" />
          <div class="card-panel-unit">%</div>
        </div>
      </div>
    </el-col>

    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="handleSetLineChartData('purchases')">
        <div class="card-panel-icon-wrapper icon-money">
          <svg-icon icon-class="money" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-text">
          이산화탄소
        </div>
        <div class="card-panel-description">
          <count-to :start-val="0" :end-val="CO2" :duration="1000" class="card-panel-num" />
          <div class="card-panel-unit">ppm</div>
        </div>
      </div>
    </el-col>

    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="handleSetLineChartData('shoppings')">
        <div class="card-panel-icon-wrapper icon-shopping">
          <svg-icon icon-class="shopping" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-text">
          미세먼지
        </div>
        <div class="card-panel-description">
          <count-to :start-val="0" :end-val="dust" :duration="1000" class="card-panel-num" />
          <div class="card-panel-unit">㎍/m³</div>
        </div>
      </div>
    </el-col>

    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-icon-wrapper icon-shopping">
          <svg-icon icon-class="shopping" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-text">
          초미세먼지
        </div>
        <div class="card-panel-description">
          <count-to :start-val="0" :end-val="mini_dust" :duration="1000" class="card-panel-num" />
          <div class="card-panel-unit">㎍/m³</div>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import CountTo from 'vue-count-to'
import axios from 'axios'
var curdata = []

export default {
  components: {
    CountTo
  },
  data() {
    return {
      number: '',
      temperature: '',
      humidity: '',
      CO2: '',
      dust: '',
      mini_dust: ''
    }
  },
  mounted() {
    setInterval(this.send, 1000)
  },
  methods: {
    handleSetLineChartData(type) {
      this.$emit('handleSetLineChartData', type)
    },
    send() {
      axios({
        url: 'http://localhost:52273/',
        method: 'POST',
        data: {
          number: ''
        }
      })
        .then(res => {
          curdata = res.data.message.split('\t')
          this.temperature = parseFloat(curdata[1])
          this.humidity = curdata[2]
          this.CO2 = curdata[3]
          this.dust = curdata[4]
          this.mini_dust = curdata[5]
          console.log(typeof (this.temperature))
        })
    }
  }

}
</script>

<style lang="scss" scoped>
.panel-group {
  margin-top: 18px;

  .card-panel-col {
    margin-bottom: 32px;
  }

  .card-panel {
    height: 108px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
    border-color: rgba(0, 0, 0, .05);

    &:hover {
      .card-panel-icon-wrapper {
        color: #fff;
      }

      .icon-temperature {
        background: #C74431;
      }

      .icon-message {
        background: #C74431;
      }

      .icon-money {
        background: #C74431;
      }

      .icon-shopping {
        background: #C74431
      }

      .icon-dust {
        background: #C74431
      }
    }

    .icon-people {
      color: #C74431;
    }

    .icon-message {
      color: #C74431;
    }

    .icon-money {
      color: #C74431;
    }

    .icon-shopping {
      color: #C74431;
    }

    .icon-dust {
      color: black;
    }

    .card-panel-icon-wrapper {
      float: left;
      margin: 14px 0 0 14px;
      padding: 16px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
    }

    .card-panel-icon {
      float: left;
      font-size: 48px;
    }

    .card-panel-text {
        float: left;
        font-weight: bold;
        margin-top: 45px;
        margin-left: 20px;
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 20px;
      }

    .card-panel-description {
      float: right;
      font-weight: bold;
      margin: 40px;
      margin-right: 30px;
      font-size: 30px;

      .card-panel-unit {
        float: right;
        margin: 10px;
        font-size: 15px;
      }
    }
  }
}

@media (max-width:550px) {
  .card-panel-description {
    display: none;
  }

  .card-panel-icon-wrapper {
    float: none !important;
    width: 100%;
    height: 100%;
    margin: 0 !important;

    .svg-icon {
      display: block;
      margin: 14px auto !important;
      float: none !important;
    }
  }
}
</style>

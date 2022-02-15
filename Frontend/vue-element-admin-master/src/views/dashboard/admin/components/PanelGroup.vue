<template>
  <el-row :gutter="20" class="panel-group">
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">      
      {{changeValue}}
      <div class="card-panel">
        <div class="card-panel-icon-wrapper icon-temperature">
          <img src="./svgIcons/temperature.svg" class="img-icon" />
        </div>
        <div class="card-panel-text">
          온도
        </div>
        <div class="card-panel-description">
          <count-to :start-val='before_tem[0]' :end-val="temperature" :duration="1000" class="card-panel-num" />
          <div class="card-panel-unit">°C</div>
        </div>
      </div>
    </el-col>

    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">      
      <div class="card-panel">
        <div class="card-panel-icon-wrapper icon-message">
          <img src="./svgIcons/humidity.svg" class="img-icon" />
        </div>
        <div class="card-panel-text">
          습도
        </div>
        <div class="card-panel-description">
          <count-to :start-val="before_hum[0]" :end-val="humidity" :duration="1000" class="card-panel-num" />
          <div class="card-panel-unit">%</div>
        </div>
      </div>
    </el-col>

    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">      
      <div class="card-panel">
        <div class="card-panel-icon-wrapper icon-green" v-if="this.CO2 <= 800">
          <img src="./svgIcons/co2.svg" class="img-icon" />
        </div>
        <div class="card-panel-icon-wrapper icon-yellow" v-if="800 < this.CO2 && this.CO2 <= 1000">
          <img src="./svgIcons/co2.svg" class="img-icon" />
        </div>
        <div class="card-panel-icon-wrapper icon-red" v-if="this.CO2 > 1000">
          <img src="./svgIcons/co2.svg" class="img-icon" />
        </div>
        <div class="card-panel-text">
          CO2
        </div>
        <div class="card-panel-description">
          <count-to :start-val="before_CO2[0]" :end-val="CO2" :duration="1000" class="card-panel-num" />
          <div class="card-panel-unit">ppm</div>
        </div>
      </div>
    </el-col>

    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">      
      <div class="card-panel">
        <div class="card-panel-icon-wrapper icon-green" v-if="this.dust <= 80">
          <img src="./svgIcons/dust.svg" class="img-icon" />
        </div>
        <div class="card-panel-icon-wrapper icon-yellow" v-if="80 < this.dust && this.dust <= 150">
          <img src="./svgIcons/dust.svg" class="img-icon" />
        </div>
        <div class="card-panel-icon-wrapper icon-red" v-if="this.dust > 150">
          <img src="./svgIcons/dust.svg" class="img-icon" />
        </div>
        <div class="card-panel-text">
          미세먼지
        </div>
        <div class="card-panel-description">
          <count-to :start-val="before_dust[0]" :end-val="dust" :duration="1000" class="card-panel-num" />
          <div class="card-panel-unit">㎍/m³</div>
        </div>
      </div>
    </el-col>

    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">   
      <div class="card-panel">
        <div class="card-panel-icon-wrapper icon-green" v-if="this.mini_dust <= 35">
          <img src="./svgIcons/mini-dust.svg" class="img-icon" />
        </div>
        <div class="card-panel-icon-wrapper icon-yellow" v-if="35 < this.mini_dust && this.mini_dust <= 75">
          <img src="./svgIcons/mini-dust.svg" class="img-icon" />
        </div>
        <div class="card-panel-icon-wrapper icon-red" v-if="this.mini_dust > 75">
          <img src="./svgIcons/mini-dust.svg" class="img-icon" />
        </div>
        <div class="card-panel-text">
          초미세먼지
        </div>
        <div class="card-panel-description">
          <count-to :start-val="before_mdust[0]" :end-val="mini_dust" :duration="1000" class="card-panel-num" />
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
      before_tem:[0,0],
      temperature: '',
      before_hum : [0,0],
      humidity: '',
      before_CO2: [0,0],
      CO2: '',
      before_dust:[0,0],
      dust: '',
      before_mdust:[0,0],
      mini_dust: '',
    }
  },
  mounted() {
    setInterval(this.send, 1000);
  },
  methods: {
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
          this.humidity = parseFloat(curdata[2])
          this.CO2 = parseFloat(curdata[3])
          this.dust = parseFloat(curdata[4])
          this.mini_dust = parseFloat(curdata[5])
          this.before_tem[0] = this.before_tem[1]
          this.before_hum[0] = this.before_hum[1]
          this.before_CO2[0] = this.before_CO2[1]
          this.before_dust[0] = this.before_dust[1]
          this.before_mdust[0] = this.before_mdust[1]
        })
    }
  },
  computed: {
    changeValue : function() {
      console.log('데이터 갱신')
      this.before_tem[1] = this.temperature
      this.before_hum[1] = this.humidity
      this.before_CO2[1] = this.CO2
      this.before_dust[1] = this.dust
      this.before_mdust[1] = this.mini_dust
    }
  }
}
  

</script>
<style>
.img-icon{
  width:50px;
}

</style>

<style lang="scss" scoped>
.panel-group {
  margin-top: 18px;

  .card-panel-col {
    margin-bottom: 32px;
  }

  .card-panel {
    height: 108px;
    cursor: pointer;
    font-size: 11px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
    border-color: rgba(0, 0, 0, .05);

    .card-panel-icon-wrapper {
      color: #fff;
    }

    .icon-green {
      background : green;
    }

    .icon-yellow {
      background : rgb(255, 217, 0);
    }

    .icon-red {
      background : #C74431;
    }

    .icon-temperature {
      background: #69C9D4;
    }

    .icon-message {
      background: #69C9D4;
    }

    .icon-money {
      background: #69C9D4;
    }

    .icon-shopping {
      background: #69C9D4
    }

    .icon-dust {
      background: #69C9D4
    }

    .card-panel-icon-wrapper {
      float: left;
      margin: 12px 0 0 12px;
      padding: 16px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
    }

    .card-panel-icon {
      float: left;
      font-size: 50px;
    }

    .card-panel-text {
        float: left;
        font-weight: bold;
        margin-top: 45px;
        margin-left: 20px;
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 25px;
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
        font-size: 25px;
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
      margin: 12px auto !important;
      float: none !important;
    }
  }
}
</style>

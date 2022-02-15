<template>
  <el-row :gutter="20" class="panel-group" id="row">
    <el-col class="card-panel-col" v-if="this.temperature < 18">      
      <div class="card-panel" ref="tempup">
        <div class="card-panel-icon-wrapper">
          <img src="./svgIcons/tep.png" class="alert-icon"/>
        </div>
        <div id="text" class="card-panel-text tem-text">
          온도가 너무 낮습니다. 온도를 높여주세요.
        </div>
        <div class="card-panel-description">
        </div>
      </div>
    </el-col>

    <el-col class="card-panel-col" v-if="this.temperature > 20">      
      <div class="card-panel" id="temp-down">
        <div class="card-panel-icon-wrapper">
          <img src="./svgIcons/tep.png" class="alert-icon"/>
        </div>
        <div id="text" class="card-panel-text tem-text">
          온도가 너무 높습니다. 온도를 낮춰주세요.
        </div>
        <div class="card-panel-description">
        </div>
      </div>
    </el-col>

    <el-col class="card-panel-col" v-if="this.dust > 80 || this.mini_dust > 35 || CO2 > 800">      
      <div class="card-panel" id="wind">
        <div class="card-panel-icon-wrapper">
          <img src="./svgIcons/wind 1.svg" class="alert-icon"/>
        </div>
        <div id="text" class="card-panel-text wind-text">
          환기가 필요합니다.
        </div>
        <div class="card-panel-description">
        </div>
      </div>
    </el-col>

    <el-col class="card-panel-col" v-if="this.humidity < 40">      
      <div class="card-panel" id="no-wind">
        <div class="card-panel-icon-wrapper">
          <img src="./svgIcons/clean-water.png" class="alert-icon"/>
        </div>
        <div id="text" class="card-panel-text wind-text">
          너무 건조합니다. 가습기를 틀어주세요.
        </div>
        <div class="card-panel-description">
        </div>
      </div>
    </el-col>

    <el-col class="card-panel-col" v-if="this.humidity > 60">      
      <div class="card-panel" id="enough-water">
        <div class="card-panel-icon-wrapper">
          <img src="./svgIcons/no-water.png" class="alert-icon"/>
        </div>
        <div id="text" class="card-panel-text wind-text">
          너무 습합니다. 제습기를 틀어주세요.
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
    name:'AlertGroup',
    components: {
        CountTo,
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
        }).then(res => {
            try{
                curdata = res.data.message.split('\t')
                this.temperature = parseFloat(curdata[1])
                this.humidity = curdata[2]
                this.CO2 = curdata[3]
                this.dust = curdata[4]
                this.mini_dust = curdata[5]}
            catch(e){
                console.log(e)
            }
            })
        }
    }
    }

</script>

<style>
 .alert-icon{
    width:60px;
}

</style>

<style lang="scss" scoped>
.panel-group {
    margin-top: 18px;

  .card-panel-col {
    margin-bottom: 32px;
  }

  .card-panel {
    height: 120px;
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
    .tem-text{
        color: #9E9292
    }

    .wind-text{
        color: #69C9D4;
    }

    .card-panel-text {
        float: left;
        font-weight: bold;
        margin-top: 52px;
        margin-left: 20px;
        line-height: 18px;
        font-size: 30px;
      }

    .card-panel-description {
      float: right;
      font-weight: bold;
      margin: 43px;
      margin-right: 30px;
      font-size: 34px;

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
  }
}
</style>

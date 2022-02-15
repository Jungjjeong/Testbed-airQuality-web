<template>
  <el-row class="control-group">
    <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8"><div class="grid-content bg-purple" />
      <div class="tempup-icon">
        <img src="./svgIcons/ctrl_heater.png" class="control-icon">
      </div>
      <button :style="{background : this.up_activeColor}" class="control-button" @click="up_turnOn">난방기 {{ up_onoff }}</button>
    </el-col>

    <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8"><div class="grid-content bg-purple-light" />
      <div class="tempup-icon">
        <img src="./svgIcons/ctrl_aircond.png" class="control-icon">
      </div>
      <button :style="{background : this.down_activeColor}" class="control-button" @click="down_turnOn">냉방기 {{ down_onoff }}</button>
    </el-col>

    <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8"><div class="grid-content bg-purple" />
      <div class="tempup-icon">
        <img src="./svgIcons/ctrl_fan.png" class="control-icon">
      </div>
      <button :style="{background : this.op_activeColor}" class="control-button"  @click="operate_vent">환풍기 {{ op_onoff }}</button>
    </el-col>
  </el-row>
</template>

<script>

export default {
    data() {
        return {
            up_onoff: "off",
            down_onoff: "off",
            op_onoff: "off",
            up_activeColor : '#9E9292',
            down_activeColor : '#9E9292',
            op_activeColor : '#9E9292'
        }
    },
    methods: {
        up_turnOn() {
            if(this.up_onoff === 'on'){
                this.up_onoff = 'off';
                this.up_activeColor = '#9E9292';
            }else{
                this.up_onoff = 'on';
                this.up_activeColor = '#84d7e0';
            }
        },
        down_turnOn() {
            if(this.down_onoff === 'on'){
                this.down_onoff = 'off';
                this.down_activeColor = '#9E9292';
            }else{
                this.down_onoff = 'on';
                this.down_activeColor = '#84d7e0';
            }
        },
        operate_vent() {
            if(this.op_onoff === 'on'){
                this.op_onoff = 'off';
                this.op_activeColor = '#9E9292';
            }else{
                this.op_onoff = 'on';
                this.op_activeColor = '#84d7e0';
            }
        }
    }
}

</script>

<style>
    .control-icon {
        width: 60%;
        margin-top: 50px;
        position: relative;
        left: 25%;
    }

    .control-button {
        width:60%;
        height:50px;
        font-size:25px;
        font-weight: bolder;
        margin-top: 20px;
        border:0;
        box-shadow: 1px 2px 15px rgba(0,0,0,0.1);
        position: relative;
        left: 25%;
    }
    .red .control-button{
        background: #9E9292;
    }
    .blue .control-button{
        background: #84d7e0;
    }


</style>

<style lang="scss" scoped>
</style>
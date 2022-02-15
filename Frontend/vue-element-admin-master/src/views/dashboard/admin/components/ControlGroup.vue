
<template>
    <el-row class="control-group">
        <el-col :span="8"><div class="grid-content bg-purple"></div>
            <div class="tempup-icon">
                <img src="./svgIcons/ctrl_heater.png" class="control-icon">
            </div>
            <button class="control-button" @click="up_turnOn">난방기 {{up_onoff}}</button>
        </el-col>

        <el-col :span="8"><div class="grid-content bg-purple-light"></div>
            <div class="tempup-icon">
                <img src="./svgIcons/ctrl_aircond.png" class="control-icon">
            </div>
            <button class="control-button" @click="down_turnOn">냉방기 {{down_onoff}}</button>
        </el-col>

        <el-col :span="8"><div class="grid-content bg-purple"></div>
            <div class="tempup-icon">
                <img src="./svgIcons/ctrl_fan.png" class="control-icon">
            </div>
            <button class="control-button" @click="operate_vent">환풍기 {{op_onoff}}</button>
        </el-col>
    </el-row>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default {
    data() {
        return {
            up_onoff: "off",
            down_onoff: "off",
            op_onoff: "off"
        }
    },
    methods: {
        up_turnOn() {
            if(this.up_onoff === 'on'){
                this.up_onoff = 'off';
                this.upbtn.backgroundColor="blue";
            }else{
                this.up_onoff = 'on';
                this.up = 'blue';
            }
        },
        down_turnOn() {
            if(this.down_onoff === 'on'){
                this.down_onoff = 'off';
            }else{
                this.down_onoff = 'on';
            }
        },
        operate_vent() {
            if(this.op_onoff === 'on'){
                this.op_onoff = 'off'
            }else{
                this.op_onoff = 'on'
            }
        }
    }
}

</script>

<style>
    .control-icon {
        width: 200px;
        margin-top: 50px;
        margin-left: 120px;
    }

    .control-button {
        width:200px;
        height:50px;
        font-size:25px;
        font-weight: bolder;
        margin-top: 20px;
        margin-left: 120px;
        /* background:#ddd; */
        border:0;
        box-shadow: 1px 2px 15px rgba(0,0,0,0.1);
    }


</style>

<style lang="scss" scoped>
</style>
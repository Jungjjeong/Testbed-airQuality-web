<template>
  <el-row :gutter="20" class="panel-group">
    <el-col class="card-panel-col">      
      <div class="card-panel">
        <div class="card-panel-icon-wrapper icon-temperature">
          <img src="./svgIcons/wind 1.svg" class="alert-icon"/>
        </div>
        <div id="text" class="card-panel-text">
          환기가 필요합니다.
        </div>
        <div class="card-panel-description">
        </div>
      </div>
    </el-col>
</el-row>
</template>


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

    .card-panel-text {
        color: #69C9D4;
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

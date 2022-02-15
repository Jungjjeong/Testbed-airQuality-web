<template>
  <div class="dashboard-editor-container">
    <panel-group @handleSetLineChartData="handleSetLineChartData" />
    <alert-group/>
    <control-group/>
  </div>
</template>

<script>
import PanelGroup from './components/PanelGroup'
import AlertGroup from './components/AlertGroup'
import ControlGroup from './components/ControlGroup'

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
    PanelGroup,
    AlertGroup,
    ControlGroup
  }
}
</script>

<style lang="scss" scoped>
.dashboard-editor-container {
  padding: 30px;
  background-color: rgb(240, 242, 245);
  position: relative;

}

@media (max-width:1024px) {
  .chart-wrapper {
    padding: 5px;
  }
}
</style>


<template>
  <form ref="form" @submit.prevent="send">
    <button type="submit">login</button>
  </form>
</template>
<script>
import axios from 'axios'


export default {
  data(){
    return {
      number: "",
    };
  },
  methods: {
    send(){
        axios({
          url: "http://localhost:52273/",
          method: "POST",
          data: {
            number: "",
          },
        }).
        then(res => {
            console.log(res.data.message);
        })
    }
  },
  mounted() {
    setInterval(this.send,5000);
  },
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
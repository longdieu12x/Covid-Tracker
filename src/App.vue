<template>
  <div id="app">
    <Header/>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>
<script>
import Header from './components/Header.vue';
export default {
  methods: {
  },
  components:{
    Header,
  }
}
</script>
<style>

</style>

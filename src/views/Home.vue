<template>
  <main v-if="!loading">
    <DataTitle :key="$route.fullPath" :text="title" :dataDate="dataDate"/>
    <DataBoxes :stats="stats"/>
    <CountrySelect v-on:changeTitle="updateTitle($event)" v-on:changeStats="updateStats($event)" :countries="countries" :title="title" :stats="stats"/>
    <!-- <div class="backGlobal flex justify-center align-center mb-20">
      <button class="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Global Value</button>
    </div> -->
  </main>
  <main class="flex flex-row align-center justify-center text-center" v-else>
    <div class="text-gray-500 text-3xl mt-10 mb-6">
      Fetching Data
    </div>
    <img :src="loadingImage" class="w-24 m-auto" alt="">
  </main>
</template>

<script>
import CountrySelect from '../components/CountrySelect.vue';
import DataBoxes from '../components/DataBoxes.vue';
import DataTitle from '../components/DataTitle.vue';
import { mapActions, mapMutations, mapGetters } from 'vuex';
export default {
  props: {
  },
  async created() {
    const data = await this.fetchCovidData();
    this.dataDate = data.Date;
    this.countries = data.Countries;
    this.loading = false;
    this.statsLoaded = data.Global;
    this.refreshStats(this.statsLoaded)
    this.stats = this.getStats();
  },

  data(){
    return {
      country: '',
      statsLoaded: '',
      loading: true,
      title: this.getTitle(),
      dataDate: '',
      stats: this.getStats(),
      countries: {},
      loadingImage: require('../assets/hourglass.gif'),
    }
  },
  methods: {
    updateTitle(updatedTitle){
      this.title = updatedTitle;
    },    
    updateStats(updatedStats){
      this.stats = updatedStats;
    },
    ...mapActions(['fetchCovidData']),
    ...mapMutations(['refreshCountry', 'refreshStats', 'refreshTitle']),
    ...mapGetters(['getCountry', 'getStats', 'getTitle']),
  }
  ,
  name: 'Home',
  components: {
    DataTitle,
    DataBoxes,
    CountrySelect,
  }
}
</script>

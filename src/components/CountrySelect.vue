<template>
    <div class="countrySelect">
        <select v-model="selected" ref="select" v-on:change="onChange" class="form-select mt-10 block w-full border p-3 rounded ">
            <option value="0">Select Country</option>
            <option v-for="country in countries" :key="country.ID">{{country.Country}}</option>
        </select>
    </div>
</template>
<script>
import {mapMutations, mapGetters} from 'vuex';
export default {
    name: 'CountrySelect',
    props: ['countries', 'stats', 'title'],
    data(){
        return {
            selected: 0,
        }
    },
    methods: {
        onChange(){
            let selectedValue = this.$refs.select.value;
            let country = this.countries.find(item => item.Country == selectedValue)
            this.refreshStats(country);
            this.stats = this.getStats();
            this.refreshTitle(country.Country);
            this.title = this.getTitle();
            this.$emit('changeTitle', this.title);
            this.$emit('changeStats', this.stats);
        },
        ...mapMutations(['refreshCountry','refreshTitle', 'refreshStats']),
        ...mapGetters(['getStats', 'getTitle']),
    },
}
</script>
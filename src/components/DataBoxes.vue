<template>
    <div class="dataBoxes container flex flex-wrap lg:flex-row md:flex-col">
        <div class="lg:w-2/4 sm:w-full mb-4">
            <div class="shadow-md bg-green-100 p-10 text-center rounded">
                <h3 class="text-3xl text-green-900 font-bold mb-4">Cases</h3>
                <div class="text-2xl mb-4 ">
                    <span class="font-bold">New:</span>
                    {{numberWithCommas(stats.NewConfirmed)}}
                </div>
                <div class="text-2xl mb-4">
                    <span class="font-bold">Total:</span>
                    {{numberWithCommas(stats.TotalConfirmed)}}
                </div>
            </div>
        </div>
        <br>
        <div class="lg:w-2/4 sm:w-full">
            <div class="shadow-md bg-green-100 p-10 text-center rounded">
                <h3 class="text-3xl text-green-900 font-bold mb-4">Deaths</h3>
                <div class="text-2xl mb-4">
                    <span class="font-bold">New:</span>
                    {{numberWithCommas(stats.NewDeaths)}}
                </div>
                <div class="text-2xl mb-4">
                    <span class="font-bold">Total:</span>
                    {{numberWithCommas(stats.TotalDeaths)}}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'DataBoxes',
    props: ['stats'],
    methods: {
        numberWithCommas(x){
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        }
    }
}
</script>
<template lang="html">
    <div>
        <portfolio-stock v-for="stock in stocks" :stock="stock"></portfolio-stock>
    </div>
</template>

<script>

    import Stock from './PortfolioStock.vue';
    import {mapGetters} from 'vuex'

    export default {

        components: {
            'portfolio-stock' : Stock,
        },

        computed: {
            ...mapGetters({
                stocks: 'stockPortfolio',
            })
        }
    }
</script>

<style lang="css">
</style>

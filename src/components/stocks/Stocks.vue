<template lang="html">
    <div>
        <available-stock v-for="stock in stocks" :stock="stock"></available-stock>
    </div>
</template>

<script>
    import Stock from './AvailableStock.vue';

    export default {

        components: {
            'available-stock' : Stock,
        },

        computed: {
            stocks() {
                return this.$store.getters.stocks;
            }
        }

    }
</script>

<style lang="css">
</style>

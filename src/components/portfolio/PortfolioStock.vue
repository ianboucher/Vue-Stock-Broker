<template lang="html">
    <div class="col-xs-6">
        <div class="panel panel-info">

            <div class="panel-heading">
                <h3 class="panel-title">
                    {{ stock.name }}
                    <small>(Price: {{ stock.price }} | Quantity: {{ stock.quantity }})</small>
                </h3>
            </div>

            <div class="panel-body">
                <div class="pull-left">
                    <input  type="number"
                            class="form-control"
                            placeholder="Quantity"
                            v-model="quantity"
                            :class="{ danger : insufficientStocks }">
                    </input>
                </div>

                <div class="pull-right">
                    <button class="btn btn-success"
                            @click="sellStock()"
                            :disabled="quantity <= 0 || insufficientStocks">
                            {{ insufficientStocks ? 'Add Stocks' : 'Sell' }}
                    </button>
                </div>
            </div>

        </div>
    </div>
</template>

<script>

    import {mapActions} from 'vuex';

    export default {
        props: ['stock'],

        data() {
            return {
                quantity: 0
            }
        },

        computed: {
            insufficientStocks() {
                return this.quantity > this.stock.quantity;
            }
        },

        methods: {
            // using mapActions here would be overkill due to only one action
            // but it is used here as an example. The store method is mapped to
            // a different name to avoid naming conflicts in this component
            ...mapActions({
                executeSale : 'sellStock'
            }),

            sellStock() {
                const order = {
                    stockId    : this.stock.id,
                    stockPrice : this.stock.price,
                    quantity   : Math.floor(this.quantity),
                };

                this.executeSale(order);
                this.quantity = 0;
            }
        },
    }

</script>

<style scoped lang="css">

    .danger {
        border: 1px solid red;
    }

</style>

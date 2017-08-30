<template lang="html">
    <div class="col-xs-6">
        <div class="panel panel-success">

            <div class="panel-heading">
                <h3 class="panel-title">
                    {{ stock.name }}
                    <small>(Price: {{ stock.price }})</small>
                </h3>
            </div>

            <div class="panel-body">
                <div class="pull-left">
                    <input  type="number"
                            class="form-control"
                            placeholder="Quantity"
                            v-model="quantity"
                            :class="{ danger : insufficientFunds }">
                    </input>
                </div>

                <div class="pull-right">
                    <button class="btn btn-success"
                            @click="buyStock()"
                            :disabled="quantity <= 0 || insufficientFunds">
                            {{ insufficientFunds ? 'Add Funds' : 'Buy' }}
                    </button>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        props: ['stock'],

        data() {
            return {
                quantity: 0,
            }
        },

        computed: {
            funds() {
                return this.$store.getters.funds;
            },

            insufficientFunds() {
                console.log(this.funds);
                return (this.quantity * this.stock.price) > this.funds;
            }
        },

        methods: {
          buyStock() {
              const order = {
                  stockId    : this.stock.id,
                  stockPrice : this.stock.price,
                  quantity   : Math.floor(this.quantity),
              }
              console.log(order);
              this.$store.dispatch('buyStock', order)
              this.quantity = 0;
          }
        }
    }
</script>

<style scoped lang="css">

    .danger {
        border: 1px solid red;
    }

</style>

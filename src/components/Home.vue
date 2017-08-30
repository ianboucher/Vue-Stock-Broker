<template lang="html">
    <div>
        <h1>Trade or View your Portfolio</h1>
        <h5>You may Save & Load your Data or click on 'End Day'to begin a new day of trading.</h5>
        <hr />
        <p>
            Your Funds: {{ funds | currency }}
        </p>
    </div>
</template>

<script>
    export default {

        computed: {
            funds() {
                // using simple version instead of mapGetters
                return this.$store.getters.funds;
            }
        }
    }
</script>

<style lang="css">
</style>

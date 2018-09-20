<template>
    <div>
        <p>This is the detail view</p>
        <p>Product id: {{ product.id }}</p>
        <p>Product name: {{ product.name }}</p>
        <p>Product description: {{ product.description }}</p>
    </div>
</template>

<script>
    export default {
        name: "pdetails",
        props: [
            'productId'
        ],
        data: function() {
            return {
                product: []
            }
        },
        created: function() {
            this.$http.get('/api/' + this.$route.params.productId).then(product => {this.product = product.body})
        }
    }
</script>

<style scoped>

</style>
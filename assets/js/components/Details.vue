<template>
    <div class="container">
        <div class="card product text-center">
            <div class="card-body">
                <h5 class="card-title">{{ product.name }}</h5>
                <p>Product description: {{ product.description }}</p>
            </div>
        </div>
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
<template>
    <div>
        <div v-for="product in products">
            <product :product="product"></product>
        </div>
    </div>
</template>

<script>

    import Product from "./Product";

    export default {
        components: {Product},
        name: "products",
        data: function() {
            return {
                products: []
            }
        },
        created: function() {
            this.$http.get('/api/products').then(products => {this.products = products.body})
        }
    }
</script>

<style scoped>

</style>
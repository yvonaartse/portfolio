<template>
    <div>
        <p>This is the product view</p>
        <p>Product id: {{ product.id }}</p>
        <p>Product name: {{ product.name }}</p>
        <router-link :to="{ name: 'pdetails', params: { productId: product.id }}">Details of {{product.name}}</router-link>
    </div>
</template>

<script>
    export default {
        name: "product",
        props: [
            'product'
        ]
    }
</script>

<style scoped>

</style>
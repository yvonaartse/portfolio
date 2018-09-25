<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Portfolio</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <menuitems></menuitems>
            </div>
        </nav>

        <div class="product-list">
            <transition-group
                    appear
                    name="staggered-fade"
                    tag="div"
                    class="row"
                    v-bind:css="false"
                    v-on:before-enter="beforeEnter"
                    v-on:enter="enter"
                >
                <div class ="col col-12 col-md-6" v-for="product in products" v-bind:key="product.id" v-bind:data-index="product.id">
                    <product :product="product"></product>

                </div>
            </transition-group>
        </div>
    </div>
</template>

<script>

    import Product from "./Product";
    import Menuitems from "./Menuitems";

    export default {
        components: {Product, Menuitems},
        name: "products",
        data: function() {
            return {
                products: []
            }
        },
        created: function() {
            this.$http.get('/api/products').then(products => {this.products = products.body})
        },
        methods: {
            delayedBy: function(el) {

                return 350
            },
            beforeEnter: function(el) {
                el.style.opacity = 0;
            },
            enter: function(el, done) {
                let delay = el.dataset.index * this.delayedBy();
                setTimeout(function() {
                    $(el).animate({ opacity: 1 }, 300, done);
                }, delay);
            },
        }
    }
</script>

<style scoped>

</style>
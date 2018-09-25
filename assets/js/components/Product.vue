<template>
    <div class="card product text-center">
        <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p>{{ product.intro }}</p>
            <transition name="slide-fade"
                        appear
                        v-bind:css="false"
                        v-on:before-enter="beforeEnter"
                        v-on:enter="enter">
                <router-link :to="{ name: 'pdetails', params: { productId: product.id }}" v-bind:data-index="product.id" class="btn btn-primary">Bekijk</router-link>
            </transition>
        </div>
    </div>
</template>


<script>
    export default {
        name: "product",
        props: [
            'product'
        ],
        methods: {
            delayedBy: function(el) {

                return 500
            },
            beforeEnter: function(el) {
                let styles = 'opacity:0;top:10px;';
                el.style= styles;
            },
            enter: function(el, done) {
                let delay = el.dataset.index * this.delayedBy();
                setTimeout(function() {

                    $(el).animate({ opacity: 1, top: 0}, 300, done);
                }, delay);
            },
        }
    }
</script>

<style scoped>

</style>
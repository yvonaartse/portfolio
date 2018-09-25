<template>
    <div class="container">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item" v-for="item in menuitems">
                <a class="nav-link" :href="item.url">{{item.title}}</a>
            </li>
        </ul>
    </div>
</template>

<script>

    export default {
        name: "menuitems",
        data: function() {
            return {
                menuitems: [{id:1, title:'Home', url: '/'},
                            {id: 2, title: 'Producten', url: '/products'}]
            }
        },
    }
</script>

<style scoped>

</style>
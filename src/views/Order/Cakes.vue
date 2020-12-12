<template>
<div id="cakes" class="container">
    <h2>Cakes</h2>
    <img v-if="isLoading" src="../../assets/cake-loading.gif" alt="cake loading gif" class="cakes-loading-gif">
    <ProductsList :details="cakes" />
</div>
</template>

<script>
import Service from '@/services/Service.js';
import ProductsList from '@/components/Products/ProductsList.vue';

export default {
    data() {
        return {
            cakes: []
        }
    },
    methods: {
        async loadAllCakes() {
            const response = await Service.getAll('cakes');
            this.cakes = response.data;
        }
    },
    created () {
        window.scrollTo(0,0);
        this.loadAllCakes();
    },
    components: {
        ProductsList,
    },
    computed: {
        isLoading() {
            return this.cakes[0] === undefined; 
        }
    },
}
</script>

<style scoped>
h2
{
    font-family: "Josefin Sans",sans-serif;
    font-weight: 600;
    margin: 50px 0;
    font-size: 50px;
    text-align: center;
}

.cakes-loading-gif
{
    max-width: 90%;
    margin: 0 auto;
}

</style>
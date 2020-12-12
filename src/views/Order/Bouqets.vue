<template>
<div id="cakes" class="container">
    <h2>Bouqets</h2>
    <img v-if="isLoading" src="../../assets/cake-loading.gif" alt="cake loading gif" class="cakes-loading-gif">
    <ProductsList :details="bouqets" />
</div>
</template>

<script>
import Service from '@/services/Service.js';
import ProductsList from '@/components/Products/ProductsList.vue';

export default {
    data() {
        return {
            bouqets: []
        }
    },
    methods: {
        async loadAllBouqets() {
            const response = await Service.getAll('bouqets');
            this.bouqets = response.data;
        }
    },
    created () {
        window.scrollTo(0,0);
        this.loadAllBouqets();
    },
    components: {
        ProductsList,
    },
    computed: {
        isLoading() {
            return this.bouqets[0] === undefined; 
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
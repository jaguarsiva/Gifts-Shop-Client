<template>
    <div class="list flex">
        <ProductCard v-for="(detail,ind) in details" :key="ind" :product="detail" />
    </div>
</template>

<script>
import ProductCard from '@/components/Products/ProductCard.vue';

export default {
    props: {
        details: {
            type: Array,
            required: true
        }
    },
    components: {
        ProductCard,
    },
}
</script>

<style scoped>
.list
{
    margin: 100px 0;
    width: 100%;
    justify-content: space-evenly;
}
</style>
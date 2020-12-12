<template>
    <div class="card">
        <div class="img-box">
            <img :src="product.image_url" :alt="product.name + 'picture'">
        </div>
        <div class="card-contents">
            <h3 class="name"> {{ product.name }} </h3>
            <h3 v-if="product.price" class="price"> Rs. {{ product.price }}/Kg.  </h3>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            product: {
                type: [Object,Array],
                required: true
            },
        },
    }
</script>

<style scoped>
.card
{
    max-width: 350px;
    margin-bottom: 75px;
    box-shadow: 0px 0px 6px rgb(0, 0, 0,0.2);
    border-radius: 6px;
    text-align: center;
    cursor: pointer;
    overflow: hidden;
}

.img-box { box-shadow: 0px 6px 12px rgb(0, 0, 0,0.05); }

.card img 
{ 
    width: 100%; 
    height: 300px; 
    margin: 0 auto 25px;
    transition: transform 1s ease;
}

.card:hover img { transform: scale(1.05,1.05); }

.card-contents { padding: 18px 24px; }

.name
{
    font-weight: 700;
    font-size: 26px;
    margin-bottom: 24px;
}

</style>
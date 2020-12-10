<template>
<div id="home">
    
    <div class="banner">
        <div class="container flex">
            <div class="banner-contents">
                <h1>Lovely gifts, on best prices.</h1>
                <p>
                    <span>Gifts for all kind, </span>
                    <span>Gifts for all ages, </span>
                    <span>Gifts for every occasion. </span> 
                    <span>We are more than just a gift shop.</span>    
                </p>
                <router-link :to="{name: 'order'}" class="btn fancy-btn banner-btn">SHOP NOW</router-link>
            </div>
            <img src="../assets/gift-box.png" alt="gift-box-picture" class="banner-image">
        </div>
    </div>

    <div class="cakes">
        <div class="container flex">
            <img src="../assets/cake.png" alt="cake-picture" class="cake-img">
            <div class="cakes-contents">
                <h2>Baked fresh for YOU!</h2>
                <p>Great taste, quality service and freshly baked Everyday. Enjoy the Joy of Best Cake.</p>             
                <router-link :to="{name: 'cakes'}" class="btn fancy-btn cakes-btn">Order A Cake</router-link>
            </div>
        </div>
    </div>

</div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

#home
{
    height: 200vh;
    position: relative;
}

.banner 
{
    background-color: #f0f0f2;
    position: relative;
}

.banner .container
{
    min-height: calc(100vh - 100px);
    justify-content: space-between;
}

.banner-contents
{
    width: 625px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.banner h1
{
    font-weight: 800;
    font-size: 75px;
    width: 520px;
    line-height: 1.1;
    color: #0B1C39;
}

.banner p
{
    font-weight: 400;
    font-size: 22px;
    margin: 30px 0 18px;
    line-height: 1.5;
    color: #4A4A4B;
}

.banner-btn
{
    background-image: linear-gradient(315deg, #CD051B 0%, #F20424 74%);
    border-radius: 3px;
    color: white;
    box-shadow: 3px 3px 6px rgb(0,0,0,0.15);
    width: 155px;
}

.banner-image
{
    width: 35%;
    margin: auto;
    transform-style: preserve-3d;
    animation: grow 2s linear infinite alternate;
    filter: drop-shadow(0px 0px 50px rgb(0,0,0,0.1));
}

@keyframes grow
{
    from { transform: scale3d(1,1,1) translateZ(100px); }
    to { transform: scale3d(1.05,1.05,1.05) translateZ(300px); }
}

@media (max-width: 1023px)
{
    .banner .container { min-height: auto; padding: 75px 15px; }

    .banner-contents { width: 100%; margin-bottom: 100px; text-align: center; }

    .banner h1 { width: 100%; font-size: 55px; }

    .banner p { width: 600px; margin: 30px auto 12px; }

    .banner-btn { margin: 0 auto; }
}

@media (max-width: 767px)
{
    .banner-image { display: none; }

    .banner p { width: 100%; }
}

@media (max-width: 425px)
{
    .banner .container { min-height: auto; padding: 25px 15px 75px; }

    .banner-contents { display: block; }

    .banner h1 { font-size: 42px; }
 
    .banner p { font-size: 16px; }
}

/* Cakes Section */

/* #EB7B14 , #F956B3 */
.cakes { margin: 100px 0; }

.cakes .flex { justify-content: space-between; align-items: center; }

.cake-img
{
    width: 500px;
    filter: drop-shadow(0px 0px 6px rgb(0,0,0,0.2));
}

.cakes-contents
{
    width: calc(100% - 600px);
}

.cakes h2
{
    font-weight: 800;
    font-size: 60px;
    line-height: 1.5;
}

.cakes p
{
    font-weight: 500;
    font-size: 20px;
    line-height: 1.5;
    margin: 24px 0 18px;
}

.cakes-btn
{
    background-color: #4A4A4B;
    color: white;
    text-transform: uppercase;
    font-size: 18px;
    border-radius: 3px;
    box-shadow: 3px 3px 6px rgb(0,0,0,0.15);
}

.cakes-btn::after { background-image: linear-gradient(315deg, #CD051B 0%, #F20424 74%); }

</style>
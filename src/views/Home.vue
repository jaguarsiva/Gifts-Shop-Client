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
                <h2> <span class="light-heading">Cakes</span> Baked fresh for YOU!</h2>
                <p>Great taste, quality service. Enjoy the Joy of Best Cake.</p>             
                <router-link :to="{name: 'cakes'}" class="btn fancy-btn cakes-btn">Order A Cake</router-link>
            </div>
        </div>
    </div>

    <div class="bouqets">
        <div class="shape">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
            </svg>
        </div>
        <div class="container flex">
            <div class="contents">
                <h2> <span class="light-heading">Bouqets</span> Smell the BLOSSOM!.</h2>
                <p>The florist to fulfill your bouquet needs.</p>             
                <router-link :to="{name: 'bouqets'}" class="btn fancy-btn bouqet-btn">Order An Bouqet</router-link>
            </div>
            <img src="../assets/bouqet.png" alt="bouqet-picture" class="bouqet-img">
        </div>
    </div>

</div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

#home { position: relative; }

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

    .banner-contents { margin-bottom: 0; }
}

@media (max-width: 425px)
{
    .banner .container { min-height: auto; padding: 50px 15px 75px; }

    .banner-contents { display: block; }

    .banner h1 { font-size: 42px; }
 
    .banner p { font-size: 16px; }
}

/* Sections */

.light-heading
{
    font-family: 'Bungee', cursive;
    text-transform: uppercase;
    font-size: 120px;
    position: absolute;
}

/* Cakes Section */

.cakes 
{ 
    padding: 150px 0; 
    position: relative; 
}

.cakes .flex, .bouqets .flex
{ 
    justify-content: space-between; 
    align-items: center;
}

.cake-img , .bouqet-img
{
    width: 500px;
    filter: drop-shadow(0px 0px 6px rgb(0,0,0,0.2));
}

.cakes-contents { width: calc(100% - 600px); }

.cakes h2 , .bouqets h2
{
    font-weight: 800;
    font-size: 60px;
    line-height: 1.5;
    color: #0B1C39;
}

.cakes h2 span 
{ 
    color: rgb(0,0,0,0.5);
    right: 50px; top: 50px;
}

.cakes p , .bouqets p
{
    font-weight: 500;
    font-size: 20px;
    line-height: 1.5;
    margin: 12px 0 18px;
    color: #0B1C39;
}

.cakes-btn , .bouqet-btn
{
    background-color: #4A4A4B;
    color: white;
    text-transform: uppercase;
    font-size: 18px;
    border-radius: 3px;
    box-shadow: 3px 3px 6px rgb(0,0,0,0.15);
}

.cakes-btn::after { background-image: linear-gradient(315deg, #CD051B 0%, #F20424 74%); }

@media (max-width: 1023px)
{
    .cake-img { margin: 0 auto 50px; }

    .cakes-contents { width: 100%; text-align: center; }

    .cakes { padding: 100px 0; }
}

@media (max-width: 767px)
{
    .cake-img { width: 90%; }

    .cakes h2 { font-size: 40px; }
}

/* Bouqets */

.bouqets 
{ 
    position: relative; 
    background-image: linear-gradient(315deg, #ffac81 0%, #ff928b 74%);
    padding: 150px 0 100px;
}

.bouqets .contents { padding-top: 100px; width: calc(100% - 500px);  }

.bouqet-img { margin-left: auto; }

.bouqet-btn
{ 
    background-color: #f0f0f2;
    color: black;
}

.bouqet-btn:hover { color: #ffffff; }

.bouqet-btn::after { background-color: #4A4A4B; }

.bouqet-img { filter: drop-shadow(0px 0px 18px rgb(0,0,0,0.25)); }

.bouqets h2 , .bouqets p { color: #ffffff; }

.bouqets h2 span 
{ 
    color: rgb(255, 255, 255,0.25);
    top: 100px; left: 50px;
}

.shape 
{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.shape svg 
{
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 150px;
}

.shape .shape-fill { fill: #FFFFFF; }

@media (max-width: 1023px)
{
    .bouqets { padding-top: 50px; } 

    .bouqets .contents { width: 100%; text-align: center; } 

    .light-heading { position: static; display: block; }

    .bouqet-img { margin: 50px auto 0; }
}

@media (max-width: 767px)
{
    .light-heading { font-size: 50px; }

    .bouqets h2 { font-size: 40px; }
}

@media (max-width: 600px)
{
    .bouqet-img { width: 90%; }
}

</style>
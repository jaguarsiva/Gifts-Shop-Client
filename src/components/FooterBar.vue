<template>
<footer>
    <div class="container">
        <div class="foo-top">
            <div class="products">
                <h4>Products</h4>
                <ul>
                    <li>
                        <router-link :to="{name: 'cakes'}">Cakes</router-link>
                    </li>
                    <li>
                        <router-link :to="{name: 'handmadegifts'}">Handmade Gifts</router-link>
                    </li>
                    <li>
                        <router-link :to="{name: 'bouqets'}">Bouqets</router-link>
                    </li>
                    <li>
                        <router-link :to="{name: 'lightings'}">Lightings</router-link>
                    </li>
                </ul>
            </div>
            <div class="services">
                <h4>Services</h4>
                <ul>
                    <li>
                        <router-link :to="{name: 'partyplans'}">Party Plans</router-link>
                    </li>
                    <li>
                        <router-link :to="{name: 'partyplaces'}">Party Places</router-link>
                    </li>
                    <li>
                        <router-link :to="{name: 'speakerspage'}">Speakers</router-link>
                    </li>
                </ul>
            </div>
            <div class="support">
                <h4>Support</h4>
                <ul>
                    <li>
                        <router-link :to="{name: 'about'}">About</router-link>
                    </li>
                    <li>
                        <router-link :to="{name: 'contact'}">Contact</router-link>
                    </li>
                    <li>
                        <router-link :to="{name: 'termsandconditions'}">Terms & Conditions</router-link>
                    </li>
                    <li>
                        <router-link :to="{name: 'privacypolicy'}">Privacy Policy</router-link>
                    </li>
                </ul>
            </div>
            <div class="logo">
                <router-link :to="{name: 'home'}">
                    <h2 class="brand"><i>G</i>ifts <span><i>S</i>hop</span> </h2>
                </router-link>
                <p>
                    Crafting your Curiosity and
                    <br />
                    giving you a Best Gift.
                </p>
            </div>
        </div>
        <div class="foo-bottom">
            <p class="copy-text">
                <span><i>&copy;</i> All rights reserved. </span>
                <span><a href="">Giftsshop.com</a> {{year}}</span>
            </p>
            <div class="social-links flex">
                <div class="nav-sprite facebook" alt="facebook-page-link"></div>
                <div class="nav-sprite instagram" alt="instagram-page-link"></div>
                <div class="nav-sprite twitter" alt="twitter-page-link"></div>
            </div>
        </div>
    </div>
</footer>
</template>

<script>
export default {
    computed: {
        year: () => new Date().getFullYear()
    },
}
</script>

<style scoped>

footer { margin-top: auto; padding: 50px 15px; }

.foo-top
{
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
}

h4
{
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 20px;
}

.foo-top li { margin: 12px 0; }

.foo-top a
{
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 300;
    color: #012f5f;
    font-size: 17px;
    display: block;
}

.foo-top a:hover, .foo-top a:focus { color: #FF3B3B; }

.brand
{
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 700;
    font-style: italic;
    font-size: 32px;
    cursor: context-menu;
    color: black;
}

.brand::selection, .brand i::selection, .brand span::selection 
{ background-color: transparent; }

.brand i { font-size: 38px; }

.brand span { color: #FF3B3B; }

.logo p
{
    margin-top: 15px;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 300;
    font-size: 20px;
    line-height: 1.25;
}

.foo-bottom
{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-end;
}

.copy-text 
{
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 300;
    color: #012f5f;
}

.copy-text a { color: black; }

.copy-text a:hover,.copy-text a:focus { color: #FF3B3B; text-decoration: underline; }

.copy-text i
{
    font-style: normal;
    font-weight: 800;
}

.social-links .nav-sprite
{
    margin: 0 12px;
    cursor: pointer;
    transition: transform 0.2s ease;
    background-size: 150.2px 150.2px;
    width: 35px; height: 35px;
}

.facebook { background-position: -111.6px -3.6px; }

.instagram { background-position: -111.6px -45.9px; }

.twitter { background-position: -3.6px -111.6px; }

.social-links .nav-sprite:hover 
{ 
    transform: scale(1.2,1.2);
    filter: drop-shadow(0px 3px 3px rgb(0,0,0,0.25));
}

@media (max-width: 767px)
{
    .logo { display: none; }
}

@media (max-width: 575px)
{
    .foo-bottom
    {
        flex-direction: column;
        align-items: center;
    }

    .copy-text { order: 2; margin-top: 30px; }

    .products, .services, .support h4 { display: none; }

    .foo-top { justify-content: center; text-align: center; }

    .foo-top li { margin: 24px 0; }
    
    .foo-top li:last-child { margin-bottom: 0; }
}

@media (max-width: 425px)
{
    .copy-text span { display: block; line-height: 2; text-align: center; }
}

</style>
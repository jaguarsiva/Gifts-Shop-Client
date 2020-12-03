<template>
<nav>
    <div class="container nav-contents">
        <router-link :to="{name: 'home'}">
            <h2 class="brand"><i>G</i>ifts <span><i>S</i>hop</span> </h2>
        </router-link>
        <ul class="nav-links" :class="{'opened' : btnClicked, 'menu-close': isMenuClosing}">
            <li>
                <router-link :to="{name: 'home'}" @click.native="handleLinkClick">Home</router-link>
            </li>
            <li>
                <router-link :to="{name: 'order'}" @click.native="handleLinkClick">Order</router-link>
            </li>
            <li>
                <router-link :to="{name: 'booking'}" @click.native="handleLinkClick">Booking</router-link>
            </li>
            <li>
                <router-link :to="{name: 'blogs'}" @click.native="handleLinkClick">Blog</router-link>
            </li>
            <li>
                <router-link :to="{name: 'about'}" @click.native="handleLinkClick">About</router-link>
            </li>
        </ul>
        <div class="controls flex">
            <div class="search-box flex" :class="{'focus': isSearchFocussed}">
                <input type="text" 
                    placeholder="Search..." class="search-bar" 
                    @focus="isSearchFocussed = true" @blur="isSearchFocussed = false">
                <div class="nav-sprite search-icon"></div>
            </div>
            <div 
                class="nav-sprite user"
                title="user-icon-for-knowing-order-and-booking-details"
                @click="openUserMenu"
            >
                <ul class="users-menu" :class="{'opened': isUserOpened}">
                    <li>
                        <router-link :to="{name: 'login'}">Login</router-link>
                    </li>
                    <li>
                        <router-link :to="{name: 'signup'}">Signup</router-link>
                    </li>
                    <li>
                        <router-link :to="{name: 'myorders'}">My Orders</router-link>
                    </li>
                    <li>
                        <router-link :to="{name: 'mybookings'}">My Bookings</router-link>
                    </li>
                </ul>
            </div>

        </div>
        <button class="hamburger" 
            @click="hamburgerClick" :class="{'is-active' : btnClicked}"
            ref="hamburger"
        >
            <div class="hamburger-inner"></div>
        </button>
    </div>
</nav>
</template>

<script>
export default {
    data() {
        return {
            isUserOpened: false,
            btnClicked: false,
            isMenuClosing: false,
            isSearchFocussed: false
        }
    },
    methods: {
        openUserMenu(event) {
            this.isUserOpened = !this.isUserOpened;
            document.body.addEventListener("click",this.closeUserMenu);
            event.stopPropagation();
        },
        closeUserMenu() {
            this.isUserOpened = false;
            document.body.removeEventListener("click",this.closeUserMenu);
        },
        hamburgerClick() {
            if( this.btnClicked )
            {
                this.isMenuClosing = true;
                setTimeout( () => {
                    this.btnClicked = false;
                    this.isMenuClosing = false;
                    document.querySelector('html').classList.add('no-scroll');
                }, 500);
            }
            else
            {
                this.btnClicked = true;
                document.querySelector('html').classList.remove('no-scroll');
            }
        },
        handleLinkClick(){
            if( this.btnClicked )
                this.$refs.hamburger.click();
        }
    }
}
</script>

<style scoped>

nav { box-shadow: 0px 0px 12px rgb(0, 0, 0,0.1); }

.nav-contents
{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100px;
    position: relative;
}

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

.nav-links { display: flex; }

.nav-links a
{
    height: 100px;
    display: flex;
    align-items: center;
    color: rgb(0, 0, 0,0.8);
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 700;
    padding: 0 20px;
}

.nav-links a:hover,.nav-links a:focus , .nav-links a.router-link-exact-active 
{ color: #FF3B3B; }

.controls, .search-box { align-items: center; }

.controls { width: 288px; justify-content: flex-end;}

.controls .nav-sprite 
{ 
    cursor: pointer;
    background-size: 96.6px 96.6px;
    width: 30px; height: 30px;
}

.search-box
{
    border-radius: 50px;
    border: 2px solid black;
    margin-right: 12px; 
    box-shadow: 2px 2px 2px rgb(0, 0, 0,0.1);
}

.search-box.focus 
{ 
    border: 2px solid #ff3b3b; 
    box-shadow: 3px 3px 3px rgb(0, 0, 0,0.15);
}

.search-bar::placeholder { font-weight: 300; }

.search-bar
{
    border-radius: 50px;
    outline: none;
    border: none;
    height: 35px;
    padding: 5px 12px;
    width: 150px;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 500;
    font-size: 16px;
    transition: width 0.3s ease;
}

.search-bar:focus { width: 200px; }

.nav-sprite.search-icon { background-position: -2.3px -2.3px; margin-right: 12px; }

.nav-sprite.search-icon:hover { background-position: -37px -2.3px; }

.nav-sprite.user { background-position: -2.3px -37px; filter: drop-shadow(2px 2px 2px rgb(0, 0, 0,0.1)); }

.nav-sprite.user:hover { background-position: -37px -37px; }

.users-menu { display: none; }

.users-menu a
{
    display: flex;
    align-items: center;
    width: 100%;
    padding: 12px 0;
    color: rgb(0, 0, 0,0.8);
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 700;
}

.users-menu a:hover { color: #FF3B3B; }

.users-menu.opened 
{ 
    display: block; 
    animation: open-users-menu 0.3s ease-out both;
    overflow: hidden;
    box-shadow: 0px 0px 6px rgb(0, 0, 0,0.2);
    position: absolute;
    background-color: #ffffff;
    min-width: 150px;
    height: 180px;
    padding: 12px 25px;
    border-radius: 6px;
}

@keyframes open-users-menu
{
    from { height: 0px; }
    to { height: 180px; }
}

@media (min-width: 1400px)
{
    .nav-sprite.user { position: relative; }

    .users-menu.opened { top: calc(100% + 25px); left: -60px; }
}

@media (min-width: 1024px) and (max-width: 1400px)
{
    .users-menu.opened { top: calc(100% - 12px); right: 15px; }
}

@media (min-width: 400px) and (max-width: 1023px)
{
    .nav-sprite.user { position: relative; }

    .users-menu.opened { top: calc(100% + 25px); left: -60px; }
}   

@media (max-width: 400px)
{
    .users-menu.opened { top: 100%; right: 15px; }
}

@media (min-width: 767px) 
{
    .hamburger { display: none; }
}

@media (max-width: 1023px)
{
    nav { margin-bottom: 65px; }

    .nav-contents , .nav-links a { height: 60px; }

    .controls
    { 
        position: absolute; 
        top: 100%; left: 0;
        width: 100%;
        padding: 12px 0; 
        justify-content: center;
    }
}

@media (max-width: 767px)
{
    .hamburger-inner 
    {
        position: relative; 
        background-color: #000000;
        transition: all 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19); 
    }

    .hamburger-inner , .hamburger-inner::before , .hamburger-inner::after
    {
        width: 30px;
        height: 4px;
    }

    .hamburger-inner::before, .hamburger-inner::after 
    { 
        content: "";
        position: absolute;
        left: 0;
        background-color: currentColor;
        transform: scaleX(0.75);
    }

    .hamburger-inner::before 
    { 
        top: -8px;
        transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in;
    }

    .hamburger-inner::after 
    { 
        bottom: -8px;
        transition: bottom 0.1s 0.25s ease-in, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
       
    .hamburger.is-active .hamburger-inner 
    {
        transform: rotate(225deg);
        transition-delay: 0.12s;
        transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); 
    }
    
    .hamburger.is-active .hamburger-inner::before 
    {
        top: 0;
        opacity: 0;
        transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out; 
    }
        
    .hamburger.is-active .hamburger-inner::after 
    {
        bottom: 0;
        transform: rotate(-90deg);
        transition: bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1); 
    }

    .nav-links { display: none; }

    .nav-links.opened 
    { 
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 60px; left: 0;
        z-index: 3;
        height: calc(100vh - 60px);
        width: 100vw;
        background-color: #ffffff;
        border-top: 1.5px solid rgb(0, 0, 0,0.25);
        box-shadow: 0px 3px 3px rgb(0, 0, 0,0.25);
        overflow: hidden;
        animation: menu-open 0.5s ease-in;
    }

    .menu-close { animation: menu-close 0.5s ease-out !important; }

    @keyframes menu-open
    {
        from { height: 0px; }
        to { height: calc(100vh - 60px); }
    }

    @keyframes menu-close
    {
        from { height: calc(100vh - 60px); }
        to { height: 0px; }
    }
}

</style>
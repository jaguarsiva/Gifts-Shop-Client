<template>
<div id="app">
	<Navbar></Navbar>
	<router-view />
	<NotificationList></NotificationList>
	<FooterBar></FooterBar>
</div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import FooterBar from '@/components/FooterBar.vue';
import NotificationList from '@/components/NotificationList.vue';
export default {
	components: {
		Navbar,
		FooterBar,
		NotificationList
	}
}
</script>

<style>

/* General Element Stylings */

*, *::after, *::before
{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Josefin Sans', sans-serif;
}

html { overflow-x: hidden; }

a { text-decoration: none; outline: none; }

h1, h2, h3, h4, h5, h6 { font-weight: normal; }

ul { list-style-type: none; }

input { border: none; outline: none; }

.btn
{
	border: none;
	outline: none;
	background: transparent;
	display: inline-block;
	cursor: pointer;
	position: relative;
	z-index: 1;
}

.btn::after
{
	content: "";
	position: absolute;
	top: 0; left: 0;
	height: 100%; width: 100%;
	background-color: rgb(0, 0, 0,0.25);
	z-index: -1;
	transform: scaleX(0);
	transform-origin: left;
	border-radius: inherit;
	transition: transform 0.3s ease-in;
}

.btn:hover::after, .btn:focus::after 
{ transform: scaleX(1); }

/* Common Stylings */

html.no-scroll { overflow: hidden; }

.container
{
	max-width: 1330px;
	padding: 0 15px;
	margin: 0 auto;
}

.flex
{
	display: flex;
	flex-wrap: wrap;
}

.nav-sprite
{
	background-image: url("./assets/navsprite.png");
	background-repeat: no-repeat;
}

/* Local Stylings */
#app
{
	display: flex;
	flex-direction: column;
	min-height: 100vh;
}

</style>
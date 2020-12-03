<template>
<div id="app">
	<Navbar></Navbar>
	<router-view />
	<FooterBar></FooterBar>
</div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import FooterBar from '@/components/FooterBar.vue';
export default {
	components: {
		Navbar,
		FooterBar
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

button, .btn 
{
	border: none;
	outline: none;
	background: transparent;
	display: inline-block;
}

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
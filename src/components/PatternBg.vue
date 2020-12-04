<template>
<div class="pattern">
    <h2> <slot></slot> </h2>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.pattern
{
    width: 100vw;
    max-height: calc(100vh - 100px);
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url('../assets/bg-pattern.png');
    background-repeat: no-repeat;
    background-size: cover;
}

h2
{
    font-family: "Josefin Sans",sans-serif;
    font-weight: 600;
    margin: 50px 0;
    font-size: 70px;
}

@media (min-width: 1024px)
{
    .pattern { height: 600px; }
}

@media (max-width: 1023px)
{
    .pattern { height: 500px; }
}

@media (max-width: 767px)
{
    .pattern { height: 400px; }
}


</style>
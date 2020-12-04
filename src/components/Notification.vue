<template>
    <p :class="details.type" ref="notmsg"> {{ details.msg }} 
        <span @click="closeNtfc"></span> 
    </p>
</template>

<script>
    export default {
        props: {
            details: {
                type: Object,
                required: true
            }
        },
        methods: {
            closeNtfc() {
                this.$refs.notmsg.classList.add('fade-out');
                clearTimeout(this.timer);
                setTimeout( 
                    () => this.$store.commit('POP_NOTIFICATION',this.details)
                , 475);
            }
        },
        created () {
            this.timer = setTimeout( () => {
                this.$refs.notmsg.classList.add('fade-out');
                setTimeout( 
                    () => this.$store.commit('POP_NOTIFICATION',this.index)
                , 475);
                clearTimeout(this.timer);
            } , 3000 );
        },
        data() {
            return {
                timer: null
            }
        },
    }
</script>

<style scoped>

p
{
    width: 350px;
    padding: 12px 30px 12px 12px;
    cursor: context-menu;
    border-radius: 6px;
    box-shadow: 2px 2px 12px rgb(0, 0, 0,0.2);
    font-size: 20px;
    line-height: 1.5;
    font-weight: 600;
    animation: open 0.5s ease;
    color: white;
    margin: 12px 0;
    position: relative;
}

@keyframes open
{
    from { transform: translateX(300px); }
}

p span { position: absolute; top: 12px; right: 12px; }

p span::after , p span::before
{ 
    content: '';
    position: absolute; 
    top: 50%; right: 12px;
    height: 25px; width: 5px;
    background-color: #ffffff;
}

p span::after { transform: rotate(45deg); }

p span::before { transform: rotate(-45deg); }

p.error { background-color: #F66359; }

p.success { background-color: #6BBD6E; }

p.info { background-color: #47A8F5; }

.fade-out { animation: fade-out 0.5s ease; }

@keyframes fade-out { to { opacity: 0; transform: translateX(300px); } }

@media (max-width: 400px)
{
    p { width: 90%vw; }
}

</style>
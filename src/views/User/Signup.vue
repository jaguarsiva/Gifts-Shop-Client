<template>
<div id="signup">
    <PatternBg>Signup</PatternBg>

    <div class="container flex">
        <div class="login-box">
            <h4> Already registered? </h4>
            <router-link :to="{name: 'login'}" class="btn login-btn">
                Login here
            </router-link>
        </div>
        <form class="signup-form" @submit.prevent="signup">
            <h3>Welcome!<br /> Please Sign up now</h3>
            <input type="text" placeholder="Username" id="user-name" v-model="username" required>
            <input type="password" placeholder="Password" id="pass-word" v-model="password" required>
            <button type="submit" class="btn signup-btn">Register</button>
        </form>
    </div>
</div>
</template>

<script>
import Service from '@/services/Service.js';
import PatternBg from '@/components/PatternBg.vue';

export default {
    data() {
        return {
            username: '',
            password: ''
        }
    },
    components: {
        PatternBg,
    },
    methods: {
        async signup() {
            const userObj = {
                id: await this.$store.dispatch('getUserID'),
                username: this.username,
                password: this.password,
                cart: [],
                orders: [],
                bookings: []
            };
            const {status} = await Service.registerUser(userObj);
            if( status === 201 )
            {
                this.$router.push({name: 'login'});
                this.$store.commit('PUSH_NOTIFICATION',{
                    type: 'success',
                    msg: 'Registered!. Login to continue'
                });
            }
            else
                this.$store.commit('PUSH_NOTIFICATION',{
                    type: 'error',
                    msg: 'Error! Try Again.'
                });
        }
    },
}
</script>

<style scoped>
.flex
{
    margin: 75px auto;
    justify-content: space-around;
    align-items: center;
}

.signup-form 
{
    width: 40%;
    display: flex;
    flex-direction: column;
}

.signup-form h3
{
    font-weight: 600;
    font-size: 30px;
    line-height: 1.25;
    margin-bottom: 35px;
}

#user-name, #pass-word
{
    margin-bottom: 18px;
    padding: 15px 18px;
    font-weight: 500;
    font-size: 18px;
    border: 2px solid transparent;
    box-shadow: 0px 0px 6px rgb(0, 0, 0,0.25);
    border-radius: 6px;
}

#user-name::placeholder, #pass-word::placeholder { font-weight: 400;  color: #aaaaaa; }

#user-name:focus, #pass-word:focus
{ border-color: #FFAC81; box-shadow: none; }

.check-box input { margin-right: 6px; }

.signup-btn
{
    margin: 18px 0;
    background-image: linear-gradient(315deg, #ffac81 0%, #ff928b 74%);
    color: white;
    font-size: 24px;
    padding: 15px 0;
    border-radius: 3px;
    box-shadow: 0px 0px 9px rgb(0, 0, 0,0.2); 
}

.login-box
{
    width: 40%;
    background-image: linear-gradient(315deg, #ffac81 0%, #ff928b 74%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    box-shadow: 0px 0px 12px rgb(0, 0, 0,0.2);
    height: 500px;
}

.login-box h4
{
    font-weight: 700;
    font-size: 30px;
    margin-bottom: 35px;
}

.login-btn
{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px 30px;
    background-color: #ffffff;
    border-radius: 6px;
    color: black;
    font-weight: 600;
    font-size: 18px;
    box-shadow: 0px 0px 12px rgb(0, 0, 0,0.2);
}

.login-btn::after { background-color: #5aa469; }

@media (max-width: 1023px)
{
    .signup-form , .login-box { width: 45%; }
}

@media (max-width: 767px)
{
    .signup-form , .login-box { width: 100%; max-width: 450px; }

    .signup-form h3{ text-align: center; }

    .login-box { height: 250px; margin-bottom: 100px; }
}

</style>
<template>
<div id="login">
    <PatternBg>Login</PatternBg>
    <div class="container flex">
        <form class="login-form" @submit.prevent="login">
            <h3>Welcome Back!<br /> Please Sign in now</h3>
            <input type="text" placeholder="Username" id="user-name" v-model="username" required>
            <input type="password" placeholder="Password" id="pass-word" v-model="password" required>
            <div class="check-box">
                <input type="checkbox" id="remember-me">
                <label for="remember-me">Remember me</label>
            </div>
            <button type="submit" class="btn login-btn">Login</button>
            <div class="forget-pass">
                <p>Forget Password?</p>
            </div>
        </form>
        <div class="register-box">
            <h4> New to our Shop? </h4>
            <router-link :to="{name: 'signup'}" class="btn signup-btn">
                Create an Account
            </router-link>
        </div>

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
        async login() {
            const response = await Service.loginUser(this.username, this.password);
            if( response.data.length !== 0)
            {
                this.$router.push({name: 'home'});
                this.$store.commit('LOG_USER', true);
                this.$store.commit('PUSH_NOTIFICATION',{
                    type: 'success',
                    msg: 'Login successful!'
                });
            }
            else
            {
                this.$store.commit('PUSH_NOTIFICATION',{
                    type: 'error',
                    msg: 'You\'re not registerd! Kindly register.'
                });
                this.$router.push({name: 'signup'});
            }
        }
    }
}
</script>

<style scoped>

.flex
{
    margin: 75px auto;
    justify-content: space-around;
    align-items: center;
}

.login-form 
{
    width: 40%;
    display: flex;
    flex-direction: column;
}

.login-form h3
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

#user-name:focus, #pass-word:focus , .check-box input:focus
{ border-color: #ffac81; box-shadow: none; }

.check-box input { margin-right: 6px; }

.login-btn
{
    margin: 18px 0;
    background-image: linear-gradient(315deg, #ffac81 0%, #ff928b 74%);
    color: white;
    font-size: 24px;
    padding: 15px 0;
    border-radius: 3px;
    box-shadow: 0px 0px 9px rgb(0, 0, 0,0.2); 
}

.forget-pass { display: flex; justify-content: flex-end; }

.forget-pass p{ cursor: pointer; }

.forget-pass p:hover { text-decoration: underline; }

.register-box
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

.register-box h4
{
    font-weight: 700;
    font-size: 30px;
    margin-bottom: 35px;
}

.signup-btn
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

.signup-btn::after { background-color: #5aa469; }

@media (max-width: 1023px)
{
    .login-form , .register-box { width: 45%; }
}

@media (max-width: 767px)
{
    .login-form, .register-box{ width: 100%; max-width: 450px; }

    .login-form h3{ text-align: center; }

    .register-box { height: 250px; margin-top: 100px; }
}

</style>
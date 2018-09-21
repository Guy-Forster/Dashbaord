// LOGIN COMPONENT

'use strict';


Vue.component('login', {
    template: `
              <center><form class="login-form middle">
                <h2 class="login-title">Login</h2>
                <input class="username-input" v-on:click="focus" type="text" id="username" placeholder="Username"><br><br>
                <input class="password-input" type="password" id="password" placeholder="Password"><br><br>
                <br><input class="login-button" v-on:click="checkpass" type="submit" value="Login" class="btn success"><br><br>
                <br><a href="#" class="forgot-link">Forgot Password?</a>
              </form></center>
            `,
    methods: {
        checkpass: function() {
            event.preventDefault();

            var pass = document.getElementById('password').value;
            var user = document.getElementById('username').value;

            if (user === 'Guy' && pass === '123456') {
                alert('Welcome Back!' + " " + user);

                window.location = "./dashboard.html";

            } else {
                alert('Incorrect Username or Password');
            }
        },

        focus: function() {
            var input = document.getElementById('username');

        },
        scream: function() {
            alert("YOU STOOOOPID!!!!!!");

        }
    }
});



var login = new Vue({
    el: '#login'
});
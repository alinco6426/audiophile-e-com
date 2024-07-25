<template>
     <footer>
     <nav>
          <div class="logo-container">
               <img src="../assets/shared/icons/logo.svg" alt="logo">
          </div>

          <div class="nav-links-container">
               <router-link class="router-link" to="/">Home</router-link>
               <router-link class="router-link" to="/headphones">Headphones</router-link>
               <router-link class="router-link" to="/speakers">Speakers</router-link>
               <router-link class="router-link" to="/earphones">Earphones</router-link>
          </div>
     </nav>
          <section class="footer-message-wrapper">
               <div class="footer-message-container">
                    <p>
                         Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music
                         lovers and sound specialists who are devoted to helping you get the most out of personal audio.
                         Come and visit our demo facility - we’re open 7 days a week.
                    </p>
                    <p>Copyright 2021. All Rights Reserved</p>
               </div>
               <div class="social-links-container">
                    <a href="#">
                         <img src="../assets/shared/icons/icon-facebook.svg" alt="icon-facebook">
                    </a>
                    <a href="#">
                         <img src="../assets/shared/icons/icon-twitter.svg" alt="icon-twitter">
                    </a>
                    <a href="#">
                         <img src="../assets/shared/icons/icon-instagram.svg" alt="icon-instagram">
                    </a>
               </div>
          </section>
     </footer>
</template>
<script>
import NavComponent from './NavComponent.vue'
export default {
     components:{
          NavComponent
     }
}
</script>
<style scoped>
@import url("../assets/main.css");
footer{
     width: 100%;
     height: auto;
     background-color: var(--black);
     padding: 40px;
     margin-top: 100px;
     position: relative;
}
footer nav {
     width: 80%;
     height: auto;
     display: flex;
     justify-content: space-between;
     align-content: center;
     align-items: center;
     margin-inline: auto;
     padding: 20px 0;
}
footer nav .logo-container{
     width: auto;
     display: flex;
     align-items: center;
}
footer nav .logo-container img{
     width: 150px;
}
footer nav .nav-links-container{
     width: auto;
     display: flex;
     justify-content: space-between;
     align-items: center;
}
footer nav .nav-links-container .router-link{
     text-decoration: none;
     color: var(--white);
     font-size: 16px;
     text-transform: uppercase;
     font-weight: 600;
     margin-inline: 25px;
}
footer::before{
     content: '';
     position: absolute;
     width: 250px;
     height: 3px;
     background-color: var(--orange);
     padding: 3px;
     top: 0;
     left: 100px;
}
.footer-message-wrapper {
     width: 80%;
     display: flex;
     justify-content: space-between;
     margin-inline: auto;
     margin-top: 50px;
}
.footer-message-container {
     width: 50%;
}
.footer-message-container p{
     color: var(--pale-white);
     font-size: 16px;
     line-height: 30px;
}
.footer-message-container p:last-child{
     margin-top: 50px;
}
.social-links-container{
     width: 50%;
     height: inherit;
     display: flex;
     align-content: center;
     justify-content: flex-end;
     align-items: center;
}
.social-links-container a{
     width: auto;
     display: flex;
     align-items: center;
     text-decoration: none;
     margin-inline: 10px;
}

@media screen and (max-width: 760px) {
footer{
     width: 100%;
     height: auto;
     background-color: var(--black);
     padding: 20px;
     margin-top: 100px;
     position: relative;
}
footer::before{
     content: '';
     position: absolute;
     width: 200px;
     height: 3px;
     background-color: var(--orange);
     padding: 3px;
     top: 0;
     left: 30%;
}
footer nav {
     width: 100%;
     display: block;
     text-align: center;
     display: flex;
     flex-direction: column;
}
footer nav .nav-links-container{
     display: block;
}
footer nav .logo-container img{
     width: 100px;
}
footer nav .nav-links-container{
     width: auto;
     display: flex;
     flex-direction: column;
     margin-top: 50px;
}
footer nav .nav-links-container .router-link{
     margin: 20px 0;
}
.footer-message-wrapper {
     width: 100%;
     display: block;
     margin-top: 50px;
     text-align: center;
}
.footer-message-container {
     width: 100%;
}
.social-links-container{
     width: 100%;
     height: auto;
     align-content: center;
     justify-content: center;
     margin: 50px 0;
}
}
</style>
<script>
import { RouterLink, RouterView } from 'vue-router'
import Nav from './components/Nav.vue';
import Footer from './components/Footer.vue';

export default {
    components: {
        Nav,
        Footer,
    },
    watch: {
        $route(to) {
            document.title = to.meta.title || 'shop Cart';
        }
    }
}
</script>

<template>
<Nav></Nav>
<RouterView></RouterView>
<Footer></Footer>
</template>

<style scoped>
body{
    overflow-x: hidden ;
}

.my-circle {
    width: 140px;
    height: 140px;
}

.col-12 {
    row-gap: 10px;
}

.four-card {
    row-gap: 20px;
    column-gap: 15px;
}

.brand {
    column-gap: 7px;
}

.price {
    row-gap: 15px;
}

.box-2 {
    width: 35%;
    height: 75%;
    background-color: whitesmoke;
    right: 5%;
    top: 13%;
}

@media (max-width: 1080px) {
    .box-2 {
        width: 70%;
        height: 75%;
        right: 15%;
        top: 17%;
    }
}

@media (max-width: 392px) {
    .box-2 {
        width: 80%;
        height: 70%;
        right: 10%;
        top: 20%;
    }
}

.feadback-form {
    row-gap: 10px;
}

.my-lax-box-2 {
    width: 200px;
    height: 80px;
    margin-top: 200px;
    background-image: url(../img/MCL\ 38.jpg);
    background-position: center;
    background-size: cover;
    font-size: 100px;
    font-weight: bold;
}
</style>

<script setup>
  import Footer from './components/Footer.vue';
  import Navbar from './components/navbar.vue'
  import { Observer } from "tailwindcss-intersect";

  Observer.start(); // Make sure Rombo animations work

</script>

<template>
  <navbar title="header"></navbar>
  <router-view></router-view>
  <Footer></Footer>

</template>

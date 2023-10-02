<script setup lang="ts">
import DisplayProducts from './views/DisplayProducts.vue'
import Navbar from './components/ui/navbar/Navbar.vue'
</script>

<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>


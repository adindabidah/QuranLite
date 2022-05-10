<template>
  <NavBar />
  <router-view />

  <!-- footer -->
  <div class="text text-light text-center fixed-bottom p-3">
    Start with Basmallah
    <br/>
    Copyright©
    <a class="text text-light" href="https://github.com/adindabidah">Adinda Abidah Ardelia</a>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
import NavBar from "../src/components/NavBar.vue";
export default {
  components: {
    NavBar,

  },
};
</script>
<style>
.text{
  background: #f6b192;
}
</style>
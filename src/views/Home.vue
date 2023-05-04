<script setup>
import HomeCard from "../components/HomeCard.vue";
import HomeCardMobile from "../components/HomeCardMobile.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
</script>
<template>
  <header>
    <h1>Welcome to</h1>
    <h1>Football Team Building</h1>
  </header>
  <HomeCard id="desktop" />
  <HomeCardMobile id="mobile" />
</template>

<style scoped>
header {
  color: rgb(236, 236, 236);
  margin-bottom: 20px;
}
#mobile {
  display: none;
}
@media only screen and (max-width: 580px) {
  #desktop {
    display: none;
  }
  #mobile {
    display: inline-block;
  }
  header {
    color: rgb(236, 236, 236);

    font-size: 12px;
  }
}
</style>

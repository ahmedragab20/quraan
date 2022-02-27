<template>
  <router-view />
</template>
<script>
import { ref } from "@vue/reactivity";
export default {
  setup() {
    return { ...imagesFunc() };
  },
};

function imagesFunc() {
  let app = document.getElementById("app");

  const images = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1597505495109-7fc35bb64d8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1586767003402-8ade266deb64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1624862762003-8b04581301aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1542&q=80",
    },
  ];

  let background = ref("");

  let num = Math.ceil(Math.random() * 3);

  background.value = images.find((i) => i.id === num);

  app.style.backgroundImage = `url(${background.value.url})`;
}
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Katibeh&display=swap");
#app {
  height: 100vh;
  background: center no-repeat;
  background-size: cover;
  font-family: "Katibeh", serif;
  font-size: 1.7rem;
}
</style>

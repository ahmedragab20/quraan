<template>
  <div class="home">
    <div
      class="ayah-box text-center shadow-lg d-flex justify-content-center align-items-center flex-column"
    >
      <div class="content" v-if="ayah && !loading">
        <div class="ayah-text">
          <p class="my-3">{{ ayah.text }}({{ ayah.numberInSurah }})</p>
        </div>
        <div class="surah w-100 py-3">
          <h5 class="fw-bold">{{ ayah.surah.name }}</h5>
        </div>
        <div class="button">
          <button class="btn" @click="getAyat">
            <i class="bi bi-arrow-clockwise"></i>
          </button>
        </div>
      </div>
      <div v-if="loading" class="loader">
        <h5>...في انتظار الاية</h5>
        <h5>اللهم صلي وسلم على سيدنا محمد</h5>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  name: "HomeView",
  components: {},
  setup() {
    return { ...FetchAyah() };
  },
};

function FetchAyah() {
  const store = useStore();

  const ayah = computed(() => {
    return store.state.Aya.index;
  });
  const loading = computed(() => {
    return store.state.Aya.loading;
  });

  const getAyat = () => {
    store.dispatch("getAyat");
  };

  getAyat();

  return { ayah, getAyat, loading };
}
</script>
<style lang="scss">
.home {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .ayah-box,
  .button {
    z-index: 3;
  }

  .ayah-box {
    padding: 25px;
    min-width: 70%;
    max-width: 90%;
    background-color: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(7px);
    border-radius: 20px;

    .surah {
      border-top: 1px solid rgba(238, 238, 238, 0.377);
    }
  }
}
</style>

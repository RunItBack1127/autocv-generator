<template>
  <main :class="this.isDarkMode ? 'dark-mode-enabled' : ''" class="site-container">
    <SiteHeader />
    <section class="form-container">
      <PDFForm />
    </section>
  </main>
</template>

<script lang="ts">
import { computed, ref } from 'vue';
import { useStore } from 'vuex';

import SiteHeader from './components/SiteHeader.vue';
import PDFForm from './components/PDFForm.vue';

export default {
  setup() {
    const appStore = useStore();

    return {
      isDarkMode: computed(() => appStore.state.isDarkMode)
    }
  },
  components: {
    SiteHeader,
    PDFForm
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  --main-color-1: #fff;
  --main-color-2: #000;

  font-family: Roboto, sans-serif;
  font-size: 16px;
  background: var(--main-color-1);
  color: var(--main-color-2);
}

main {
  section.form-container {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 100px;
    left: 0;
    width: 100%;
    height: calc(100vh - 100px);
  }
}

main.dark-mode-enabled {
  --main-color-1: #151515;
  --main-color-2: #fff;
}

a {
  text-decoration: none;
  color: var(--main-color-2);
}

a, span {
  display: block;
}

li {
  list-style: none;
}

input, textarea {
  font-family: Roboto, sans-serif;
  font-weight: 300;
}
</style>

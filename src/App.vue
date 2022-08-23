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

  --form-container-top-pad: 100px;
  --minimum-site-width: 360px;
  min-width: var(--minimum-site-width);

  section.form-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: var(--form-container-top-pad);
    width: 100%;
    height: calc(100vh - var(--form-container-top-pad));
    min-height: 750px;
    background-color: var(--main-color-1);
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

input, textarea, button, label {
  font-family: Roboto, sans-serif;
  font-weight: 300;
}

button {
  cursor: pointer;
}

.dp__main {
    width: 100%;
}

.dp__input {
  padding: 5px 42.5px;
  transition: none;
}

.dp__button {
  display: none;
}

.dp__action_buttons {
  width: 100%; 
}

.dp__action {
  font-family: Roboto, sans-serif;
  font-weight: 400;
  color: var(--main-color-2);
}

@media screen and (max-width: 411px) {
  main {
    --form-container-top-pad: 75px;
  }
}
</style>

<template>
  <main class="site-container">
    <SiteHeader />
    <section class="form-container">
      <PDFForm />
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import SiteHeader from './components/SiteHeader.vue';
import PDFForm from './components/PDFForm.vue';

export default defineComponent({
  name: 'App',
  components: {
    SiteHeader,
    PDFForm
  }
});
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

#app.dark-mode-enabled {
  --main-color-1: #151515;
  --main-color-2: #fff;
}

a {
  display: block;
  text-decoration: none;
  color: var(--main-color-2);
}

li {
  list-style: none;
}
</style>

<template>
  <main class="site-container">
    <SiteHeader />
    <section class="form-container">
      <PDFForm />
    </section>
  </main>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';

import SiteHeader from '@/components/SiteHeader.vue';
import PDFForm from '@/components/PDFForm.vue';

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
  font-family: Roboto, sans-serif;
  font-size: 16px;
  background: #fff;
  color: #000;
}
</style>

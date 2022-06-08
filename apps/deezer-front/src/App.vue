<script  lang="ts" setup>
import { useQueryProvider } from 'vue-query'

useQueryProvider()
</script>

<template>
  <div class="container">
    <main class="main">
      <router-view />
    </main>
    <aside class="aside"></aside>
    <footer class="footer"></footer>
  </div>
</template>

<style lang="scss">
.container {
  display: grid;
  grid-template-columns: 1fr 300px;
  height: 100vh;
  grid-template-rows: 1fr 80px;
  grid-template-areas:
    'main aside'
    'footer footer';

}

.main {
  grid-area: main;
}

.aside {
  grid-area: aside;
  border-left: 1px solid var(--darker-grey);
}

.footer {
  grid-area: footer;
  border-top: 1px solid var(--darker-grey);
}
</style>

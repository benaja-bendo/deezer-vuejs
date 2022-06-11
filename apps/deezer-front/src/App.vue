<script  lang="ts" setup>
import { useQueryProvider } from 'vue-query'
import Player from './components/Player.vue';
import QueuTrack from './components/QueuTrack.vue';

useQueryProvider()
</script>

<template>
  <div class="container">
    <main class="main">
      <router-view />
    </main>
    <aside class="aside">
      <QueuTrack />
    </aside>
    <footer class="footer">
      <Player />
    </footer>
  </div>
</template>

<style lang="scss">
.container {
  display: grid;
  grid-template-columns: 1fr 300px;
  height: 100vh;
  max-height: 100%;
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

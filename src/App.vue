<template>
  <header>
    <DarkSwitch />
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/vueuse">VueUse-test</RouterLink>
        <RouterLink to="/intro">IntroPage</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<script lang="ts" setup>
import { RouterLink, RouterView } from 'vue-router'
import DarkSwitch from '@/components/DarkSwitch.vue'
</script>

<style lang="less">
@import '@/assets/base.css';
// dark 模式
html.dark {
  background: black;
  body {
    color: white;
    background: black;
    nav a.router-link-exact-active,
    h3,
    svg {
      color: #666;
    }
  }
}

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>

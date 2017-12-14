<template>
  <section class="container">
    <div>
      <HeadNav/>
      <logo/>
      <h1 class="title">
        nymphe
      </h1>
      <h2 class="subtitle">
        Nuxt.js project
      </h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHub</a>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import HeadNav from '~/components/Header.vue'

export default {
  components: {
    Logo,
    HeadNav
  }
}
</script>

<style>
</style>

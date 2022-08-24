<script>
  import Clients from "./lib/Clients.svelte";
  import Hero from "./lib/Hero.svelte";
  import Navbar from "./lib/Navbar.svelte";
</script>

<main>
  <Navbar />
  <Hero />
  <Clients />
</main>

<style>
  main {
    padding: 0 6.875rem;
  }
</style>

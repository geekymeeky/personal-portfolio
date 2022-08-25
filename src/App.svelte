<script>
  import Clients from "./lib/Clients.svelte";
  import Footer from "./lib/Footer.svelte";
  import Hero from "./lib/Hero.svelte";
  import Navbar from "./lib/Navbar.svelte";
  import Projects from "./lib/Projects.svelte";
</script>

<main>
  <Navbar />
  <Hero />
  <Clients />
  <Projects />
</main>
<Footer />

<style>
  main {
    padding: 0 6.875rem;
  }
  @media (max-width: 768px) {
    main {
      padding: 0 1.875rem;
    }
  }
</style>

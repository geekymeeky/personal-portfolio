<script>
  import { Router, Route } from 'svelte-routing'
  import Footer from './lib/components/Footer.svelte'
  import Navbar from './lib/components/Navbar.svelte'
  import About from './lib/pages/About.svelte'
  import Experience from './lib/pages/Experience.svelte'
  import Home from './lib/pages/Home.svelte'
  export let url = ''
</script>

<Router {url}>
  <Navbar />
  <main>
    <Route path="about" component={About} />
    <Route path="experience" component={Experience} />
    <Route path="/" component={Home} />
  </main>
  <Footer />
</Router>

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

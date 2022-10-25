<script>
  import { Router, Route } from 'svelte-routing'
  import Footer from './lib/components/Footer.svelte'
  import Navbar from './lib/components/Navbar.svelte'
  import About from './lib/pages/About.svelte'
  import Experience from './lib/pages/Experience.svelte'
  import Home from './lib/pages/Home.svelte'
  export let url = ''

  // const cursor = document.createElement('div')
  // cursor.classList.add('cursor')
  // document.body.appendChild(cursor)

  // document.addEventListener('mousemove', (e) => {
  //   cursor.style.left = e.clientX + 'px'
  //   cursor.style.top = e.clientY + 'px'
  // })
</script>

<Router {url}>
  <Navbar />
  <main>
    <Route path="about" component={About} />
    <Route path="experience" component={Experience} />
  </main>
  <Route path="/" component={Home} />

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

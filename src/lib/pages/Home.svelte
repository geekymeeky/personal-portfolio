<script>
  import Clients from '../components/Clients.svelte'
  import Hero from '../components/Hero.svelte'
  import Projects from '../components/Projects.svelte'
  import { MetaTags } from 'svelte-meta-tags'
</script>

<MetaTags
  title="Hey, I'm Srijan Gupta"
  description="Hi, my name is Srijan Gupta. I'm an undergraduate student, currently pursuing Btech. course in Computer Science and Engineering at Calcutta Institute of Engineering and Management. I'm a Full Stack Developer, Dev Ops, and a Competitive Programmer. I'm a self-taught programmer and I love to learn new things. I'm a passionate learner who's always willing to learn and work across technologies and domains."
/>
<Hero />
<main>
  <Clients />
  <Projects />
</main>

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

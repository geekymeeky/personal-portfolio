<script>
  import Clients from '../components/Clients.svelte'
  import Hero from '../components/Hero.svelte'
  import Projects from '../components/Projects.svelte'
  import { MetaTags } from 'svelte-meta-tags'
</script>

<MetaTags
  title="Hey, I'm Srijan Gupta"
  description="Hi, my name is Srijan Gupta. I'm an undergraduate student, currently pursuing Btech. course in Computer Science and Engineering at Calcutta Institute of Engineering and Management. I'm a Full Stack Developer, Dev Ops, and a Competitive Programmer. I'm a self-taught programmer and I love to learn new things. I'm a passionate learner who's always willing to learn and work across technologies and domains."
  openGraph={{
    title: 'Srijan K. Gupta | @geekymeeky',
    description:
      "Hi, my name is Srijan Gupta. I'm an undergraduate student, currently pursuing Btech. course in Computer Science and Engineering at Calcutta Institute of Engineering and Management. I'm a Full Stack Developer, Dev Ops, and a Competitive Programmer. I'm a self-taught programmer and I love to learn new things. I'm a passionate learner who's always willing to learn and work across technologies and domains.",
    url: 'https://srijankgupta.vercel.app/',
    type: 'website',
    images: [
      {
        url: 'https://github.com/geekymeeky.png',
        width: 800,
        height: 600,
        alt: 'Srijan K. Gupta | @geekymeeky',
      },
    ],
  }}
  twitter={{
    handle: '@srijankrgupta',
    site: '@srijankrgupta',
    cardType: 'summary_large_image',
    title: "Hey, I'm Srijan Gupta",
    description:
      "Hi, my name is Srijan Gupta. I'm an undergraduate student, currently pursuing Btech. course in Computer Science and Engineering at Calcutta Institute of Engineering and Management. I'm a Full Stack Developer, Dev Ops, and a Competitive Programmer. I'm a self-taught programmer and I love to learn new things. I'm a passionate learner who's always willing to learn and work across technologies and domains.",
    image: 'https://github.com/geekymeeky.png',
    imageAlt: "Hey, I'm Srijan Gupta",
  }}
/>
<Hero />
<Clients />
<Projects />

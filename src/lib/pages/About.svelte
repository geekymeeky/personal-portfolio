<script>
  import { MetaTags } from 'svelte-meta-tags'
  import aboutData from '../../assets/about.json'
</script>

<section>
  <MetaTags
    title="About - Srijan Gupta"
    description="I'm a self-taught web developer and Mobile App Developer with experience in designing new features from ideation to production, implementation of wireframes and design flows into high performance software applications. I take into consideration the user experience while writing reusable and efficient code. I passionately combine good design, technology, and innovation in all my projects, which I like to accompany from the first idea to release. Currently, I'm focused on the backend development."
    openGraph={{
      title: 'About - Srijan Gupta',
      description:
        "I'm a self-taught web developer and Mobile App Developer with experience in designing new features from ideation to production, implementation of wireframes and design flows into high performance software applications. I take into consideration the user experience while writing reusable and efficient code. I passionately combine good design, technology, and innovation in all my projects, which I like to accompany from the first idea to release. Currently, I'm focused on the backend development.",
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
      title: 'About - Srijan Gupta',
      description:
        "I'm a self-taught web developer and Mobile App Developer with experience in designing new features from ideation to production, implementation of wireframes and design flows into high performance software applications. I take into consideration the user experience while writing reusable and efficient code. I passionately combine good design, technology, and innovation in all my projects, which I like to accompany from the first idea to release. Currently, I'm focused on the backend development.",
      image: 'https://github.com/geekymeeky.png',
      imageAlt: 'About me',
    }}
  />
  <div class="container">
    <img
      class="avatar border-gradient border-gradient-purple"
      src="https://github.com/geekymeeky.png?size=300"
      alt="avatar"
    />
    <h2>About <span>Me</span></h2>
    <p class="about-text">
      {aboutData.about}
    </p>
  </div>
  <div class="container">
    <h2>Technologies <span>and Tools</span></h2>
    <p class="about-text">
      Using a combination of cutting-edge technologies and reliable open-source
      software I build user-focused, performant apps and websites for
      smartphones, tablets, and desktops.
    </p>
    <div class="grid">
      {#each aboutData.technologies as tech}
        <div class="grid-item">
          <img
            src={tech.logo}
            alt={tech.name}
            loading="lazy"
            width="48"
            height="48"
          />
          <p>{tech.name}</p>
        </div>
      {/each}
    </div>
  </div>
  <!-- <div class="container">
    <h2>Services <span>I Provide</span></h2>
  </div> -->
</section>

<style>
  .container {
    margin: 0 auto;
    padding: 5rem 0;
    width: 100%;
    text-align: center;
    max-width: 1280px;
  }
  .avatar {
    border-radius: 50%;
    width: 250px;
    height: 250px;
  }
  .border-gradient {
    border: 10px solid;
    border-image-slice: 1;
    border-width: 5px;
  }
  .about-text {
    font-size: 1.2rem;
    line-height: 1.5;
    margin: 2rem 0;
    margin: 0 auto;
    text-align: justify;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-gap: 1rem;
    margin: 2rem 0;
  }
  .grid-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>

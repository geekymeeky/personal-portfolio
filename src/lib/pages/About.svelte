<script>
  const technologies = [
    {
      name: "HTML",
      logo: "https://img.icons8.com/color/48/000000/html-5.png",
    },
    {
      name: "CSS",
      logo: "https://img.icons8.com/color/48/000000/css3.png",
    },
    {
      name: "Sass",
      logo: "https://img.icons8.com/color/48/000000/sass.png",
    },
    {
      name: "JavaScript",
      logo: "https://img.icons8.com/color/48/000000/javascript.png",
    },
    {
      name: "TypeScript",
      logo: "https://img.icons8.com/color/48/000000/typescript.png",
    },
    {
      name: "Svelte",
      logo: "https://img.icons8.com/doodle/48/000000/svetle.png",
    },
    {
      name: "React",
      logo: "https://img.icons8.com/color/48/000000/react-native.png",
    },
    {
      name: "Node",
      logo: "https://img.icons8.com/color/48/000000/nodejs.png",
    },
    {
      name: "Express",
      logo: "https://img.icons8.com/color/48/000000/express.png",
    },
    {
      name: "MongoDB",
      logo: "https://img.icons8.com/color/48/000000/mongodb.png",
    },
    {
      name: "Redux",
      logo: "https://img.icons8.com/color/48/000000/redux.png",
    },
    {
      name: "Next",
      logo: "https://img.icons8.com/color/48/000000/nextjs.png",
    },
    {
      name: "Firebase",
      logo: "https://img.icons8.com/color/48/000000/firebase.png",
    },

    {
      name: "Python",
      logo: "https://img.icons8.com/color/48/000000/python.png",
    },
    {
      name: "Flask",
      logo: "https://img.icons8.com/color/48/000000/flask.png",
    },
    {
      name: "Android",
      logo: "https://img.icons8.com/color/48/000000/android-os.png",
    },
    {
      name: "Flutter",
      logo: "https://img.icons8.com/color/48/000000/flutter.png",
    },
    {
      name: "ElasticSearch",
      logo: "https://img.icons8.com/color/48/000000/elasticsearch.png",
    },
    {
      name: "Git",
      logo: "https://img.icons8.com/color/48/000000/git.png",
    },
    {
      name: "Docker",
      logo: "https://img.icons8.com/color/48/000000/docker.png",
    },
    {
      name: "Kubernetes",
      logo: "https://img.icons8.com/color/48/000000/kubernetes.png",
    },
    {
      name: "VS Code",
      logo: "https://img.icons8.com/color/48/000000/visual-studio-code-2019.png",
    },
    {
      name: "Google Cloud",
      logo: "https://img.icons8.com/color/48/000000/google-cloud.png",
    },
    {
      name: "AWS",
      logo: "https://img.icons8.com/color/48/000000/amazon-web-services.png",
    },
    {
      name: "Postman",
      logo: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-postman-is-the-only-complete-api-development-environment-logo-color-tal-revivo.png",
    },
    {
      name: "Figma",
      logo: "https://img.icons8.com/color/48/000000/figma--v1.png",
    },
    {
      name: "Adobe XD",
      logo: "https://img.icons8.com/color/48/000000/adobe-xd--v1.png",
    },
  ];
</script>

<section>
  <div class="container">
    <img
      class="avatar border-gradient border-gradient-purple"
      src="https://github.com/geekymeeky.png?size=300"
      alt="avatar"
    />
    <h2>About <span>Me</span></h2>
    <p class="about-text">
      I'm a self-taught web developer and Mobile App Developer with experience
      in designing new features from ideation to production, implementation of
      wireframes and design flows into high performance software applications. I
      take into consideration the user experience while writing reusable and
      efficient code. I passionately combine good design, technology, and
      innovation in all my projects, which I like to accompany from the first
      idea to release. Currently, I'm focused on the backend development.
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
      {#each technologies as tech}
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

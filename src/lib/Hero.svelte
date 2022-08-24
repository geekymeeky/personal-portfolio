<script>
  const scroll = () => window.scrollBy(0, window.innerHeight);
</script>

<section class="hero">
  <h1>
    I’m a developer specialising in <span>Web</span> and <span>Android</span> app
    development
  </h1>
  <div class="hero__svg" on:click={scroll}>
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 330 330"
      style="enable-background:new 0 0 330 330;"
      xml:space="preserve"
    >
      <path
        id="XMLID_225_"
        d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
	c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
	s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
      />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
    </svg>
  </div>
</section>

<style>
  .hero {
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .hero__svg {
    position: absolute;
    bottom: 0;
    width: 2rem;
    height: 5rem;
    margin-left: 1rem;
    animation: bounce 1s infinite;
    filter: invert();
  }
</style>

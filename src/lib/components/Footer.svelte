<script>
  import Icon from "@iconify/svelte";
</script>

<footer class="footer">
  <div>
    <h1>Get <span>in Touch</span></h1>
    <p class="footer__subtitle">So that we can talk more about...</p>
    <div class="footer__links">
      <a
        href="mailto:gupta.srijan94@gmail.com"
        target="_blank"
        aria-label="Email"
      >
        <Icon
          icon="akar-icons:envelope"
          style="width: 2rem; height: 2rem;  color: var(--color-neutral-2);"
        />
      </a>
      <a
        href="https://github.com/geekymeeky"
        target="_blank"
        aria-label="Github"
      >
        <Icon
          icon="akar-icons:github-fill"
          style="width: 2rem; height: 2rem; color: var(--color-neutral-2);"
        />
      </a>
      <a
        href="https://twitter.com/srijankrgupta"
        target="_blank"
        aria-label="Twitter"
      >
        <Icon
          icon="akar-icons:twitter-fill"
          style="width: 2rem; height: 2rem; color: var(--color-neutral-2);"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/srijankrgupta/"
        target="_blank"
        aria-label="LinkedIn"
      >
        <Icon
          icon="akar-icons:linkedin-fill"
          style="width: 2rem; height: 2rem; color: var(--color-neutral-2);"
        />
      </a>
    </div>
  </div>
</footer>

<style>
  .footer {
    padding: 5rem 0rem;
  }
  .footer > div {
    margin: 0 auto;
    text-align: center;
  }
  .footer__subtitle {
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 150%;
  }
  .footer__links {
    display: flex;
    justify-content: center;
    gap: 1.875rem;
    margin-top: 2.5rem;
  }
</style>

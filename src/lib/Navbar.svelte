<script>
</script>

<nav id="navbar" class="navbar">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io"> Srijan Gupta </a>
  </div>
  <div class="nav-menu__wrapper">
    <ul class="nav-menu">
      {#each ["Home", "Work", "About"] as navItem}
        <li class="nav-item"><a href="https://bulma.io/">{navItem}</a></li>
      {/each}
    </ul>
  </div>
</nav>

<style>
  .navbar {
    position: absolute;
    left: 0px;
    right: 0px;
    top: 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 5rem;
    z-index: 9;
  }
  .navbar-brand > a {
    background: var(--color-primary);
    background-clip: padding-box;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 1.5rem;
    font-weight: bold;
  }
  .nav-menu {
    display: flex;
    padding: 0;
    gap: 2rem;
  }
  .nav-item {
    list-style: none;
    text-align: center;
  }
  .nav-item > a {
    font-weight: 600;
    font-size: 0.8rem;
    font-feature-settings: "liga" off;
    line-height: 150%;
    text-transform: uppercase;
    text-decoration: none;
    color: var(--color-neutral-1);
  }
  @media (max-width: 768px) {
    .navbar {
      padding: 1rem 1rem;
    }
    .nav-menu {
      flex-direction: column;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      width: 100%;
      gap: 0.5rem;
    }
    .nav-item {
      padding: 1rem 2rem;
      list-style: none;
    }
  }
</style>

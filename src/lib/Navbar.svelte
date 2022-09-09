<script>
  import Icon from "@iconify/svelte";
  let checked = true;

  //determines if the user has a set theme
  function detectColorScheme() {
    var theme = "light"; //default to light

    //local storage is used to override OS theme settings
    if (localStorage.getItem("theme")) {
      if (localStorage.getItem("theme") == "dark") {
        var theme = "dark";
      }
    } else if (!window.matchMedia) {
      //matchMedia method not supported
      return false;
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      //OS theme setting detected as dark
      var theme = "dark";
    }

    //dark theme preferred, set document with a `data-theme` attribute
    if (theme == "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }
  detectColorScheme();
</script>

<nav id="navbar" class="navbar">
  <div class="navbar-brand">
    <a class="navbar-item" href="/"> Srijan Gupta </a>
  </div>
  <div class="nav-menu__wrapper">
    <ul class="nav-menu">
      {#each ["Home", "Work", "About"] as navItem}
        <li class="nav-item"><a href={`#${navItem}`}>{navItem}</a></li>
      {/each}
      <input
        type="checkbox"
        class="checkbox"
        id="checkbox"
        bind:checked
        on:change={() => {
          if (checked) {
            document.documentElement.setAttribute("data-theme", "dark");
            localStorage.setItem("theme", "dark");
          } else {
            document.documentElement.setAttribute("data-theme", "light");
            localStorage.setItem("theme", "light");
          }
        }}
      />
      <label for="checkbox" class="checkbox-label">
        <Icon class="night-icon" icon="mdi:weather-night" />
        <Icon class="day-icon" icon="mdi:weather-sunny" />
        <span class="ball" />
      </label>
    </ul>
  </div>
</nav>

<style>
  div :global(.night-icon) {
    color: var(--color-neutral-1);
  }
  div :global(.day-icon) {
    color: #fff;
  }
  .navbar {
    position: absolute;
    left: 0px;
    right: 0px;
    top: 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 6.875rem;
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
  .checkbox {
    opacity: 0;
    position: absolute;
  }

  .checkbox {
    opacity: 0;
    position: absolute;
  }

  .checkbox-label {
    background-color: #111;
    width: 50px;
    height: 26px;
    border-radius: 50px;
    position: relative;
    padding: 5px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .checkbox-label .ball {
    background-color: #fff;
    width: 22px;
    height: 22px;
    position: absolute;

    border-radius: 50%;
    transition: transform 0.2s linear;
  }

  .checkbox:checked + .checkbox-label .ball {
    transform: translateX(24px);
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

<script>
  import { Link } from 'svelte-routing'
  import Icon from '@iconify/svelte'
  let checked = true
  let menu = false

  let routes = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'About',
      path: '/about',
    },
    {
      name: 'Experience',
      path: '/experience',
    },
  ]

  //determines if the user has a set theme
  function detectColorScheme() {
    var theme = 'light' //default to light

    //local storage is used to override OS theme settings
    if (localStorage.getItem('theme')) {
      if (localStorage.getItem('theme') == 'dark') {
        var theme = 'dark'
      }
    } else if (!window.matchMedia) {
      //matchMedia method not supported
      return false
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      //OS theme setting detected as dark
      var theme = 'dark'
    }

    //dark theme preferred, set document with a `data-theme` attribute
    if (theme == 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark')
    }
  }
  detectColorScheme()
</script>

<nav id="navbar" class="navbar">
  <div class="navbar-brand">
    <a class="navbar-item" href="/"> Srijan Gupta </a>
  </div>
  <input
    type="checkbox"
    class="checkbox"
    id="checkbox"
    bind:checked
    on:change={() => {
      if (checked) {
        document.documentElement.setAttribute('data-theme', 'dark')
        localStorage.setItem('theme', 'dark')
      } else {
        document.documentElement.setAttribute('data-theme', 'light')
        localStorage.setItem('theme', 'light')
      }
    }}
  />
  <label for="checkbox" class="checkbox-label" aria-label="Toggle Dark Mode">
    <Icon class="night-icon" icon="mdi:weather-night" />
    <Icon class="day-icon" icon="mdi:weather-sunny" />
    <span class="ball" />
  </label>
  <div class="nav-menu__wrapper">
    <div role="button" on:click={() => (menu = !menu)} class="navbar-burger">
      <Icon
        icon={menu ? 'ci:close-big' : 'ci:menu-alt-01'}
        style="width: 2.5rem; height: 2.5rem;"
        class="nav-menu"
      />
    </div>
    <ul class="nav-menu" id="nav-menu" class:active={menu}>
      {#each routes as navItem}
        <li class="nav-item">
          {#if navItem.path.startsWith('#')}
            <a href={navItem.path} class="nav-link">{navItem.name}</a>
          {:else}
            <Link to={navItem.path} class="nav-link">{navItem.name}</Link>
          {/if}
        </li>
      {/each}
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
    position: fixed;
    left: 0px;
    right: 0px;
    top: 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 6.875rem;
    z-index: 2;
    backdrop-filter: blur(10px);
    transition: all 0.5s ease;
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
    margin: 0;
  }
  .nav-item {
    list-style: none;
    text-align: center;
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
  .navbar-burger {
    display: none;
  }
  @media (max-width: 768px) {
    .navbar {
      padding: 1rem 1rem;
      background: var(--color-bg);
    }
    .nav-menu {
      flex-direction: column;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      width: 100%;
      gap: 0.5rem;
      display: none;
      background: var(--color-bg);
    }
    .nav-menu.active {
      display: flex;
      animation: fadeIn 0.5s ease-in-out;
    }
    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    .nav-item {
      padding: 1rem 2rem;
      list-style: none;
    }
    .navbar-burger {
      display: block;
    }
  }
</style>

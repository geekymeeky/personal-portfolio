<script>
  import projData from '../../assets/projects.json'
  import Icon from '@iconify/svelte'
</script>

<section class="container projects" id="Work">
  <h2 class="projects__title">
    Featured <span>Projects</span>
  </h2>
  <div class="projects_list">
    {#each projData as project}
      <div class="project">
        <div class="project__content">
          <h5 class="project__title"><span>{project.name}</span></h5>
          <h3 class="project__description">
            {project.description[0]} <span>{project.description[1]}</span>
          </h3>
          <p class="project__domain">{project.domain}</p>
          <a class="project__link" href={project.link} target="_blank">
            <span>View Work</span>
            &nbsp;
            <Icon
              icon="akar-icons:arrow-right"
              style="width: 1.5rem; height: 1.5rem;"
            />
          </a>
        </div>
        <div class="project__image">
          <img
            src={project.image}
            alt={project.name}
            width="591"
            height="500"
          />
        </div>
      </div>
    {/each}
  </div>
</section>

<style>
  .projects {
    padding-top: 5rem;
    padding-bottom: 7.5rem;
  }
  .projects_list {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .project {
    display: flex;
    justify-content: space-between;
    gap: 1.875rem;
    position: relative;
    padding: 6.063rem 0rem;
  }
  .project__title {
    text-transform: uppercase;
  }
  .project__domain {
    font-family: Work Sans;
    font-size: 18px;
    font-weight: 300;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: left;
    padding: 0.625rem 0rem;
  }
  .project__content {
    width: 100%;
    margin-top: auto;
  }
  .project__link {
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: auto;
    padding: 1rem 2rem;
    border-radius: 5rem;
    background: none;
    border: 2px solid;
    width: 189px;
    color: var(--color-neutral-1);
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0.04em;
    text-align: left;
    text-decoration: none;
    font-weight: 600;
  }
  .project__link:hover {
    background: var(--color-primary);
  }
  .project__image {
    width: 100%;
  }
  .project__image > img {
    border-radius: 0.25rem;
  }
  .project:nth-child(even) {
    flex-direction: row-reverse;
  }

  @media (max-width: 768px) {
    .projects {
      padding-top: 3.75rem;
      padding-bottom: 5rem;
    }
    .project {
      flex-direction: column;
      gap: 1.25rem;
      padding: 3.063rem 0rem;
    }
    .project__image > img {
      width: 100%;
      height: auto;
    }
    .project:nth-child(even) {
      flex-direction: column;
    }
  }
  h2 > span {
    color: #939aff;
  }
  h3 > span {
    color: #939aff;
  }
  h5 > span {
    color: #939aff;
  }
</style>

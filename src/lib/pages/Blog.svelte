<script>
  import { onMount } from 'svelte'
  import { getAllPosts } from '../api/posts'

  const pattern = [
    'horizontal',
    'vertical',
    'vertical',
    'vertical',
    'horizontal',
    'vertical',
    'vertical',
    'reverse-horizontal',
  ]

  let posts = null

  onMount(async () => {
    posts = await getAllPosts('blogpost')
  })

  function getPattern(index) {
    console.log(index)
    return pattern[index % pattern.length]
  }
</script>

<div class="container">
  <h1>Blog</h1>
  <p>Place for my thoughts and ideas.</p>

  <section class="cards">
    {#if posts !== null}
      <!-- content here -->
      {#each posts as post, idx}
        <article class={`${getPattern(idx)} card`}>
          <img
            class="card__img"
            src={post?.data?.featured_image?.url}
            alt={post?.data?.featured_image?.alt}
            style=""
            height="196"
            width="256"
          />
          <div class="card__content">
            <div class="card__type">article</div>
            <div class="card__title">
              {post?.data?.title[0]?.text}
            </div>
            <div class="card__date">
              {new Date(post?.data?.date).toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })} &middot; 5 min read
            </div>
            <div class="card__excerpt">
              {post?.data?.body[0]?.text}
            </div>
            <div class="card__tags">
              {#each post?.tags as tag}
                <div class="tag">
                  <!-- <i class="fa fa-tag" /> -->
                  {tag}
                </div>
              {/each}
            </div>
          </div>
        </article>
      {/each}
    {/if}
  </section>
</div>

<style>
  section.cards {
    display: grid;
    grid-auto-flow: row dense;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(12, 1fr);
    grid-gap: 1rem;
  }

  .card {
    display: flex;
    border: 1px solid #121212;
    transition: all 0.25s ease;
    background: var(--color-bg-secondary);
    border-radius: 0.5rem;
  }

  .card:hover {
    transform: scale(1.02);
  }

  .vertical {
    flex-direction: column;
    grid-row: span 2;
    grid-column: span 1;
  }

  .horizontal {
    flex-direction: row;
    grid-row: span 1;
    grid-column: span 2;
  }

  .reverse-horizontal {
    flex-direction: row-reverse;
    grid-row: span 1;
    grid-column: span 2;
  }

  .horizontal .card__img,
  .reverse-horizontal .card__img {
    height: 100%;
  }

  .horizontal .card__img {
    border-radius: 0.5rem 0 0 0.5rem;
  }

  .reverse-horizontal .card__img {
    border-radius: 0 0.5rem 0.5rem 0;
  }

  .vertical .card__img {
    width: 100%;
    border-radius: 0.5rem 0.5rem 0 0;
  }

  .card__content {
    padding: 1em;
  }

  .card__type {
    font-variant: small-caps;
    letter-spacing: 0.1em;
    opacity: 0.9;
    color: #ffa28b;
    text-transform: uppercase;
    padding-bottom: 0.5rem;
  }

  .card__title {
    font-size: clamp(1.2rem, 1.5vw, 2rem);
    opacity: 0.8;
    font-weight: 700;
    padding-bottom: 0.5rem;
    transition: all 0.25s ease;
  }

  .card__date {
    font-size: clamp(0.8rem, 1vw, 1rem);
    padding-bottom: 0.5rem;
    opacity: 0.3;
  }

  .card__time-to-read {
    font-style: italic;
  }

  .card__excerpt {
    font-size: clamp(0.8rem, 1vw, 1rem);
    padding-bottom: 0.5rem;
  }

  .card__tags {
    margin-top: auto;
  }

  .tag {
    display: inline;
    border: 1px solid #7ee787;
    padding: 0.5rem;
    border-radius: 0.5rem;
    font-size: clamp(0.8rem, 1vw, 1rem);
    color: #7ee787;
    user-select: none;
    cursor: pointer;
  }
  @media (hover: hover) {
    .tag:hover {
      background-color: #7ee787;
      color: #fff;
    }
  }

  @media (max-width: 768px) {
    section.cards {
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(24, 1fr);
    }

    .vertical {
      grid-row: span 4;
      grid-column: span 1;
    }

    .horizontal {
      grid-row: span 2;
      grid-column: span 1;
    }

    .reverse-horizontal {
      grid-row: span 2;
      grid-column: span 1;
    }
  }
  .card__tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  /* 
  .tag:hover {
  }

  .tag:active {
  }

  .tag i {
    margin-right: 0.5rem;
  } */
</style>

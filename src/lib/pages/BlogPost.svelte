<script>
  import { onMount } from 'svelte'
  import { getPostBySlug, getPostByUID } from '../api/posts'
  import { navigate } from 'svelte-routing'

  export let slug = null

  let post = null

  onMount(async () => {
    const postRes = await getPostByUID('blogpost', slug).then((res) => res.data)
    if (postRes === null) {
      navigate('/404')
    } else {
      console.log(postRes)
      post = postRes
    }
  })
</script>

<section class="container">
  <div class="blog-post">
    <h1 class="title">{post?.title[0]?.text}</h1>
    <!-- Author -->
    <p class="author">{post?.author[0]?.text}</p>
    <!-- Date -->
    <p class="date">
      {new Date(post?.date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })}
    </p>
    <!-- Featured Image -->
    <img
      class="featured-image"
      src={post?.featured_image?.url}
      alt={post?.featured_image?.alt}
    />
    <!-- Body -->
    <div class="body">
      {#if post?.body.length > 0}
        {#each post?.body as body}
          {#if body?.type === 'heading1'}
            <h1>{body?.text}</h1>
          {:else if body?.type === 'heading2'}
            <h2>{body?.text}</h2>
          {:else if body?.type === 'heading3'}
            <h3>{body?.text}</h3>
          {:else if body?.type === 'paragraph'}
            <p>{body?.text}</p>
          {:else if body?.type === 'preformatted'}
            <pre>{body?.text}</pre>
          {:else if body?.type === 'image'}
            <img src={body?.url} alt={body?.alt} />
          {/if}
        {/each}
      {/if}
    </div>
    <!-- Categories -->
    <p class="categories">Categories: category1, category2, category3</p>
  </div>
</section>

<style>
  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
  }
  h2 {
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
  }
  h3 {
    font-size: 1.75rem;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
  }
  img {
    max-width: 100%;
    height: auto;
  }
  pre {
    background-color: var(--color-background);
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);
    display: block;
    font-family: Menlo, Monaco, Consolas, 'Courier New', monospace;
    font-size: 13px;
    line-height: 1.42857;
    margin: 10px 0;
    padding: 9.5px;
    word-break: break-all;
    word-wrap: break-word;
  }
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  .blog-post {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  /* Style for the title */
  .blog-post .title {
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  /* Style for the author */
  .blog-post .author {
    font-size: 14px;
    margin-bottom: 20px;
  }
  /* Style for the date */
  .blog-post .date {
    font-size: 14px;
    margin-bottom: 20px;
  }
  /* Style for the featured image */
  .blog-post .featured-image {
    width: 100%;
    height: auto;
    margin-bottom: 20px;
  }
  /* Style for the body */
  .blog-post .body {
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 20px;
  }
  /* Style for the categories */
  .blog-post .categories {
    font-size: 14px;
    margin-bottom: 20px;
  }
</style>

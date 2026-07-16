<script>
  export let title;
  export let description;
  export let path = "/";
  export let noindex = false;

  const base = "https://foundtechsolutions.com";
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <link rel="canonical" href={base + path} />
  {#if noindex}
    <meta name="robots" content="noindex" />
  {/if}
  <meta property="og:site_name" content="FoundTech" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content={base + path} />
  <meta property="og:image" content="{base}/og-image.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content="{base}/og-image.png" />
</svelte:head>

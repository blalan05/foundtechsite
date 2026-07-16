<script>
  import { page } from "$app/stores";
</script>

<svelte:head>
  <title>{$page.status === 404 ? "Page not found | FoundTech" : "Something went wrong | FoundTech"}</title>
  <meta name="robots" content="noindex" />
</svelte:head>

<div>
  <section class="error-section">
    <div class="error-content">
      <p class="status">{$page.status}</p>
      <h1>{$page.status === 404 ? "That page doesn't exist." : "Something went wrong."}</h1>
      <p>Here's where most people are headed:</p>
      <div class="error-links">
        <a href="/services">Our Services</a>
        <a class="secondary" href="/contact">Contact Us</a>
        <a class="secondary" href="/">Home</a>
      </div>
    </div>
  </section>
</div>

<style>
  .error-section {
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 68px);
    height: calc(100svh - 68px);
    background-image: linear-gradient(
      to bottom,
      white,
      var(--lightblue),
      white
    );
  }

  .error-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1em;
    width: 85%;
    max-width: 700px;
  }

  .status {
    font-size: 1.2rem;
    font-weight: bold;
    color: var(--blue);
    margin: 0;
  }

  .error-content h1 {
    font-size: 2rem;
    font-weight: 600;
  }

  .error-links {
    display: flex;
    flex-wrap: wrap;
    gap: 1em;
    justify-content: center;
    margin-top: 0.5em;
  }

  .error-links a {
    padding: 1rem 1.5rem;
    font-size: 1.1em;
    text-decoration: none;
    font-weight: bold;
    color: white;
    background-color: var(--green);
    border-radius: 7px;
  }

  .error-links a.secondary {
    background-color: var(--blue);
  }
</style>

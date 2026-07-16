<script>
  import { onMount } from "svelte";

  onMount(() => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "generate_lead", { form: "contact" });
    }
  });
</script>

<svelte:head>
  <title>Thanks — we got your message | FoundTech</title>
  <meta name="robots" content="noindex" />
  <meta
    name="description"
    content="Your message is in. A real person replies within one business day."
  />
</svelte:head>

<div>
  <section class="thanks-section">
    <div class="thanks-content">
      <h2>Thanks — we got your message.</h2>
      <p>
        A real person will reply within one business day. In the meantime, take
        a look at what we build:
      </p>
      <div class="thanks-links">
        <a href="/services">Our Services</a>
        <a class="secondary" href="/">Back to Home</a>
      </div>
    </div>
  </section>
</div>

<style>
  .thanks-section {
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

  .thanks-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1.5em;
    width: 85%;
    max-width: 700px;
  }

  .thanks-content h2 {
    font-size: 2rem;
    font-weight: 600;
  }

  .thanks-links {
    display: flex;
    flex-wrap: wrap;
    gap: 1em;
    justify-content: center;
  }

  .thanks-links a {
    padding: 1rem 1.5rem;
    font-size: 1.1em;
    text-decoration: none;
    font-weight: bold;
    color: white;
    background-color: var(--green);
    border-radius: 7px;
  }

  .thanks-links a.secondary {
    background-color: var(--blue);
  }
</style>

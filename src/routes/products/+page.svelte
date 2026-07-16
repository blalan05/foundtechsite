<script>
  import SEOHead from "$lib/SEOHead.svelte";
</script>

<SEOHead
  title="FoundTech Products — FullVue ERP, Importer & ShowVue"
  description="Software built by FoundTech: FullVue ERP for small business operations, the QuickBooks Inventory Importer, and ShowVue theater management (coming soon)."
  path="/products"
/>

<div class="products-page">
  <h1>Products</h1>
  <p class="intro">Software we build, run, and support ourselves.</p>

  <section class="product">
    <h2>FullVue</h2>
    <p>
      Our flagship product: a modular ERP for small businesses that bill time
      and materials—quotes with e-signing, jobs, scheduling, invoicing,
      purchasing, inventory, counter sales, and attendance in one system.
    </p>
    <a class="product-link" href="https://fullvue.io">Visit fullvue.io</a>
  </section>

  <section class="product">
    <h2>Inventory Importer</h2>
    <p>
      A desktop tool that bulk-imports thousands of inventory items into
      QuickBooks Online—originally built as a custom solution for a client.
    </p>
    <a class="product-link secondary" href="/products/inventory-importer">Learn more</a>
  </section>

  <section class="product">
    <h2>ShowVue <span class="badge">Coming soon</span></h2>
    <p>
      Theater management software for small theaters—production management,
      box office, concessions, and rentals. Currently in active development.
    </p>
    <a class="product-link secondary" href="/products/show-vue">Preview what's coming</a>
  </section>
</div>

<style>
  .products-page {
    max-width: 760px;
    margin: 0 auto;
    padding: 3em 1.5em 5em;
  }

  h1 {
    font-size: 2.5rem;
    font-weight: bold;
  }

  .intro {
    font-size: 1.2rem;
    margin: 0.5em 0 2em;
  }

  .product {
    border: 1px solid #d8dee4;
    border-radius: 12px;
    padding: 1.5em;
    margin: 1.25em 0;
  }

  .product h2 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 0.4em;
  }

  .product p {
    margin-bottom: 1em;
  }

  .badge {
    display: inline-block;
    font-size: 0.7em;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: white;
    background-color: var(--blue);
    border-radius: 999px;
    padding: 0.2em 0.9em;
    vertical-align: middle;
    margin-left: 0.5em;
  }

  .product-link {
    display: inline-block;
    padding: 0.7em 1.3em;
    text-decoration: none;
    font-weight: bold;
    color: white;
    background-color: var(--green);
    border-radius: 7px;
  }

  .product-link.secondary {
    background-color: var(--blue);
  }
</style>

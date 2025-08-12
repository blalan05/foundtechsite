<svelte:head>
  <title>FoundTech | Services</title>
  <meta
    name="keywords"
    content="Custom software, Business tools, Management, Software, Application, Planning, Job, Manufacturing, Inventory, Efficiency, FoundTech, Foundational Technologies"
  />
  <meta
    name="description"
    content="Discover the power and flexibility of custom software built for your
        business!"
  />
</svelte:head>

<div>
  <section class="intro-section">
    <div class="intro">
      <h1>Custom Software Solutions</h1>
      <h2>
        Discover the power and flexibility of custom software built for YOUR
        business!
      </h2>
      <a href="/contact">Get a Quote</a>
    </div>
    <!-- <div class="screenshot"></div>
    <div class="endorsements">
      <div class="endorsement"></div>
      <div class="endorsement"></div>
    </div> -->
  </section>

  <section class="features-section">
    <div class="feature">
      <div class="feature-image qb-inv-importer"></div>
      <div class="feature-text">
        <div class="text">
          <h2>QuickBooks Inventory Importer</h2>
          <p>
            QuickBooks Inventory Importer is a specialized desktop application
            developed as a custom solution for the need to efficiently manage
            large-scale inventory uploads to QuickBooks Online.
          </p>
          <p>
            This powerful tool was designed to handle mass quantities of
            inventory items, automating what would otherwise be a time-consuming
            manual process of entering hundreds or thousands of products into
            their accounting system.
          </p>
          <a href="/contact">Find Your Solution</a>
        </div>
      </div>
    </div>
    <div class="feature">
      <div class="feature-image inventory-control"></div>
      <div class="feature-text">
        <div class="text">
          <h2>Inventory Control System</h2>
          <p>
            The road module adds additional functionality for field work,
            allowing you to track labor and travel for offsite projects. With
            it, you can easily account for travel mileage and do bulk time entry
            for field crews.
          </p>
          <a href="/contact">Find Your Solution</a>
        </div>
      </div>
    </div>
  </section>

  <section class="pricing-section" style="display: none;">
    <div class="pricing">
      <h2>PRICING</h2>
    </div>
  </section>

  <section class="call-to-action-section">
    <div class="call-to-action">
      <h2>
        Get a software solution that addresses your specific business needs!
      </h2>
      <a class="cta-btn" href="/contact">Find Your Solution</a>
    </div>
  </section>
</div>

<style>
  :root {
    --blue: #2c5aa0;
    --lightblue: #8dc6e7;
    --green: #468a00;
  }

  h1 {
    font-size: 64px;
    background-image: linear-gradient(to right, var(--green), var(--blue));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    font-weight: bold;
    letter-spacing: 2%;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    letter-spacing: 2%;
  }

  h3 {
    font-size: 36px;
    font-weight: bold;
    letter-spacing: 2%;
  }

  .intro-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-image: url("$lib/assets/FullVue-bg-1.webp"),
      linear-gradient(to bottom, white, var(--lightblue), white);
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-size:
      1800px 1800px,
      cover;
    background-position:
      center 12rem,
      center center;
    z-index: 10;
  }

  .intro {
    width: 90%;
    margin: 12rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 2rem;
  }

  .screenshot {
    height: 50rem;
    width: 90%;
    margin-bottom: 10rem;
    border-radius: 3rem;
    box-shadow: 15px 20px 60px 20px #777777;
    background-color: darkslategray;
    /* background-image: url("$lib/assets/JobsDashboard.webp"); */
    background-repeat: no-repeat;
    background-size: cover;
  }

  .endorsements {
    display: none;
    height: 44%;
    width: 92%;
    gap: 4%;
    justify-content: center;
    align-items: center;
  }

  .endorsement {
    height: 65%;
    width: 50%;
    background-color: #c0c0c0;
    border-radius: 30px;
  }

  .features-section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .feature {
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    gap: 10%;
    margin: 3rem 0;
  }

  .feature-image {
    margin-top: 4rem;
    width: 80%;
    aspect-ratio: 7/8;
    background-color: #c0c0c0;
    border-radius: 30px;
    box-shadow: 10px 15px 45px 10px #777777;
  }

  .qb-inv-importer {
    background-color: darkslateblue;
    /* background-image: url("$lib/assets/JobSingle.webp"); */
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 41% top;
  }

  .core-icon {
    width: 2.7rem;
  }

  .inventory-control {
    background-color: darkslateblue;
    /* background-image: url("$lib/assets/RoadDialog.webp"); */
    background-repeat: no-repeat;
    background-size: cover;
  }

  .road-icon {
    width: 2.9rem;
    position: relative;
    left: 0.1rem;
  }

  .payroll {
    background-image: url("$lib/assets/PayrollSingle.webp");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: -130px top;
  }

  .payroll-icon {
    width: 3rem;
    position: relative;
    left: 0.2rem;
    top: -0.1rem;
  }

  .sales {
    background-image: url("$lib/assets/QuoteSingle.webp");
    background-repeat: no-repeat;
    background-size: cover;
  }

  .sales-icon {
    width: 3rem;
  }

  .feature-text {
    width: 80%;
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
  }

  .circle {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 6rem;
    aspect-ratio: 1/1;
    background-color: var(--blue);
    border-radius: 50%;
    border-style: solid;
    border-width: 0.5rem;
    border-color: var(--lightblue);
  }

  a {
    padding: 1rem 1.5rem;
    text-decoration: none;
    margin-top: 1rem;
    font-size: 1.25rem;
    font-weight: bold;
    color: white;
    background-color: var(--green);
    border-radius: 0.5rem;
    border-style: none;
    animation: reverse 0.2s;
  }

  a:hover {
    background-image: linear-gradient(to right, var(--green), var(--blue));
    animation: button 0.2s forwards;
  }

  @keyframes reverse {
    0% {
      background-image: linear-gradient(to right, var(--green), var(--blue));
    }
    10% {
      background-image: linear-gradient(
        to right,
        var(--green) 10%,
        var(--blue)
      );
    }
    20% {
      background-image: linear-gradient(
        to right,
        var(--green) 20%,
        var(--blue)
      );
    }
    30% {
      background-image: linear-gradient(
        to right,
        var(--green) 30%,
        var(--blue)
      );
    }
    40% {
      background-image: linear-gradient(
        to right,
        var(--green) 40%,
        var(--blue)
      );
    }
    50% {
      background-image: linear-gradient(
        to right,
        var(--green) 50%,
        var(--blue)
      );
    }
    60% {
      background-image: linear-gradient(
        to right,
        var(--green) 60%,
        var(--blue)
      );
    }
    70% {
      background-image: linear-gradient(
        to right,
        var(--green) 70%,
        var(--blue)
      );
    }
    80% {
      background-image: linear-gradient(
        to right,
        var(--green) 80%,
        var(--blue)
      );
    }
    90% {
      background-image: linear-gradient(
        to right,
        var(--green) 90%,
        var(--blue)
      );
    }
    100% {
      background: var(--green);
    }
  }

  @keyframes button {
    0% {
      background: var(--green);
    }
    10% {
      background-image: linear-gradient(
        to right,
        var(--green) 90%,
        var(--blue)
      );
    }
    20% {
      background-image: linear-gradient(
        to right,
        var(--green) 80%,
        var(--blue)
      );
    }
    30% {
      background-image: linear-gradient(
        to right,
        var(--green) 70%,
        var(--blue)
      );
    }
    40% {
      background-image: linear-gradient(
        to right,
        var(--green) 60%,
        var(--blue)
      );
    }
    50% {
      background-image: linear-gradient(
        to right,
        var(--green) 50%,
        var(--blue)
      );
    }
    60% {
      background-image: linear-gradient(
        to right,
        var(--green) 40%,
        var(--blue)
      );
    }
    70% {
      background-image: linear-gradient(
        to right,
        var(--green) 30%,
        var(--blue)
      );
    }
    80% {
      background-image: linear-gradient(
        to right,
        var(--green) 20%,
        var(--blue)
      );
    }
    90% {
      background-image: linear-gradient(
        to right,
        var(--green) 10%,
        var(--blue)
      );
    }
    100% {
      background-image: linear-gradient(to right, var(--green), var(--blue));
    }
  }

  .text {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .text h2,
  p {
    margin: 1rem 0;
  }

  .pricing-section {
    width: 100%;
    height: 110vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .pricing {
    background-color: #c0c0c0;
    width: 80%;
    height: 70%;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* aspect-ratio: 960/329;*/

  .call-to-action-section {
    width: 100%;
    aspect-ratio: 3/2;
    max-height: 649px;
    background-color: #212121;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("$lib/assets/FullVue-bg-2.webp");
    background-size: 1920px;
    background-repeat: no-repeat;
    background-position: center;
  }

  .call-to-action {
    display: flex;
    color: white;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 3rem 0;
    width: 75%;
  }

  @media (min-width: 768px) {
    .intro {
      width: 60%;
    }

    h2 {
      font-size: 2.5rem;
    }

    .screenshot {
      width: 70%;
    }

    .screenshot {
      width: 70%;
    }

    .feature {
      width: 80%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 10%;
      margin-bottom: 2%;
    }

    .feature:nth-child(even) {
      flex-direction: row-reverse;
    }

    .feature-image {
      width: 45%;
    }

    .feature-text {
      width: 55%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    .text {
      display: flex;
      align-items: flex-start;
      text-align: left;
    }

    .text p {
      font-size: 1.25rem;
    }

    .call-to-action {
      padding: 0;
    }
  }
</style>

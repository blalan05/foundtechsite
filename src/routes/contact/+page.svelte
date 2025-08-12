<svelte:head>
  <title>FoundTech | Contact</title>
  <meta
    name="keywords"
    content="ERP, Business tools, Management, Software, Application, Planning, CRM, Job, Management, Manufacturing, Profitability, Inventory, Efficiency, FullVue, FoundTech, Foundational Technologies"
  />
  <meta
    name="description"
    content="Foundational Technologies LLC offers a cloud-based ERP app to help improve profitability and grow small businesses. Contact us about FullVue!"
  />
</svelte:head>

<div>
  <section class="contact-section">
    <div class="hero-container">
      <h2>Reach out for your custom software solution</h2>
      <p>
        Fill out the form below to talk to our solutions team to see how we can
        help solve your business problems with software.
      </p>
    </div>

    <div class="form-container">
      <form name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <input
          type="email"
          class="email"
          name="businessEmail"
          placeholder="Email*"
        />
        <input
          type="tel"
          class="phone-number"
          name="phoneNumber"
          placeholder="Phone Number*"
        />
        <input
          type="text"
          class="first-name"
          name="firstName"
          placeholder="First Name*"
        />
        <input
          type="text"
          class="last-name"
          name="lastName"
          placeholder="Last Name*"
        />
        <div class="textarea">
          <!--<label for="message">Message</label>-->
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="5"
            placeholder="Message"
          ></textarea>
        </div>
        <div class="submit-btn-container">
          <input class="submit-btn" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  </section>
</div>

<style>
  h2 {
    font-weight: 600;
  }

  .contact-section {
    height: calc(120vh - 68px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-image: url("$lib/assets/Homepage-4.webp"),
      linear-gradient(to bottom, white, var(--lightblue), white 35%);
    background-size: cover;
    background-repeat: no-repeat;
  }

  .hero-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: auto;
    gap: 1em;
    width: 85%;
  }

  .form-container {
    width: 100%;
    padding: 0 0 7em 0;
  }

  form {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      "email"
      "phone-number"
      "first-name"
      "last-name"
      "textarea"
      "btn-container";
    text-align: center;
    gap: 2em;
    margin: 0 auto;
    width: 80%;
  }

  form input,
  form textarea {
    padding: 1em;
    width: 100%;
    font-size: 1em;
    border-radius: 4px;
    border-style: solid;
    border-width: 1px;
  }

  /* box-shadow: 4px 4px 7px 1px var(--lightblue); */

  .submit-btn-container {
    grid-area: btn-container;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .submit-btn {
    width: 35%;
    margin: auto;
    box-shadow: none;
    background-color: var(--green);
    color: white;
    padding: 0.5em 0;
    font-weight: bold;
    font-size: 1em;
  }

  .email {
    grid-area: email;
  }

  .phone-number {
    grid-area: phone-number;
  }

  .last-name {
    grid-area: last-name;
  }

  .first-name {
    grid-area: first-name;
  }

  .textarea {
    grid-area: textarea;
  }

  @media (min-width: 768px) {
    .contact-section {
      background-image: url("$lib/assets/Homepage-4.webp"),
        linear-gradient(to bottom, white 5%, var(--lightblue), white 50%);
    }

    h2 {
      font-size: 2.5rem;
      font-weight: 600;
    }

    p {
      font-size: 1.5rem;
    }

    form {
      max-width: 900px;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: auto;
      grid-template-areas:
        "email phone-number"
        "first-name last-name"
        "textarea textarea"
        "btn-container btn-container";
    }

    .submit-btn {
      width: 25%;
    }
  }
</style>

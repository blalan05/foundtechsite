<script>
  export const prerender = true
</script>

<div>
  <section class="contact-section">
    <div class="hero-container">
      <h2>This website is under construction</h2>
      <p>We appreciate your interest in our company and product. While the website is still under construction, please contact us for more information.</p>
    </div>

    <div class="form-container">
      <form name="contact" method="POST" data-netlify="true">
        <input type="email" class="email" name="businessEmail" placeholder="Email*">
        <input type="tel" class="phone-number" name="phoneNumber" placeholder="Phone Number*">
        <input type="text" class="first-name" name="firstName" placeholder="First Name*">
        <input type="text" class="last-name" name="lastName" placeholder="Last Name*">
        <div class="textarea">
          <label for="message">Message</label>
          <textarea name="message" id="message" cols="30" rows="5"></textarea>
        </div>
        <div class="submit-btn-container">
          <input class="submit-btn" type="submit" value="Submit">
        </div>
      </form>
    </div>
  </section>
</div>

<style>

  .contact-section {
    height: calc(120vh - 68px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(to bottom, var(--lightblue), white);
    border-top-style: solid;
    border-top-color: var(--green);
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
    background-image: url("$lib/assets/Homepage-4.webp");
    background-repeat: no-repeat;
    background-size: 100% 100%;
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

  form input {
    padding: 1em;
  }

  form input, form textarea {
    width: 100%;
    font-size: 1em;
    border-radius: 4px;
    border-style: none;
    box-shadow: 4px 4px 7px 1px var(--green);
  }

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
    padding: .5em 0;
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
    form {
      max-width: 900px;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: auto;
      grid-template-areas:
        "email phone-number"
        "first-name last-name"
        "textarea textarea"
        "btn-container btn-container"
    }

    .submit-btn {
      width: 25%;
    }
  }
</style>
<script>

  let businessEmail = "Business Email*";
  let phoneNumber = "Phone Number*";
  let firstName = "First Name*";
  let lastName = "Last Name*";

  let contacts = [];

  function handleSubmit() {
    const newContact = {
      email: businessEmail,
      number: phoneNumber,
      first: firstName,
      last: lastName
    }

    contacts = [newContact, ...contacts]

    console.log(contacts)

  }
</script>

<div>
  <section class="contact-section">
    <div class="hero-container">
      <h2>Contact us right now, or else!</h2>
    </div>

    <div class="form-container">
      <form on:submit|preventDefault="{handleSubmit}">
        <input type="text" name="businessEmail" bind:value={businessEmail}>
        <input type="text" name="phoneNumber" value="Phone Number*">
        <input type="text" name="firstName" value="First Name*">
        <input type="text" name="lastName" value="Last Name*">
        <input class="submit-btn" type="submit" value="ButtFarts">
      </form>
    </div>
  </section>
</div>

<style>

  .form-container {
    width: 100%;
    padding: 5em 0;
  }

  form {
    display: grid;
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2em;
    margin: 0 auto;
    width: 60%;
  }

  .submit-btn {
    width: 35%;
  }
</style>
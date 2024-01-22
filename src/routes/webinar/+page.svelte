<svelte:head>
  <title>FoundTech | Webinar</title>
  <meta name="keywords" content="ERP, Business tools, Management, Software, Application, Planning, Webinar, Job, Management, Manufacturing, Profitability, Inventory, Efficiency, FullVue, FoundTech, Foundational Technologies">
  <meta name="description" content="Help improve profitability and grow small businesses with FullVue, cloud-based ERP software. Sign up for our informational webinar to learn more.">
</svelte:head>

<div>
  <section class="section-one">
    <div class="section-one-content">
      <h3>Unlock Insights, Drive Growth!</h3>
      <h3>Register for the FullVue Webinar</h3>
      <p>Thursday 25th January, 2024</p>
      <p>11:00 AM (CST)</p>
    </div>
  </section>
  <section class="section-two">
    <div class="section-two-content-bg">
      <div class="section-two-content">
        <div class="why-attend">
          <p>Welcome to Foundational Technologies FullVue Webinar!</p>
          <p>Are you ready to revolutionize the way you harness data for business success? Join us for our exclusive webinar designed to empower businesses like yours with actionable insights and strategies.</p>
          <p>Why Attend Our Webinar?</p>
          <ul class="benefits-list">
            <li><b>Gain Actionable Insights:</b> Learn how <b>FullVue's</b> comprehensive tools can transform data into actionable insights that drive informed decision-making for your business.</li>
            <li><b>Enhance Operational Efficiency:</b> Discover how our platform streamlines operations, saving you time and resources while maximizing productivity.</li>
            <li><b>Harness Real-Time Data Visualization:</b> Explore the power of real-time data visualization and its impact on keeping your business agile in today's fast-paced market landscape.</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="sign-up-container">
      <p>Don't miss this opportunity to propel your business forward. Register now to secure your spot for this insightful webinar!</p>
      <form name="webinar" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="webinar">
        <input type="text" class="first-name" name="firstName" placeholder="First Name*" autocomplete="given-name">
        <input type="text" class="last-name" name="lastName" placeholder="Last Name*" autocomplete="family-name">
        <input type="text" class="company" name="company" placeholder="Company*" autocomplete="organization">
        <input type="email" class="email" name="businessEmail" placeholder="Email*" autocomplete="email">
        <div class="register-btn-container">
          <input class="register-btn" type="submit" value="Register">
        </div>
      </form>
    </div>
  </section>
  <section class="section-three">
    <div class="section-three-content">
      <p>Webinar Details</p>
      <ul>
        <li><b>Date:</b> January 25, 2024</li>
        <li><b>Time:</b> 11:00 AM CST</li>
        <li><b>Duration:</b> 30 Minutes</li>
      </ul>
      <p>Can't attend live? No worries! Registering guarantees you'll receive the webinar recordings afterward, ensuring you don't miss out on valuable insights.</p>
      <p>We're excited to have you join us on this journey toward unlocking powerful business insights with FullVue!</p>
    </div>  
  </section>
</div>

<style>
h1 {
  font-size: 64px;
  font-weight: bold;
  letter-spacing: 2%;
}

h2 {
  font-size: 32px;
  font-weight: bold;
  letter-spacing: 2%;
}

h3 {
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 2%;
}

ul {
  list-style: disc;
  padding-left: 2rem;
}

li {
  padding: .25rem 0 .25rem .5rem;
}

.section-one {
  height: 40vh;
  display: flex;
  justify-content: center;
  background-image: linear-gradient(
    175deg, 
    white 80%, 
    var(--blue), 
    var(--blue) 20%
  );
}

.section-one-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  width: 95%;
  gap: 4%;
}

.section-two {
  color: white;
  background-image: url('$lib/assets/Homepage-4.webp'), linear-gradient(
    175deg, 
    var(--blue) 80%,
    white 5% 
  );
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
}

.section-two-content-bg {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.section-two-content {
  flex-direction: column;
  width: 85%;
}

.section-two-content p {
  padding: 1rem 0 1rem 0;
  font-weight: bold;
}

.sign-up-container {
  text-align: center;
  width: 100%;
  padding: 3rem 0 2em 0;
}

.sign-up-container p {
  padding: 1rem 0 1rem 0;
  font-weight: bold;
  border-top: solid;
  margin: 0 auto;
  width: 90%
}

form {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    "first-name"
    "last-name"
    "company"
    "email"
    "btn-container";
  text-align: center;
  gap: 1em;
  margin: 0 auto;
}

form input {
  padding: 1em;
  width: 80%;
  margin: auto;
  font-size: 1em;
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
}

.register-btn-container {
  grid-area: btn-container;
  display: flex;
  justify-content: center;
  align-items: center;
}

.register-btn {
  width: 35%;
  margin: auto;
  box-shadow: none;
  background-color: var(--green);
  color: white;
  padding: .5em 0;
  font-weight: bold;
  font-size: 1em;
}

.section-three {
  display: flex;
  align-items: center;
  justify-content: center;
}

.section-three-content {
  padding: 1rem 0 1rem 0;
  flex-direction: column;
  width: 85%;
}

.section-three-content p {
  padding: 1rem 0 1rem 0;
  font-weight: bold;
}

@media (min-width: 768px) {
  .section-one {
    background-image: linear-gradient(
    175deg, 
    white 75%, 
    var(--blue), 
    var(--blue) 20%
    );
  }

  form {
    max-width: 1000px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    grid-template-areas:
      "email phone-number"
      "first-name last-name"
      "textarea textarea"
      "btn-container btn-container"
  }

  .register-btn {
    width: 25%;
  }
}

@media (min-width: 1201px) {
  h3 {
    font-size: 48px;
  }

  p {
    font-size: 24px;
  }

  ul {
    font-size: 24px;
  }

  .section-one {
    height: 50vh;
    background-image: linear-gradient(
    175deg, 
    white 70%, 
    var(--blue), 
    var(--blue) 20%
    );
  }
}

</style>
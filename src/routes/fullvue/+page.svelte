<div>
  <section class="intro-section">
    <div class="intro">
      <h2>Build smarter management pipelines with ERP software for small businesses.</h2>
      <a href="/contact">Book A FullVue Demo</a>
    </div>
    <div class="screenshot"></div>
    <div class="endorsements">
      <div class="endorsement"></div>
      <div class="endorsement"></div>
    </div>
  </section>

  <section class="features-section">
    <div class="feature">
      <div class="feature-image core"></div>
      <div class="feature-text">
        <div class="circle"></div>
        <div class="text">
          <h2>Core Module</h2>
          <p>
            The core module is the base software, with it you will be able to record customers, 
            set up employee profiles, track jobs/projects, and set up basic material lists and 
            costs that you then be  linked to those jobs.
          </p>  
          <a href="/contact">Get A Quote</a>
        </div>
      </div>
    </div>
    <div class="feature">
      <div class="feature-image road"></div>
      <div class="feature-text">
        <div class="circle"></div>
        <div class="text">
          <h2>Road Module</h2>
          <p>
            The road module adds additional functionality for field work, 
            allowing you to track labor and travel for offsite projects.  
            With it, you can easily account for travel mileage and do bulk time entry for field crews.
          </p>
          <a href="/contact">Get A Quote</a>
        </div>
      </div>
    </div>
    <div class="feature">
      <div class="feature-image payroll"></div>
      <div class="feature-text">
        <div class="circle"></div>
        <div class="text">
          <h2>Payroll Module</h2>
          <p>
            Payroll has all the functionality you need to track employee hours.  Manage employee punches and leave, 
            create employee schedules then export the data to a spreadsheet to pdf.
          </p>
          <a href="/contact">Get A Quote</a>
        </div>
      </div>
    </div>
    <div class="feature">
      <div class="feature-image"></div>
      <div class="feature-text">
        <div class="circle"></div>
        <div class="text">
          <h2>Sales Module</h2>
          <p>
            Track and record your interactions with your customers and keep everything plotted on a clear timeline 
            that is visible to the entire team in surveys.  Build and send sales quotes and create jobs from them 
            once the customer accepts the quote.
          </p>
          <a href="/contact">Get A Quote</a>
        </div>
      </div>
    </div>
  </section>

  <section class="pricing-section">
    <div class="pricing">
      <h2>PRICING</h2>
    </div>
  </section>

  <section class="call-to-action-section">
    <div class="call-to-action">
      <h2>Bring visibility and increased efficiency to your management and make more informed decisions.</h2>
      <a class="cta-btn" href="/contact">Book A Demo</a>
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
    background-image: url('$lib/assets/FullVue-bg-1.webp'), linear-gradient(to bottom, white, #2c5aa088, white);
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-size: 1800px 1800px, cover;
    background-position: center 19rem, center center;
    z-index: 10;
  }

  .intro {
    width: 90%;
    margin: 19rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 2rem;
  }

  /*
  .intro h2 {
    font-size: 2rem;
  }
  */
  .screenshot {
    height: 40rem;
    width: 90%;
    margin-bottom: 20rem;
    border-radius: 3rem;
    box-shadow: 15px 20px 60px 20px #777777;
    background-image: url("$lib/assets/JobsDashboard.webp")
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

  .core {
    background-image: url('$lib/assets/JobSingle.webp')
  }

  .feature-text {
    width: 80%;
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
  }

  .circle {
    width: 115px;
    aspect-ratio: 1/1;
    background-color: var(--blue);
    border-radius: 50%;
    border-style: solid;
    border-width: 15px;
    border-color: var(--lightblue);
  }

  button {
    padding: 25px 35px;
    font-size: 20px;
    font-weight: bold;
    color: white;
    background-color: var(--green);
    border-radius: 7px;
    border-style: none;
    transition: background-image 10s;
  }

  button:hover {
    background-image: linear-gradient(to right, var(--green), var(--blue))
  }

  a {
    padding: .5rem 1rem;
    text-decoration: none;
    margin-top: 1rem;
    font-size: 1rem;
    font-weight: bold;
    color: white;
    background-color: var(--green);
    border-radius: .5rem;
    border-style: none;
    transition: background-image 10s;
  }

  a:hover {
    background-image: linear-gradient(to right, var(--green), var(--blue))
  }

  .text {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .text h2, p, button {
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
    background-image: url('$lib/assets/FullVue-bg-2.webp');
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
    width: 75%;
  }


  @media (min-width: 768px) {
    /*
    .intro-section {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 2000px;
      width: 100%;
      background-image: url('$lib/assets/FullVue-bg-1.webp');
      background-repeat: no-repeat;
      background-size: 100% 80%;
      background-position: center bottom;
    }
    */
    .intro {
      width: 60%;
    }

    h2 {
      font-size: 2.5rem;
    }
    
    .screenshot {
      width: 70%;
    }
    /*
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
    */
    

    .feature {
      width: 80%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 10%;
      margin-bottom: 10%;
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
    /*
   
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

    .call-to-action-section {
      height: 80vh;
      width: 100%;
      background-color: black;
      display: flex;
      justify-content: center;
      align-items: center;
      background-image: url('$lib/assets/FullVue-bg-2.webp');
      background-size: 1920px;
      background-repeat: no-repeat;
      background-position: center bottom;
    }

    .call-to-action {
      display: flex;
      color: white;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      gap: 10%;
      height: 40%;
    }
    */
  }



</style>
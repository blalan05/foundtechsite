<div>
  <section class="intro-section">
    <div class="intro">
      <h2>Intellegent, end-to-end business management software</h2>
      <button>Book A FullVue Demo</button>
    </div>
    <div class="screenshot"></div>
    <div class="endorsements">
      <div class="endorsement"></div>
      <div class="endorsement"></div>
    </div>
  </section>

  <section class="features-section">
    <div class="feature">
      <div class="feature-image"></div>
      <div class="feature-text">
        <div class="circle"></div>
        <div class="text">
          <h2>Feature of the Software</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio magnam 
            quasi molestiae, amet corrupti magni veniam possimus quis sunt tempore 
            tenetur, deserunt ab voluptates iure necessitatibus similique totam nam 
            at autem ipsam fugit nemo? Eligendi nemo impedit qui excepturi, maxime 
            ipsum rerum aspernatur quis voluptatibus! Velit optio veniam laborum. 
            Repudiandae.
          </p>  
          <button>Get A Quote</button>
        </div>
      </div>
    </div>
    <div class="feature">
      <div class="feature-image"></div>
      <div class="feature-text">
        <div class="circle"></div>
        <div class="text">
          <h2>Feature of the Software</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio magnam 
            quasi molestiae, amet corrupti magni veniam possimus quis sunt tempore 
            tenetur, deserunt ab voluptates iure necessitatibus similique totam nam 
            at autem ipsam fugit nemo? Eligendi nemo impedit qui excepturi, maxime 
            ipsum rerum aspernatur quis voluptatibus! Velit optio veniam laborum. 
            Repudiandae.
          </p>
          <button>Get A Quote</button>
        </div>
      </div>
    </div>
  </section>

  <section class="pricing-section">
    <div class="pricing">
      <h1>PRICING</h1>
    </div>
  </section>

  <section class="call-to-action-section">
    <div class="call-to-action">
      <h1>FullVue does the hard work for you.</h1>
      <button>Book A Demo</button>
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
    font-size: 48px;
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
    background-size: 1800px 1800px;
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

  .intro h2 {
    font-size: 2rem;
  }

  .screenshot {
    height: 40rem;
    width: 90%;
    margin-bottom: 20rem;
    border-radius: 3rem;
    box-shadow: 15px 20px 60px 20px #777777;
    border-style: solid;
    border-width: 10px;
    background-color: #c0c0c0;
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
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10%;
    margin: 3rem 0;
  }

  .feature:nth-child(even) {
    flex-direction: row-reverse;
  }

  .feature-image {
    width: 45%;
    height: 70vh;
    background-color: #c0c0c0;
    border-radius: 30px;
    box-shadow: 10px 15px 45px 10px #777777;
  }

  .feature-text {
    width: 55%;
    display: flex;
    flex-direction: column;
  }

  .circle {
    height: 115px;
    width: 115px;
    min-height: 115px;
    margin: 1rem 0;
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

  .text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
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

    .intro {
      height: 900px;
      width: 60%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      gap: 30px;
    }

    .screenshot {
      height: 900px;
      width: 70%;
      border-radius: 30px;
      box-shadow: 15px 20px 60px 20px #777777;
      border-style: solid;
      border-width: 10px;
      background-color: #c0c0c0;
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
      width: 80%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10%;
      margin-bottom: 10%;
    }

    .feature-image {
      width: 45%;
      height: 70vh;
      background-color: #c0c0c0;
      border-radius: 30px;
      box-shadow: 10px 15px 45px 10px #777777;
    }

    .feature-text {
      width: 55%;
      height: 70vh;
      display: flex;
      flex-direction: column;
      row-gap: 10%;
    }

    .circle {
      height: 115px;
      width: 115px;
      min-height: 115px;
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

    .text {
      height: 60vh;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 10%;
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
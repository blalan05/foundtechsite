<div>
  <section class="intro-section">
    <div class="intro-top">
      <h2>We're here to support small businesses</h2>
    </div>
    <div class="intro-bottom">
      <div class="images">
        <div class="front"></div>
        <div class="back"></div>
      </div>
      <div class="mission">
        <h3>Why we started</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quaerat 
          id aspernatur nostrum. Tempora atque velit harum, quasi placeat corrupti 
          nulla, sapiente aliquam sequi saepe dolorum itaque sint, autem minima nihil 
          libero. Optio eius culpa vel nihil sed, doloribus, ex, aperiam rem quasi 
          hic rerum possimus non beatae quas dolor!
        </p>
        <h3>Where we're going</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quaerat 
          id aspernatur nostrum. Tempora atque velit harum, quasi placeat corrupti 
          nulla, sapiente aliquam sequi saepe dolorum itaque sint, autem minima nihil 
          libero. Optio eius culpa vel nihil sed, doloribus, ex, aperiam rem quasi 
          hic rerum possimus non beatae quas dolor!
        </p>
        <button>Reach Out</button>
      </div>
    </div>
  </section>

  <section class="pillars-section">
    <div class="pillars-title">
      <h2>The pillars upon which we are built.</h2>
    </div>
    
    <div class="pillars">
      <div class="pillar">
        <div class="circle"></div>
        <h3>pillar</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, expedita!</p>
      </div>
      <div class="pillar">
        <div class="circle"></div>
        <h3>pillar</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, expedita!</p>
      </div>
      <div class="pillar">
        <div class="circle"></div>
        <h3>pillar</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, expedita!</p>
      </div>
      <div class="pillar">
        <div class="circle"></div>
        <h3>pillar</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, expedita!</p>
      </div>
      <div class="pillar">
        <div class="circle"></div>
        <h3>pillar</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, expedita!</p>
      </div>
      <div class="pillar">
        <div class="circle"></div>
        <h3>pillar</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, expedita!</p>
      </div>
    </div>
  </section>

  <section class="bio-section">
    <div class="bio-title">
      <h3>Meet the team</h3>
    </div>
    <div class="bios">
      <div class="bio"></div>
      <div class="bio"></div>
    </div>
  </section>

  <section class="call-to-action-section">
    <h2>Lets lay the foundation for your small business success!</h2>
    <button>Reach Out Today</button>
  </section>
</div>

<style>

  .intro-section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .intro-top {
    width: 55%;
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .intro-bottom {
    width: 100%;
    background-color: #212121;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .images {
    width: 95%;
  }

  .front {
    width: 65%;
    aspect-ratio: 2/3;
    background-color: #c0c0c0;
    border-radius: 30px;
    position: relative;
    left: 35%;
    z-index: 20;
    margin-top: -10%;
  }

  .back {
    width: 90%;
    aspect-ratio: 4/5;
    background-color: aqua;
    border-radius: 30px;
    position: relative;
    left: -2%;
    margin-top: -10%;
    z-index: 10;
  }

  .mission {
    color: white;
    width: 85%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 2rem 0;
  }

  .pillars-section {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .pillars-title {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 4rem;
  }

  .pillars {
    width: 95%;
    display: flex;
    flex-wrap: wrap;
    gap: 5%;
    justify-content: center;
    align-items: center;
  }

  .circle {
    width: 110px;
    aspect-ratio: 1/1;
    border-style: solid;
    border-radius: 50%;
    border-width: 15px;
    border-color: var(--lightblue);
    background-color: var(--blue);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .pillar {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 3rem 0;
  }

  .pillar h3 {
    margin: 3rem 0;
  }

  .bio-section {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .bio-title {
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-bottom: 50px;
  }

  .bios{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 5rem;
  }

  .bio {
    width: 90%;
    margin-bottom: 2rem;
    max-width: 500px;
    aspect-ratio: 2/3;
    border-radius: 30px;
    background-color: var(--green);
  }

  .call-to-action-section {
    width: 100%;
    aspect-ratio: 3/2;
    max-height: 650px;
    color: white;
    background-color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 7%;
  }

  @media (min-width: 768px) {
    .pillar {
      width: 30%;
    }

    .bios {
      flex-direction: row;
      justify-content: space-evenly;
    }

    .bio {
      margin: 0 1rem;
    }
  }
</style>
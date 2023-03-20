<div>
  <section class="intro-section">
    <div class="intro-top">
      <h1>We're here to support small businesses</h1>
    </div>
    <div class="intro-bottom">
      <div class="images">
        <div class="front"></div>
        <div class="back"></div>
      </div>
      <div class="mission">
        <h1>Why we started</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quaerat 
          id aspernatur nostrum. Tempora atque velit harum, quasi placeat corrupti 
          nulla, sapiente aliquam sequi saepe dolorum itaque sint, autem minima nihil 
          libero. Optio eius culpa vel nihil sed, doloribus, ex, aperiam rem quasi 
          hic rerum possimus non beatae quas dolor!
        </p>
        <h1>Where we're going</h1>
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
      <h1>The pillars upon which we are built.</h1>
    </div>
    
    <div class="pillars">
      <div class="pillar">
        <div class="circle"></div>
        <h1>pillar</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, expedita!</p>
      </div>
      <div class="pillar">
        <div class="circle"></div>
        <h1>pillar</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, expedita!</p>
      </div>
      <div class="pillar">
        <div class="circle"></div>
        <h1>pillar</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, expedita!</p>
      </div>
      <div class="pillar">
        <div class="circle"></div>
        <h1>pillar</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, expedita!</p>
      </div>
      <div class="pillar">
        <div class="circle"></div>
        <h1>pillar</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, expedita!</p>
      </div>
      <div class="pillar">
        <div class="circle"></div>
        <h1>pillar</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, expedita!</p>
      </div>
      <div class="pillar">
        <div class="circle"></div>
        <h1>pillar</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, expedita!</p>
      </div>
      <div class="pillar">
        <div class="circle"></div>
        <h1>pillar</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, expedita!</p>
      </div>
    </div>
  </section>

  <section class="bio-section">
    <div class="bio-title">
      <h1>Meet the team</h1>
    </div>
    <div class="bios">
      <div class="bio"></div>
      <div class="bio"></div>
      <div class="bio"></div>
    </div>
  </section>

  <section class="call-to-action-section">
    <h1>Lets lay the foundation for your small business success!</h1>
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
    height: 160vh;
    background-color: #212121;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .images {
    width: 50%;
    height: 100%;
  }

  .mission {
    border-style: solid;
    border-color: white;
    width: 50%;
    height: 100%;
  }

  .front {
    width: 65%;
    height: 45%;
    background-color: #c0c0c0;
    border-radius: 30px;
    position: relative;
    top: -7%;
    left: 40%;
    z-index: 20;
  }

  .back {
    width: 90%;
    height: 65%;
    background-color: aqua;
    border-radius: 30px;
    position: relative;
    left: -2%;
    top: -20%;
    z-index: 10;
  }

  .mission {
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0 10%;
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
    height: 40vh;
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
    height: 110px;
    width: 110px;
    border-style: solid;
    border-radius: 50%;
    border-width: 15px;
    border-color: lightblue;
    background-color: aqua;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .pillar {
    width: 21.25%;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 5%;
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
    width: 95%;
    display: flex;
    gap: 5%;
    justify-content: center;
    align-items: center;
    margin-bottom: 200px;
  }

  .bio {
    width: 30%;
    height: 700px;
    border-radius: 30px;
    background-color: aqua;
  }

  .call-to-action-section {
    height: 650px;
    width: 100%;
    color: white;
    background-color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 7%;
  }
</style>
<script>
  // @ts-ignore
  import { PerspectiveCamera, TextureLoader, SpriteMaterial, WebGLRenderer, Sprite, Scene } from 'three';

  import { onMount } from 'svelte'
  import spriteDot from '$lib/assets/DotBlack.png'

  onMount(async () => {

    var SEPARATION = 150,
      AMOUNTX = 72,
      AMOUNTY = 12;
  
    var parentContainer = document.querySelector(".hero-container-bg")
    var container
    // @ts-ignore
    var camera, scene, renderer;
    
    // @ts-ignore
    var particles,
    particle,
    count = 0;
    
    var mouseX = 85,
      mouseY = -342;
  
    var windowHalfX = document.body.clientWidth / 2;
    var windowHalfY = window.innerHeight / 2;
  
    init();
    animate();
  
    function init() {
      container = document.createElement("div");
      // @ts-ignore
      parentContainer.prepend(container);
  
      camera = new PerspectiveCamera(
        100,
        document.body.clientWidth / (window.innerHeight - 68),
        1,
        3000
      );
      camera.position.z = 1000;
  
      scene = new Scene();
  
      particles = new Array();

  
      var map = new TextureLoader().load(spriteDot)
      var material = new SpriteMaterial({ map })
  
      var i = 0;
  
      for (var ix = 0; ix < AMOUNTX; ix++) {
        for (var iy = 0; iy < AMOUNTY; iy++) {
          particle = particles[i++] = new Sprite(material);
          particle.position.x = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
          particle.position.z = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2;
          scene.add(particle);
        }
      }
  
      renderer = new WebGLRenderer({ alpha: true });
      renderer.setSize(document.body.clientWidth, (window.innerHeight - 68));
      container.appendChild(renderer.domElement);
  
      // document.addEventListener("mousemove", onDocumentMouseMove, false);
      // document.addEventListener("touchstart", onDocumentTouchStart, false);
      // document.addEventListener("touchmove", onDocumentTouchMove, false);
  
      window.addEventListener("resize", onWindowResize, false);
    }
  
    function onWindowResize() {
      windowHalfX = document.body.clientWidth / 2;
      windowHalfY = document.body.clientHeight / 2;
      // @ts-ignore
      camera.aspect = document.body.clientWidth / (window.innerHeight - 68);
      // @ts-ignore
      camera.updateProjectionMatrix();
  
      // @ts-ignore
      renderer.setSize(document.body.clientWidth, (window.innerHeight - 68));
    }
  
    //
  
    // function onDocumentMouseMove(event) {
    //   mouseX = event.clientX - windowHalfX;
    //   mouseY = event.clientY - windowHalfY;
    // }
  
    // function onDocumentTouchStart(event) {
    //   if (event.touches.length === 1) {
    //     event.preventDefault();
  
    //     mouseX = event.touches[0].pageX - windowHalfX;
    //     mouseY = event.touches[0].pageY - windowHalfY;
    //   }
    // }
  
    // function onDocumentTouchMove(event) {
    //   if (event.touches.length === 1) {
    //     event.preventDefault();
  
    //     mouseX = event.touches[0].pageX - windowHalfX;
    //     mouseY = event.touches[0].pageY - windowHalfY;
    //   }
    // }
  
    //
  
    function animate() {
      requestAnimationFrame(animate);
  
      render();
    }
  
    function render() {
      // @ts-ignore
      camera.position.x += (mouseX - camera.position.x) * 0.05;
      // @ts-ignore
      camera.position.y += (-mouseY - camera.position.y) * 0.05;
      // @ts-ignore
      camera.lookAt(scene.position);
  
      var i = 0;
  
      for (var ix = 0; ix < AMOUNTX; ix++) {
        for (var iy = 0; iy < AMOUNTY; iy++) {
          // @ts-ignore
          particle = particles[i++];
          particle.position.y =
            Math.sin((ix + count) * 0.3) * 150 + Math.sin((iy + count) * 0.5) * 150;
          particle.scale.x = particle.scale.y =
            (Math.sin((ix + count) * 0.3) + 1) * 8 +
            (Math.sin((iy + count) * 0.5) + 1) * 8;
        }
      }
  
      // @ts-ignore
      renderer.render(scene, camera);
  
      count += 0.05;
    }
  })
</script>

<div>
  <section class="hero-container">
    <div class="hero-container-bg" style="overflow: hidden"></div>
    <div class="hero-content">
      <h2>Affordable and intuitive software tools, reinforcing the foundations of your business.</h2>
      <p>
        FoundTech recognizes the challenges small businesses face, we build tools that help you track operations, manage production, and make more informed decisions for your company.
      </p>
      <button>Our Services</button>
    </div>
  </section>

  <section class="cards-callout-bg">
    <div class="preview-cards-container">
      <div class="preview-cards">
        <h2>Maximize your efficency and profitability</h2>
        <div class="cards">
          <div class="card-bg">
            <div class="circle">1</div>
            <h3>Application Development</h3>
            <div class="card-graphic app-dev"></div>
          </div>
          <div class="card-bg">
            <div class="circle">2</div>
            <h3>Software Integration</h3>
            <div class="card-graphic"></div>
          </div>
          <div class="card-bg">
            <div class="circle">3</div>
            <h3>Maintenance & Support</h3>
            <div class="card-graphic"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="fullvue-callout-container">
      <div class="fullvue-callout">
        <div class="callout-ad">
          <h2>Introducing</h2>
          <h1>FullVue</h1>
          <p>
            Your ERP toolbox for effective small business management.
          </p>
          <a href="/fullvue">Check It Out</a>
        </div>
        <div class="callout-screenshots">
          <div class="screenshot-back">
            <div class="screenshot-front"></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="quote-container">
  </section>

  <section class="approach-cta-bg">
    <div class="approach-container">
      <div class="approach">
        <h2>Driving Principles</h2>
        <p>
          FoundTech aims to create affordable and intuitive software solutions which allows small businesses to grow sustainably. These driving principles guide how we interact with and serve our customers and eachother:
        </p>
        <a href="/about">About Us</a>
      </div>
      <div class="pillars">
        <div>
          <div class="circle">1</div>
          <div class="pillar-text">
            <h3>Integrity</h3>
            <p>We always treat you how we want to be treated - openly and directly.</p>
          </div>
        </div>
        <div>
          <div class="circle">2</div>
          <div class="pillar-text">
            <h3>Commitment</h3>
            <p>Your success determines our success. We are committed to following through on our customers’ challenges by providing excellent support. Once we take on your challenge, we won’t quit until it’s solved.</p>
          </div>
        </div>
        <div>
          <div class="circle">3</div>
          <div class="pillar-text">
            <h3>Enthusiam</h3>
            <p>We are always excited about solving small business problems with software tools designed for companies like yours.</p>
          </div>
        </div>
        <div>
          <div class="circle">4</div>
          <div class="pillar-text">
            <h3>Continuous Improvement</h3>
            <p>We constantly learn new ways to improve our methods, products, and customer experience. Our willingness to change, iterate on ideas, and be flexible in our approach equips us to build tools that constantly improve.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="call-to-action-section">
      <div class="call-to-action">
        <h2>Streamline your processes with software designed for small businsesses. </h2>
        <p>
          Start building a more efficient operation with intuitive software tools geared toward overcoming the hurdles that small businesses face.
        </p>
        <button>Reach Out Today</button>
      </div>
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

  .hero-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 68px);
    height: calc(100svh - 68px);
    background-color: #ffffff;
    position: relative;
  }
  
  .hero-container-bg {
    position: absolute;
    z-index: 15;
  }
  
  .hero-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    gap: 7%;
    color: black;
    width: 90%;
    text-align: center;
    position: relative;
    z-index: 21;
  }

  .hero-content p {
    width: 75%;
    font-size: 1.2em;
  }

  button {
    padding: 0.65em;
    font-size: 1.5em;
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

  .cards-callout-bg {
    background-image: url("$lib/assets/Hoempage-2.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: bottom;
  }

  .preview-cards {
    width: 95%;
    margin: 0 auto;
    position: relative;
    z-index: 40;
  }

  .preview-cards h2 {
    font-size: 2em;
    text-align: center;
    margin-bottom: 0.8em;
  }

  /* .preview-cards div h2 {
    margin: 0 0 1em 0.5em;
    font-size: 36px; 
  } */
  
  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2em;
    z-index: 60;
  }
  
  .cards .card-bg {
    display: flex;
    width: 100%;
    height: 15em;
    background-color: var(--green);
    border-radius: 20px;
    font-size: 2em;
    position: relative;
  }
  
  .cards .card-bg .circle {
    display: flex;
    box-sizing: border-box;
    width: 2.4em;
    min-width: 2.4em;
    height: 2.4em;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: solid;
    border-width: 0.4em;
    color: var(--lightblue);
    border-color: var(--lightblue);
    background-color: var(--blue);
    margin: 0.4em 0 0 0.4em;
  }

  .cards .card-bg h3 {
    display: inline-block;
    margin: 0.5em 1em 0.5em 2em;
    color: white;
  }

  .cards .card-bg .card-graphic {
    background-size: cover;
    position: absolute;
    height: 11em;
    bottom: 0;
    margin-left: 50px;
    border-radius: 20px 0 20px 0;
    width: calc(100% - 50px);
  }

  .cards .card-bg .card-graphic.app-dev {
    background-image: url('$lib/assets/app-dev-light.png');
  }

  .fullvue-callout-container {
    margin-top: 1em;
    width: 100%;
  }

  .fullvue-callout {
    padding: 0.6em 0.6em 0 0.6em;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .callout-ad {
    display: flex;
    flex-direction: column;
    height: 400px;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
    text-shadow: 2px 4px 1em var(--blue);
  }
  

  .callout-ad p {
    margin: 0 0 1.5em 0;
    font-size: 28px;
  }

  .callout-screenshots {
    display: flex;
    height: 25em;
    align-items: flex-end;
    width: 95%;
  }

  .callout-screenshots .screenshot-back {
    background-color: var(--green);
    width: 75%;
    height: 85%;
    position: relative;
    left: 20%;
    display: flex;
    align-items: flex-end;
    border-radius: 35px 35px 0 0;
  }

  .callout-screenshots .screenshot-front {
    background-image: url('$lib/assets/JobSingle.png');
    background-size: cover;
    width: 75%;
    height: 75%;
    position: relative;
    left: -20%;
    border-radius: 35px 35px 0 0;
  }

  .quote-container {
    background-image: url("$lib/assets/quote_background.png");
    background-repeat: no-repeat;
    background-size: cover;
    height: 4.5em;
    width: 100%;
    box-shadow: 0 25px 50px 0 #777777;
  }

  .approach-cta-bg {
    background-image: url("$lib/assets/Homepage-4.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: bottom;
  }

  .approach-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 95%;
  }

  .approach {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 80%;
    height: 30em;
    margin: auto;
  }

  .approach * {
    padding: 1em 0;
  }

  .pillars {
    display: flex;
    flex-direction: column;
    row-gap:  5%;
    width: 90%;
    justify-content: center;
    height: 90%;
  }

  .pillars div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: .5em 0;
  }

  .pillars div .circle {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 6em;
    width: 6em;
    height: 6em;
    color: var(--lightblue);
    border-radius: 50%;
    border-width: 0.5em;
    border-color: var(--lightblue);
    border-style: solid;
    background-color: var(--blue);
  }

  .pillars div .pillar-text {
    display: flex;
    width: 75%;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .pillar-text * {
    margin: .5em 0;
  }

  .call-to-action-section {
    display: flex;
    height: 55em;
    width: 100%;
    justify-content: center;
    align-items: center;
  }

  .call-to-action {
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    row-gap: 10%;
  }

  @media (min-width: 768px) {
    .preview-cards {
      width: 100%;
    }

    .cards .card-bg {
      width: calc(33.33333% - 2em);
      height: 18em;
      flex-direction: column;
    }

    .cards .card-bg .card-graphic {
      height: 12em;
    }

    .preview-cards div h2 {
      margin-left: 1em;
      font-size: 48px;
    }

    .cards div h2 {
      font-size: 32px;
      margin: 0.5em 1em 0.5em 1.5em;
    }

    .fullvue-callout-container {
      height: 50em;
    }

    .fullvue-callout {
      flex-direction: row;
      height: 100%;
    }

    .callout-ad {
      display: block;
      width: 35%;
      margin: auto 5%;
      position: relative;
      text-align: left;
    }

    .callout-screenshots {
      display: flex;
      width: 65%;
      height: 100%;
      align-items: flex-end;
    }
  }

  @media (min-width: 1300px) {
    .preview-cards {
      width: 95%;
    }

    .cards div h2 {
      font-size: 48px;
    }

    .approach-container {
      flex-direction: row;
      height: 55em;
    }

    .approach {
      justify-content: flex-start;
      align-items: flex-start;
      text-align: left;
      width: 45%;
      height: 55%;
      margin: 0 5%;
      padding: 0 2em;
    }

    .pillars {
      display: grid;
      grid-template-columns: 1fr;
      grid-auto-rows: 1fr;
      height: 70%;
      gap: 0;
      width: 55%;
    }

    .pillars div {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      margin: 0 2em 0 0;
    }

    .pillars div .pillar-text {
      align-items: flex-start;
      text-align: left;
    }

    .pillar-text * {
      margin: 0 0 .5em 0;
    }
  }
</style>

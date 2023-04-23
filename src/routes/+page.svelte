<script>
  import { PerspectiveCamera, TextureLoader, SpriteMaterial, WebGLRenderer, Sprite, Scene } from 'three';

  import { onMount } from 'svelte'
  import spriteDot from '$lib/assets/DotBlack.png'

  onMount(async () => {

    var SEPARATION = 150,
      AMOUNTX = 72,
      AMOUNTY = 12;
  
    var parentContainer = document.querySelector(".hero-container-bg")
    var container
    var camera, scene, renderer;
    
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
      camera.aspect = document.body.clientWidth / (window.innerHeight - 68);
      camera.updateProjectionMatrix();
  
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
      camera.position.x += (mouseX - camera.position.x) * 0.05;
      camera.position.y += (-mouseY - camera.position.y) * 0.05;
      camera.lookAt(scene.position);
  
      var i = 0;
  
      for (var ix = 0; ix < AMOUNTX; ix++) {
        for (var iy = 0; iy < AMOUNTY; iy++) {
          particle = particles[i++];
          particle.position.y =
            Math.sin((ix + count) * 0.3) * 150 + Math.sin((iy + count) * 0.5) * 150;
          particle.scale.x = particle.scale.y =
            (Math.sin((ix + count) * 0.3) + 1) * 8 +
            (Math.sin((iy + count) * 0.5) + 1) * 8;
        }
      }
  
      renderer.render(scene, camera);
  
      count += 0.05;
    }
  })
</script>

<div>
  <section class="hero-container">
    <div class="hero-container-bg" style="overflow: hidden"></div>
    <div class="hero-content">
      <h2>Affordable and Scalable Software Solutions for Small Businesses.</h2>
      <p>
        Running a small business can be challenging. That's why we offer a range of user-friendly software tools to help.
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
            A full suite of features to tackle all of your small business needs.
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
          FoundTech aims to create affordable and approachable turnkey software solutions for small businesses so you can sustainably grow your company. These driving principles guide and motivate our team to deliver the tools you need for success:
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
        <h2>Create clarity and increase effectiveness with FullVue</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eos
          cupiditate natus. Ex nostrum dolorem vero odio, atque, repellat ad, nam
          qui nobis inventore temporibus repellendus consequatur officiis beatae
          iste.
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
    width: 75%;
    text-align: center;
    position: relative;
    z-index: 21;
  }

  .hero-content p {
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
    height: 8em;
    background-color: var(--green);
    border-radius: 20px;
    font-size: 2em;
    position: relative;
  }
  
  .cards .card-bg .circle {
    display: flex;
    box-sizing: border-box;
    width: 2.4em;
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
    height: 5em;
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
    padding: 0.6em;
  }

  .callout-ad {
    height: 400px;
    padding-top: 2em;
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
    height: 40px;
    align-items: flex-end;
    width: 95%;
  }

  .callout-screenshots .screenshot-back {
    background-color: var(--green);
    width: 82%;
    height: 85%;
    position: relative;
    left: 20%;
    display: flex;
    align-items: flex-end;
    border-radius: 35px 35px 0 0;
  }

  .callout-screenshots .screenshot-front {
    background-color: var(--lightblue);
    width: 65%;
    height: 65%;
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
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin: 10% 5% 10% 5%;
    row-gap: 6%;
    height: 60%;
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
    gap: 10%;
  }

  .pillars div .circle {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 4em;
    width: 4em;
    height: 4em;
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
  }

  .call-to-action-section {
    display: flex;
    height: 100vh;
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

    .cards div {
      width: calc(33.33333% - 3.5%);
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
      height: 105vh;
    }

    .fullvue-callout {
      flex-direction: row;
      height: 105vh;
    }

    .callout-ad {
      display: block;
      width: 35%;
      margin: auto 5%;
      position: relative;
      text-align: left;
      top: -5%;
    }

    .callout-screenshots {
      display: flex;
      width: 65%;
      height: 105vh;
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
      height: 110vh;
    }

    .approach {
      justify-content: center;
      align-items: flex-start;
      width: 45%;
      margin: 0 5% 0 5%;
      row-gap: 6%;
    }

    .pillars {
      display: flex;
      flex-direction: column;
      row-gap:  5%;
      width: 55%;
      justify-content: center;
    }
  }
</style>

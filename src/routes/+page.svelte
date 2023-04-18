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
      <h1>Affordable and Scalable Software Solutions for Small Businesses.</h1>
      <p>
        We understand that running a small business can be challenging,
        especially when it comes to managing the day-to-day operations. Thats
        why we offer a range of user-friendly software tools to help streamline
        your business processes so you can build on a solid fountation.
      </p>
      <button>Our Services</button>
      <p>
        Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
      </p>
    </div>
  </section>

  <section class="preview-cards-container">
    <div class="preview-cards">
      <div><h2>Maximize your efficency and profitability</h2></div>
      <div class="cards">
        <div>
          <div class="circle"><h1>1</h1></div>
          <h2>Application Development</h2>
          <div class="card-graphic"></div>
        </div>
        <div>
          <div class="circle"><h1>2</h1></div>
          <h2>Software Integration</h2>
          <div class="card-graphic"></div>
        </div>
        <div>
          <div class="circle"><h1>3</h1></div>
          <h2>Maintenance & Support</h2>
          <div class="card-graphic"></div>
        </div>
      </div>
    </div>
  </section>

  <section class="fullvue-callout-container">
    <div class="fullvue-callout">
      <div class="callout-ad">
        <h3>Introducing</h3>
        <h1>FullVue</h1>
        <p>
          A full suite of features to tackle all of your small business needs.
        </p>
        <a href="/fullvue"><button>Check It Out</button></a>
      </div>
      <div class="callout-screenshots">
        <div class="screenshot-back">
          <div class="screenshot-front"></div>
        </div>
      </div>
    </div>
  </section>

  <section class="quote-container">
    <p>
      “Never argue with stupid people, they will drag you down to their level
      and then beat you with experience.”
    </p>
    <h3>- Mark Twain</h3>
  </section>

  <section class="approach-container">
    <div class="approach">
      <h2>Our Approach</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos soluta
        nesciunt, minus vitae blanditiis provident corrupti, suscipit nihil
        sapiente amet assumenda fugit unde rem non libero ut. Inventore deleniti
        at aliquam nesciunt maiores facere voluptas odio laboriosam eligendi.
        Tempore doloremque vitae rem iure corrupti aliquam sed. Eum distinctio,
        quos ea repellat repudiandae necessitatibus dignissimos unde quae quam
        deleniti? Rem, repellat.
      </p>
      <a href="/about"><button>About Us</button></a>
    </div>
    <div class="pillars">
      <div>
        <div class="circle">1</div>
        <div class="pillar-text">
          <h3>pillar</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus eius eum nesciunt nobis nostrum quam aperiam repellendus temporibus inventore iste.</p>
        </div>
      </div>
      <div>
        <div class="circle">2</div>
        <div class="pillar-text">
          <h3>pillar</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus eius eum nesciunt nobis nostrum quam aperiam repellendus temporibus inventore iste.</p>
        </div>
      </div>
      <div>
        <div class="circle">3</div>
        <div class="pillar-text">
          <h3>pillar</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus eius eum nesciunt nobis nostrum quam aperiam repellendus temporibus inventore iste.</p>
        </div>
      </div>
      <div>
        <div class="circle">4</div>
        <div class="pillar-text">
          <h3>pillar</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus eius eum nesciunt nobis nostrum quam aperiam repellendus temporibus inventore iste.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="call-to-action-section">
    <div class="call-to-action">
      <h1>Software that is built to last.</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eos
        cupiditate natus. Ex nostrum dolorem vero odio, atque, repellat ad, nam
        qui nobis inventore temporibus repellendus consequatur officiis beatae
        iste.
      </p>
      <button>Reach Out Today</button>
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
    font-size: 48px;
    font-weight: bold;
    letter-spacing: 2%;
  }

  h3 {
    font-size: 36px;
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
    text-shadow: 1px 1px 2px gray;
  }

  button {
    padding: 25px 35px;
    font-size: 24px;
    font-weight: bold;
    color: white;
    background-color: #468a00;
    border-radius: 7px;
    border-style: none;
    transition: background-image 10s;
  }

  button:hover {
    background-image: linear-gradient(to right, #468a00, #2c5aa0)
  }

  .preview-cards {
    width: 95%;
    margin: 0 auto;
    position: relative;
    background-color: white;
    z-index: 40;
  }

  .preview-cards div h2 {
    margin: 0 0 1em 0.5em;
    font-size: 36px;
  }
  
  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 3.5%;
    row-gap: 30px;
    z-index: 60;
  }
  
  .cards div {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 600px;
    background-color: #468a00;
    border-radius: 20px;
  }
  
  .cards div .circle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 110px;
    height: 110px;
    margin: 30px 0 0 60px;
    border-radius: 50%;
    border: solid;
    border-width: 15px;
    color: #8dc6e7;
    border-color: #8dc6e7;
    background-color: #2c5aa0;
  }

  .cards div h2 {
    margin: 0.5em 1em 0.5em 2em;
    color: white;
  }

  .cards div .card-graphic {
    background-color: #8dc6e7;
    margin-left: 50px;
    border-radius: 20px 0 20px 0;
    width: calc(100% - 50px);
  }

  .fullvue-callout-container {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(white, #2c5aa0);
    background-size: 100% 120%;
    background-position-y: bottom;
    z-index: 50;
  }

  .fullvue-callout {
    display: flex;
    flex-direction: column;
    width: 95%;
    align-items: center;
    justify-content: center;
  }

  .callout-ad {
    display: flex;
    flex-direction: column;
    height: 400px;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
  }

  .callout-ad h3 {
    font-size: 64px;
    margin: 0;
  }

  .callout-ad h1 {
    font-size: 110px;
    margin: 0.25em 0 0.25em 0;
  }

  .callout-ad p {
    margin: 0 0 1.5em 0;
    font-size: 28px;
  }

  .callout-screenshots {
    display: flex;
    height: 75vh;
    align-items: flex-end;
    width: 95%;
  }

  .callout-screenshots .screenshot-back {
    background-color: #468a00;
    width: 82%;
    height: 85%;
    position: relative;
    left: 20%;
    display: flex;
    align-items: flex-end;
    border-radius: 35px 35px 0 0;
  }

  .callout-screenshots .screenshot-front {
    background-color: #8dc6e7;
    width: 65%;
    height: 65%;
    position: relative;
    left: -20%;
    border-radius: 35px 35px 0 0;
  }

  .quote-container {
    background-image: url("$lib/assets/quote_background.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 300px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
    padding-left: 30%;
    box-sizing: border-box;
    box-shadow: 0 25px 50px 0 #777777;
    position: relative;
    top: -1px;
  }

  .approach-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 95%;
    height: 170vh;
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
    min-width: 125px;
    width: 125px;
    height: 125px;
    color: #8dc6e7;
    border-radius: 50%;
    border-width: 15px;
    border-color: #8dc6e7;
    border-style: solid;
    background-color: #2c5aa0;
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

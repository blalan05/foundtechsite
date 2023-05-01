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
            <div class="circle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="app-dev-icon">
                <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path fill="var(--lightblue)" d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/>
              </svg>
            </div>
            <h3>Application Development</h3>
            <div class="card-graphic app-dev"></div>
          </div>
          <div class="card-bg">
            <div class="circle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="integ-icon">
                <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path fill="var(--lightblue)" d="M320 0H448c35.3 0 64 28.7 64 64V192c0 8.8-7.2 16-16 16H444c-6.6 0-12 5.4-12 12v4c0 17.7-14.3 32-32 32s-32-14.3-32-32v-4c0-6.6-5.4-12-12-12l-36 0c-8.8 0-16-7.2-16-16V160c0-8.8 7.2-16 16-16h16c17.7 0 32-14.3 32-32s-14.3-32-32-32H320c-8.8 0-16-7.2-16-16V16c0-8.8 7.2-16 16-16zM0 256V128C0 92.7 28.7 64 64 64H192c8.8 0 16 7.2 16 16v36c0 6.6 5.4 12 12 12h4c17.7 0 32 14.3 32 32s-14.3 32-32 32h-4c-6.6 0-12 5.4-12 12v52c0 8.8-7.2 16-16 16H160c-8.8 0-16-7.2-16-16V240c0-17.7-14.3-32-32-32s-32 14.3-32 32v16c0 8.8-7.2 16-16 16H16c-8.8 0-16-7.2-16-16zM0 448V320c0-8.8 7.2-16 16-16H192c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-17.7 0-32 14.3-32 32s14.3 32 32 32h16c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16H64c-35.3 0-64-28.7-64-64zM240 320c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v16c0 17.7 14.3 32 32 32s32-14.3 32-32V320c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16V448c0 35.3-28.7 64-64 64H256c-8.8 0-16-7.2-16-16V320z"/>
              </svg>
            </div>
            <h3>Software Integration</h3>
            <div class="card-graphic"></div>
          </div>
          <div class="card-bg">
            <div class="circle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="maint-icon">
              <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
              <path fill="var(--lightblue)" d="M352 320c88.4 0 160-71.6 160-160c0-15.3-2.2-30.1-6.2-44.2c-3.1-10.8-16.4-13.2-24.3-5.3l-76.8 76.8c-3 3-7.1 4.7-11.3 4.7H336c-8.8 0-16-7.2-16-16V118.6c0-4.2 1.7-8.3 4.7-11.3l76.8-76.8c7.9-7.9 5.4-21.2-5.3-24.3C382.1 2.2 367.3 0 352 0C263.6 0 192 71.6 192 160c0 19.1 3.4 37.5 9.5 54.5L19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L297.5 310.5c17 6.2 35.4 9.5 54.5 9.5zM80 408a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/>
              </svg>
            </div>
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
          <div class="circle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="integrity-icon">
              <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
              <path fill="var(--lightblue)" d="M344 56L320 80 432 192l24-24 56 56L368 368l-56-56 24-24L224 176l-24 24-56-56L288 0l56 56zM214.6 342.6L232 360 80 512 0 432 152 280l17.4 17.4L234.7 232 280 277.3l-65.4 65.4z"/>
            </svg>
          </div>
          <div class="pillar-text">
            <h3>Integrity</h3>
            <p>We value transparency, honesty, and truthfulness in every aspect of our operations.  We are intentional about always being straightforward in what we say and do.</p>
          </div>
        </div>
        <div>
          <div class="circle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="enthusiasm-icon">
              <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
              <path fill="var(--lightblue)" d="M368 0a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM259.2 160c-14.1 0-27.5 5.6-37.5 15.5l-23.1 23.1c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l23.1-23.1C198.4 108.3 228.2 96 259.2 96c11.7 0 23.3 1.7 34.4 5.2l48.7 15c36.4 11.2 65.9 38 80.5 73.1l6.3 15c5 11.9 16.6 19.7 29.5 19.7H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H458.7c-38.8 0-73.7-23.3-88.6-59.1l-5.1-12.3L334 299l56.7 35.4c18.1 11.3 26.6 33.3 20.7 53.9L382.8 488.8c-4.9 17-22.6 26.8-39.6 22s-26.8-22.6-22-39.6l25.4-88.8-86.2-53.9c-25.1-15.7-36.1-46.5-26.8-74.5l31.2-93.7c-1.9-.2-3.7-.3-5.6-.3zM205.5 310.7c7.4 18.1 20.4 33.9 37.9 44.9l9.5 6-11.5 25.9c-7.7 17.3-24.9 28.5-43.9 28.5H128c-17.7 0-32-14.3-32-32s14.3-32 32-32h59.2l18.3-41.3zM16 95.8H144c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16-7.2-16-16s7.2-16 16-16zm-16 80c0-8.8 7.2-16 16-16H80c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16-7.2-16-16zm16 48H144c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/>
            </svg>
          </div>
          <div class="pillar-text">
            <h3>Enthusiasm</h3>
            <p>We have a passion for solving small business problems. Seeing companies succeed is what drives our work.</p>
          </div>
        </div>
        <div>
          <div class="circle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="cont-imp-icon">
              <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
              <path fill="var(--lightblue)" d="M48 56c0-13.3-10.7-24-24-24S0 42.7 0 56V408c0 39.8 32.2 72 72 72H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H72c-13.3 0-24-10.7-24-24V56zM473 169c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-119 119-79-79c-4.5-4.5-10.6-7-17-7s-12.5 2.5-17 7l-96 96c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l79-79 79 79c9.4 9.4 24.6 9.4 33.9 0L473 169z"/>
            </svg>
          </div>
          <div class="pillar-text">
            <h3>Continuous Improvement</h3>
            <p>We constantly learn new ways to improve our methods, products, and customer experience. Our dedication to iterating on ideas equips us to adapt to rapidly changing conditions.</p>
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

  .maint-icon {
    width: 1em;
    height: 1em;
    position: relative;
    top: -.0625em;
  }

  .integ-icon {
    width: 1em;
    height: 1em;
    position: relative;
    top: -.0625em;
    left: .0625em;
  }

  .integrity-icon {
    width: 3em;
    height: 3em;
    position: relative;
    top: -.125em;
    left: .125em;
  }

  .app-dev-icon {
    width: 1.3em;
    height: 1.3em;
    position: relative;
    top: -.0375em;
  }

  .enthusiasm-icon {
    width: 2.5em;
    height: 2.5em;
  }

  .cont-imp-icon {
    width: 2.5em;
    height: 2.5em;
  }
  
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
    width: 2.6em;
    min-width: 2.6em;
    height: 2.6em;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: solid;
    border-width: 0.25em;
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

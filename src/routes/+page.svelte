<script>
  import * as THREE from 'three';

  import { onMount } from 'svelte'
  import spriteDot from '$lib/assets/Dot.png'

  onMount(async () => {

    var SEPARATION = 150,
      AMOUNTX = 150,
      AMOUNTY = 105;
  
    var parentContainer = document.querySelector(".hero-container-bg")
    var container
    var camera, scene, renderer;
  
    var particles,
      particle,
      count = 0;
  
    var mouseX = 85,
      mouseY = -342;
  
    var windowHalfX = window.innerWidth / 2;
    var windowHalfY = window.innerHeight / 2;
  
    init();
    animate();
  
    function init() {
      container = document.createElement("div");
      parentContainer.prepend(container);
  
      camera = new THREE.PerspectiveCamera(
        100,
        window.innerWidth / window.innerHeight,
        350,
        3000
      );
      camera.position.z = 1000;
  
      scene = new THREE.Scene();
  
      particles = new Array();

  
      var map = new THREE.TextureLoader().load(spriteDot)
      var material = new THREE.SpriteMaterial({ map })
  
      var i = 0;
  
      for (var ix = 0; ix < AMOUNTX; ix++) {
        for (var iy = 0; iy < AMOUNTY; iy++) {
          particle = particles[i++] = new THREE.Sprite(material);
          particle.position.x = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
          particle.position.z = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2;
          scene.add(particle);
        }
      }
  
      renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      container.appendChild(renderer.domElement);
  
      // document.addEventListener("mousemove", onDocumentMouseMove, false);
      // document.addEventListener("touchstart", onDocumentTouchStart, false);
      // document.addEventListener("touchmove", onDocumentTouchMove, false);
  
      window.addEventListener("resize", onWindowResize, false);
    }
  
    function onWindowResize() {
      windowHalfX = window.innerWidth / 2;
      windowHalfY = window.innerHeight / 2;
  
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
  
      renderer.setSize(window.innerWidth, window.innerHeight);
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
          <div class="card-graphic" />
        </div>
        <div>
          <div class="circle"><h1>2</h1></div>
          <h2>Software Integration</h2>
          <div class="card-graphic" />
        </div>
        <div>
          <div class="circle"><h1>3</h1></div>
          <h2>Maintenance & Support</h2>
          <div class="card-graphic" />
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
        <button>Check It Out</button>
      </div>
      <div class="callout-screenshots">
        <div class="screenshot-back">
          <div class="screenshot-front" />
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

  <section>
    <div>
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
      <button>About Us</button>
    </div>
    <div>
      <div />
      <div />
      <div />
      <div />
    </div>
  </section>

  <section>
    <div>
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
    background-color: #000000;
    position: relative;
  }
  
  .hero-container-bg {
    position: absolute;
    z-index: 18;
  }
  
  .hero-content {
    color: white;
    width: 75%;
    text-align: center;
    position: relative;
    z-index: 21;
  }

  .preview-cards {
    width: 95%;
    margin: 0 auto;
  }

  .preview-cards div h2 {
    margin-left: 0.5em;
    font-size: 36px;
  }

  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 3.5%;
  }

  .cards div {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: calc(100vh - 150px);
    background-color: #c0c0c0;
    border-radius: 20px;
  }

  .cards div .circle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    margin: 30px 0 0 60px;
    border-radius: 50%;
    border: solid;
    border-width: 15px;
    border-color: lightblue;
    background-color: blue;
  }

  .cards div h2 {
    margin: 0.5em 1em 0.5em 2em;
  }

  .cards div .card-graphic {
    background-color: green;
    margin-left: 50px;
    border-radius: 20px 0 20px 0;
    width: calc(100% - 50px);
  }

  .fullvue-callout-container {
    display: flex;
    width: 100%;
    height: 105vh;
    align-items: center;
    justify-content: center;
  }

  .fullvue-callout {
    display: flex;
    width: 95%;
    height: 105vh;
    align-items: center;
    justify-content: center;
  }

  .callout-ad {
    width: 35%;
    margin: auto 5%;
    position: relative;
    top: -5%;
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

  .callout-ad button {
    width: 45%;
    height: 75px;
  }

  .callout-screenshots {
    display: flex;
    width: 65%;
    height: 105vh;
    align-items: flex-end;
  }

  .callout-screenshots .screenshot-back {
    background-color: #c0c0c0;
    width: 82%;
    height: 85%;
    position: relative;
    left: 20%;
    display: flex;
    align-items: flex-end;
    border-radius: 35px 35px 0 0;
  }

  .callout-screenshots .screenshot-front {
    background-color: aqua;
    width: 65%;
    height: 65%;
    position: relative;
    left: -20%;
    border-radius: 35px 35px 0 0;
  }

  .quote-container {
    background-color: black;
    height: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
    padding-left: 30%;
    box-sizing: border-box;
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
  }

  @media (min-width: 1300px) {
    .preview-cards {
      width: 95%;
    }

    .cards div h2 {
      font-size: 48px;
    }
  }
</style>

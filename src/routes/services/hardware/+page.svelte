<script>
  import SEOHead from "$lib/SEOHead.svelte";
  import cameraPrimary from "$lib/assets/PXL_20260723_030742880.webp";
  import cameraGallery1 from "$lib/assets/PXL_20260723_030828118.webp";
  import cameraGallery2 from "$lib/assets/PXL_20260723_030829934.webp";
  import cameraGallery3 from "$lib/assets/PXL_20260723_030910119.webp";
</script>

<SEOHead
  title="Hardware & Embedded Solutions | FoundTech"
  description="Custom Raspberry Pi systems for museums and theaters — presence sensing, livestream and recording, designed and 3D-printed cases, and on-site installation."
  path="/services/hardware"
/>

<div>
  <section class="intro-section">
    <div class="intro">
      <h1>Hardware & Embedded Solutions</h1>
      <h2>
        Custom Raspberry Pi systems — sensing, streaming, designed &amp; 3D-printed
        cases, and install
      </h2>
      <a href="/contact">Get a Quote</a>
    </div>
  </section>

  <section class="features-section">
    <div class="feature">
      <div class="feature-image living-picture"></div>
      <div class="feature-text">
        <div class="text">
          <h2>Presence-Sensing Living Picture</h2>
          <p>
            A local museum wanted an interactive display — artwork that comes to
            life when visitors approach. We built the full stack: custom software
            on a Raspberry Pi, an infrared presence module, and a designed and
            3D-printed case to house the electronics cleanly behind the frame.
          </p>
          <p>
            We handled hardware integration, software development, case design,
            and on-site installation. The result is a presence-sensing living
            picture that responds naturally as people move through the gallery.
          </p>
          <a href="/contact">Discuss Your Project</a>
        </div>
      </div>
    </div>

    <div class="feature">
      <div class="feature-visual">
        <div class="feature-image camera-primary">
          <img src={cameraPrimary} alt="Theater livestream camera box installed in a theater" />
        </div>
        <div class="photo-gallery">
          <img src={cameraGallery1} alt="Close-up of the 3D-printed camera enclosure" />
          <img src={cameraGallery2} alt="Camera box components and wiring" />
          <img src={cameraGallery3} alt="Camera box mounted for theater streaming" />
        </div>
      </div>
      <div class="feature-text">
        <div class="text">
          <h2>Theater Livestream &amp; Recording Camera</h2>
          <p>
            A theater needed to stream performances to house and backstage
            monitors while recording at the same time — all controlled from a
            simple web interface. We built a Raspberry Pi system with an external
            USB camera and USB microphone, housed in a designed and 3D-printed
            case built to hang and mount in the theater.
          </p>
          <p>
            One box handles simultaneous livestream feeds to multiple monitors
            plus local recording. Staff start, stop, and monitor everything from
            a browser — no juggling separate tools mid-show.
          </p>
          <a href="/contact">Discuss Your Project</a>
        </div>
      </div>
    </div>
  </section>

  <section class="call-to-action-section">
    <div class="call-to-action">
      <h2>
        Need a custom hardware build — sensing, streaming, or something entirely
        new?
      </h2>
      <a class="cta-btn" href="/contact">Find Your Solution</a>
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
    background-image: linear-gradient(to right, var(--green), var(--blue));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    font-weight: bold;
    letter-spacing: 2%;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    letter-spacing: 2%;
  }

  .intro-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-image: url("$lib/assets/FullVue-bg-1.webp"),
      linear-gradient(to bottom, white, var(--lightblue), white);
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-size:
      1800px 1800px,
      cover;
    background-position:
      center 12rem,
      center center;
    z-index: 10;
  }

  .intro {
    width: 90%;
    margin: 12rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 2rem;
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
    border-radius: 30px;
    box-shadow: 10px 15px 45px 10px #777777;
    overflow: hidden;
  }

  .feature-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .living-picture {
    background: linear-gradient(135deg, var(--blue) 0%, var(--lightblue) 60%, var(--green) 100%);
  }

  .feature-visual {
    width: 80%;
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .camera-primary {
    width: 100%;
    margin-top: 0;
    aspect-ratio: 4/3;
  }

  .photo-gallery {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }

  .photo-gallery img {
    width: 100%;
    aspect-ratio: 4/3;
    object-fit: cover;
    border-radius: 12px;
    box-shadow: 4px 6px 20px rgba(0, 0, 0, 0.25);
  }

  .feature-text {
    width: 80%;
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
  }

  a {
    padding: 1rem 1.5rem;
    text-decoration: none;
    margin-top: 1rem;
    font-size: 1.25rem;
    font-weight: bold;
    color: white;
    background-color: var(--green);
    border-radius: 0.5rem;
    border-style: none;
    animation: reverse 0.2s;
  }

  a:hover {
    background-image: linear-gradient(to right, var(--green), var(--blue));
    animation: button 0.2s forwards;
  }

  @keyframes reverse {
    0% {
      background-image: linear-gradient(to right, var(--green), var(--blue));
    }
    100% {
      background: var(--green);
    }
  }

  @keyframes button {
    0% {
      background: var(--green);
    }
    100% {
      background-image: linear-gradient(to right, var(--green), var(--blue));
    }
  }

  .text {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .text h2,
  .text p {
    margin: 1rem 0;
  }

  .call-to-action-section {
    width: 100%;
    aspect-ratio: 3/2;
    max-height: 649px;
    background-color: #212121;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("$lib/assets/FullVue-bg-2.webp");
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
    padding: 3rem 0;
    width: 75%;
  }

  @media (min-width: 768px) {
    .intro {
      width: 60%;
    }

    h2 {
      font-size: 2.5rem;
    }

    .feature {
      width: 80%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 10%;
      margin-bottom: 2%;
    }

    .feature:nth-child(even) {
      flex-direction: row-reverse;
    }

    .feature-image {
      width: 45%;
    }

    .feature-visual {
      width: 45%;
      margin-top: 0;
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

    .text p {
      font-size: 1.25rem;
    }

    .call-to-action {
      padding: 0;
    }
  }
</style>

<nav class="desktop-nav">

  <div class="static-logo">
    <a href="/"><img class="logo" src="{logo}" alt="FoundTech Logo"></a>
  </div>

  <div class="dt-nav-container">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/fullvue">FullVue</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </div>

  <div class="call-to-action-btn-dt">
    <a href="/contact">Contact Us</a>
  </div>

</nav>

<nav class:open="{isOpen}">
  <div class="mobile-nav">
    <button class="nav-btn" class:open="{isOpen}" on:click="{toggleNav}" on:keypress={keyboardToggle}>
      <span></span>
      <span></span>
      <span></span>
    </button>

    <div class="static-logo">
      <img class="logo" src={logo} alt="FoundTech Logo" />
    </div>

    <div class="call-to-action-btn">
      <a href="/contact">
        <span class="hideDesktop">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="icon">
            <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path fill="white" d="M0 64H512v80L256 320 0 144V64zM0 448V182.8L237.9 346.4 256 358.8l18.1-12.5L512 182.8V448H0z"/>
          </svg>
        </span>
        <span class="hideMobile">
          Contact Us
        </span>
      </a>
    </div>
  </div>

  <div class="oc-nav-container" class:open="{isOpen}">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/fullvue">FullVue</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </div>

</nav>

<div>
  <main>
    <slot></slot>
  </main>
</div>

<footer>
  <div class="logo-no-link">
    <img class="logo" src={logo} alt="FoundTech Logo"/>
    <p>Copyright Foundational Technologies { yearDate }, all rights reserved.</p>
  </div>

  <div class="links">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li>Privacy Policy</li>
      <li><a href="/fullvue">FullVue</a></li>
      <li><a href="/contact">Contact</a></li>
      <li>Terms of Service</li>
    </ul>
  </div> 
</footer>

<script>
  import logo from '$lib/assets/FoundTech Logo.svg'

  const yearDate = (new Date()).getFullYear()

  let isOpen = false

  const toggleNav = () => isOpen = !isOpen

  const keyboardToggle = (/** @type {{ key: string; }} */ event) => {
    console.log(event.key)
    if (event.key == 'Enter' || event.key == 'Space') {
      isOpen = !isOpen
    } 
  }
</script>

<style>
  .hideMobile {
    display: none;
  }

  .icon {
    width: 1.7em;
    height: 1.7em;
    vertical-align: -.125em;
  }
  
  footer {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    gap: 1.6rem;
    background-image: linear-gradient(white, var(--lightblue));
  }

  footer .links {
    width: 90%
  }

  footer .links ul {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 39% 0%;
  }

  footer .links li {
    display: inline;
    font-size: 14px;
    color: var(--blue);
  }

  footer .links ul a {
    text-decoration: none;
  }
  
  .static-logo {
    max-width: 250px;
    margin: 7px 7px;
  }
  .logo {
    width: 100%;
  }
  
  .logo-no-link {
    display: flex;
    flex-direction: column;
    width: 90%;
    font-size: 10px;
    margin-bottom: 0.4rem;
  }
  .logo-no-link img {
    margin: 0.8rem;
    width: 67%;
  }

  .desktop-nav {
    display: none;
    align-items: center;
    gap: 10%;
    width: 100%;
  }
  
  .desktop-nav .dt-nav-container ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20%;
  }

  .desktop-nav .dt-nav-container li {
    display: inline-block;
    font-size: 26px;
  }
  
  .desktop-nav .dt-nav-container li a {
    text-decoration: none;
  }

  .desktop-nav .call-to-action-btn {
    display: flex;
    justify-content: flex-end;
    flex-grow: 1;
  }

  .mobile-nav {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    margin: 0 5% 0 5%;
    z-index: 200;
  }
  
  .oc-nav-container {
    display: flex;
    max-height: 0;
    height: 0;
    overflow: hidden;
    transition: max-height .5s ease-in-out;
    position: fixed;
    width: 100%;
    text-align: center;
    justify-content: space-evenly;
    font-size: 24px;
    background-image: linear-gradient(to bottom, white, var(--lightblue));
    box-shadow: 6px 6px 7px 0 #777777;
    z-index: 500;
    flex-direction: column;
    color: black;
    opacity: 93%;
  }
  
  .oc-nav-container.open {
    max-height: 600px;
    height: auto;
    padding: 1rem;
  }

  .oc-nav-container li a {
    display: inline-block;
    width: 100%;
    color: var(--blue);
    padding: 0.3em;
    opacity: 1;
    text-decoration: none;
  }
  
  .nav-btn {
    background-color: transparent;
    border-style: none;
    width: 36px;
    height: 32px;
    position: relative;
    cursor: pointer;
    display: inline-block;
  }

  .nav-btn span {
    background-color: var(--blue);
    position: absolute;
    border-radius: 2px;
    transition: .3s cubic-bezier(.8, .5, .2, 1.4);
    width:100%;
    height: 4px;
    transition-duration: 500ms
  }
  .nav-btn span:nth-child(1){
    top:3px;
    left: 0px;
  }
  .nav-btn span:nth-child(2){
    top: 12px;
    left: 0px;
    opacity: 1;
  }
  .nav-btn span:nth-child(3){
    bottom: 7px;
    left: 0px;
  }
  .nav-btn.open span:nth-child(1){
    transform: rotate(45deg);
    top: 8px;
  }
  .nav-btn.open span:nth-child(2){
    opacity:0;
  }
  .nav-btn.open span:nth-child(3){
    transform: rotate(-45deg);
    top: 8px;
  }

  .call-to-action-btn {
    padding: 10px 15px;
    border-radius: 7px;
    border-style: none;
    color: white;
    font-size: 16px;
    font-weight: bold;
    background-color: var(--blue);
  }

  .call-to-action-btn {
    padding: 6px 8px;
  }

  .call-to-action-btn-dt {
    padding: 10px 15px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 7px;
    margin: auto 1.5em auto auto;
    color: white;
    background-color: var(--blue);
  }
  
  .call-to-action-btn-dt a {
    text-decoration: none;
    color: white;
  }
  
  @media (min-width: 1000px) {
    .desktop-nav {
      display: flex;
    }

    .static-logo {
      margin: 7px;
    }

    .mobile-nav {
      display: none;
    }
    
  }
</style>
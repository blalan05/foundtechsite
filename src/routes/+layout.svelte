<Analytics />

<nav class="desktop-nav">

  <div class="nav-logo-container" style="position: relative">
    <a href="/"><img class="logo" src="{logo}" alt="Foundational Technologies LLC (FoundTech)" width="250px" height="50px"></a>
    <h1 style="font-size: 6px; z-index: -1; display: inline; position: absolute; left: 0; top: 0; color: white;">Foundational Technologies LLC (FoundTech)</h1>
  </div>

  <div class="dt-nav-container">
    <ul>
      <li><a href="/" class:dt-active={$page.url.pathname === '/'}>Home</a></li>
      <li><a href="https://fullvue.io/" target="_blank">FullVue</a></li>
      <li><a href="/about" class:dt-active={$page.url.pathname === '/about'}>About</a></li>
      <li><a href="/contact" class:dt-active={$page.url.pathname === '/contact'}>Contact</a></li>
      <li><a href="/webinar" class:dt-active={$page.url.pathname === '/webinar'}>Webinar</a></li>
    </ul>
  </div>

  <div class="call-to-action-btn-dt">
    <a href="/contact">Contact Us</a>
  </div>

</nav>

<nav class:open={isOpen}>
  <div class="mobile-nav">
    <button 
      class="nav-btn" 
      class:open={isOpen} 
      on:click={toggleNav} 
      on:keypress={keyboardToggle} 
      aria-label="navigation menu" 
      aria-controls="navigation" 
      aria-expanded={isOpen}
      >
      <span></span>
      <span></span>
      <span></span>
    </button>

    <div class="nav-logo-container">
      <img class="mobile-logo" src={logo} alt="Foundational Technologies LLC (FoundTech)" width="200" height="40"/>
    </div>

    <div class="call-to-action-btn">
      <a href="/contact" aria-label="contact us">
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

  <div class="oc-nav-container" class:open="{isOpen}" id="navigation" role="navigation">
    <ul>
      <li on:click={isOpen ? toggleNav : null} on:keypress={closeOnKeyPress} class:mobile-active={$page.url.pathname === '/'}><a href="/">Home</a></li>
      <li on:click={isOpen ? toggleNav : null} on:keypress={closeOnKeyPress}><a href="https://fullvue.io" target="_blank">FullVue</a></li>
      <li on:click={isOpen ? toggleNav : null} on:keypress={closeOnKeyPress} class:mobile-active={$page.url.pathname === '/about'}><a href="/about">About</a></li>
      <li on:click={isOpen ? toggleNav : null} on:keypress={closeOnKeyPress} class:mobile-active={$page.url.pathname === '/contact'}><a href="/contact">Contact</a></li>
      <li on:click={isOpen ? toggleNav : null} on:keypress={closeOnKeyPress} class:mobile-active={$page.url.pathname === '/webinar'}><a href="/webinar">Webinar</a></li>
    </ul>
  </div>

</nav>

<div>
  <main on:click={isOpen ? toggleNav : null} on:keypress={closeOnKeyPress}>
    <slot></slot>
  </main>
</div>

<footer>
  <div class="footer-logo-container">
    <img class="logo" src={logo} alt="Foundational Technologies LLC (FoundTech)" />
    <p>Copyright Foundational Technologies { yearDate }, all rights reserved.</p>
  </div>

  <div class="footer-links-container">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/privacy-policy">Privacy Policy</a></li>
      <li><a href="https://fullvue.io" target="_blank">FullVue</a></li>
      <li><a href="/contact">Contact</a></li>
      <li><a href="/webinar">Webinar</a></li>
    </ul>
  </div> 
</footer>
<script>
import logo from '$lib/assets/FoundTech Logo.svg'
import Analytics from '$lib/analytics.svelte';
import { onMount } from 'svelte';
import { page } from '$app/stores';

const yearDate = (new Date()).getFullYear()

let isOpen = false

const toggleNav = () => { isOpen = !isOpen }

onMount(() => {		
  window.addEventListener('resize', () => { if (window.innerWidth >= 1000) isOpen = false });
});

const closeOnKeyPress = (/** @type {{ key: string; }} */ event) => {
  if (isOpen && (event.key == 'Enter' || event.key == 'Space')) {
    isOpen = false
  }
}

const keyboardToggle = (/** @type {{ key: string; }} */ event) => {
  console.log(event.key)
  if (event.key == 'Enter' || event.key == 'Space') {
    isOpen = !isOpen
  } 
}
</script>
<style>
  .dt-active {
    border-bottom-style: solid;
    border-width: 1px;
  }

  .mobile-active {
    border-left-style: solid;
    border-width: 10px;
    border-color: var(--blue);
  }

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

  footer .footer-links-container {
    width: 90%;
    padding: 2rem 0 1rem 0;
  }

  footer .footer-links-container ul {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 39% 0%;
  }

  footer .footer-links-container li {
    display: inline;
    font-size: 14px;
    color: var(--blue);
  }

  footer .footer-links-container ul a {
    color: var(--blue);
    text-decoration: none;
  }
  
  .nav-logo-container {
    max-width: 250px;
    margin: 7px 7px;
  }

  .logo {
    width: 100%;
    width: 250px;
    height: 50px;
  }

  .mobile-logo {
    width: 200px;
    height: 40px;
  }
  
  .footer-logo-container {
    display: flex;
    flex-direction: column;
    width: 90%;
    font-size: 10px;
    margin-bottom: 0.4rem;
    align-items: center;
  }
  .footer-logo-container img {
    margin: 0.8rem;
    width: 67%;
    max-width: 30em;
  }

  .mobile-nav {
    padding-top: 1rem;
  }

  .desktop-nav {
    display: none;
    align-items: center;
    gap: 10%;
    width: 100%;
    padding: 1rem;
  }
  
  .desktop-nav .dt-nav-container ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 7%;
  }

  .desktop-nav .dt-nav-container li {
    display: inline-block;
    font-size: 20px;
  }

  /* nav animation start */

  .desktop-nav ul li a {
    display: block;
    padding: .5rem;
    position: relative;
  }

  .desktop-nav ul li a:after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 0%;
    content: '.';
    color: transparent;
    background: #aaa;
    height: 1px;
  }

  .desktop-nav ul li a {
    transition: all 2s;
  }

  .desktop-nav ul li a:after {
    text-align: left;
    content: '.';
    margin: 0;
    opacity: 0;
  }
  .desktop-nav ul li a:hover {
    color: #fff;
    z-index: 1;
  }
  .desktop-nav ul li a:hover:after {
    z-index: -10;
    animation: select 1s forwards;
    -webkit-animation: select 1s forwards;
    -moz-animation: select 1s forwards;
    opacity: 1;
  }

  @keyframes select {
    0% {
      width: 0%;
      height: 1px;
    }
    50% {
      width: 100%;
      height: 1px;
    }
    100% {
      border-top-left-radius: .5rem;
      border-top-right-radius: .5rem;
      width: 100%;
      height: 100%;
      background: var(--blue);
    }
  }
  
  .desktop-nav .dt-nav-container li a {
    text-decoration: none;
    color: var(--blue);
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
    background-color: white;
    box-shadow: 6px 6px 7px 0 #777777;
    z-index: 500;
    flex-direction: column;
    color: black;
    opacity: 93%;
  }
  
  .oc-nav-container.open {
    max-height: 600px;
    height: auto;
    padding-top: 1rem;
  }

  .oc-nav-container li a {
    display: inline-block;
    width: 100%;
    color: var(--blue);
    padding: 0.3em 0 0.3em 0;
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
    animation: reverse .2s;
  }

  .call-to-action-btn-dt:hover {
    animation: button .2s forwards;
  }

  @keyframes reverse {
    0% {
      background-image: linear-gradient(to right, var(--blue), var(--green));
    }
    10% {
      background-image: linear-gradient(to right, var(--blue) 10%, var(--green));
    }
    20% {
      background-image: linear-gradient(to right, var(--blue) 20%, var(--green));
    }
    30% {
      background-image: linear-gradient(to right, var(--blue) 30%, var(--green));
    }
    40% {
      background-image: linear-gradient(to right, var(--blue) 40%, var(--green));
    }
    50% {
      background-image: linear-gradient(to right, var(--blue) 50%, var(--green));
    }
    60% {
      background-image: linear-gradient(to right, var(--blue) 60%, var(--green));
    }
    70% {
      background-image: linear-gradient(to right, var(--blue) 70%, var(--green));
    }
    80% {
      background-image: linear-gradient(to right, var(--blue) 80%, var(--green));
    }
    90% {
      background-image: linear-gradient(to right, var(--blue) 90%, var(--green));
    }
    100% {
      background: var(--blue);
    }
  }

  @keyframes button {
    0% {
      background: var(--blue);
    }
    10% {
      background-image: linear-gradient(to right, var(--blue) 90%, var(--green));
    }
    20% {
      background-image: linear-gradient(to right, var(--blue) 80%, var(--green));
    }
    30% {
      background-image: linear-gradient(to right, var(--blue) 70%, var(--green));
    }
    40% {
      background-image: linear-gradient(to right, var(--blue) 60%, var(--green));
    }
    50% {
      background-image: linear-gradient(to right, var(--blue) 50%, var(--green));
    }
    60% {
      background-image: linear-gradient(to right, var(--blue) 40%, var(--green));
    }
    70% {
      background-image: linear-gradient(to right, var(--blue) 30%, var(--green));
    }
    80% {
      background-image: linear-gradient(to right, var(--blue) 20%, var(--green));
    }
    90% {
      background-image: linear-gradient(to right, var(--blue) 10%, var(--green));
    }
    100% {
      background-image: linear-gradient(to right, var(--blue), var(--green));
    }
  }
  
  .call-to-action-btn-dt a {
    text-decoration: none;
    color: white;
  }
  
  @media (min-width: 1000px) {
    .desktop-nav {
      display: flex;
    }

    .mobile-nav {
      display: none;
    }

    footer {
      flex-direction: row;
      height: 10em;
    }

    .footer-logo-container {
      align-items: flex-start;
      margin-left: 5em;
    }

    .footer-logo-container img {
      width: 30em;
    }

    .footer-logo-container p {
      padding-left: 1.5em;
    }
    
  }
</style>
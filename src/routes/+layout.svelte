<nav class="desktop-nav">

  <div class="static-logo">
    <img class="logo" src="{logo}" alt="FoundTech Logo">
  </div>

  <div class="dt-nav-container">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/fullvue">FullVue</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </div>

  <div class="call-to-action-btn">
    <button>Contact Us</button>
  </div>

</nav>
<!--
<nav class="desktop-nav">
  <div class="home"><a class="test" href="/"><img class="logo" src={logo} alt="FoundTech Logo"/></a></div>
  <div class="menu-button"><a href="/services">Services</a></div>
  <div class="menu-button"><a href="/fullvue">FullVue</a></div>
  <div class="menu-button"><a href="/about">About</a></div>
  <div class="menu-button"><a href="/contacts">Contacts</a></div>
</nav>
-->

<nav class="mobile-nav">

  <button class="nav-btn" aria-controls="primary-navigation" aria-expanded="false">
    <svg class="hamburger" viewBox="0 0 100 100" width="35">
      <rect class="line top" 
            width="80" height="10"
            x="10" y="20" rx="5">
      </rect>
      <rect class="line middle" 
            width="80" height="10"
            x="10" y="45"  rx="5">
      </rect>
      <rect class="line bottom" 
            width="80" height="10"
            x="10" y="70" rx="5">
      </rect>
    </svg>
  </button>

  <div class="static-logo">
    <img class="logo" src={logo} alt="FoundTech Logo" />
  </div>

  <div class="oc-nav-container" style="display: none">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/fullvue">FullVue</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/contact">Contacts</a></li>
    </ul>
  </div>

  <div class="call-to-action-btn">
    <button>Contact Us</button>
  </div>

</nav>

<div>
  <main>
    <slot></slot>
  </main>
</div>

<footer>
  <div class="logo-no-link"><img class="logo" src={logo} alt="FoundTech Logo"/></div>
</footer>

<script>
  import logo from '$lib/assets/FoundTech Logo.svg'
</script>

<style>
  
  footer {
    height: 100px;
  }
  
  .static-logo {
    max-width: 250px;
    margin: 7px;
  }
  .logo {
    width: 100%;
  }
  
  .logo-no-link {
    width: 15%;
  }
  
/*
.menu-button {
  width: 10%;
  font-size: 30px;
    text-align: center;
    border-style: solid;
  }
*/

  .desktop-nav {
    display: none;
    align-items: center;
    gap: 10%;
    width: 100%;
    border-style: solid;
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
  
  .desktop-nav .call-to-action-btn button {
    height: 45px;
    width: 150px;
    border-radius: 7px;
    margin-right: 14px;
  }

  .mobile-nav {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    margin: 0 5% 0 5%;
  }
  
  .oc-nav-container {
    position: absolute;
    left: 420px;
    width: 25%;
    max-width: 420px;
    background: black;
  }

  .oc-nav-container li a {
    color: white;
  }
  
  .nav-btn {
    background: transparent;
    margin: 0;
    padding: 0;
    border-style: none;
  }
  
  .nav-btn .line {
    transition:
      y 300ms ease-in 300ms,
      rotate 300ms ease-in,
      opacity 0ms 300ms;
    transform-origin: center;
  }
  
  .nav-btn:hover .line {
    transition:
      y 300ms ease-in,
      rotate 300ms ease-in 300ms,
      opacity 0ms 300ms;
  }


  .nav-btn:hover :is(.top, .bottom) {
    y: 45;
  }

  .nav-btn:hover .top {
    rotate: 45deg;
  }

  .nav-btn:hover .middle {
    opacity: 0;
  }

  .nav-btn:hover .bottom {
    rotate: 135deg;
  }

  .nav-btn[aria-expanded="true"] .top {

  }
  
  @media (min-width: 768px) {
    .desktop-nav {
      display: flex;
    }

    .mobile-nav {
      display: none;
    }
    
  }
</style>
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

<nav>
  <div class="mobile-nav">
    <button class="nav-btn" class:open={isOpen} on:click={() => isOpen = !isOpen} aria-controls="primary-navigation">
        <svg class="hamburger" viewBox="0 0 100 100" width="35" height="39">
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

    <div class="call-to-action-btn">
      <button>Contact Us</button>
    </div>
  </div>

  <div class="oc-nav-container" class:open={isOpen}>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/fullvue">FullVue</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/contact">Contacts</a></li>
    </ul>
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

  let isOpen = false
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
    z-index: 200;
  }
  
  .oc-nav-container {
    display: none;
  }
  
  .oc-nav-container.open {
    display: flex;
    justify-content: space-evenly;
    padding: 0 5% 0 5%;
    position: fixed;
    font-size: 24px;
    background-color: white;
    z-index: 500;
    flex-direction: column;
    height: auto;
    color: black;
  }

  .oc-nav-container li a {
    color: black;
  }
  
  .nav-btn {
    background: transparent;
    margin: 0;
    padding: 0;
    border-style: none;
  }

  .hamburger {
    transform-origin: center;
    transform-box: view-box;
  }
  
  .nav-btn .line {
    transition:
      y 300ms ease-in 300ms,
      rotate 300ms ease-in,
      opacity 0ms 300ms;
  }
  
  .nav-btn.open .line {
    transition:
      y 300ms ease-in,
      rotate 300ms ease-in 300ms,
      opacity 0ms 300ms;
  }


  .nav-btn.open :is(.top, .bottom) {
    y: 45;
  }

  .nav-btn.open .top {
    rotate: 45deg;
  }

  .nav-btn.open .middle {
    opacity: 0;
  }

  .nav-btn.open .bottom {
    rotate: 135deg;
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
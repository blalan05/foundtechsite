<nav class="desktop-nav flex-container">
  <div class="home"><a class="test" href="/"><img class="logo" src={logo} alt="FoundTech Logo"/></a></div>
  <div class="menu-button"><a href="/services">Services</a></div>
  <div class="menu-button"><a href="/fullvue">FullVue</a></div>
  <div class="menu-button"><a href="/about">About</a></div>
  <div class="menu-button"><a href="/contacts">Contacts</a></div>
</nav>

<nav class="mobile-nav flex-container">
  <input type="checkbox" class="nav-toggle" />
  <div class="static-logo">
    <img class="logo" src={logo} alt="FoundTech Logo" />
  </div>
  <div class=oc-nav-container>
    <ul>
      <li><a href="/services">Services</a></li>
      <li><a href="/fullvue">FullVue</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/contacts">Contacts</a></li>
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
</script>

<style>

  main {
    width: 80%;
    margin: 0 auto 0 auto;
  }

  footer {
    height: 100px;
  }

  .flex-container {
    display: flex;
  }

  .static-logo {
    max-width: 250px;
  }
  .logo {
    width: 100%;
  }

  .logo-no-link {
    width: 15%;
  }

  .home {
    width: 15%;
    align-self: center;
  }

  .menu-button {
    width: 10%;
    text-align: center;
    align-self: center;
  }
  
  .desktop-nav {
    display: none;
  }

  .mobile-nav {
    position: relative;
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

  .nav-toggle:checked {
    left: 0;
  }

  .test {
    align-self: center;
    text-align: center;
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
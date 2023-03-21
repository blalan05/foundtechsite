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
  <input type="checkbox" class="nav-toggle" />
  <div class="static-logo">
    <img class="logo" src={logo} alt="FoundTech Logo" />
  </div>
  <div class=oc-nav-container>
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

  .home {
    width: 15%;
    align-self: center;
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
    display: inline;
    font-size: 26px;
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
    margin: 7px 7px 0 7px;
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
<nav class="desktop flex-container">
  <div class="home"><a class="test" href="/"><img class="logo" src={logo}/></a></div>
  <div class="menu-button"><a href="/services">Services</a></div>
  <div class="menu-button"><a href="/fullvue">FullVue</a></div>
  <div class="menu-button"><a href="/about">About</a></div>
  <div class="menu-button"><a href="/contacts">Contacts</a></div>
</nav>
<!--
<nav class="mobile flex-container hidden">
  <div><img class="logo" src={logo}/></div>
</nav>
-->
<div>
  <main>
    <slot></slot>
  </main>
</div>
<footer>
  <div class="logo-no-link"><img class="logo" src={logo}/></div>
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

  .hidden {
    display: none;
  }

  .test {
    align-self: center;
    text-align: center;
  }
</style>
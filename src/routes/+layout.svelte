<nav>
  <a><img class="logo" src={logo}/></a>
  <a>Services</a>
  <a>FullVue</a>
  <a>About</a>
  <a>Contacts</a>
</nav>
<div>
  <main>
    <slot></slot>
  </main>
</div>

<script>
  import logo from '$lib/assets/FoundTech Logo.svg'
</script>

<style>
  .logo {
    width: 15%;
  }
</style>
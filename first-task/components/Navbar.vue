<template>
  <nav>
    <img src="@/assets/images/logo.png" alt="logo" />
    <div class="navbar">
      <ul class="nav-list">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#cart">Cart</a></li>
      </ul>
      <ul class="nav-buttons">
        <button  class="login-btn">Login</button>
        <button  class="signup-btn">Sign Up</button>
      </ul>
    </div>
  </nav>
</template>

<style scoped lang="scss">
nav {
  position: fixed;
  top: 0;
  max-width: 1440px;
  z-index: 90;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 9rem;
  background: rgba(0, 0, 0, 0.25);
}
.navbar {
  display: flex;
  align-items: center;
  font-size: 1.25rem;
}
.nav-list {
  display: flex;
  align-items: center;
  gap: 2.8rem;
  margin-right: 3rem;
}
.nav-buttons {
  display: flex;
  align-items: center;
  gap: 3rem;
}
button {
  font-size: 1.25rem;
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  color: #ffff;
  cursor: pointer;
}
.login-btn {
  border: 1px solid #52057b;
  background: black;
}
.signup-btn {
  border: 1px solid #52057b;
  background: #52057b;
}

@media only screen and (max-width: 75rem) {
  nav {
    padding: 1rem 5rem;
  }
}

@media only screen and (max-width: 62.5rem) {
  nav {
    padding: 1rem 2rem;
  }
}
@media only screen and (max-width: 56.25rem) {
  nav {
    display: none;
  }
}
</style>

<template>
  <div class="main">
    <div class="links">
      <router-link to="/" exact>Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <transition
      name="fade"
      enter-class="fade_enter"
      enter-active-class="fade_active"
    >
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<style>
  html, body {
    display: flex;
    justify-content: center;
    width: calc(100% - 16px);
    height: 100%;
    margin: 0;
    border: 0;
    padding: 8px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
</style>

<style scoped lang="scss">
  .main {
    max-width: 550px;
    width: 100%;
  }

  .links {
    > a {
      color: black;
      padding: 8px;
      text-decoration: none;
      border-bottom: 2px solid transparent;
      transition: border-color 300ms;

      &:hover {
        border-color: grey;
      }

      &.router-link-active {
        border-color: grey;
      }
    }
  }

  .fade_active {
    transition: opacity 600ms;
  }
  .fade_enter {
    opacity: 0;
  }
</style>
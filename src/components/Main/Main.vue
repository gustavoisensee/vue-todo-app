<template>
  <div class="main">
    <div class="links">
      <router-link to="/" exact>Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <transition>
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
    max-width: 600px;
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
</style>
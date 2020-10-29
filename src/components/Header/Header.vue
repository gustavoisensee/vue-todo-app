<template>
  <header>
    <h1 class="header">{{ msg }}</h1>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
};
</script>

<style scoped>
.header {
  text-align: left;
  padding: 8px;
  background-color: #dedede;
  border-radius: 0 25px 25px 0;
  margin-top: 32px;
}

@media (max-width: 500px) {
  .header {
    font-size: 26px;
  }
}

@media (max-width: 450px) {
  .header {
    font-size: 24px;
  }
}

@media (max-width: 400px) {
  .header {
    font-size: 22px;
  }
}
</style>

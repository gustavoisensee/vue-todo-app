<template>
  <header>
    <h1>{{ msg }}</h1>
  </header>
</template>

<script>
  export default {
    name: 'Header',
    props: {
      msg: String
    }
  }
</script>

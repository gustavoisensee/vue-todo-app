<template>
  <header class="hello">
    <h1>{{ msg }}</h1>
  </header>
</template>

<script>
  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    }
  }
</script>

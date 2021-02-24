<template>
  <div id="app">
    <Navbar></Navbar>
    <CodeEditor></CodeEditor>
  </div>
</template>

<script>
import CodeEditor from "@/components/CodeEditor";
import Navbar from "@/components/Navbar";
export default {
  name: 'App',
  components: {
    Navbar,
    CodeEditor

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}
</style>

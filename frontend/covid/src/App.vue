<template>
  <div id="main">
    <div id="nav">
      <Nav></Nav>
    </div>
    <router-view />
    <Footer></Footer>
  </div>

</template>
<style>
* {
  padding: 0;
  margin: 0;
}
body {
  display: flex;
  justify-content: center;
}
#app {
  width: 100vw;
}
#main {
  width: 100%;
  overflow-x: hidden;
  box-sizing: border-box;
  background: #f0f2f5;
  min-height: 100vh;
}

::-webkit-scrollbar{
  width: 5px;
  height: 20px;
  background-color: transparent;
}
::-webkit-scrollbar-track{
  background-color: transparent;
}
::-webkit-scrollbar-thumb{
  border-radius: 10px;
  background-color: rgb(77, 77, 75);
  box-shadow: inset 0 0 5px rgb(77, 77, 75);
}

::-webkit-scrollbar-button{
  height: 0;
  background-color: rgb(108, 111, 113);
}
::-webkit-scrollbar-corner{
  background-color: transparent;
}
</style>
<script>
import Nav from "./components/commons/Nav";
import Banner from "./components/commons/Banner";
import PageTab from "./components/commons/PageTab";
import Footer from "./components/commons/Footer";

export default {
  components: {Footer, PageTab, Banner, Nav},
  setup() {
  }
}
</script>
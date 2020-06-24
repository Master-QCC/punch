<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import './assets/common';

@font-face {
  font-family: 'digiface';
  src:  url('./assets/digiface.ttf');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Din-Medium';
  src:  url('./assets/DIN-Medium.otf');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'DIN-MediumAlternate';
  src:  url('./assets/DIN-MediumAlternate.otf');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'dinbek-medium';
  src:  url('./assets/dinbek-medium.ttf');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'number';
  src:  url('./assets/number.ttf');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'ganghei';
  src:  url('./assets/ganghei.ttf');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'fzzyjw';
  src:  url('./assets/fzzyjw.ttf');
  font-weight: normal;
  font-style: normal;
}

#app {
  color: black;
  min-width: 375px;

  div.page{
    width:100%;
    height:100%;
  }

  div {
    border-radius: 20px;
  }

  button,a {
    cursor: pointer;
    box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.1);
  }
}

</style>

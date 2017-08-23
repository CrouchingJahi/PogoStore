<template>
  <div id="app">
    <header>
      <div>
        <icon/>
      </div>
      <div>
        <h1>PogoStore</h1>
        <nav>
          <ul>
            <li v-for="link of navLinks">
              <router-link :to="link.path" :exact="link.exact">{{ link.text }}</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
import Icon from './theme/Icon.vue'

/*
import config from '../keys';
firebase.initializeApp(config);
*/

export default {
  name: 'App',
  data () {
    return {
      navLinks: [
        {path: '/', text: 'Home', exact:true},
        {path: '/add', text: 'Add'},
        {path: '/admin', text: 'Admin'},
      ]
    }
  },
  components: {
    Icon
  }
}
</script>

<style>
@import 'style/theme.css';

@font-face {
  font-family: 'Avengeance';
  src: url('../assets/AVENGEANCE HEROIC AVENGER.ttf')
}

header {
  height: 6em;
  padding: 0.5em 1em;
  background-color: var(--black);
  color: var(--primary-color);
  display: flex;
}
header > div {
  height: 100%;
  display: flex;
  flex-direction: column;
}

nav {
  color: var(--secondary-color);
}
nav > ul {
  padding: 0;
  list-style-type: none;
  display: flex;
}
nav a {
  padding: 0 1em 0.5em;
  font-weight: bold;
  color: var(--secondary-color);
  text-decoration: none;
}
nav a:hover {
  color: var(--primary-color);
}
nav a.router-link-active {
  color: var(--gray-light);
}

div#app > div {
  padding: 1em;
}

</style>

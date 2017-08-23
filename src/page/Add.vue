<template>
  <div id="add">
    <form>
      <p>
        <label>Pokemon
          <input list="species" :value="data.species" />
          <datalist id="species">
            <option v-for="species in pokemon" :value="species" />
          </datalist>
        </label>
      </p>
      <p>
        <label>Level
          <input list="levels" :value="data.level" />
          <datalist id="levels">
            <option v-for="level in levels" :value="level" />
          </datalist>
        </label>
      </p>
    </form>
  </div>
</template>

<script>
// import { getPokemon } from '../api/info';

export default {
  name: 'AddPage',
  data: () => {
    let levels = [];
    for (let i = 0; i < 80; i++) {
      levels.push(i / 2 + 0.5);
    }
    return {
      data: {},
      pokemon: ['bla', 'bar', 'boo'],
      levels
    }
  }
}
</script>

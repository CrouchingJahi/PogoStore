<template>
  <img :src="uri" />
</template>

<script>
export default {
  props: ['no'],
  data: function () {
    return { uri: `assets/minisprites/${this.no}.png` };
  }
}
</script>

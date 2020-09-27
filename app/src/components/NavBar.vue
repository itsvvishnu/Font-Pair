<template>
  <div class="container">
    <nav>
      <div class="logo">
        <h3 :style="$store.state.primary">Font Pair</h3>
      </div>
      <div class="select">
        <v-select :style="$store.state.secondary" :options="options" label="title" @input="changeFont"  placeholder="Choose a font pair"></v-select>
      </div>
    </nav>
  </div>
</template>

<script>
import {fonts} from '../fonts'
import {loadFont} from '../fontLoader'
export default {
  name: 'NavBar',
  data () {
    return {
      options: fonts(),
      item: {
        value: '',
        text: ''
      },
      style:null
    }
  },
  methods: {
    changeFont(font){
      this.$store.dispatch('updateFont', {
        font
      })
      if(font!=null){
        loadFont(font.url)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="../styles/main.scss">

</style>

<template>
  <section class="artwork">
    <canvas ref="canvas" class="artwork__canvas"></canvas>
  </section>
</template>

<script>
import ArtworkGL from './js/ArtworkGL'

export default {
  name: 'Artwork',
  components: {},
  props: [],
  data() {
    // 基本的にはここにthree.jsのオブジェクトを追加しない。
    return {}
  },
  computed: {},
  mounted() {
    // canvas要素を渡す。
    this.artworkGL = new ArtworkGL({
      $canvas: this.$refs.canvas,
    })
  },
  destroyed() {
    // canvasを作ったり壊したりする前提の場合はここに処理停止する処理を書く（今回省略）。
  },
  methods: {
    // この中にthree.jsの処理をばりばり書かない。
  },
}
</script>

<style>
.artwork {
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: -1;
}
</style>

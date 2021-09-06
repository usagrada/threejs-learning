<template>
  <div>
    <Artwork />
    <nuxt />
  </div>
</template>

<script>
export default {
  watch: {
    // routeが変わるときにシーンを変えるなどなにか処理する
    '$route.name'(_new, _old) {},
  },
}
</script>
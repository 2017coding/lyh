<template>
  <div class="component" :style="'background-image:' + background">
    博客
  </div>
</template>

<script>
export default {
  props: {
    background: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.component{
  padding: 20px;
  height: 100%;
  overflow: hidden;
}
</style>

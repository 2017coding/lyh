<template>
  <div class="component" :style="getStyle()">
    <div class="main">
      <div class="">
        <p class="title">Lyh</p>
        <p class="desc">Welcome to lyh.red</p>
        <div class="bt">
          <!-- <a class="bt-github" target="_blank">GitHub</a> -->
          <a class="bt-more" target="_blank" @click="handleClick">Getting Started</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    background: {
      type: String,
      default: ''
    }
  },
  methods: {
    getStyle () {
      return `background: linear-gradient(to left bottom, hsl(${Math.floor(Math.random() * 255 + 1)}, 100%, 85%) 0%,hsl(${Math.floor(Math.random() * 255 + 1)}, 100%, 85%) 100%)`
    },
    handleClick () {
      this.$emit('handleClick', 'clickDot', -1)
    }
  }
}
</script>

<style lang="scss" scoped>
.component{
  padding: 20px;
  height: 100%;
  overflow: hidden;
  .main{
    height: 100%;;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    .title, .desc{
      margin-bottom: 20px;
    }
    .title{
      font-size: 48px;
      font-weight: 100;
      // letter-spacing: 2px;
    }
    .desc{
      font-size: 24px;
    }
    .bt{
      .bt-github, .bt-more{
        border: 1px solid red;
        border-radius: 30px;
        box-sizing: border-box;
        color: red;
        display: inline-block;
        font-size: 16px;
        letter-spacing: .1rem;
        margin: 10px 20px;
        padding: 20px 30px;
        text-decoration: none;
        transition: all .15s ease;
        cursor: pointer;
        &:hover{
          color: rgb(50, 50, 50);
          opacity: .8
        }
      }
      .bt-more{
        // background: red;
        // color: white;
      }
    }
  }
}
</style>

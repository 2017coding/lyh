<template>
  <div class="page-home">
    <div ref="box" class="box">
      <component
        :is="item.component"
        v-for="(item, index) in componentsList"
        :key="index"
        :background="item.background"
      />
    </div>
    <ul class="dot-box">
      <li v-for="(item, index) in componentsList" :key="index">
        <i
          :style="{'background-image': index === Math.abs(addr) ? componentsList[index].background : ''}"
          :class="{dot: true, 'dot-active': index === Math.abs(addr)}"
          @click="handleClick('clickDot', -index)"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import Component1 from './components/Component1'
import Component2 from './components/Component2'
import Component3 from './components/Component3'
import Component4 from './components/Component4'

export default {
  components: {
    Component1,
    Component2,
    Component3,
    Component4
  },
  data () {
    return {
      addr: 0,
      flag: true,
      componentsList: [
        {
          name: '',
          component: 'Component1',
          background: 'linear-gradient( 135deg, #F761A1 10%, #8C1BAB 100%)'
        },
        {
          name: '',
          component: 'Component2',
          background: 'linear-gradient( 135deg, #FFF6B7 10%, #F6416C 100%)'
        },
        {
          name: '',
          component: 'Component3',
          background: 'linear-gradient( 135deg, #81FFEF 10%, #F067B4 100%)'
        },
        {
          name: '',
          component: 'Component4',
          background: 'linear-gradient( 135deg, #ABDCFF 10%, #0396FF 100%)'
        }
      ]
    }
  },
  mounted () {
    this.listenMousewheel()
  },
  methods: {
    listenMousewheel () {
      const box = this.$refs.box
      document.onmousewheel = e => {
        if (!this.flag) return
        e = e || window.event
        if (e.wheelDelta) { // 判断浏览器IE，谷歌滑轮事件
          this.flag = false
          if (e.wheelDelta > 0) { // 当滑轮向上滚动时
            this.addr++
          }
          if (e.wheelDelta < 0) { // 当滑轮向下滚动时
            this.addr--
          }
        } else if (e.detail) { // Firefox滑轮事件
          this.flag = false
          if (e.detail > 0) { // 当滑轮向上滚动时
            this.addr++
          }
          if (e.detail < 0) { // 当滑轮向下滚动时
            this.addr--
          }
        }
        setTimeout(() => {
          this.flag = true
        }, 1000)
        if (this.addr >= 0) {
          this.addr = 0
        } else if (-this.addr >= this.componentsList.length - 1) {
          this.addr = -this.componentsList.length + 1
        }
        box.style.cssText = `transform: translate3d(0, ${this.addr * 100}%, 0); transition: all 1s`
      }
    },
    handleClick (type, data) {
      const box = this.$refs.box
      switch (type) {
        case 'clickDot':
          this.addr = data
          box.style.cssText = `transform: translate3d(0, ${this.addr * 100}%, 0); transition: all 1s`
          break
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.page-home{
  height: 100%;
  overflow: hidden;
  .box{
    height: 100%;
  }
  .dot-box{
    position: fixed;
    right: 40px;
    bottom: 20px;
    .dot{
      margin-bottom: 5px;
      display: inline-block;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: rgba(0, 0, 0, .2);
      cursor: pointer;
      &.dot-active{
        opacity: 1;
      }
    }
  }
}
</style>

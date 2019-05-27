<template>
  <div class="page-home">
    <div class="bg" />
    <div class="grid">
      <div
        v-for="(item, index) in gridList"
        :key="index"
        :style="item.style"
        class="grid-item"
      >
        <render :render="item.render" :item="item" />
      </div>
    </div>
  </div>
</template>

<script>
import Render from './components/Render'
// import sss from './components/sss'

// 显示天气的方法， 要在这个位置初始化
(function (T, h, i, n, k, P, a, g, e) {
  g = function () {
    P = h.createElement(i)
    a = h.getElementsByTagName(i)[0]
    P.src = k
    P.charset = 'utf-8'
    P.async = 1
    a.parentNode.insertBefore(P, a)
  }
  T['ThinkPageWeatherWidgetObject'] = n
  T[n] || (T[n] = function () { (T[n].q = T[n].q || []).push(arguments) })
  T[n].l = +new Date()
  if (T.attachEvent) {
    T.attachEvent('onload', g)
  } else {
    T.addEventListener('load', g, false)
  }
}(window, document, 'script', 'tpwidget', '//widget.seniverse.com/widget/chameleon.js'))

export default {
  components: {
    Render
  },
  data () {
    return {
      gridList: [
        // 天气
        {
          style: 'grid-row: 1 / 2; grid-column: 11 / 12; background: rgba(0, 0, 0, .5)',
          render: (h, data) => {
            return (
              <div
                id='tp-weather-widget'
                style='padding: 10px'
              />
            )
          }
        },
        // 个人简介
        {
          style: 'grid-row: 2 / 6; grid-column: 1 / 3;',
          render: (h, data) => {
            return (
              <div class='11'>个人简介</div>
            )
          }
        },
        // 掘金
        {
          style: 'grid-row: 2 / 4; grid-column: 10 / 12;',
          render: (h, data) => {
            return (
              <div class='11'>掘金</div>
            )
          }
        },
        // 思否
        {
          style: 'grid-row: 4 / 6; grid-column: 10 / 11;',
          render: (h, data) => {
            return (
              <div class='11'>思否</div>
            )
          }
        },
        // CSDN
        {
          style: 'grid-row: 4 / 5; grid-column: 11 / 12;',
          render: (h, data) => {
            return (
              <div class='11'>CSDN</div>
            )
          }
        },
        // 音乐播放器
        {
          style: 'grid-row: 5 / 6; grid-column: 1 / 2;',
          render: (h, data) => {
            return (
              <div class='11'>音乐播放器</div>
            )
          }
        },
        {
          style: 'grid-row: 6 / 7; grid-column: 1 / 2;',
          render: (h, data) => {
            return (
              <div class='11'>我</div>
            )
          }
        }
      ]
    }
  },
  mounted () {
    this.initWeather()
  },
  methods: {
    // 使用天气
    initWeather () {
      // 方法存在开始加载
      if (typeof tpwidget === 'function') {
        tpwidget('init', {
          'flavor': 'slim',
          'location': 'WX4FBXXFKE4F',
          'geolocation': 'enabled',
          'language': 'auto',
          'unit': 'c',
          'theme': 'chameleon',
          'container': 'tp-weather-widget',
          'bubble': 'enabled',
          'alarmType': 'badge',
          'color': '#C6C6C6',
          'uid': 'UBBB8DBE07',
          'hash': '6dda6603c46080d47f2c51d061c86bba'
        })
        tpwidget('show')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.page-home{
  padding: 20px;
  height: 100%;
  min-width: 980px;
  .bg{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient( 135deg, #FFF6B7 10%, #F6416C 100%);
  }
  .grid{
    height: 100%;
    // 网格布局
    display: grid;
    // 定义列 auto-fit(自适应) fr(等分) minmax(最小宽度，最大宽度) // 最大宽度设置为12列
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    // 定义行 auto-fit(自动填充)
    grid-template-rows: repeat(auto-fill, minmax(100px, 1fr));
    // 定义item之间的间距为20px
    grid-gap: 10px;
    grid-auto-flow: column;
    .grid-item{
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      background: rgba(0, 0, 0, .1);
      border-radius: 2px;
    }
  }
}
</style>

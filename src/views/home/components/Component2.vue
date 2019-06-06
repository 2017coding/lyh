<template>
  <div class="component" :style="'background-image:' + background">
    <p class="project">project</p>
    <el-row
      :gutter="40"
    >
      <el-col
        v-for="(item, index) in list"
        :key="index"
        :xs="24"
        :sm="12"
        :lg="6"
      >
        <a class="proj-info" target="_blank" :href="item.github">
          {{ item.name }}
        </a>
      </el-col>
    </el-row>
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
  data () {
    return {
      list: [
        {
          name: 'BBS论坛',
          github: 'https://github.com/2017coding/BBS',
          href: 'https://lyh.red/bbs'
        },
        {
          name: 'BBS管理系统',
          github: 'https://github.com/2017coding/BBS_admin',
          href: 'https://lyh.red/admin/'
        },
        {
          name: 'BBS node服务',
          github: 'https://github.com/2017coding/BBS_node',
          href: 'https://www.lyh.red/apidoc/index.html'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.component{
  padding: 20px;
  height: 100%;
  overflow: hidden;
  .project{
    font-size: 48px;
    font-weight: 100;
    margin-bottom: 40px;
  }
  .proj-info{
    display: block;
    padding: 20px;
    margin: 10px;
    border: 1px solid red;
    border-radius: 10px;
    text-align: center;
    box-sizing: border-box;
    color: red;
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
}
</style>

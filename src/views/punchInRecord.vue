<template>
  <div class="punch-in-record">
    <div class="punch-header-box">
      <punchHeader class="punch-header" :punchHeader='punchTitle'></punchHeader>
    </div>
    <punchBody class="punch-body"></punchBody>
    <punchFooter class="punch-footer"></punchFooter>
  </div>
</template>

<script>
import punchHeader from '@/components/common/punchHeader'
import punchBody from '@/components/punch/punchBody'
import punchFooter from '@/components/common/punchFooter'

  export default {
    name: 'punch-in-record',
    components: {
        punchHeader,
        punchBody,
        punchFooter
    },
    data () {
      return {
        punchTitle: '获取星星'
      }
    },
    mounted(){
      window.addEventListener('scroll',this.handleScroll);
    },
    methods: {
      handleScroll(e){
        if (document.documentElement.scrollTop > 0) {

        };
      }
    }
  }
</script>

<style lang="less" scoped>
  .punch-in-record {

    .punch-header-box {
      display: flex;
      justify-content: center;
    }

    .punch-body {
      margin-top: 3.5rem;
    }
  }
</style>

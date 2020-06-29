<template>
  <div class="punch-week-record">
    <div class="punch-header-box">
      <punchHeader :punchHeader='punchTitle' :smallHeaderClass='smallHeaderClass'></punchHeader>
    </div>
    <punchBody :weekName='weekitem.name' :weekCode='weekitem.id' v-for="weekitem in weekLists" :key="weekitem.id"></punchBody>
    <div class="punch-footer-box">
      <punchFooter :smallFooterClass='smallFooterClass'></punchFooter>
    </div>
  </div>
</template>

<script>
import punchHeader from '@/components/common/punchHeader'
import punchBody from '@/components/punch/punchBody'
import punchFooter from '@/components/common/punchFooter'
import weekLists from '@/mockData/weekList.js'

  export default {
    name: 'punch-week-record',
    components: {
        punchHeader,
        punchBody,
        punchFooter
    },
    data () {
      return {
        punchTitle: '本周星星',
        smallHeaderClass: false,
        smallFooterClass: false,
        weekLists: weekLists
      }
    },
    mounted () {
      window.addEventListener('scroll',this.handleScroll);

    },
    methods: {
      handleScroll() {
        var scrollTop = document.documentElement.scrollTop;
        var clientHeight = document.documentElement.clientHeight;
        var scrollHeight = document.documentElement.scrollHeight;
        var onBottom = Math.ceil(scrollTop + clientHeight) == scrollHeight;

        if (scrollTop > 0 && !onBottom) {
          this.smallHeaderClass = true;
          this.smallFooterClass = true;
        }else {
          this.smallHeaderClass = false;
          this.smallFooterClass = false;
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .punch-week-record {

    .punch-header-box {
      display: flex;
      justify-content: flex-start;
      width: 100%;
      height: 30px;
    }

    .punch-footer-box {
      display: flex;
      justify-content: flex-end;
      height: 5.3rem;
    }
  }
</style>

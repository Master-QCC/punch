<template>
  <div class="punch-week-record">
    <div class="punch-header-box">
      <punchHeader :punchHeader='punchTitle' :smallHeaderClass='smallHeaderClass'></punchHeader>
    </div>
    <punchWeek 
    :weekName='weekitem.name' 
    :weekCode='weekitem.id' 
    :noBorder='weekitem.id === weekLists.length'
    v-for="weekitem in weekLists" 
    :key="weekitem.id"></punchWeek>
    <div class="punch-footer-box">
      <punchFooter :smallFooterClass='smallFooterClass'></punchFooter>
    </div>
  </div>
</template>

<script>
import punchHeader from '@/components/common/punchHeader'
import punchWeek from '@/components/punch/punchWeek'
import punchFooter from '@/components/common/punchFooter'
import weekLists from '@/mockData/weekList.js'

  export default {
    name: 'punch-week-record',
    components: {
        punchHeader,
        punchWeek,
        punchFooter
    },
    data () {
      return {
        punchTitle: '本周星星',
        smallHeaderClass: false,
        smallFooterClass: false,
        weekLists: weekLists,
        scrollTop: 0
      }
    },
    mounted () {
      window.addEventListener('scroll', this.handleScroll, true);

    },
    methods: {
      checkTopOrBottom(scrollTop, onBottom) {
        if (scrollTop > 0 && !onBottom) {
          this.smallHeaderClass = true;
          this.smallFooterClass = true;
        }else {
          this.smallHeaderClass = false;
          this.smallFooterClass = false;
        }
      },
      handleScroll() {
        this.scrollTop = document.documentElement.scrollTop;
        let clientHeight = document.documentElement.clientHeight;
        let scrollHeight = document.documentElement.scrollHeight;
        let onBottom = Math.ceil(this.scrollTop + clientHeight) == scrollHeight;
        this.checkTopOrBottom(this.scrollTop, onBottom);
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
      height: 50px;
    }

    .punch-footer-box {
      display: flex;
      justify-content: flex-end;
      height: 5.3rem;
    }
  }
</style>

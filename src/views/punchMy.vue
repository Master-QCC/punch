<template>
  <div class="punch-my">
    <div class="punch-header-box">
      <punchHeader :punchHeader='punchTitle' :smallHeaderClass='smallHeaderClass'></punchHeader>
    </div>

    <div class="punch-footer-box">
      <punchFooter :smallFooterClass='smallFooterClass'></punchFooter>
    </div>
  </div>
</template>

<script>
import punchHeader from '@/components/common/punchHeader'
import punchFooter from '@/components/common/punchFooter'

  export default {
    name: 'punch-my',
    components: {
        punchHeader,
        punchFooter
    },
    data () {
      return {
        punchTitle: '历史星星',
        smallHeaderClass: false,
        smallFooterClass: false
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
  .punch-my {

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

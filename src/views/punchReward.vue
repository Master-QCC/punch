<template>
  <div class="punch-reward">
    <div class="punch-header-box">
      <punchHeader :punchHeader='punchTitle' :smallHeaderClass='smallHeaderClass'></punchHeader>
    </div>
    <totalStar :class="['total-star-box',positionFixed ? 'position-fixed': '']" :totalStarNumber='totalStarNumber'></totalStar>
    <div class="reward-box">
      <rewardItem 
        v-for="rewarditem in rewardLists"
        :rewardName='rewarditem.name'
        :rewardImg='rewarditem.rewardImg'
        :costStar='rewarditem.costStar'
        :totalStarNumber='totalStarNumber'
        :key="rewarditem.id"></rewardItem>
    </div>
    <div class="punch-footer-box">
      <punchFooter :smallFooterClass='smallFooterClass'></punchFooter>
    </div>
  </div>
</template>

<script>
import punchHeader from '@/components/common/punchHeader'
import rewardItem from '@/components/punch/rewardItem'
import totalStar from '@/components/common/totalStar'
import punchFooter from '@/components/common/punchFooter'
import rewardLists from '@/mockData/rewardList.js'

  export default {
    name: 'punch-reward',
    components: {
        punchHeader,
        rewardItem,
        totalStar,
        punchFooter
    },
    data () {
      return {
        punchTitle: '兑换奖励',
        smallHeaderClass: false,
        smallFooterClass: false,
        rewardLists: rewardLists,
        totalStarNumber: 50,
        positionFixed: false
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
          this.positionFixed = true;
        } else {
          this.smallHeaderClass = false;
          this.smallFooterClass = false;
          this.positionFixed = false;
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .punch-reward {

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

    .total-star-box {
      transition: all 0.4s ease-out;
      margin-top: 1rem;
      &.position-fixed {
        position: fixed;
        top: 0;
        right: 0;
      }
    }

    .reward-box {
      margin: 0 1rem;
      padding: 1rem 0;
      column-count:2;
      column-gap: 1rem;

      .reward-wrapper:first-child {
        margin-top: 0;
      }
      .reward-wrapper {
        break-inside: avoid;
      }
    }
  }
</style>

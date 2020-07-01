<template>
  <div class="punch-history-record">
    <div class="punch-header-box">
      <punchHeader :punchHeader='punchTitle' :smallHeaderClass='smallHeaderClass'></punchHeader>
    </div>
    <div class="punch-month-box" v-for="monthitem in monthLists" :key="monthitem.id">
      <punchMonth 
      ref="punchMonthBox"
      :monthName='monthitem.name' 
      :monthCode='monthitem.id' 
      :daysNumber='monthitem.daysNumber'
      :showLunchStar='true'
      :showDinnerStar='true'
      :noBorder='monthitem.id === monthLists.length'
      ></punchMonth>
    </div>
    <div class="punch-footer-box">
      <punchFooter :smallFooterClass='smallFooterClass'></punchFooter>
    </div>
  </div>
</template>

<script>
import punchHeader from '@/components/common/punchHeader'
import punchMonth from '@/components/punch/punchMonth'
import punchFooter from '@/components/common/punchFooter'
import monthLists from '@/mockData/monthList.js'

  export default {
    name: 'punch-history-record',
    components: {
        punchHeader,
        punchMonth,
        punchFooter
    },
    data () {
      return {
        punchTitle: '历史星星',
        smallHeaderClass: false,
        smallFooterClass: false,
        monthLists: monthLists,
        starSize: 1,
        scrollTop: 0,
      }
    },
    watch: {
      scrollTop: function(newValue,oldValue) {
        let itemlength = 0;
        this.$refs.punchMonthBox.forEach(function (item, index) {
          let transparentHeight = item.$el.offsetTop;
					if (newValue >= transparentHeight && index < 10) {
            let percent = (1 - (newValue - itemlength) / item.$el.offsetHeight) * 100;
            let fontPercent = (percent / 200 + 1) > 1 ? (percent / 200 + 1) : 1 + percent / 200;
            percent = percent > 40 ? percent : 40
            let imgPercent = (16 * percent / 100) < 16 ? 16 * percent / 100 : 16
						item.$el.style.width = percent + "%"
            item.$el.style.fontSize = fontPercent + "rem"
            item.starSize = percent / 100
						item.$el.style.opacity = percent / 100
					} else {
            item.$el.style.width = "100%"
            item.$el.style.fontSize = "2rem"
            item.starSize = 1
            item.$el.style.opacity = 1
          }
          itemlength = itemlength +item.$el.offsetHeight;
        });
			}
    },
    mounted () {
      window.addEventListener('scroll',this.handleScroll);
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
  .punch-history-record {

    .punch-header-box {
      display: flex;
      justify-content: flex-start;
      width: 100%;
      height: 30px;
    }

    .punch-month-box {
      display: flex;
      justify-content: center;
    }

    .punch-footer-box {
      display: flex;
      justify-content: flex-end;
      height: 5.3rem;
    }
  }
</style>

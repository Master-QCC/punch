<template>
  <div class="reward-wrapper">
    <div class="reward-item" @click="exchange">
      <h2>{{ rewardName }}</h2>
      <div class="cost-star-box">
        {{ costStar }}
        <img class="star-img" :src="starFill" alt="star_fill" width="18" height="18" />
      </div>
      <img class="reward-img" :src="rewardImg ? rewardImg : defaultRewardImg" alt="reward_img"/>
    </div>
    <popUp
    ref="rewardPopupBox"
    :popupTitle='popupTitle'></popUp>
  </div>
</template>

<script>
import popUp from "@/components/common/popUp";

export default {
  name: "reward-item",
  components: {
    popUp
  },
  props: {
    rewardName: String,
    rewardImg: String,
    costStar: Number,
    totalStarNumber: Number
  },
  data() {
    return {
      popupTitle: '',
      starFill: require("@/assets/icon/star_fill.svg"),
      defaultRewardImg: require('@/assets/images/rewardImg.jpg')
    };
  },
  methods: {
    exchange: function () {
      if (this.totalStarNumber >= this.costStar) {
        this.popupTitle = '恭喜，兑换成功！'
        this.$refs.rewardPopupBox.showPopupBox();
      } else {
        this.popupTitle = '星星还不够哦，继续努力~'
        this.$refs.rewardPopupBox.showPopupBox();
      }
    }
  },
  mounted() {
    
  }
}
</script>

<style lang="less" scoped>
.reward-item {
  color: black;
  background: white;
  box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  margin: 1rem 0;
  cursor: pointer;

  .cost-star-box {
    display: flex;
    padding: .2rem 0;
    align-items: center;

    .star-img {
      margin-left: .2rem;
    }
  }

  .reward-img {
    width: 100%;
    margin-top: .3rem;
    border-radius: 15px;
  }
}
</style>

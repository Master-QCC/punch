<template>
  <div class="punch-body">
    <div class="punch-today">
      <div class="punch-item punch-star" @click="punchStar($event)">
        <img
          :src="starOutline"
          alt="star_outline"
          v-show="showOutlineStar"
          width="130"
          height="130"
        />
        <img :src="starFill" alt="star_fill" v-show="showfillStar" width="130" height="130" />
        <span v-show="showPlusIcon">{{ plus }}</span>
      </div>
      <div class="punch-history">
        <div class="punch-item punch-lunch">
          <p>
            {{ lunchTitle }} 
            <span class="get-star-item" v-show="getLunchStar">
              <img :src="starFill" alt="star_fill" width="18" height="18" />
              {{ addNumber }}
              <Icon type="checkmark-round" class="icon"></Icon>
            </span>
          </p>
          <span class="time-description">{{ lunchDes }}</span>
        </div>
        <div class="punch-item punch-dinner">
          <p>
            {{ dinnerTitle }} 
            <span class="get-star-item" v-show="getDinnerStar">
              <img :src="starFill" alt="star_fill" width="18" height="18" />
              {{ addNumber }}
              <Icon type="checkmark-round" class="icon"></Icon>
            </span>
          </p>
          <span class="time-description">{{ dinnerDes }}</span>
        </div>
      </div>
    </div>

    <popUp
      ref="popUpBox"
      :showPopUp="showPopUp"
      :popupTitle="popupTitle"
      :popupYesBtn="popupYesBtn"
      :popupNoBtn="popupNoBtn"
    ></popUp>
  </div>
</template>

<script>
import { Icon } from "iview";
import popUp from "@/components/common/popUp";

export default {
  name: "punch-body",
  components: {
    Icon,
    popUp
  },
  data() {
    return {
      plus: "+",
      lunchTitle: "午餐",
      lunchDes: "时间：12:00 - 14:00",
      dinnerTitle: "晚餐",
      dinnerDes: "时间：16:00 - 19:00",
      showPlusIcon: true,
      addNumber: '+ 1',
      starOutline: require("@/assets/icon/star_outline.svg"),
      showOutlineStar: true,
      starFill: require("@/assets/icon/star_fill.svg"),
      showfillStar: false,
      popupTitle: "要在规定时间内打卡哦~",
      popupYesBtn: "确定",
      popupNoBtn: "取消",
      showPopUp: false,
      getLunchStar: false,
      getDinnnerStar: false
    };
  },
  methods: {
    punchStar(e) {
      var nowTime = new Date();
      console.log(nowTime.getHours());
      if (nowTime.getHours() >= 12 && nowTime.getHours() < 14) {
        // Lunch time must between 12:00 - 14:00
        if (!this.getLunchStar) {
          this.showOutlineStar = false;
          this.showfillStar = true;
          this.showPlusIcon = false;
          this.getLunchStar = true;
        } else {
          this.popupTitle = '已经领取过啦，不可以贪心哦~'
          this.$refs.popUpBox.showPopUp = true;
        }
      } else if (nowTime.getHours() >= 16 && nowTime.getHours() < 19) {
        // Dinner time must between 16:00 - 19:00
        if (!this.getDinnerStar) {
          this.showOutlineStar = false;
          this.showfillStar = true;
          this.showPlusIcon = false;
          this.getDinnerStar = true;
        } else {
          this.popupTitle = '已经领取过啦，不可以贪心哦~'
          this.$refs.popUpBox.showPopUp = true;
        }
      } else {
        this.$refs.popUpBox.showPopUp = true;
      }
    }
  }
};
</script>

<style lang="less" scoped>
.punch-body {
  color: black;
  width: 100%;
  padding: 1rem 1rem 0;

  .punch-today {
    display: flex;

    .punch-item {
      background: white;
      box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.2);
      padding: 1rem;
      overflow: hidden;

      p {
        display: flex;
      }

      .get-star-item {
        display: flex;
        margin-left: 2rem;
        font-weight: bold;

        img {
          margin-right: .5rem;
        }

        .icon {
          color: #F8D64A;
          line-height: 1.5;
          margin-left: .5rem;
        }
      }

      .time-description {
        color: grey;
        opacity: 0.8;
      }
    }

    .punch-star {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      margin-right: 0.5rem;
      width: calc(50% - 0.5rem);
      cursor: pointer;

      span {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -26px;
        user-select: none;
        margin-top: -55px;
        color: grey;
        font-size: 5rem;
        opacity: 0.1;
      }
    }

    .punch-history {
      margin-left: 0.5rem;
      width: calc(50% - 0.5rem);

      .punch-lunch {
        margin-bottom: 1rem;
        position: relative;

        &:before {
          content: "";
          background: url('../../assets/images/lunchBG.png');
          background-repeat: no-repeat;
          background-position-x: -50px;
          opacity: 0.2;
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
        }
      }

      .punch-dinner {
        position: relative;

        &:before {
          content: "";
          background: url('../../assets/images/dinnerBG.png');
          background-repeat: no-repeat;
          background-position-x: -50px;
          opacity: 0.2;
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
        }
      }

      p {
        margin-bottom: 2px;
        font-weight: bold;
      }
    }
  }
}
</style>

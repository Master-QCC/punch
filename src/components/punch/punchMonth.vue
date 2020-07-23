<template>
  <div :class="['punch-month', noBorder ? 'no-border': '']">
    <div class="punch-month-name" :data-month-code="monthCode">
      <div>{{ monthName }}</div>
      <div class="star-count">
        <img :src="starFill" width="16" height="16" alt="star">
        <span>X</span>{{ starAllNumber }}
      </div>
    </div>
    <div class="punch-month-box" ref="monthBox">
      <ul class="punch-month-list">
        <li class="punch-month-item" v-for="index of daysNumber" :key="index">
          <span>{{index}}</span>
          <img :class="showLunchStar ? 'show' : 'hide'" :style="{zoom: starSize}" :src="starFill" width="16" height="16" alt="star">
          <img :class="showDinnerStar ? 'show' : 'hide'" :style="{zoom: starSize}" :src="starFill" width="16" height="16" alt="star">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Icon } from "iview";

export default {
  name: "punch-month",
  components: {
    Icon,
  },
  props: {
    monthName: String,
    monthCode: Number,
    noBorder: Boolean,
    daysNumber: Number,
    showLunchStar: Boolean,
    showDinnerStar: Boolean,
    starSize: String
  },
  data() {
    return {
      starFill: require("@/assets/icon/star_fill.svg"),
      starAllNumber: 0
    };
  },
  methods: {
    
  },
  mounted() {
    for (var i = 0; i < this.daysNumber;i++) {
      if (this.showLunchStar) {
        this.starAllNumber++;
      }
      if (this.showDinnerStar){
        this.starAllNumber++;
      }
    }
  }
}
</script>

<style lang="less" scoped>
.punch-month {
  color: black;
  padding: 1.5rem 0 1rem;
  margin: 0 1rem;
  border-radius: 0 !important;
  border-bottom: 1px solid gray;
  font-size: 2rem;

  &.no-border {
    border-bottom: none;
  }

  .punch-month-name {
    display: inline-flex;
    padding: .2rem 1rem;
    font-size: 1.5rem;
    background-color: WhiteSmoke;

    .star-count {
      display: inline-flex;
      align-items: center;
      margin-left: .5rem;
      font-size: 1.2rem;
      img {
        display: inline-block;
        margin-right: .5rem;
      }
      span {
        font-size: 1rem;
        margin-right: .5rem;
      }
    }
  }

  .punch-month-list {
    display: flex;
    flex-wrap: wrap;
    padding-top: .5rem;
    .punch-month-item {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      width: 14.28%;
      text-align: center;
      border-bottom: 1px solid whitesmoke;
      margin-bottom: .5rem;
      padding-bottom: .5rem;
      span {
        width: 100%;
        display: block;
        line-height: 1;
      }
    }
  }
}
</style>

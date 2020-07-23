<template>
  <div class="total-star">
    {{ totalContent }}{{ totalStarNumber }}
    <img class="star-img" :src="starFill" alt="star_fill" width="18" height="18" />
  </div>
</template>

<script>

export default {
  name: "total-star",
  props: {
    totalStarNumber: Number
  },
  data() {
    return {
      totalContent: "已有星星 : ",
      starFill: require("@/assets/icon/star_white.svg")
    };
  },
  methods: {

  }
};
</script>

<style lang="less" scoped>
.total-star {
  color: white;
  display: flex;
  padding: .5rem;
  align-items: center;
  box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.2);
  width: fit-content;
  background-color: #F8D64A;

  .star-img {
    margin-left: .3rem;
  }
}

</style>
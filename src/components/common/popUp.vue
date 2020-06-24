<template>
  <div class="pop-up" v-show="showPopUp">
    <div class="popup-box redirection-black-background">
      <div class="popup-container">
        <h2 class="popup-title popup-margin" tabindex="-1">{{ popupTitle }}</h2>
        <div class="popup-footer">
        <button class="popup-btn popup-continue" @click="closePopUp($event)">{{ popupYesBtn }}</button>
        <button class="popup-btn popup-cancel" @click="closePopUp($event)">{{ popupNoBtn }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "pop-up",
  props: {
    popupTitle: String,
    showPopUp: Boolean,
    popupYesBtn: String,
    popupNoBtn: String
  },
  data() {
    return {
      
    };
  },
  methods: {
    closePopUp(e) {
      this.showPopUp = false;
    }
  }
};
</script>

<style lang="less" scoped>
.popup-box {
  position: fixed;
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  justify-content: center;
  overflow-x: hidden;

  .popup-container {
    background-color: #fff;
    padding: 1rem;
    max-width: 614px;
    position: relative;
    top: -20px;
    transition: all 0.4s;
    min-width: 350px;
    padding: 1rem;

    .popup-margin {
      margin-bottom: 1rem;
    }

    .popup-footer {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      flex-wrap: nowrap;

      .popup-btn {
        height: 48px;
        width: 33%;
        border-radius: 10px;
        box-shadow: 0 1px 0 0 black;
        box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.2);

        &:hover,
        &:focus {
          text-decoration: underline;
        }
      }

      .popup-cancel {
        background-color: #fff;
      }

      .popup-continue {
        background: rgba(119, 249, 197, 0.7);
      }
    }

    &.redirection-show-stauts {
      top: 0;
    }
  }

  &.redirection-black-background {
    background-color: #000;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 0 1rem;
  }

}

</style>
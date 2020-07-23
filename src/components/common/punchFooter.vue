<template>
  <div class="punch-footer" :class="smallFooterClass ? 'smaller' : '' ">
    <ul>
      <li
        v-for="site in sites"
        :key="site.id"
        :class="judgeActive(site.url)"
        @click="routerTo(site.url)"
      >
        <Icon :type="site.icon" class="icon"></Icon>
        <p>{{site.name}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { Icon } from "iview";
import footerList from "@/mockData/footerList.js";

export default {
  name: "punch-footer",
  components: {
    Icon
  },
  props: {
    smallFooterClass: Boolean
  },
  data() {
    return {
      sites: footerList
    };
  },
  methods: {
    routerTo(url) {
      this.$router.push({ path: url });
    },
    judgeActive(url) {
      if (this.$route.path === url) {
        return "active";
      } else {
        return "";
      }
    }
  }
};
</script>

<style lang="less" scoped>
.punch-footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  overflow: hidden;
  transition: all .4s ease-out;
  box-shadow: 0 2px 8px 2px rgba(0,0,0,0.2);
  background: rgba(230, 255, 245, 0.9);
  z-index: 9;

  &.smaller {
    width: 50%;
    background: rgba(119, 249, 197, 0.9);
    margin-bottom: 1rem;

    li {
      padding-top: .5rem;
      padding-bottom: .5rem;
      p {
        height: 0;
        overflow: hidden;
      }
    }
  }

  ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    position: relative;

    li {
      list-style: none;
      cursor: pointer;
      padding-top: 1rem;
      padding-bottom: 1rem;
      text-align: center;
      width: 25%;
    }
  }
  .icon {
    display: block;
    width: 1rem;
    height: 1rem;
    zoom: 1.9;
    margin: 0 auto;
  }
  p {
    font-size: 1rem;
  }
  .active {
    color: #52a936 !important;
  }
}
</style>
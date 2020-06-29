<template>
  <div class="punch-header" :class="smallHeaderClass ? 'smaller' : '' ">
    {{ punchHeader }}
  </div>
</template>

<script>
  export default {
    props: {
      punchHeader: String,
      smallHeaderClass: Boolean
		},
    data () {
      return {
        
      }
    },
    methods: {
      
    }
  }
</script>

<style lang="less" scoped>
  .punch-header {
    position: fixed;
		top: 0;
		width: 100%;
		padding: 1rem;
    z-index: 9;
    text-align: center;
    transition: all .4s ease-out;
    background: rgba(230, 255, 245, 0.9);
    overflow: hidden;
    box-shadow: 0 0 8px 0 rgba(0,0,0,0.2);

    &.smaller {
      width: 25%;
      padding: .5rem;
      background: rgba(119, 249, 197, 0.9);
    }
  }
</style>

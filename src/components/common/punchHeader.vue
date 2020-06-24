<template>
  <div class="punch-header">
    {{ punchHeader }}
  </div>
</template>

<script>
  export default {
    props: {
			punchHeader: String
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
    background: rgba(230, 255, 245, 0.8);
    overflow: hidden;
    box-shadow: 0 0 8px 0 rgba(0,0,0,0.2);
  }
</style>

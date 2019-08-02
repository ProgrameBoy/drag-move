<!-- 组件库 drag-move -->
<template>
  <div id="drag-wrapper" v-if="data">
    <div v-for="(item,index) in data" :key="index" :style="{postion:'absolute'}" :class="customClass">
      <slot></slot>
    </div>
  </div>

</template>

<script>
export default {
  name: "dragMove",
  props: {
    isdrag: {
      type: Boolean,
      default: false
    },
    data: {
      type: Array,
      default: () => []
    },
    customClass: {
      type: String,
      default: "drag-move_chunk"
    },
    margin: {
      type: Array,
      default: () => [5, 5]
    },
    colNums: {
      type: Number,
      default: 6
    },
    rowHeight: {
      type: Number,
      default: 50
    }
  },
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {}
};
</script>
<style>
#drag-wrapper {
  position: relative;
}
.drag-move_chunk {
  border: 1px solid #dedede;
}
</style>
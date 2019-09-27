<!-- 组件库 drag-move -->
<template>
  <div id="drag-wrapper" v-if="data">
    <div v-for="(item,index) in data" :key="index" @mousedown="elMousedown" style="position:absolute" :style="countStyle(item)" class="drag-el" :class="customClass">
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
    return {
      docWidth: document.body.clientWidth,
      docHeight: document.body.clientHeight
    };
  },
  // directives: {
  //   dragMouse(el) {
  //     let e = el; // 获取当前元素

  //   }
  // },
  components: {},

  computed: {
    countBaseW() {
      let docWidth = this.docWidth,
        colNums = this.colNums <= 0 ? 1 : this.colNums;
      return docWidth / colNums;
    }
  },

  mounted() {},

  methods: {
    // 计算元素得宽高
    countStyle(item) {
      let { x, y, w, h } = item;
      // 获取基础宽度
      let getBaseWidth = this.countBaseW;
      x = x && x >= 0 ? x : 0;
      y = y && y >= 0 ? y : 0;
      w = w && w > 0 ? w : 1;
      h = h && h > 0 ? h : 1;
      let obj = {
        width: getBaseWidth * w + "px",
        height: this.rowHeight * h + "px",
        top: 0,
        left: 0
      };
      return obj;
    },
    // 计算当前位置是否已经占用
    isOccupy() {},
    /** 移动方法 start**/
    // 元素选中
    elMousedown(event) {
      // event.stopPropagation();
      let elTarget = event.target;
      let domOffsetX = event.offsetX || event.layerX,
        domOffsetY = event.offsetY || event.layerY;
      // let disX = event.clientX - domOffsetX, //v1
      //   disY = event.clientY - domOffsetY;
      let disX = event.clientX,
        disY = event.clientY; // v2
      let offsetTop = parseFloat(elTarget.style.top),
        offsetLeft = parseFloat(elTarget.style.left);
      let moveParam = { elTarget, disX, disY, offsetTop, offsetLeft };
      document.onmousemove = e => {
        // 移动
        moveParam.event = e;
        this.elMousemove(moveParam);
      };
      document.onmouseup = e => {
        // 松开右击
        // 防止鼠标弹起来得时候不再移动
        document.onmousemove = null;
        // 防止鼠标弹起来后还会循环（即预防鼠标放上去的时候还会移动）
        document.onmouseup = null;
      };
    },
    // 元素移动中
    elMousemove(param) {
      let { event, elTarget, disX, disY, offsetTop, offsetLeft } = param;
      event.preventDefault();
      let top = event.clientY - disY + offsetTop,
        left = event.clientX - disX + offsetLeft;
      elTarget.style.top = top + "px";
      elTarget.style.left = left + "px";
    },
    // 元素移动结束
    elMouseover(event) {}
    /** 移动方法 end **/
  }
};
</script>
<style>
#drag-wrapper {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 200px;
}
#drag-wrapper::after {
  content: " ";
  height: 100%;
  width: 100%;
  clear: both;
  box-sizing: border-box;
  display: block;
}
.drag-el {
  cursor: move;
}
.drag-move_chunk {
  border: 1px solid #dedede;
}
</style>
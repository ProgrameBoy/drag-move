<template>
  <div>
    <drag-move :data="data">
      drag-Move
    </drag-move>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "home",
  data() {
    return {
      data: [
        {
          x: 0,
          y: 0,
          w: 1,
          h: 1
        }
      ]
    };
  },
  components: {}
};
</script>

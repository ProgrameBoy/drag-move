<template>
  <div>
    <drag-move :data="data">
      456132
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
        },
        {
          x: 1,
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

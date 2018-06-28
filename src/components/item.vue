<template>
  <div>
  <span>{{title | uppercase}}: </span>
  <span v-text="description"></span>
  <button @click.prevent="removeMe">X</button>
  </div>
</template>

<script>
export default {
  name: "item",
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String
    }
  },
  methods: {
    removeMe(pos) {
      this.$emit("removeMe", pos);
    }
  }
};
</script>

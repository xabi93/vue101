<template>
  <div :class="inputStatus" class="box">
    <div class="field">
      <label class="label">Title</label>
      <input v-model="title" @keyup.enter.prevent="titleSubmited" class="input">
    </div>
    <div class="field">
      <label class="label">Description</label>
      <input class="input" v-model="description" ref="description" @keyup.enter.prevent="todoSubmited">
    </div>
  </div>
</template>

<script>
export default {
  name: "input-field",
  data() {
    return {
      title: "",
      description: "",
      error: false
    };
  },
  computed: {
    inputStatus() {
      if (this.error) {
        return ["error"];
      }
    }
  },
  methods: {
    titleSubmited() {
      this.$refs.description.focus();
    },
    todoSubmited() {
      if (this.title !== "" && this.description !== "") {
        this.error = false;
        this.$emit("itemSubmited", {
          title: this.title,
          description: this.description
        });
        this.title= '',
        this.description = ''
      } else {
        this.error = true;
      }
    }
  },
  watch: {
    title: function() {
      this.error = false;
    },
    description() {
      this.error = false;
    }
  }
};
</script>

<style scoped>
.error {
  border: 10px solid red;
}
</style>

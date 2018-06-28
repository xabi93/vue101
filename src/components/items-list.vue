<template>
  <div class="items-list">
    <div v-if="hasItems">
      <h2>Tasks list</h2>
      <item v-for="(item, pos) in items" 
      :key="pos" 
      :title="item.title" :description="item.description" @removeMe="removeItem(pos)"
      class="item"/>
    </div>
    <div v-else >
      <h3>Great! you don't have any task</h3>
    </div>
  </div>
</template>

<script>
import Item from "./item";

export default {
  name: "input-field",
  components: {
    Item
  },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    hasItems(){
      return this.items.length > 0
    }
  },
  methods: {
    removeItem(pos) {
      this.$emit("removeItem", pos);
    }
  }
};
</script>
<style>
.items-list {
  margin-top: 10px;
  border: 1px solid black;
  align-self: center
}
.item {
  margin: 15px;
}
</style>

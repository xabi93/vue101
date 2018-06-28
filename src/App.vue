<template>
  <div id="app">
    <h1>Todo app</h1>
    <input-field @itemSubmited="addItem"/>
    <items-list :items="items" @removeItem="removeItem"
    />
  </div>
</template>

<script>
import InputField from "./components/input-field";
import ItemsList from "./components/items-list";

export default {
  name: "App",
  components: {
    InputField,
    ItemsList
  },
  data() {
    return {
      items: []
    };
  },
  methods: {
    addItem(item) {
      this.items.push(item);
    },
    removeItem(position) {
      this.items.splice(position, 1);
    }
  },
  mounted(){
    alert("Welcome to the super todo app!")
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

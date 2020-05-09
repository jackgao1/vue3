<template>
  <div class="hello">
    <button @click="test">{{name}}</button>
  </div>
</template>
<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      name: "test"
    };
  },
  methods: {
    test() {
      this.$post("/test", {
          id: 123,
          name: "s&s=s"
        })
        .then(res => {
          console.log(res);
        });
    }
  }
};
</script>

<style scoped>
</style>
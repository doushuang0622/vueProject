<template>
  <div>
    <span>{{transmitName}}</span>
    <input type="text" v-model="userName" @change="setUser" />
    <!-- <button></button> -->
  </div>
</template>
<script>
export default {
  name: "chilfComponent",
  props: {
    transmitName: String,
    required: true
  },
  data() {
    return {
      userName: ""
    };
  },
  methods: {
    setUser: function() {
      this.$emit("transferUser", this.userName);
    }
  }
};
</script>
<template>
  <div>
    <input type="text" style="border:1px solid  red" v-model="transmit" />
    <child @transferUser="getUser" :transmitName="transmit"></child>
    <p>{{user}}</p>
  </div>
</template>
<script>
// import childCmmponent form './child'
import child from "./child";
export default {
  name: "parentPage",
  components: {
    child
  },
  data() {
    return {
      user: "",
      transmit: ""
    };
  },
  methods: {
    getUser(val) {
      this.user = val;
    }
  }
};
</script>

<template>
  <div>
    <p>use: {{ use }}</p>
    <p>name: {{ name }}</p>
    <p>school: {{ school }}</p>
    <p>address: {{ address }}</p>
    <p>field: {{ field }}</p>
    <p>arrList: {{ arrList }}</p>
    <div><button @click="changeSchool()">改变值</button></div>
  </div>
</template>

<script>
import { mapState } from "Vuex";
export default {
  data() {
    return {
      use: "vuex高级使用方法"
    };
  },
  computed: {
    ...mapState({
      name: state => state.footer.name,
      address: state => state.footer.address,
      school: state => state.footer.school,
      field: state => state.collection.field,
      arrList: state => state.collection.collects
    })
  },
  methods: {
    changeSchool() {
      this.$store.dispatch("footer/handleChangeSchool", "北大");
    }
  }
};
</script>

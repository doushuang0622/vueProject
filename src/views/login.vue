<template>
  <div>
    <van-cell-group>
      <van-field
        v-model="mobileAccount"
        required
        clearable
        label="用户名"
        right-icon="question-o"
        placeholder="请输入手机号"
        @click-right-icon="$toast('请输入注册的手机号码')"
      />

      <van-field
        v-model="password"
        type="password"
        label="密码"
        placeholder="请输入密码"
        required
      />
    </van-cell-group>
    <van-button type="primary" @click="handleLogin">登 陆</van-button>
    <p>{{ this.$store.state.count }}</p>
  </div>
</template>
<script>
import { CellGroup, Field, Toast, Button } from "vant";
import { login } from "@/api/port";
// import {map}

export default {
  components: {
    [CellGroup.name]: CellGroup,
    [Field.name]: Field,
    [Toast.name]: Toast,
    [Button.name]: Button
  },
  data() {
    return {
      mobileAccount: "",
      password: ""
    };
  },
  mounted: {},
  methods: {
    handleLogin: function() {
      let _self = this;
      if (_self.mobileAccount == "" || _self.password == "") {
        Toast.fail("账号或密码不能为空");
      } else {
        let params = {
          loginNo: _self.mobileAccount,
          loginPassword: _self.password,
          isEncryption: true //是否需要加密
        };
        login(params)
          .then(res => {
            Toast.success("登陆成功");
            console.log(res);
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  }
};
</script>

<template>
  <div>
    <div class="page-wrap">
      <!-- <div class="page-title">Tabbar</div>
      <div>
        <mt-cell class="page-part" title="当前选中" :value="selected" />
      </div>-->

      <!-- tabcontainer -->
      <mt-tab-container class="page-tabbar-container" v-model="selected">
        <mt-tab-container-item id="外卖">
          <first-page></first-page>
        </mt-tab-container-item>
        <mt-tab-container-item id="订单">
          <mt-navbar v-model="selected">
            <mt-tab-item id="1">选项一</mt-tab-item>
            <mt-tab-item id="2">选项二</mt-tab-item>
            <mt-tab-item id="3">选项三</mt-tab-item>
          </mt-navbar>
          <button @click="handleTest">测试下点击事件</button>
          <!-- tab-container -->
          <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
              <!-- <first-page></first-page> -->
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
              <mt-cell v-for="n in 4" :title="'测试 ' + n" :key="n" />
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
              <mt-cell v-for="n in 6" :title="'选项 ' + n" :key="n" />
            </mt-tab-container-item>
          </mt-tab-container>
        </mt-tab-container-item>
        <mt-tab-container-item id="发现">
          <nut-navbar
            style="background-color:#000; color: #fff; height:60px; line-height: 60px;"
          >NavBar5</nut-navbar>
          <nut-noticebar text="华为畅享9新品即将上市，活动期间0元预约可参与抽奖，赢HUAWEI WATCH等好礼，更多产品信息请持续关注！"></nut-noticebar>
          <nut-tab @tab-switch="tabSwitch" positionNav="left">
            <nut-tab-panel
              v-for="value in editableTabs"
              v-bind:key="value.tabTitle"
              :tabTitle="value.tabTitle"
              :iconUrl="value.tabUrl"
              v-html="value.content"
            ></nut-tab-panel>
          </nut-tab>
        </mt-tab-container-item>
        <mt-tab-container-item id="我的">
          <div class="page-part">
            <!-- cell -->
            <mt-cell v-for="n in 12" :title="'我的 ' + n" :key="n" />
          </div>
          <router-link to="/">
            <!-- button -->
            <mt-button type="danger" size="large">退出</mt-button>
          </router-link>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="外卖" @click.native="handleOne">
        <img slot="icon" src="../assets/img/favorite_icon.png" v-if="!showOne" />
        <img slot="icon" src="../assets/img/favorite_icon_active.png" v-if="showOne" />
        外卖
      </mt-tab-item>
      <mt-tab-item id="订单" @click.native="handleTwo">
        <img slot="icon" src="../assets/img/favorite_icon.png" v-show="!showTwo" />
        <img slot="icon" src="../assets/img/favorite_icon_active.png" v-show="showTwo" />
        订单
      </mt-tab-item>
      <mt-tab-item id="发现" @click.native="handleThree">
        <img slot="icon" src="../assets/img/favorite_icon.png" v-show="!showThree" />
        <img slot="icon" src="../assets/img/favorite_icon_active.png" v-show="showThree" />
        发现
      </mt-tab-item>
      <mt-tab-item id="我的" @click.native="handleFour">
        <img slot="icon" src="../assets/img/favorite_icon.png" v-show="!showFour" />
        <img slot="icon" src="../assets/img/favorite_icon_active.png" v-show="showFour" />
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
import firstPage from "../components/firstPage/firstPage";
export default {
  name: "homePage",
  components: {
    "first-page": firstPage
  },
  data() {
    return {
      selected: "外卖",
      showOne: true,
      showTwo: false,
      showThree: false,
      showFour: false,
      positionNavCurr: "left",
      editableTabs: [
        {
          tabTitle: "衣物",
          tabUrl:
            "http://img13.360buyimg.com/uba/jfs/t27280/289/2061314663/2392/872e32ff/5bf76318Ndc80c1d8.jpg",
          content: "<p>衣物内容</p>"
        },
        {
          tabTitle: "日用品",
          tabUrl:
            "http://img13.360buyimg.com/uba/jfs/t30331/209/562746340/2190/6619973d/5bf763aaN6ff02099.jpg",
          content: "<p>日用品内容</p>"
        },
        {
          tabTitle: "器材",
          tabUrl:
            "http://img20.360buyimg.com/uba/jfs/t30346/262/553689202/2257/5dfa3983/5bf76407N72deabf4.jpg",
          content: "<p>运动器材内容</p>"
        },
        {
          tabTitle: "电影票",
          tabUrl:
            "http://img10.360buyimg.com/uba/jfs/t26779/215/2118525153/2413/470d1613/5bf767b2N075957b7.jpg",
          content: "<p>电影票内容</p>"
        }
      ]
    };
  },
  methods: {
    back() {
      alert("header头部， 点击返回");
    },
    title() {
      alert("header头部， 点击title");
    },
    more() {
      alert("header头部， 点击更多");
    },
    tabSwitch: function(index, event) {
      console.log(index + "--" + event.target);
    },
    handleTest: function() {
      this.$dialog({
        id: "my-dialog",
        title: "确定删除此订单？",
        content: "删除后将从你的记录里消失，无法找回"
      });
    },
    handleOne: function() {
      this.showOne = true;
      this.showTwo = false;
      this.showThree = false;
      this.showFour = false;
    },
    handleTwo: function() {
      this.showOne = false;
      this.showTwo = true;
      this.showThree = false;
      this.showFour = false;
    },
    handleThree: function() {
      this.showOne = false;
      this.showTwo = false;
      this.showThree = true;
      this.showFour = false;
    },
    handleFour: function() {
      this.showOne = false;
      this.showTwo = false;
      this.showThree = false;
      this.showFour = true;
    }
  },
  created() {},
  computed: {}
};
</script>
<style scoped>
.nut-tab {
  padding: 0;
  border: none;
}
/* .nut-tab-title-leftnav .nav-bar-left {
  height: 50px !important;
} */
</style>
<style>
.nut-tab {
  padding: 0;
  border: none;
}
.nut-tab-title-leftnav .nut-title-nav {
  border: none;
}
</style>


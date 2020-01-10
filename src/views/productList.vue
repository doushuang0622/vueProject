<template>
  <div id="list">
    <van-tabs v-model="active">
      <van-tab title="标签 1">内容 1</van-tab>
      <van-tab title="标签 2">内容 2</van-tab>
      <van-tab title="标签 3">
        <van-pull-refresh v-model="isDownLoading" @refresh="onDownRefresh">
          <van-list
            v-model="isUpLoading"
            :finished="upFinished"
            :immediate-check="false"
            :offset="1000"
            finished-text="我是有底线的"
            @load="onLoadList"
          >
            <div v-if="productList.length > 0" class="allcontent">
              <div v-for="(item, index) in productList" :key="item.fundId">
                <p>{{ item.fundName + index }}</p>
                <p>{{ index }}</p>
              </div>
            </div>
          </van-list>
        </van-pull-refresh>
      </van-tab>
      <van-tab title="标签 4">内容 4</van-tab>
    </van-tabs>
  </div>
</template>
<script src=""></script>
<script type="text/babel">
import { Tab, Tabs, PullRefresh, List } from "vant";
import { high } from "../api/port";

export default {
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [List.name]: List,
    [PullRefresh.name]: PullRefresh
  },
  data() {
    return {
      productList: [],
      active: 2,
      pageSize: 10, // 每页条数
      pageIndex: 1, // 页码
      isDownLoading: false, // 下拉刷新
      isUpLoading: false, // 上拉加载
      upFinished: false, // 上拉加载完毕
      offset: 1500 // 滚动条与底部距离小于 offset 时触发load事件
    };
  },
  created() {
    let _self = this;
    _self.getList();
  },
  methods: {
    getList: function() {
      // var reg1 = /^[\u4e00-\u9fa5\w \*#_-]+$/;
      // var reg2 = /^(\d+|[a-zA-Z]+|[\*#_-]+)$/;
      // var aa = "a22-34";
      // if (!(reg1.test(aa) && !reg2.test(aa))) {
      //   console.log("err");
      // } else {
      //   console.log("正确");
      // }
      let _self = this;
      // _self.productList = [];
      let params = {
        pageIndex: _self.pageIndex,
        code: "03"
      };
      high(params)
        .then(res => {
          console.log(res.highFundRedesignVoList[0].fundList);
          const rows = res.highFundRedesignVoList[0].fundList;
          if (rows == null || rows.length === 0) {
            // 加载结束
            _self.upFinished = true;
            return;
          }
          if (rows.length < this.pageSize) {
            // 最后一页不足10条的情况
            _self.upFinished = true;
            console.log("不足10条数据");
          } else {
            _self.upFinished = false;
          }
          // 处理数据
          if (_self.pageIndex === 1) {
            _self.productList = rows;
          } else {
            console.log(_self.pageIndex);
            console.log(_self.productList);
            _self.productList = _self.productList.concat(rows);
            console.log(_self.productList);
          }

          // if (res.highFundRedesignVoList[0].fundList.length > 0) {
          //   _self.productList = _self.productList.concat(
          //     res.highFundRedesignVoList[0].fundList
          //   );
          // }
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => {
          console.log("执行了finally");
          _self.isDownLoading = false;
          _self.isUpLoading = false;
        });
    },
    onDownRefresh() {
      this.productList = [];
      this.pageIndex = 1;
      console.log("走的是onDownRefresh");
      // this.upFinished = false; // 不写这句会导致你上拉到底过后在下拉刷新将不能触发下拉加载事件
      this.getList(); // 加载数据
    },
    // 上拉加载请求方法
    onLoadList() {
      console.log("走的是onLoadList");
      this.pageIndex++;
      this.getList();
    }
  }
};
</script>

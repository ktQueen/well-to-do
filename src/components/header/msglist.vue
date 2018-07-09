<template>
  <div class="wrap dj-header-msg-list">
    <div v-if="listData.length<1" class="no-msg">暂无消息</div>
    <a v-else class="" :href="msgHref" :target="msgTarget" @click="myClickFn">
      <div v-for="item in listData" class="content">
        <a v-if="item.messageType===4">
          <span class="m-w-60"><span class="t">{{item.callerName}}</span>在</span>
          <span class="t m-w-102">{{item.context}}</span><span>中@了你</span>
        </a>
        <a v-if="item.messageType===5">
          <span class="m-w-82"><span class="t">{{item.callerName}}</span>评论了</span>
          <span class="t m-w-126" v-html="item.context"></span>
        </a>
        <a v-if="item.messageType===6">
          <span class="m-w-86"><span class="t">{{item.callerName}}</span>赞了你的</span>
          <span class="t m-w-126" v-html="item.context"></span>
        </a>
      </div>
    </a>
  </div>
</template>

<script>
  export default {
    name: 'msglist',
    props: ['listData', 'msgHref', 'msgTarget'],
    methods: {
      myClickFn() {
        this.$emit('msgclick');
      }
    }
  };
</script>

<style lang="scss" scoped>
  .wrap {
    padding: 0 10px;
    max-height: 240px;
    overflow-y: scroll;
    overflow-x: hidden;
    .content {
      color: black;
      border-bottom: solid 1px #E2E5ED;
      width: 232px;
      height: 40px;
      line-height: 40px;
      font-size: 12px;
      cursor: pointer;
      a > span {
        display: inline-block;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      span.t {
        color: #0f8ee9;
      }
    }

    .content:last-child {
      border-bottom: none;
    }
  }

  .no-msg {
    height: 40px;
    line-height: 40px;
    text-align: center;
  }

  .m-w-126 {
    max-width: 126px;
  }

  .m-w-102 {
    max-width: 102px;
  }

  .m-w-82 {
    max-width: 82px;
  }

  .m-w-86 {
    max-width: 86px;
  }

  .m-w-60 {
    max-width: 60px;
  }
</style>

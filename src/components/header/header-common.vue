<template>
  <div>
    <div class="top-banner clearfix">
      <div class="l-side fl">
        <ul>
          <li><a class="nav-item-text" href="http://work.daojia-inc.com/">work首页</a></li>
          <li><a class="nav-item-text" href="http://work.daojia-inc.com/workadministrative/gotorule" target="_blank">规章制度</a>
          </li>
          <li><a class="nav-item-text" href="http://adm.daojia-inc.com/#/" target="_blank">行政管理</a></li>
          <li><a class="nav-item-text" href="http://fms.daojia-inc.com/#/main" target="_blank">财务管理</a></li>
          <!-- <li :class="{hideborder:showGlobalNavigator}"><a class="nav-item-text" href="">IT技术</a></li> -->
          <!-- <li :class="[{'show-global-nav':showGlobalNavigator}]" @mousemove="allMousemoveHandler" @mouseleave="allMouseleaveHandler" @mouseenter="allMouseenterHandler"><span class="nav-item-text" > 全部 &nbsp;<i :class="showGlobalNavigator?'dj-icon-arrow-up':'dj-icon-arrow-down'"></i> </span> </li> -->
        </ul>
      </div>
      <div class="r-side fr">
        <ul>
          <li>
            <el-popover placement="top" v-model="isShowUserInfo">
              <div class="header-user-info">
                <div class="logout" @click="handleLogoutFn"> 退出</div>
                <a href="#/person-info" target="_blank">
                  <div class="info">
                    个人信息
                  </div>
                </a>
              </div>
              <span class="feedback-name" slot="reference">{{userInfo.nickName}}</span>
            </el-popover>
          </li>
        </ul>
      </div>
      <!-- <div :class="['d-menu-container',{active:showGlobalNavigator}]" @click="linkClickHandler" @mouseleave="menuMouseleaveHandler" @mouseenter="menuMouseenterHandler">
        <div class="d-menu-list caiwu">
           <div class="caiwu-container">
               <div class="d-menu-list-title ">财务应用</div>
               <ul>
                 <li><a href="#" class="hot-fapiao">发票申请单</a></li>
                 <li><a href="#">印证申请单</a> </li>
                 <li><a href="">日常费用报销单</a></li>
                 <li><a href="">差旅申请单</a></li>
                 <li><a href="">个人借贷款</a></li>
                 <li><a href="">预算增补单</a></li>
               </ul>
           </div>
        </div>
        <div class="d-menu-list xingzheng" >
          <div class="xingzheng-container">
              <div class="d-menu-list-title ">行政应用</div>
               <div>
                   <ul>
                       <li><a href="#">常用品借用</a></li>
                       <li><a href="#">我的借用</a></li>
                       <li><a href="#" class="hot-xingzheng">会议室预定</a></li>
                       <li><a href="#">办公用品申请</a></li>
                       <li><a href="#">工单卡申请</a></li>
                       <li><a href="#">名片申请</a></li>
                       <li><a href="#">高值用品申请</a></li>
                       <li><a href="#">邮件组申请</a></li>
                   </ul>
               </div>
          </div>
        </div>
        <div class="d-menu-list infomation" >
          <div class="d-menu-list-title " >IT应用</div>
           <div class="infomation-container">
             <ul>
               <li><a href="#">阿里云外网权限申请</a></li>
               <li><a href="#">堡垒机权限申请</a></li>
               <li><a href="#">新DBA工单</a></li>
               <li><a href="#">USP初始化申请</a></li>
               <li><a href="#">集群下线申请</a></li>
               <li><a class="hot-infomation" href="">服务器申请</a></li>
               <li><a href="#">域名申请</a></li>
               <li><a href="#">安全配置检查</a></li>
             </ul>
             <ul class="info-adjust">
               <li><a href="#">工单系统</a></li>
               <li><a href="#">流程代理</a></li>
               <li><a href="#">安全监测</a></li>
               <li><a href="#">BDP</a></li>
               <li><a href="#">大数据平台</a></li>
               <li><a href="#">Djoy</a></li>
               <li><a href="#">Confluence</a></li>
             </ul>
           </div>
        </div>
        <div class="d-menu-list humanr">
            <div class="humanr-container">
               <div class="d-menu-list-title ">HR应用</div>
               <div>
                   <ul>
                       <li><a href="" class="hot-humanr">内部推荐</a></li>
                       <li><a href="#">证明申请</a></li>
                       <li><a href="#">季度绩效系统</a></li>
                       <li><a href="#">我的假期</a></li>
                       <li><a href="#">假期管理</a></li>
                       <li><a href="#">背调系统</a></li>
                       <li><a href="#">薪人薪事</a></li>
                       <li><a href="#">招聘系统</a></li>
                   </ul>
               </div>
            </div>
        </div>
        <div class="d-menu-list other">
           <div class="d-menu-list-title">其他</div>
           <div>
             <ul>
               <li><a href="#">帮助中心</a></li>
               <li><a href="" class="hot-other">到家邮箱</a></li>
               <li><a href="#">到家LIVE</a></li>
               <li><a href="#">到家BBS</a></li>
               <li><a href="#">服务贴士发布</a></li>
             </ul>
           </div>
        </div>
      </div> -->
    </div>
    <div class="header-container">
      <div class="parallax-con" ref='parallax'>
        <div :class="['layer']" data-depth="0.4">
          <div class="spance" id="particles-js"></div>
        </div>
      </div>
      <div class="menu-container" @mousemove.stop @mouseover.stop>
        <span class="logo-img logo-img-pic"></span>
      </div>
    </div>
  </div>
</template>
<script>
  // 引入视差控件
  import Parallax from 'parallax-js';
  import 'particles.js';
  // 声明定时器(鼠标从"全部"移入到全部导航列表时全部导航不会消失)
  let timer;
  export default {
    async mounted() {
      // 初始化视差控件
      const para = new Parallax(this.$refs.parallax, {
        invertX: true,
        invertY: true,
        scalarX: 10,
        frictionY: 0.1,
        hoverOnly: true
      });
      // 调用Parallax的version方法，解决EsLint报错
      para.version();
      const particlesJS = window.particlesJS;
      particlesJS('particles-js', {
        particles: {
          number: {
            value: 120,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: '#ffffff'
          },
          shape: {
            type: 'circle',
            stroke: {
              width: 0,
              color: '#000000'
            },
            polygon: {
              nb_sides: 5
            },
            image: {
              src: 'img/github.svg',
              width: 100,
              height: 100
            }
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: '#ffffff',
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 1,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: true,
              mode: 'grab'
            },
            onclick: {
              enable: true,
              mode: 'push'
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 140,
              line_linked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3
            },
            repulse: {
              distance: 200,
              duration: 0.4
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true
      });
    },
    methods: {
      // 顶部bar "全部"tab 的鼠标进入事件处理:显示全部导航列表
      allMouseenterHandler() {
        this.showGlobalNavigator = true;
      },
      // 顶部bar "全部"tab 的鼠标移出事件处理:隐藏全部导航列表
      allMouseleaveHandler() {
        // 延迟隐藏全部导航条
        timer = setTimeout(() => {
          this.showGlobalNavigator = false;
        }, 300);
      },
      // 修复鼠标移动过快的bug
      allMousemoveHandler() {
        if (!this.showGlobalNavigator) {
          this.showGlobalNavigator = true;
        }
        if (timer) {
          clearTimeout(timer);
        }
      },
      // 导航列表的 mouseover 事件处理
      menuMouseenterHandler() {
        // 鼠标如果从"全部"移入到导航列表，取消mouseout的定时任务，导航列表会继续显示
        clearTimeout(timer);
      },
      // 鼠标移出导航列表后关闭导航列表
      menuMouseleaveHandler() {
        this.showGlobalNavigator = false;
      },
      // 监听鼠标的点击事件（冒泡）
      linkClickHandler(e) {
        //  获取被点击的标签名称
        const tagName = e.target.tagName.toLowerCase();
        //  如果点击的是a标签或者li标签则关闭导航列表
        if (tagName === 'a' || tagName === 'li') {
          this.showGlobalNavigator = false;
        }
      },
      handleLogoutFn() {
        sessionStorage.removeItem('userInfo');
        if (window.location.href.indexOf('.daojia-inc.com') > 0) {
          window.location.href = `http://inpass.daojia-inc.com/user/logout?redirect=${window.location.href}`;
        } else {
          window.location.href = `http://inpass.djtest.cn/user/logout?redirect=${window.location.href}`;
        }
      }
    },
    data() {
      return {
        // 是否展示全部导航列表
        showGlobalNavigator: false,

        // 以下参数为右侧区域用到的变量
        userInfo: {},
        infoType: '4',
        isShowNewInfo: false,
        isShowUserInfo: false,
        env: window.location.href.indexOf('.daojia-inc.com') > 0 ? 'prod' : window.location.href.indexOf('-box.djtest.cn') > 0 ? 'box' : 'test'
      };
    }
  };
</script>

<style lang="scss" scoped>
  .fl {
    float: left;
  }

  .fr {
    float: right;
  }

  .clearfix {
    zoom: 1;
  }

  .clearfix:after {
    content: '';
    display: block;
    clear: both;
  }

  .top-banner {
    .dj-icon-arrow-down {
      display: inline-block;
      width: 5px;
      height: 5px;
      border-right: 1px solid #666;
      border-bottom: 1px solid #666;
      transform: rotate(45deg) translate(-50%, -50%);
    }
    .dj-icon-arrow-up {
      display: inline-block;
      width: 5px;
      height: 5px;
      border-right: 1px solid #666;
      border-bottom: 1px solid #666;
      transform: rotate(-135deg);
    }
    position: relative;
    background: #F5F5F5;
    padding: 0 20px;
    font-size: 14px;
    color: #666666;
    height: 30px;
    overflow: visible;
    .l-side, .r-side {
      align-items: center;
      ul {
        overflow: hidden;
        li {
          height: 30px;
          display: table-cell;
          vertical-align: middle;
          .nav-item-text {
            border-right: 1px solid #ccc;
            display: inline-block;
            padding: 0 15px;
            color: #666666;
            a {
              color: #666666;
            }
          }
          &.hideborder {
            .nav-item-text {
              border-right-color: transparent;
            }
          }
          &:last-child {
            .nav-item-text {
              border-right-color: transparent;
            }
            &.show-global-nav {
              background-color: #ffffff;
              height: 30px;
              line-height: 30px;
            }
          }
        }
      }
      span {
        line-height: 30px;
        height: 30px;;
        display: inline-block;
        cursor: pointer;
        &.show-global-nav {
          background-color: #ffffff;
        }
      }
      .shows {
        visibility: hidden;
      }
    }
    // .r-side{
    //     ul{
    //       li:first-child{
    //         a{
    //           border-left: 1px solid #ccc;
    //         }
    //       }
    //     }
    // }
    .d-menu-container {
      ul {
        line-height: 2.2em;
      }
      &.active {
        height: 333px;
      }
      overflow: hidden;
      font-size: 12px;
      color: #3C3C3C;
      height: 0px;
      transition: height 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
      position: absolute;
      top: 30px;
      left: 0;
      width: 100%;
      background-color: #ffffff;
      z-index: 999;
      border-bottom: 1px solid #E2E5ED;
      display: flex;
      flex-direction: row;
      a {
        padding: 4px;
        display: inline-block;
        color: #3C3C3C;
      }
      .d-menu-list {
        margin: 15px 0;
        border-right: 1px solid #EEEEEE;
        &:last-child {
          border-right: none;
        }
        .d-menu-list-title {
          font-size: 16px;
          margin-bottom: 15px;
        }
      }
      .caiwu {
        text-align: right;
        .caiwu-container {
          display: inline-block;
          text-align: left;
        }
        width: 327px;
        padding-right: 50px;
        .d-menu-list-title {
          color: #FF5500;
        }
        .hot-fapiao {
          background: #FF5500;
          border-radius: 4px;
          color: #ffffff;
        }
      }
      .xingzheng {
        text-align: center;
        .xingzheng-container {
          display: inline-block;
          text-align: left;;
          ul {
            text-align: left;
          }
        }
        width: 196px;
        .d-menu-list-title {
          text-align: left;;
          color: #30BDC1;
        }
        .hot-xingzheng {
          background: #3A9FFB;
          border-radius: 4px;
          color: #ffffff;
        }
      }
      .infomation {
        .infomation-container {
          display: flex;
          flex-direction: row;
          .info-adjust {
            margin-left: 40px;
          }
        }
        width: 327px;
        padding-left: 50px;
        .d-menu-list-title {
          color: #30BDC1;
        }
        .hot-infomation {
          background: #3A9FFB;
          border-radius: 4px;
          color: #ffffff;
        }
      }
      .humanr {
        width: 197px;
        text-align: center;
        .humanr-container {
          display: inline-block;
          text-align: left;;
          ul {
            text-align: left;
          }
        }
        .d-menu-list-title {
          text-align: left;
          color: #62B901;
        }
        .hot-humanr {
          background: #62B901;
          border-radius: 4px;
          color: #fff;
        }
      }
      .other {
        width: 318px;
        padding-left: 50px;
        .d-menu-list-title {
          color: #DEAD0F;
        }
        .hot-other {
          background: #DEAD0F;
          border-radius: 4px;
          color: #fff;
        }
      }
    }
  }

  .header-container {
    height: 60px;
    position: relative;
    // box-shadow: 0px 1px 2px #ccc;
    // background-color: #3A9FFB;
    background: linear-gradient(to right,RGBA(36, 64, 117, 1) 0%, RGBA(24, 58, 111, 0.8) 50%, RGBA(52, 85, 148, 1) 100%);
    &::after {
      bottom: -5px;
      box-shadow: inset 0px 4px 8px -3px rgba(17, 17, 17, .06);
      content: "";
      height: 5px;
      left: 0px;
      opacity: 1;
      pointer-events: none;
      position: absolute;
      right: 0px;
      width: 100%;
      z-index: 10;
    }
    .menu-container {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      display: flex;
      flex-direction: row;
      align-items: center;
      z-index: 100;
      .logo-img {
        display: inline-block;
        margin: 0 20px;
        cursor: pointer;
        background-size: cover;
        width: 144px;
        height: 27px;
        background-position: center;
        &.logo-img-pic {
          /* 如果设备像素等于1，则用1倍图 */
          background-image: url(./img/pic_logo_renshiguanli@1x.png);
          /* 如果设备像素等于2，则用2倍图 */
          @media screen and (-webkit-min-device-pixel-ratio: 2), screen and (min--moz-device-pixel-ratio: 2) {
            background-image: url(./img/pic_logo_renshiguanli@2x.png);
          }
          /* 如果设备像素等于3，则用3倍图。基本上用不到3倍图，可以忽略 */
          @media screen and (-webkit-min-device-pixel-ratio: 3), screen and (min--moz-device-pixel-ratio: 3) {
            background-image: url(./img/pic_logo_renshiguanli@3x.png);
          }
        }
      }
    }
    .parallax-con {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      overflow: hidden;
      .layer {
        position: absolute;
        width: 100%;
        height: 100%;
      }
      .text-style {
        text-align: center;
      }
      .spance {
        position: absolute;
        background-position: right center;
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
      }
    }
  }
</style>

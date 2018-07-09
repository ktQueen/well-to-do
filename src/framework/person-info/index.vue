<template>
  <div class="frame">
    <!--头部-->
    <Heard></Heard>
    <div class="main">
      <div class="info-wrap">
        <div class="w-header">个人信息</div>
        <div class="w-content">
          <div class="c-l"><img :src='img' alt=""></div>
          <div class="c-r">
            <ul>
              <li class="info-b">
                <label>基本信息</label>
                <div>
                  <div>姓名 : {{originStaff.nickName}}</div>
                  <div>部门 : {{data.data.department}}</div>
                  <div>工号 : {{originStaff.number}}</div>
                </div>
              </li>
              <li class="info-b">
                <label>联系方式</label>
                <div>
                  <div>手机号码 : {{originStaff.handphone}}</div>
                  <div>公司邮箱 : {{originStaff.email}}</div>
                  <div>个人邮箱 : {{originStaff.email}}</div>
                </div>
              </li>
              <li class="info-b">
                <label>其他信息</label>
                <div>
                  <div>生日 : {{data.data.birthday}}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./index.js"></script>

<style scoped lang="scss" src="./index.scss"></style>

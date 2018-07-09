<template>
  <div class="main-content">
    <div class="bread-crumb-area">
      <slot name="breadCrumb"></slot>
    </div>
    <div class="main-content-area">
      <div class="form-area">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="期间">
            <el-date-picker type="month" placeholder="选择日期" v-model="form.selectMonth"
                            style="width: 20%;" @change="getTableData"></el-date-picker>
          </el-form-item>
        </el-form>
      </div>
      <div class="table-area">
        <template>
          <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column prop="name" label="产品名称">
            </el-table-column>
            <el-table-column prop="way" label="付款方式" width="150">
            </el-table-column>
            <el-table-column prop="amountPayable" label="应付金额" width="150">
            </el-table-column>
            <el-table-column prop="cashPayment" label="现金支付" width="150">
            </el-table-column>
            <el-table-column prop="credit" label="信用额度结算" width="150">
            </el-table-column>
            <el-table-column prop="voucherOffset" label="代金券抵扣" width="150">
            </el-table-column>
            <el-table-column prop="storageCard" label="储值卡抵扣" width="150">
            </el-table-column>
          </el-table>
        </template>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss" src="./common.scss"></style>
<script>
  import Service from '../../service/serviceAjax';

  export default {
    name: 'OverView',
    data() {
      return {
        form: {
          selectMonth: ''
        },
        tableData: []
      };
    },
    created() {
      this.defaultSelectMonth();
    },
    methods: {
      defaultSelectMonth() {
        const now = new Date();
        this.form.selectMonth = new Date(Date.UTC(now.getFullYear(), now.getMonth() - 1)).toISOString().slice(0, 10);
        this.getTableData();
      },
      getTableData() {
        const params = {};
        params.date = this.form.selectMonth;
        Service.getCostOverViewData(params).then(res => {
          this.tableData = res.data.dataList;
        });
      }
    }
  };
</script>

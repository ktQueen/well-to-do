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
            <el-table-column prop="name" label="业务线">
            </el-table-column>
            <el-table-column prop="way" label="ECS总成本" width="100">
            </el-table-column>
            <el-table-column prop="amountPayable" label="SLB总成本" width="100">
            </el-table-column>
            <el-table-column prop="cashPayment" label="RDS总成本" width="100">
            </el-table-column>
            <el-table-column prop="credit" label="redis总成本" width="100">
            </el-table-column>
            <el-table-column prop="voucherOffset" label="memcache总成本" width="100">
            </el-table-column>
            <el-table-column prop="storageCard" label="Hbase总成本" width="100">
            </el-table-column>
            <el-table-column prop="storageCard" label="ES总成本" width="100">
            </el-table-column>
            <el-table-column prop="storageCard" label="合计" width="100">
            </el-table-column>
            <el-table-column prop="storageCard" label="操作" width="100">
              <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">查看明细</el-button>
              </template>
            </el-table-column>
          </el-table>
        </template>
      </div>
    </div>
    <el-dialog title="费用明细查看" @close="closeFn" :visible.sync="showSeeDetailModal">
      <div class="type">ECS</div>
      <template>
        <el-table
          :data="ecsTableData"
          stripe
          style="width: 100%">
          <el-table-column prop="unit" label="单位" >
          </el-table-column>
          <el-table-column prop="ECS" label="ECS总成本" width="260">
          </el-table-column>
        </el-table>
      </template>
      <div class="type">RDS</div>
      <template>
        <el-table
          :data="rdsTableData"
          stripe
          style="width: 100%">
          <el-table-column prop="unit" label="单位" width="180">
          </el-table-column>
          <el-table-column prop="id" label="ID" width="180">
          </el-table-column>
          <el-table-column prop="RDS" label="RDS总成本">
          </el-table-column>
        </el-table>
      </template>
      <div slot="footer" class="dialog-footer">
        <el-button @click="closeFn">取消</el-button>
      </div>
    </el-dialog>
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
        tableData: [],
        ecsTableData: [],
        rdsTableData: [],
        showSeeDetailModal: false
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
        Service.getCostDetailData(params).then(res => {
          this.tableData = res.data.dataList;
        });
      },
      handleClick(code) {
        const params = {};
        params.id = code.id;
        Service.getModalData(params).then(res => {
          this.ecsTableData = res.data.ECSDataList;
          this.rdsTableData = res.data.RDSDataList;
          console.log(this.ecsTableData);
          console.log(this.rdsTableData);
          this.showSeeDetailModal = true;
        });
      },
      closeFn() {
        this.showSeeDetailModal = false;
      }

    }
  };
</script>


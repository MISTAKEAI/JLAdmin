<template>
  <el-drawer
    title="订单详情"
    :visible.sync="drawer"
    :direction="direction"
    :before-close="handleClose"
    :with-header="false"
    size="900px">
    <div style="padding: 10px;">
    <h3>车辆详情</h3>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="车辆详情" name="1">
        <el-form label-position="right" inline class="demo-table-expand"  label-width="150px">
          <el-row :gutter="21">
            <el-col :span="7">
              <el-form-item label="车牌">
               <span v-if="datax.number != null && datax.number !=''"> {{datax.number}}</span>
               <span  v-else> 暂无信息</span>
              </el-form-item>
            </el-col>
            <el-col :span="14">
              <el-form-item label="所属公司">
                <span v-if="datax.companyName != null && datax.companyName !='' "> {{datax.companyName}}</span>
                <span  v-else> 暂无信息</span>
              </el-form-item>
            </el-col>
            <el-col :span="21">
              <el-form-item label="品牌">
                <span v-if="datax.carBrandId != null && datax.carBrandId !=''"> {{datax.carBrandId}}</span>
                <span  v-else> 暂无信息</span>
              </el-form-item>
            </el-col>
            <el-col :span="7">
              <el-form-item label="车型标签">
                <span v-if="datax.carTypeName != null && datax.carTypeName !=''"> {{datax.carTypeName}}</span>
                <span  v-else> 暂无信息</span>
              </el-form-item>
            </el-col>
            <el-col :span="7">
              <el-form-item label="变速箱类型">
                <span v-if="datax.gearboxTypeName != null && datax.gearboxTypeName !=''"> {{datax.gearboxTypeName}}</span>
              <span  v-else> 暂无信息</span>
              </el-form-item>
            </el-col>
            <el-col :span="7">
              <el-form-item label="车身结构">
                <span v-if="datax.carStructureName != null && datax.carStructureName !=''"> {{datax.carStructureName}}</span>
                <span  v-else> 暂无信息</span>
              </el-form-item>
            </el-col>
            <el-col :span="7">
              <el-form-item label="能源类型">
                <span v-if="datax.energyTypeName != null && datax.energyTypeName !=''"> {{datax.energyTypeName}}</span>
                <span  v-else> 暂无信息</span>
              </el-form-item>
            </el-col>
            <el-col :span="7" >
              <el-form-item label="车辆状态">
                <span v-if="datax.stateName != null && datax.stateName !=''"> {{datax.stateName}}</span>
                <span  v-else> 暂无信息</span>
              </el-form-item>
            </el-col>
            <el-col :span="7" >
              <el-form-item label="车龄">
                <span v-if="datax.carAge != null && datax.carAge !=''"> {{datax.carAge}}</span>
                <span  v-else> 暂无信息</span>
              </el-form-item>
            </el-col>
            <el-col :span="7" >
              <el-form-item label="车身颜色">
                <span v-if="datax.colour != null && datax.colour !=''"> {{datax.colour}}</span>
                <span  v-else> 暂无信息</span>
              </el-form-item>
            </el-col>
            <el-col :span="7" >
              <el-form-item label="排量">
                <span v-if="datax.displacement != null && datax.displacement !=''"> {{datax.displacement}}</span>
                <span  v-else> 暂无信息</span>
              </el-form-item>
            </el-col>
            <el-col :span="7" >
              <el-form-item label="承载人数">
                <span v-if="datax.carry != null && datax.carry !=''"> {{datax.carry}}</span>
               <span  v-else> 暂无信息</span>
              </el-form-item>
            </el-col>
            <el-col :span="7" >
              <el-form-item label="购买金额">
                <span v-if="datax.buyMoney != null && datax.buyMoney !=''"> {{datax.buyMoney}}</span>
                 <span  v-else> 暂无信息</span>
              </el-form-item>
            </el-col>
            <el-col :span="7" >
              <el-form-item label="行驶里程">
                <span v-if="datax.mileage != null && datax.mileage !=''"> {{datax.mileage}}</span>
                 <span  v-else> 暂无信息</span>
              </el-form-item>
            </el-col>
            <el-col :span="7" >
              <el-form-item label="车辆识别号">
                <span v-if="datax.vin != null && datax.vin !=''"> {{datax.vin}}</span>
                <span  v-else> 暂无信息</span>
              </el-form-item>
            </el-col>
            <el-col :span="7" >
              <el-form-item label="发动机号">
                <span v-if="datax.engineNo != null && datax.engineNo !=''"> {{datax.engineNo}}</span>
                <span  v-else> 暂无信息</span>
              </el-form-item>
            </el-col>
            <el-col :span="7" >
              <el-form-item label="车辆登记日期">
                <span v-if="datax.carRegisterDate != null && datax.carRegisterDate !=''"> {{datax.carRegisterDate}}</span>
               <span  v-else> 暂无信息</span>
              </el-form-item>
            </el-col>
            <el-col :span="7" >
              <el-form-item label="出厂日期">
                <span v-if="datax.produceDate != null && datax.produceDate !=''"> {{datax.produceDate}}</span>
                <span  v-else> 暂无信息</span>
              </el-form-item>
            </el-col>
            <el-col :span="7" >
              <el-form-item label="购买日期">
                <span v-if="datax.buyDate != null && datax.buyDate !=''"> {{datax.buyDate}}</span>
                <span  v-else> 暂无信息</span>
              </el-form-item>
            </el-col>
            <el-col :span="7" >
              <el-form-item label="行驶证有效日期">
                <span v-if="datax.drivingPermitDate != null && datax.drivingPermitDate !=''"> {{datax.drivingPermitDate}}</span>
               <span  v-else> 暂无信息</span>
              </el-form-item>
            </el-col>
            <el-col :span="7" >
              <el-form-item label="行驶证发放日期">
                <span v-if="datax.drivingPermitBeginDate != null && datax.drivingPermitBeginDate !=''"> {{datax.drivingPermitBeginDate}}</span>
                <span  v-else> 暂无信息</span>
              </el-form-item>
            </el-col>


          </el-row>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="维保记录" name="2">

      </el-tab-pane>
      <el-tab-pane label="加油记录" name="3">

      </el-tab-pane>
      <el-tab-pane label="保险记录" name="4">

      </el-tab-pane>
    </el-tabs>
    </div>
  </el-drawer>
</template>

<script>
   export default {
      data() {
        return {
          drawer: false,
          direction: 'rtl',
          activeName:"1",
           datax:{},
        };
      },
      methods: {
        init(){
          let that = this;
          that.drawer = true
        },
        handleClick(){

        },
        handleClose(done) {
          this.$confirm('确认关闭？')
            .then(_ => {
              done();
            })
            .catch(_ => {});
        }
      }
    };
</script>

<style>
</style>

<!--region 封装的分页 table-->
<template>
  <div class="table">
    <el-table id="iTable" v-loading.iTable="options.loading" :data="list" :height="options.isFixed==false?height:null" :stripe="options.stripe" ref="mutipleTable"
      @selection-change="handleSelectionChange"
   
       :header-cell-style="{background:'#f3f4f5',color:'#606266'}">
      <!--region 选择框-->
      <el-table-column v-if="options.mutiSelect" type="selection" style="width: 55px;">
      </el-table-column>
      <!--endregion-->
      <!--region 数据列-->
  <template v-for="(column, index) in columns">
  <el-table-column :prop="column.prop"
       :key='column.label'
       :label="column.label"
       :align="column.align"
       :width="column.width">
   <template slot-scope="scope">
   <template v-if="!column.render">
    <template v-if="column.formatter">
    <span v-html="column.formatter(scope.row, column)"></span>
    </template>
    <template v-else>
    <span>{{scope.row[column.prop]}}</span>
    </template>
   </template>
   <template v-else>
    <expand-dom :column="column" :row="scope.row" :render="column.render" :index="index"></expand-dom>
   </template>
   </template>
  </el-table-column>
  </template>
      <!--endregion-->
      <!--region 按钮操作组-->
      <el-table-column ref="fixedColumn" label="操作" :width="operates.width" :fixed="operates.fixed" v-if="operates.list.length > 0">
        <template slot-scope="scope">
          <div class="operate-group">
            <template v-for="(btn, key) in operates.list">
              <div class="item" v-if="btn.show(scope.$index,scope.row)"  :key='btn.id'>
                <el-button :type="btn.type" size="mini" :icon="btn.icon" :disabled="btn.disabled"
                  :plain="btn.plain" @click.native.prevent="btn.method(key,scope.row)">{{ btn.label }}
                </el-button>
              </div>
            </template>
          </div>
        </template>
      </el-table-column>
      <!--endregion-->
    </el-table>
    <!--region 分页-->
    <div style="float: right;padding: 10px;">
      <el-pagination v-if="pagination" @size-change="handleSizeChange" @current-change="handleIndexChange" :page-size="tableCurrentPagination.pageSize"
        :page-sizes="this.tableCurrentPagination.pageArray" :current-page="tableCurrentPagination.pageIndex" layout="total,sizes, prev, pager, next,jumper"
        :total="total"></el-pagination>
    </div>
    <!--endregion-->
  </div>
</template>
<!--endregion-->
<script>
  const _pageArray = [20, 50, 100] // 每页展示条数的控制集合
  export default {
    props: {
      list: {
        type: Array,
        default: [] // prop:表头绑定的地段，label：表头名称，align：每列数据展示形式（left, center, right），width:列宽
      }, // 数据列表
      columns: {
        type: Array,
        default: [] // 需要展示的列 === prop：列数据对应的属性，label：列名，align：对齐方式，width：列宽
      },
      operates: {
        type: Object,
        default: {} // width:按钮列宽，fixed：是否固定（left,right）,按钮集合 === label: 文本，type :类型（primary / success / warning / danger / info / text），show：是否显示，icon：按钮图标，plain：是否朴素按钮，disabled：是否禁用，method：回调方法
      },
      total: {
        type: Number,
        default: 0
      }, // 总数
      pagination: {
        type: Object,
        default: null // 分页参数 === pageSize:每页展示的条数，pageIndex:当前页，pageArray: 每页展示条数的控制集合，默认 _page_array
      },
      otherHeight: {
        type: Number,
        default: 160
      }, // 计算表格的高度
      options: {
        type: Object,
        default: {
          stripe: false, // 是否为斑马纹 table
          loading: false, // 是否添加表格loading加载动画
          highlightCurrentRow: false, // 是否支持当前行高亮显示
          mutiSelect: false ,// 是否支持列表项选中功能
          isFixed: false,
        }
      } // table 表格的控制参数
    },
    components: {
      expandDom: {
        functional: true,
        props: {
          row: Object,
          render: Function,
          index: Number,
          column: {
            type: Object,
            default: null
          }
        },
        render: (h, ctx) => {
          const params = {
            row: ctx.props.row,
            index: ctx.props.index
          }
          if (ctx.props.column) params.column = ctx.props.column
          return ctx.props.render(h, params)
        }
      }
    },
    data() {
      return {
        pageIndex: 1,
        tableCurrentPagination: {},
        multipleSelection: [] ,// 多行选中
        height:200,
      }
    },
    mounted() {
      if (this.pagination && !this.pagination.pageSizes) {
        this.pagination.pageArray = _pageArray // 每页展示条数控制
      }
      this.tableCurrentPagination = this.pagination || {
        pageSize: this.total,
        pageIndex: 1
      } // 判断是否需要分页
    },
    computed: {

    },
    methods: {
      // 切换每页显示的数量
      handleSizeChange(size) {
        if (this.pagination) {
          this.tableCurrentPagination = {
            pageIndex: 1,
            pageSize: size
          }
          this.$emit('handleSizeChange', this.tableCurrentPagination)
        }
      },
      // 切换页码
      handleIndexChange(currnet) {
        if (this.pagination) {
          this.tableCurrentPagination.pageIndex = currnet
          this.$emit('handleIndexChange', this.tableCurrentPagination)
        }
      },
      // 多行选中
      handleSelectionChange(val) {
        this.multipleSelection = val
        this.$emit('handleSelectionChange', val)
      },
      //获取table 高
      getHeight(data) {
        if(null != data && data.type == null){
          this.height = window.innerHeight - data;
        }else{
          this.height = window.innerHeight - this.otherHeight;
        }
      },
    },
    created() {
    	window.addEventListener('resize', this.getHeight);
    	this.getHeight(null);
    },

    destroyed() {
    	window.removeEventListener('resize', this.getHeight)
    }
  }
</script>

<style>

</style>

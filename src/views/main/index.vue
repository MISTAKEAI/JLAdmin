<template>
  <div>
    <div class="title-header">
      <el-row :gutter="20">
        <el-col :span="6"><span class="title-h1">项目管理</span></el-col>
        <div style="float: right;">
          <el-button size="medium" type="success" icon="el-icon-circle-plus-outline">新增</el-button>
          <el-button size="medium" type="info" icon="el-icon-delete">删除</el-button>
        </div>
      </el-row>
    </div>
    <div class="info-content">
  <!--  <div class="tree-content">
      <el-tree :data="data" :props="defaultProps"  :expand-on-click-node="false" default-expand-all></el-tree>
    </div> -->
    </el-col>
    <div class="table-content">
      <div class="operate-btn">
        <el-row :gutter="24">
          <el-col :span="3">
            <el-input size="medium" placeholder="请输入内容" suffix-icon="el-icon-date" v-model="input2">
            </el-input>
          </el-col>
          <el-col :span="3">
            <el-input size="medium" placeholder="请输入内容" suffix-icon="el-icon-date" v-model="input2">
            </el-input>
          </el-col>
          <el-col :span="3">
            <el-input size="medium" placeholder="请输入内容" suffix-icon="el-icon-date" v-model="input2">
            </el-input>
          </el-col>
          <el-col :span="3">
            <el-input size="medium" placeholder="请输入内容" suffix-icon="el-icon-date" v-model="input2">
            </el-input>
          </el-col>
          <el-col :span="3">
            <el-input size="medium" placeholder="请输入内容" suffix-icon="el-icon-date" v-model="input2">
            </el-input>
          </el-col>
          <el-col :span="8">
            <el-button type="text" @click="expand()" icon="el-icon-d-caret">展开</el-button>
            <el-button type="primary" icon="el-icon-search" size="medium" round>搜索</el-button>
            <el-button type="danger" icon="el-icon-refresh" size="medium" round>重置</el-button>
          </el-col>
        </el-row>
        <el-row :gutter="24" v-if="isExpand">
          <el-col :span="3">
            <el-input size="medium" placeholder="请输入内容" suffix-icon="el-icon-date" v-model="input2">
            </el-input>
          </el-col>
          <el-col :span="3">
            <el-input size="medium" placeholder="请输入内容" suffix-icon="el-icon-date" v-model="input2">
            </el-input>
          </el-col>
          <el-col :span="3">
            <el-input size="medium" placeholder="请输入内容" suffix-icon="el-icon-date" v-model="input2">
            </el-input>
          </el-col>
          <el-col :span="3">
            <el-input size="medium" placeholder="请输入内容" suffix-icon="el-icon-date" v-model="input2">
            </el-input>
          </el-col>
          <el-col :span="3">
            <el-input size="medium" placeholder="请输入内容" suffix-icon="el-icon-date" v-model="input2">
            </el-input>
          </el-col>
        </el-row>
      </div>
      <!--region table 表格-->
      <i-table :list="list" :total="total" :otherHeight="otherHeight" :options="options" :pagination="pagination"
        :columns="columns" :operates="operates" @handleSizeChange="handleSizeChange" @handleIndexChange="handleIndexChange"
        @handleSelectionChange="handleSelectionChange" ref="iTable">
      </i-table>
      <!--endregion-->
    </div>
    </div>
    <index-edit ref="indexEdit"></index-edit>
  </div>
</template>
<script>
  import iTable from '../../components/tool/Table.vue'
  import indexEdit from '@/views/main/indexEdit.vue'

  export default {
    components: {
      iTable,
      indexEdit
    },
    data() {
      return {
        isExpand: false, //展示多个搜索条件
        input2:null,
        data: [{
          label: '福建省新立拓汽车服务有限公司',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        total: 0,
        list: [{
            id: '24',
            title: '编号3',
            state: 0
          },
          {
            id: '23',
            title: '编号3',
            state: 1
          },
          {
            id: '23',
            title: '编号3',
            state: 2
          },
          {
            id: '23',
            title: '编号3',
            state: 2
          },

          {
            id: '23',
            title: '编号3',
            state: 2,
          },
          {
            id: '23',
            title: '编号3',
            state: 2
          },
          {
            id: '2',
            title: '编号3',
            state: 0
          },
          {
            id: '223',
            title: '编号3',
            state: 1
          },
          {
            id: '2444',
            title: '编号3',
            state: 1
          },
        ],
        otherHeight: 285,
        columns: [{
            prop: 'id',
            label: '编号',
          },
          {
            prop: 'title',
            label: '标题',
            formatter: (row, column, cellValue) => {
              return `<span style="white-space: nowrap;color: dodgerblue;">${row.title}</span>`
            }
          },
          {
            prop: 'state',
            label: '状态',
            render: (h, params) => {
              return h('el-tag', {
                props: {
                  type: params.row.state === 0 ? 'success' : params.row.state === 1 ? 'info' : 'danger'
                } // 组件的props
              }, params.row.state === 0 ? '上架' : params.row.state === 1 ? '下架' : '审核中')
            }
          },

        ], // 需要展示的列
        operates: {
          width: 200,
          fixed: 'right',
          list: [{
              label: '编辑',
              type: 'text',
              show: (index, row) => {
                return true
              },
              icon: '',
              plain: true,
              disabled: false,
              method: (index, row) => {
                this.handleEdit(index, row)
              }
            },
            {
              label: '删除',
              type: 'text',
              icon: '',
              show: (index, row) => {
                return true
              },
              plain: false,
              disabled: false,
              method: (index, row) => {
                this.handleDel(index, row)
              }
            }
          ]
        }, // 操作按钮组
        pagination: {
          pageIndex: 1,
          pageSize: 20
        }, // 分页参数
        options: {
          stripe: false, // 是否为斑马纹 table
          loading: false, // 是否添加表格loading加载动画
          highlightCurrentRow: true, // 是否支持当前行高亮显示
          mutiSelect: true, // 是否支持列表项选中功能
          isFixed: false,
        } // table 的参数
      }
    },
    mounted() {},
    methods: {
      //展开更多条件查询
      expand() {
        let that = this;
        if (that.isExpand) {
          console.log("11")
          that.isExpand = false;
          that.otherHeight = 280;
        } else {
          that.isExpand = true;
          that.otherHeight = 320;
        }
        that.$refs.iTable.getHeight(that.otherHeight);
      },
      // 切换每页显示的数量
      handleSizeChange(pagination) {
        this.pagination = pagination
      },
      // 切换页码
      handleIndexChange(pagination) {
        this.pagination = pagination
      },
      // 选中行
      handleSelectionChange(val) {
        console.log('val:', val)
      },
      // 编辑
      handleEdit(index, row) {
        this.$refs.indexEdit.init();
        console.log(' index:', index)
        console.log(' row:', row)
      },
      // 删除
      handleDel(index, row) {
        console.log(' index:', index)
        console.log(' row:', row)
      }
    }
  }
</script>

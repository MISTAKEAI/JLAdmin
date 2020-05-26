<template>
  <div class="son-content">
    <div class="title-header">
      <el-row :gutter="20">
        <el-col :span="6"><span class="title-h1">项目管理</span></el-col>
        <div style="float: right;">
          <el-button size="small" type="primary" icon="el-icon-edit">新增</el-button>
          <el-button size="small" type="primary" icon="el-icon-delete">删除</el-button>
          <el-button size="small" type="primary" icon="el-icon-upload">导入</el-button>
          <el-dropdown style="margin-left: 10px;">
            <el-button size="small" type="primary" icon="el-icon-download">
              导出<i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>条件导出</el-dropdown-item>
              <el-dropdown-item>全部导出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-row>
    </div>
    <div class="info-content">
      <div class="tree-content">
        <el-tree :data="treeData" :props="defaultProps" highlight-current :expand-on-click-node="false" default-expand-all>
          <span class="span-ellipsis" slot-scope="{ node, data }">
            <el-tooltip class="item" effect="light" :content="node.label" placement="top">
              <span>{{ node.label }}</span>
            </el-tooltip>
          </span>
        </el-tree>
      </div>
      </el-col>
      <div class="table-content" :style="{'width':screenWidth - 400 +'px'}">
        <div class="operate-btn">
          <el-row :gutter="24">
            <el-col :span="3">
              <el-input size="small" placeholder="请输入内容" suffix-icon="el-icon-date" v-model="input2">
              </el-input>
            </el-col>
            <el-col :span="3">
              <el-input size="small" placeholder="请输入内容" suffix-icon="el-icon-date" v-model="input2">
              </el-input>
            </el-col>
            <el-col :span="3">
              <el-input size="small" placeholder="请输入内容" suffix-icon="el-icon-date" v-model="input2">
              </el-input>
            </el-col>
            <el-col :span="3">
              <el-input size="small" placeholder="请输入内容" suffix-icon="el-icon-date" v-model="input2">
              </el-input>
            </el-col>
            <el-col :span="3">
              <el-input size="small" placeholder="请输入内容" suffix-icon="el-icon-date" v-model="input2">
              </el-input>
            </el-col>
            <el-col :span="8">
              <el-button type="text" @click="expand()" icon="el-icon-d-caret">展开</el-button>
              <el-button type="primary" icon="el-icon-search" size="small" round>搜索</el-button>
              <el-button type="danger" icon="el-icon-refresh" size="small" round>重置</el-button>
            </el-col>
          </el-row>
          <el-row :gutter="24" v-if="isExpand">
            <el-col :span="3">
              <el-input size="small" placeholder="请输入内容" suffix-icon="el-icon-date" v-model="input2">
              </el-input>
            </el-col>
            <el-col :span="3">
              <el-input size="small" placeholder="请输入内容" suffix-icon="el-icon-date" v-model="input2">
              </el-input>
            </el-col>
            <el-col :span="3">
              <el-input size="small" placeholder="请输入内容" suffix-icon="el-icon-date" v-model="input2">
              </el-input>
            </el-col>
            <el-col :span="3">
              <el-input size="small" placeholder="请输入内容" suffix-icon="el-icon-date" v-model="input2">
              </el-input>
            </el-col>
            <el-col :span="3">
              <el-input size="small" placeholder="请输入内容" suffix-icon="el-icon-date" v-model="input2">
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
    <index-detail ref="indexDetail"></index-detail>
  </div>
</template>
<script>
  import iTable from '../../components/tool/Table.vue'
  import indexEdit from '@/views/main/indexEdit.vue'
  import indexDetail from '@/views/main/indexDetail.vue'
  export default {
    components: {
      iTable,
      indexEdit,
      indexDetail
    },
    data() {
      return {
        screenWidth: document.body.clientWidth,
        isExpand: false, //展示多个搜索条件
        input2: null,
        treeData: [{
          label: '广州省广信集团有限公司',
          children: [{
            label: '总裁办',
            children: [{
            label: '财务部',
            children: null,
           }],
           },{
            label: '技术部',
            children: null,
           }]
        }],
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
        columns: [{
            prop: 'id',
            label: '员工号',
          },
          {
            prop: 'title',
            label: '姓名',
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
              }, params.row.state === 0 ? '启用' : params.row.state === 1 ? '禁用' : '审核中')
            }
          },

        ], // 需要展示的列
        operates: {
          width: 200,
          fixed: 'right',
          list: [{
              label: '详情',
              type: 'text',
              show: (index, row) => {
                return true
              },
              icon: '',
              plain: true,
              disabled: false,
              method: (index, row) => {
                this.handleDetail(index, row)
              }
            },
            {
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
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        otherHeight: 275,
        total: 0,
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
    mounted() {
      const that = this
      window.onresize = () => {
          return (() => {
              window.screenWidth = document.body.clientWidth
              that.screenWidth = window.screenWidth
          })()
      }
    },
    methods: {
      //展开更多条件查询
      expand() {
        let that = this;
        if (that.isExpand) {
          console.log("11")
          that.isExpand = false;
          that.otherHeight = 275;
        } else {
          that.isExpand = true;
          that.otherHeight = 305;
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
      // 详情
      handleDetail(index, row) {
        this.$refs.indexDetail.init();
      },
      // 编辑
      handleEdit(index, row) {
        this.$refs.indexEdit.init();
      },
      // 删除
      handleDel(index, row) {}
    },
    watch:{
        screenWidth(val){
            // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
            if(!this.timer){
                // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
                this.screenWidth = val
                this.timer = true
                let that = this
                setTimeout(function(){
                    // 打印screenWidth变化的值
                    console.log(that.screenWidth)
                    that.timer = false
                },400)
            }
        }
    }
  }
</script>

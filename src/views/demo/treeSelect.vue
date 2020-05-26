<template>
<div>
  <SelectTree
        :props="props"
        :options="optionData"
        :value="valueId"
        :clearable="isClearable"
        :accordion="isAccordion"
        :isSearcH="isSearch"
        @getValue="getValue($event)"
        />

</div>
</template>

<script>
  import SelectTree from "../../components/tool/treeSelect.vue";
  export default {
     components: {
        SelectTree
      },
     data() {
         return {
           isClearable: false, // 可清空（可选）
           isAccordion: false, // 可收起（可选）
           valueId: 0, // 初始ID（可选）
           isSearch:true,
           props: {
             // 配置项（必选）
             value: "id",
             label: "name",
             children: "children"
           },
           // 选项列表（必选）
           list: [
             { id: 1, parentId: 0, name: "一级菜单A", rank: 1 },
             { id: 2, parentId: 0, name: "一级菜单B", rank: 1 },
             { id: 3, parentId: 0, name: "一级菜单C", rank: 1 },
             { id: 4, parentId: 1, name: "二级菜单A-A", rank: 2 },
             { id: 5, parentId: 1, name: "二级菜单A-B", rank: 2 },
             { id: 6, parentId: 2, name: "二级菜单B-A", rank: 2 },
             { id: 7, parentId: 4, name: "三级菜单A-A-A", rank: 3 },
             { id: 8, parentId: 7, name: "四级菜单A-A-A-A", rank: 4 },
             { id: 9, parentId: 0, name: "一级菜单C", rank: 1 },
             { id: 10, parentId: 0, name: "一级菜单end", rank: 1 }
           ],
         };
       },
       computed: {
         /* 转树形数据 */
         optionData() {
           let cloneData = JSON.parse(JSON.stringify(this.list)); // 对源数据深度克隆
           return cloneData.filter(father => {
             // 循环所有项，并添加children属性
             let branchArr = cloneData.filter(child => father.id == child.parentId); // 返回每一项的子级数组
             branchArr.length > 0 ? (father.children = branchArr) : ""; //给父级添加一个children属性，并赋值
             return father.parentId == 0; //返回第一层
           });
         }
       },
       methods: {
         // 取值
         getValue(value) {
           this.valueId = value;
           console.log(this.valueId);
         }
       }
    };
</script>

<style>
</style>

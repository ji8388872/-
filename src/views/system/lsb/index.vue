<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" size="small" :inline="true" v-show="showSearch" label-width="68px">
      <el-form-item label="日期" prop="rq">
        <el-date-picker clearable
                        v-model="queryParams.rq"
                        type="date"
                        value-format="yyyy-MM-dd"
                        placeholder="请选择日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="处理量(kg)" prop="cll">
        <el-input
          v-model="queryParams.cll"
          placeholder="请输入处理量(kg)"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="老虫重量(kg)" prop="lczl">
        <el-input
          v-model="queryParams.lczl"
          placeholder="请输入老虫重量(kg)"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="虫沙重量(kg)" prop="cszl">
        <el-input
          v-model="queryParams.cszl"
          placeholder="请输入虫沙重量(kg)"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="参观人数" prop="cgrs">
        <el-input
          v-model="queryParams.cgrs"
          placeholder="请输入参观人数"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" size="mini" @click="handleQuery">搜索</el-button>
        <el-button icon="el-icon-refresh" size="mini" @click="resetQuery">重置</el-button>
      </el-form-item>
    </el-form>

    <el-row :gutter="10" class="mb8">
      <el-col :span="1.5">
        <el-button
          type="primary"
          plain
          icon="el-icon-plus"
          size="mini"
          @click="handleAdd"
          v-hasPermi="['system:dmslstb:add']"
        >新增</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="success"
          plain
          icon="el-icon-edit"
          size="mini"
          :disabled="single"
          @click="handleUpdate"
          v-hasPermi="['system:dmslstb:edit']"
        >修改</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="danger"
          plain
          icon="el-icon-delete"
          size="mini"
          :disabled="multiple"
          @click="handleDelete"
          v-hasPermi="['system:dmslstb:remove']"
        >删除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
          plain
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['system:dmslstb:export']"
        >导出</el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="dmslstbList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="" align="center" prop="id" />
      <el-table-column label="日期" align="center" prop="rq" width="180">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.rq, '{y}-{m}-{d}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="处理量(kg)" align="center" prop="cll" />
      <el-table-column label="老虫重量(kg)" align="center" prop="lczl" />
      <el-table-column label="虫沙重量(kg)" align="center" prop="cszl" />
      <el-table-column label="参观人数" align="center" prop="cgrs" />
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['system:dmslstb:edit']"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['system:dmslstb:remove']"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="queryParams.pageNum"
      :limit.sync="queryParams.pageSize"
      @pagination="getList"
    />

    <!-- 添加或修改大梅沙临时填报 记录对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="日期" prop="rq">
          <el-date-picker clearable
                          v-model="form.rq"
                          type="date"
                          value-format="yyyy-MM-dd"
                          placeholder="请选择日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="处理量(kg)" prop="cll">
          <el-input v-model="form.cll" placeholder="请输入处理量(kg)" />
        </el-form-item>
        <el-form-item label="老虫重量(kg)" prop="lczl">
          <el-input v-model="form.lczl" placeholder="请输入老虫重量(kg)" />
        </el-form-item>
        <el-form-item label="虫沙重量(kg)" prop="cszl">
          <el-input v-model="form.cszl" placeholder="请输入虫沙重量(kg)" />
        </el-form-item>
        <el-form-item label="参观人数" prop="cgrs">
          <el-input v-model="form.cgrs" placeholder="请输入参观人数" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm">确 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
// import { listDmslstb, getDmslstb, delDmslstb, addDmslstb, updateDmslstb } from "@/api/system/dmslstb";
import { addOperationLogApi ,getTemporaryApi} from '@/api/screen/operationLog'

export default {
  name: "Dmslstb",
  data() {
    return {
      // 遮罩层
      loading: true,
      // 选中数组
      ids: [],
      // 非单个禁用
      single: true,
      // 非多个禁用
      multiple: true,
      // 显示搜索条件
      showSearch: true,
      // 总条数
      total: 0,
      // 大梅沙临时填报 记录表格数据
      dmslstbList: [
      ],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        rq: null,
        cll: null,
        lczl: null,
        cszl: null,
        cgrs: null
      },
      // 表单参数
      form: {},
      // 表单校验
      rules: {
        cszl: [
          { required: true, message: "虫沙重量(kg)不能为空", trigger: "blur" }
        ],
      }
    };
  },
  created() {
    this.getList();
  },
  methods: {
    /** 查询大梅沙临时填报 记录列表 */
    async getList() {
      this.loading = true;
      const res = await getTemporaryApi()
      // console.log(res)
      if(res.code === 200){
        this.dmslstbList = res.data
      }
      // listDmslstb(this.queryParams).then(response => {
      //   this.total = response.total;
         this.loading = false;
      // });

    },
    // 取消按钮
    cancel() {
      this.open = false;
      this.reset();
    },
    // 表单重置
    reset() {
      this.form = {
        rq: null,
        cll: null,
        lczl: null,
        cszl: null,
        cgrs: null
      };
      this.resetForm("form");
    },
    /** 搜索按钮操作 */
    handleQuery() {
      this.queryParams.pageNum = 1;
      this.getList();
    },
    /** 重置按钮操作 */
    resetQuery() {
      this.resetForm("queryForm");
      this.handleQuery();
    },
    // 多选框选中数据
    handleSelectionChange(selection) {
      this.ids = selection.map(item => item.id)
      this.single = selection.length!==1
      this.multiple = !selection.length
    },
    /** 新增按钮操作 */
    handleAdd() {
      this.reset();
      this.open = true;
      this.title = "添加大梅沙临时填报 记录";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {

    },
    /** 提交按钮 */
    submitForm() {
      this.$refs.form.validate( async valid => {
        if(!valid) return
        let arr = [this.form]
        const res  = await addOperationLogApi(arr)
        if(res.code !== 200){
          return this.$message.error('添加失败')
        }
        // console.log(res)
        this.open = false
        this.$message.success('临时数据添加成功')
        this.reset()
        await this.getList()

      })
    },
    /** 删除按钮操作 */
    handleDelete(row) {

    },
    /** 导出按钮操作 */
    handleExport() {

    }
  }
};
</script>

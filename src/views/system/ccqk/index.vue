<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" size="small" :inline="true" v-show="showSearch" label-width="150px">
      <el-form-item label="日期" prop="rq">
        <el-date-picker clearable
          v-model="queryParams.rq"
          type="date"
          value-format="yyyy-MM-dd"
          placeholder="请选择日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="除臭塔名称" prop="cctmc">
        <el-input
          v-model="queryParams.cctmc"
          placeholder="请输入除臭塔名称"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="除臭塔尺寸长(mm)" prop="cctcc">
        <el-input
          v-model="queryParams.cctcc"
          placeholder="请输入除臭塔尺寸长(mm)"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="除臭塔尺寸宽(mm)" prop="cctck">
        <el-input
          v-model="queryParams.cctck"
          placeholder="请输入除臭塔尺寸宽(mm)"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="除臭塔尺寸高(mm)" prop="cctcg">
        <el-input
          v-model="queryParams.cctcg"
          placeholder="请输入除臭塔尺寸高(mm)"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="是否换水" prop="sfhs">
        <el-input
          v-model="queryParams.sfhs"
          placeholder="请输入是否换水"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="加水高度(mm)" prop="jsgd">
        <el-input
          v-model="queryParams.jsgd"
          placeholder="请输入加水高度(mm)"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="除臭剂名称" prop="ccjmc">
        <el-input
          v-model="queryParams.ccjmc"
          placeholder="请输入除臭剂名称"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="加除臭剂量(kg)" prop="ccjl">
        <el-input
          v-model="queryParams.ccjl"
          placeholder="请输入加除臭剂量(kg)"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="厂区有无臭味" prop="cqywqw">
        <el-input
          v-model="queryParams.cqywqw"
          placeholder="请输入厂区有无臭味"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="记录人" prop="jlr">
        <el-input
          v-model="queryParams.jlr"
          placeholder="请输入记录人"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="备注" prop="bz">
        <el-input
          v-model="queryParams.bz"
          placeholder="请输入备注"
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
          v-hasPermi="['system:ccqk:add']"
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
          v-hasPermi="['system:ccqk:edit']"
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
          v-hasPermi="['system:ccqk:remove']"
        >删除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
          plain
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['system:ccqk:export']"
        >导出</el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="ccqkList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="" align="center" prop="id" />
      <el-table-column label="日期" align="center" prop="rq" width="180">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.rq, '{y}-{m}-{d}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="除臭塔名称" align="center" prop="cctmc" />
      <el-table-column label="除臭塔尺寸长(mm)" align="center" prop="cctcc" />
      <el-table-column label="除臭塔尺寸宽(mm)" align="center" prop="cctck" />
      <el-table-column label="除臭塔尺寸高(mm)" align="center" prop="cctcg" />
      <el-table-column label="是否换水" align="center" prop="sfhs" />
      <el-table-column label="加水高度(mm)" align="center" prop="jsgd" />
      <el-table-column label="除臭剂名称" align="center" prop="ccjmc" />
      <el-table-column label="加除臭剂量(kg)" align="center" prop="ccjl" />
      <el-table-column label="厂区有无臭味" align="center" prop="cqywqw" />
      <el-table-column label="记录人" align="center" prop="jlr" />
      <el-table-column label="备注" align="center" prop="bz" />
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['system:ccqk:edit']"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['system:ccqk:remove']"
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

    <!-- 添加或修改除臭情况对话框 -->
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
        <el-form-item label="除臭塔名称" prop="cctmc">
          <el-input v-model="form.cctmc" placeholder="请输入除臭塔名称" />
        </el-form-item>
        <el-form-item label="除臭塔尺寸长(mm)" prop="cctcc">
          <el-input v-model="form.cctcc" placeholder="请输入除臭塔尺寸长(mm)" />
        </el-form-item>
        <el-form-item label="除臭塔尺寸宽(mm)" prop="cctck">
          <el-input v-model="form.cctck" placeholder="请输入除臭塔尺寸宽(mm)" />
        </el-form-item>
        <el-form-item label="除臭塔尺寸高(mm)" prop="cctcg">
          <el-input v-model="form.cctcg" placeholder="请输入除臭塔尺寸高(mm)" />
        </el-form-item>
        <el-form-item label="是否换水" prop="sfhs">
          <el-input v-model="form.sfhs" placeholder="请输入是否换水" />
        </el-form-item>
        <el-form-item label="加水高度(mm)" prop="jsgd">
          <el-input v-model="form.jsgd" placeholder="请输入加水高度(mm)" />
        </el-form-item>
        <el-form-item label="除臭剂名称" prop="ccjmc">
          <el-input v-model="form.ccjmc" placeholder="请输入除臭剂名称" />
        </el-form-item>
        <el-form-item label="加除臭剂量(kg)" prop="ccjl">
          <el-input v-model="form.ccjl" placeholder="请输入加除臭剂量(kg)" />
        </el-form-item>
        <el-form-item label="厂区有无臭味" prop="cqywqw">
          <el-input v-model="form.cqywqw" placeholder="请输入厂区有无臭味" />
        </el-form-item>
        <el-form-item label="记录人" prop="jlr">
          <el-input v-model="form.jlr" placeholder="请输入记录人" />
        </el-form-item>
        <el-form-item label="备注" prop="bz">
          <el-input v-model="form.bz" placeholder="请输入备注" />
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
import { listCcqk, getCcqk, delCcqk, addCcqk, updateCcqk } from "@/api/system/ccqk";

export default {
  name: "Ccqk",
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
      // 除臭情况表格数据
      ccqkList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        rq: null,
        cctmc: null,
        cctcc: null,
        cctck: null,
        cctcg: null,
        sfhs: null,
        jsgd: null,
        ccjmc: null,
        ccjl: null,
        cqywqw: null,
        jlr: null,
        bz: null
      },
      // 表单参数
      form: {},
      // 表单校验
      rules: {
      }
    };
  },
  created() {
    this.getList();
  },
  methods: {
    /** 查询除臭情况列表 */
    getList() {
      this.loading = true;
      listCcqk(this.queryParams).then(response => {
        this.ccqkList = response.rows;
        this.total = response.total;
        this.loading = false;
      });
    },
    // 取消按钮
    cancel() {
      this.open = false;
      this.reset();
    },
    // 表单重置
    reset() {
      this.form = {
        id: null,
        rq: null,
        cctmc: null,
        cctcc: null,
        cctck: null,
        cctcg: null,
        sfhs: null,
        jsgd: null,
        ccjmc: null,
        ccjl: null,
        cqywqw: null,
        jlr: null,
        bz: null
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
      this.title = "添加除臭情况";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const id = row.id || this.ids
      getCcqk(id).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改除臭情况";
      });
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.id != null) {
            updateCcqk(this.form).then(response => {
              this.$modal.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            });
          } else {
            addCcqk(this.form).then(response => {
              this.$modal.msgSuccess("新增成功");
              this.open = false;
              this.getList();
            });
          }
        }
      });
    },
    /** 删除按钮操作 */
    handleDelete(row) {
      const ids = row.id || this.ids;
      this.$modal.confirm('是否确认删除除臭情况编号为"' + ids + '"的数据项？').then(function() {
        return delCcqk(ids);
      }).then(() => {
        this.getList();
        this.$modal.msgSuccess("删除成功");
      }).catch(() => {});
    },
    /** 导出按钮操作 */
    handleExport() {
      this.download('system/ccqk/export', {
        ...this.queryParams
      }, `ccqk_${new Date().getTime()}.xlsx`)
    }
  }
};
</script>

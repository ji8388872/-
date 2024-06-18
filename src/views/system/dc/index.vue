<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" size="small" :inline="true" v-show="showSearch" label-width="170px">
      <el-form-item label="进料日期" prop="jlrq">
        <el-date-picker clearable
          v-model="queryParams.jlrq"
          type="date"
          value-format="yyyy-MM-dd"
          placeholder="请选择进料日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="批次" prop="pc">
        <el-input
          v-model="queryParams.pc"
          placeholder="请输入批次"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="组别" prop="zb">
        <el-input
          v-model="queryParams.zb"
          placeholder="请输入组别"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="大虫条数(条)" prop="dctj">
        <el-input
          v-model="queryParams.dctj"
          placeholder="请输入大虫条数(条)"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="大虫重量(g)" prop="dczl">
        <el-input
          v-model="queryParams.dczl"
          placeholder="请输入大虫重量(g)"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="大虫体长(mm/条)" prop="dctc">
        <el-input
          v-model="queryParams.dctc"
          placeholder="请输入大虫体长(mm/条)"
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
          v-hasPermi="['system:dc:add']"
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
          v-hasPermi="['system:dc:edit']"
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
          v-hasPermi="['system:dc:remove']"
        >删除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
          plain
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['system:dc:export']"
        >导出</el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="dcList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="" align="center" prop="id" />
      <el-table-column label="进料日期" align="center" prop="jlrq" width="180">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.jlrq, '{y}-{m}-{d}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="批次" align="center" prop="pc" />
      <el-table-column label="组别" align="center" prop="zb" />
      <el-table-column label="大虫条数(条)" align="center" prop="dctj" />
      <el-table-column label="大虫重量(g)" align="center" prop="dczl" />
      <el-table-column label="大虫体长(mm/条)" align="center" prop="dctc" />
      <el-table-column label="记录人" align="center" prop="jlr" />
      <el-table-column label="备注" align="center" prop="bz" />
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['system:dc:edit']"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['system:dc:remove']"
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

    <!-- 添加或修改大虫对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="进料日期" prop="jlrq">
          <el-date-picker clearable
            v-model="form.jlrq"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="请选择进料日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="批次" prop="pc">
          <el-input v-model="form.pc" placeholder="请输入批次" />
        </el-form-item>
        <el-form-item label="组别" prop="zb">
          <el-input v-model="form.zb" placeholder="请输入组别" />
        </el-form-item>
        <el-form-item label="大虫条数(条)" prop="dctj">
          <el-input v-model="form.dctj" placeholder="请输入大虫条数(条)" />
        </el-form-item>
        <el-form-item label="大虫重量(g)" prop="dczl">
          <el-input v-model="form.dczl" placeholder="请输入大虫重量(g)" />
        </el-form-item>
        <el-form-item label="大虫体长(mm/条)" prop="dctc">
          <el-input v-model="form.dctc" placeholder="请输入大虫体长(mm/条)" />
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
import { listDc, getDc, delDc, addDc, updateDc } from "@/api/system/dc";

export default {
  name: "Dc",
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
      // 大虫表格数据
      dcList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        jlrq: null,
        pc: null,
        zb: null,
        dctj: null,
        dczl: null,
        dctc: null,
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
    /** 查询大虫列表 */
    getList() {
      this.loading = true;
      listDc(this.queryParams).then(response => {
        this.dcList = response.rows;
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
        jlrq: null,
        pc: null,
        zb: null,
        dctj: null,
        dczl: null,
        dctc: null,
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
      this.title = "添加大虫";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const id = row.id || this.ids
      getDc(id).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改大虫";
      });
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.id != null) {
            updateDc(this.form).then(response => {
              this.$modal.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            });
          } else {
            addDc(this.form).then(response => {
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
      this.$modal.confirm('是否确认删除大虫编号为"' + ids + '"的数据项？').then(function() {
        return delDc(ids);
      }).then(() => {
        this.getList();
        this.$modal.msgSuccess("删除成功");
      }).catch(() => {});
    },
    /** 导出按钮操作 */
    handleExport() {
      this.download('system/dc/export', {
        ...this.queryParams
      }, `dc_${new Date().getTime()}.xlsx`)
    }
  }
};
</script>

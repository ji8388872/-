<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" size="small" :inline="true" v-show="showSearch" label-width="68px">
      <el-form-item label="加料日期" prop="jlrq">
        <el-date-picker clearable
          v-model="queryParams.jlrq"
          type="date"
          value-format="yyyy-MM-dd"
          placeholder="请选择加料日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="加料开始时间" prop="jlkssj">
        <el-date-picker clearable
          v-model="queryParams.jlkssj"
          type="date"
          value-format="yyyy-MM-dd"
          placeholder="请选择加料开始时间">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="加料完成时间" prop="jlwcsj">
        <el-date-picker clearable
          v-model="queryParams.jlwcsj"
          type="date"
          value-format="yyyy-MM-dd"
          placeholder="请选择加料完成时间">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="设备名称" prop="sbmc">
        <el-input
          v-model="queryParams.sbmc"
          placeholder="请输入设备名称"
          clearable
          @keyup.enter.native="handleQuery"
        />
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
      <el-form-item label="书柜数量(个)" prop="sgsl">
        <el-input
          v-model="queryParams.sgsl"
          placeholder="请输入书柜数量(个)"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="层数" prop="cs">
        <el-input
          v-model="queryParams.cs"
          placeholder="请输入层数"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="盒数(盒/)" prop="hs">
        <el-input
          v-model="queryParams.hs"
          placeholder="请输入盒数(盒/)"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="加料重量(kg/盒)" prop="jlzl">
        <el-input
          v-model="queryParams.jlzl"
          placeholder="请输入加料重量(kg/盒)"
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
          v-hasPermi="['system:jl:add']"
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
          v-hasPermi="['system:jl:edit']"
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
          v-hasPermi="['system:jl:remove']"
        >删除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
          plain
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['system:jl:export']"
        >导出</el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="jlList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="" align="center" prop="id" />
      <el-table-column label="加料日期" align="center" prop="jlrq" width="180">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.jlrq, '{y}-{m}-{d}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="加料开始时间" align="center" prop="jlkssj" width="180">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.jlkssj, '{y}-{m}-{d}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="加料完成时间" align="center" prop="jlwcsj" width="180">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.jlwcsj, '{y}-{m}-{d}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="设备名称" align="center" prop="sbmc" />
      <el-table-column label="批次" align="center" prop="pc" />
      <el-table-column label="组别" align="center" prop="zb" />
      <el-table-column label="书柜数量(个)" align="center" prop="sgsl" />
      <el-table-column label="层数" align="center" prop="cs" />
      <el-table-column label="盒数(盒/)" align="center" prop="hs" />
      <el-table-column label="加料重量(kg/盒)" align="center" prop="jlzl" />
      <el-table-column label="记录人" align="center" prop="jlr" />
      <el-table-column label="备注" align="center" prop="bz" />
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['system:jl:edit']"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['system:jl:remove']"
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

    <!-- 添加或修改加料对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="加料日期" prop="jlrq">
          <el-date-picker clearable
            v-model="form.jlrq"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="请选择加料日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="加料开始时间" prop="jlkssj">
          <el-date-picker clearable
            v-model="form.jlkssj"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="请选择加料开始时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="加料完成时间" prop="jlwcsj">
          <el-date-picker clearable
            v-model="form.jlwcsj"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="请选择加料完成时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="设备名称" prop="sbmc">
          <el-input v-model="form.sbmc" placeholder="请输入设备名称" />
        </el-form-item>
        <el-form-item label="批次" prop="pc">
          <el-input v-model="form.pc" placeholder="请输入批次" />
        </el-form-item>
        <el-form-item label="组别" prop="zb">
          <el-input v-model="form.zb" placeholder="请输入组别" />
        </el-form-item>
        <el-form-item label="书柜数量(个)" prop="sgsl">
          <el-input v-model="form.sgsl" placeholder="请输入书柜数量(个)" />
        </el-form-item>
        <el-form-item label="层数" prop="cs">
          <el-input v-model="form.cs" placeholder="请输入层数" />
        </el-form-item>
        <el-form-item label="盒数(盒/)" prop="hs">
          <el-input v-model="form.hs" placeholder="请输入盒数(盒/)" />
        </el-form-item>
        <el-form-item label="加料重量(kg/盒)" prop="jlzl">
          <el-input v-model="form.jlzl" placeholder="请输入加料重量(kg/盒)" />
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
import { listJl, getJl, delJl, addJl, updateJl } from "@/api/system/jl";

export default {
  name: "Jl",
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
      // 加料表格数据
      jlList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        jlrq: null,
        jlkssj: null,
        jlwcsj: null,
        sbmc: null,
        pc: null,
        zb: null,
        sgsl: null,
        cs: null,
        hs: null,
        jlzl: null,
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
    /** 查询加料列表 */
    getList() {
      this.loading = true;
      listJl(this.queryParams).then(response => {
        this.jlList = response.rows;
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
        jlkssj: null,
        jlwcsj: null,
        sbmc: null,
        pc: null,
        zb: null,
        sgsl: null,
        cs: null,
        hs: null,
        jlzl: null,
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
      this.title = "添加加料";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const id = row.id || this.ids
      getJl(id).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改加料";
      });
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.id != null) {
            updateJl(this.form).then(response => {
              this.$modal.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            });
          } else {
            addJl(this.form).then(response => {
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
      this.$modal.confirm('是否确认删除加料编号为"' + ids + '"的数据项？').then(function() {
        return delJl(ids);
      }).then(() => {
        this.getList();
        this.$modal.msgSuccess("删除成功");
      }).catch(() => {});
    },
    /** 导出按钮操作 */
    handleExport() {
      this.download('system/jl/export', {
        ...this.queryParams
      }, `jl_${new Date().getTime()}.xlsx`)
    }
  }
};
</script>

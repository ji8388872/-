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
      <el-form-item label="虫卵来源" prop="clyl">
        <el-input
          v-model="queryParams.clyl"
          placeholder="请输入虫卵来源"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="虫卵到货量(g)" prop="dhl">
        <el-input
          v-model="queryParams.dhl"
          placeholder="请输入虫卵到货量(g)"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="当日虫卵使用量(g/d)" prop="drclyl">
        <el-input
          v-model="queryParams.drclyl"
          placeholder="请输入当日虫卵使用量(g/d)"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="当日标准份大虫使用量(份/d)" prop="drbsfdclyl">
        <el-input
          v-model="queryParams.drbsfdclyl"
          placeholder="请输入当日标准份大虫使用量(份/d)"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="微虫培养盒数(盒/d)" prop="wcpch">
        <el-input
          v-model="queryParams.wcpch"
          placeholder="请输入微虫培养盒数(盒/d)"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="微虫培养料名称" prop="wcpclmc">
        <el-input
          v-model="queryParams.wcpclmc"
          placeholder="请输入微虫培养料名称"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="微虫培养料重量(kg/盒)" prop="wcpclzl">
        <el-input
          v-model="queryParams.wcpclzl"
          placeholder="请输入微虫培养料重量(kg/盒)"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="小虫培养盒数(盒/d)" prop="xcpch">
        <el-input
          v-model="queryParams.xcpch"
          placeholder="请输入小虫培养盒数(盒/d)"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="小虫培养料名称" prop="xcpclmc">
        <el-input
          v-model="queryParams.xcpclmc"
          placeholder="请输入小虫培养料名称"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="小虫培养料重量(kg/盒)" prop="xcpclzl">
        <el-input
          v-model="queryParams.xcpclzl"
          placeholder="请输入小虫培养料重量(kg/盒)"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="中虫培养盒数(盒/d)" prop="zcpch">
        <el-input
          v-model="queryParams.zcpch"
          placeholder="请输入中虫培养盒数(盒/d)"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="中虫培养料名称" prop="zcpclmc">
        <el-input
          v-model="queryParams.zcpclmc"
          placeholder="请输入中虫培养料名称"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="中虫培养料重量(kg/盒)" prop="zcpclzl">
        <el-input
          v-model="queryParams.zcpclzl"
          placeholder="请输入中虫培养料重量(kg/盒)"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="辅料名称" prop="flmc">
        <el-input
          v-model="queryParams.flmc"
          placeholder="请输入辅料名称"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="辅料重量(kg/d)" prop="flzl">
        <el-input
          v-model="queryParams.flzl"
          placeholder="请输入辅料重量(kg/d)"
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
          v-hasPermi="['system:clsyjpyqk:add']"
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
          v-hasPermi="['system:clsyjpyqk:edit']"
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
          v-hasPermi="['system:clsyjpyqk:remove']"
        >删除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
          plain
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['system:clsyjpyqk:export']"
        >导出</el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="clsyjpyqkList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="自增主键" align="center" prop="id" />
      <el-table-column label="日期" align="center" prop="rq" width="180">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.rq, '{y}-{m}-{d}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="虫卵来源" align="center" prop="clyl" />
      <el-table-column label="虫卵到货量(g)" align="center" prop="dhl" />
      <el-table-column label="当日虫卵使用量(g/d)" align="center" prop="drclyl" />
      <el-table-column label="当日标准份大虫使用量(份/d)" align="center" prop="drbsfdclyl" />
      <el-table-column label="微虫培养盒数(盒/d)" align="center" prop="wcpch" />
      <el-table-column label="微虫培养料名称" align="center" prop="wcpclmc" />
      <el-table-column label="微虫培养料重量(kg/盒)" align="center" prop="wcpclzl" />
      <el-table-column label="小虫培养盒数(盒/d)" align="center" prop="xcpch" />
      <el-table-column label="小虫培养料名称" align="center" prop="xcpclmc" />
      <el-table-column label="小虫培养料重量(kg/盒)" align="center" prop="xcpclzl" />
      <el-table-column label="中虫培养盒数(盒/d)" align="center" prop="zcpch" />
      <el-table-column label="中虫培养料名称" align="center" prop="zcpclmc" />
      <el-table-column label="中虫培养料重量(kg/盒)" align="center" prop="zcpclzl" />
      <el-table-column label="辅料名称" align="center" prop="flmc" />
      <el-table-column label="辅料重量(kg/d)" align="center" prop="flzl" />
      <el-table-column label="记录人" align="center" prop="jlr" />
      <el-table-column label="备注" align="center" prop="bz" />
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['system:clsyjpyqk:edit']"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['system:clsyjpyqk:remove']"
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

    <!-- 添加或修改虫卵使用及培养情况对话框 -->
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
        <el-form-item label="虫卵来源" prop="clyl">
          <el-input v-model="form.clyl" placeholder="请输入虫卵来源" />
        </el-form-item>
        <el-form-item label="虫卵到货量(g)" prop="dhl">
          <el-input v-model="form.dhl" placeholder="请输入虫卵到货量(g)" />
        </el-form-item>
        <el-form-item label="当日虫卵使用量(g/d)" prop="drclyl">
          <el-input v-model="form.drclyl" placeholder="请输入当日虫卵使用量(g/d)" />
        </el-form-item>
        <el-form-item label="当日标准份大虫使用量(份/d)" prop="drbsfdclyl">
          <el-input v-model="form.drbsfdclyl" placeholder="请输入当日标准份大虫使用量(份/d)" />
        </el-form-item>
        <el-form-item label="微虫培养盒数(盒/d)" prop="wcpch">
          <el-input v-model="form.wcpch" placeholder="请输入微虫培养盒数(盒/d)" />
        </el-form-item>
        <el-form-item label="微虫培养料名称" prop="wcpclmc">
          <el-input v-model="form.wcpclmc" placeholder="请输入微虫培养料名称" />
        </el-form-item>
        <el-form-item label="微虫培养料重量(kg/盒)" prop="wcpclzl">
          <el-input v-model="form.wcpclzl" placeholder="请输入微虫培养料重量(kg/盒)" />
        </el-form-item>
        <el-form-item label="小虫培养盒数(盒/d)" prop="xcpch">
          <el-input v-model="form.xcpch" placeholder="请输入小虫培养盒数(盒/d)" />
        </el-form-item>
        <el-form-item label="小虫培养料名称" prop="xcpclmc">
          <el-input v-model="form.xcpclmc" placeholder="请输入小虫培养料名称" />
        </el-form-item>
        <el-form-item label="小虫培养料重量(kg/盒)" prop="xcpclzl">
          <el-input v-model="form.xcpclzl" placeholder="请输入小虫培养料重量(kg/盒)" />
        </el-form-item>
        <el-form-item label="中虫培养盒数(盒/d)" prop="zcpch">
          <el-input v-model="form.zcpch" placeholder="请输入中虫培养盒数(盒/d)" />
        </el-form-item>
        <el-form-item label="中虫培养料名称" prop="zcpclmc">
          <el-input v-model="form.zcpclmc" placeholder="请输入中虫培养料名称" />
        </el-form-item>
        <el-form-item label="中虫培养料重量(kg/盒)" prop="zcpclzl">
          <el-input v-model="form.zcpclzl" placeholder="请输入中虫培养料重量(kg/盒)" />
        </el-form-item>
        <el-form-item label="辅料名称" prop="flmc">
          <el-input v-model="form.flmc" placeholder="请输入辅料名称" />
        </el-form-item>
        <el-form-item label="辅料重量(kg/d)" prop="flzl">
          <el-input v-model="form.flzl" placeholder="请输入辅料重量(kg/d)" />
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
import { listClsyjpyqk, getClsyjpyqk, delClsyjpyqk, addClsyjpyqk, updateClsyjpyqk } from "@/api/system/clsyjpyqk";

export default {
  name: "Clsyjpyqk",
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
      // 虫卵使用及培养情况表格数据
      clsyjpyqkList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        rq: null,
        clyl: null,
        dhl: null,
        drclyl: null,
        drbsfdclyl: null,
        wcpch: null,
        wcpclmc: null,
        wcpclzl: null,
        xcpch: null,
        xcpclmc: null,
        xcpclzl: null,
        zcpch: null,
        zcpclmc: null,
        zcpclzl: null,
        flmc: null,
        flzl: null,
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
    /** 查询虫卵使用及培养情况列表 */
    getList() {
      this.loading = true;
      listClsyjpyqk(this.queryParams).then(response => {
        this.clsyjpyqkList = response.rows;
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
        clyl: null,
        dhl: null,
        drclyl: null,
        drbsfdclyl: null,
        wcpch: null,
        wcpclmc: null,
        wcpclzl: null,
        xcpch: null,
        xcpclmc: null,
        xcpclzl: null,
        zcpch: null,
        zcpclmc: null,
        zcpclzl: null,
        flmc: null,
        flzl: null,
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
      this.title = "添加虫卵使用及培养情况";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const id = row.id || this.ids
      getClsyjpyqk(id).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改虫卵使用及培养情况";
      });
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.id != null) {
            updateClsyjpyqk(this.form).then(response => {
              this.$modal.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            });
          } else {
            addClsyjpyqk(this.form).then(response => {
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
      this.$modal.confirm('是否确认删除虫卵使用及培养情况编号为"' + ids + '"的数据项？').then(function() {
        return delClsyjpyqk(ids);
      }).then(() => {
        this.getList();
        this.$modal.msgSuccess("删除成功");
      }).catch(() => {});
    },
    /** 导出按钮操作 */
    handleExport() {
      this.download('system/clsyjpyqk/export', {
        ...this.queryParams
      }, `clsyjpyqk_${new Date().getTime()}.xlsx`)
    }
  }
};
</script>
